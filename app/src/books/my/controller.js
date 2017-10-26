import Ember from 'ember';

export default Ember.Controller.extend({
    userSession: Ember.inject.service(),

    queryParams: ['page', 'limit', 'sort', 'dir', 'q'],
    modalIsOpen: false,
    requestModalIsOpen: false,
    modelToEdit: null,
    sortFields: ['name', 'author', 'newest'],
    sort: 'name',
    dir: 'asc',
    q: '',
    limit: 20,
    page: 1,
    userSession:Ember.inject.service('user-session'),

    searchQuery: Ember.computed('q', 'sort', 'dir', 'page', 'limit', function() {
        //return this.getProperties(this.get('queryParams'));
        return {sort: 'user', q: this.get('session.uid')};
    }).readOnly(),

    actions: {
        handleSort(field, dir) {
            this.setProperties({
                'sort': field,
                'dir': dir
            });
        },
        
        setPage(page) {
            this.set('page', page);
        },

        handleListLoaded(books) {
            this.set('meta', books.get('meta'));
        },

        saveBook(book) {
            let promise;
            if(this.get('isInEditMode')) {
                const modelToEdit = this.get('modelToEdit');

                book.modifiedTime = Math.floor(Date.now()/1000);
                modelToEdit.setProperties(book);

                promise = modelToEdit.save();
            } else {
                book.isBorrowed = false;

                book.createdTime = Math.floor(Date.now()/1000);
                book.modifiedTime = book.createdTime;

                let bookRecord = this.store.createRecord('book', book);
                bookRecord.set('user', this.get('userSession.user'));
                promise = bookRecord.save();
            }
 
            promise.then((data) => {
                Materialize.toast("Your book was saved successfully!!", 2000);
                this.set("modalIsOpen", false);
            }).catch((reason) => {
                swal("","Sorry! Something went wrong. Please try again later!", "error");
            });
        },

        toggleModal(book) {
            if(book) {
                this.set('isInEditMode', true);
                this.set('modelToEdit', book);
            } else {
                this.set('isInEditMode', false);
            }
            this.toggleProperty('modalIsOpen');
        },

        deleteBook(currentBook)
        {   
            swal({
                title:"",
                text: "Are you sure you want to delete '"+ currentBook.get('name')+"' ?",
                type: "warning",
                showCancelButton: true,
                closeOnConfirm: true,
                confirmButtonText: "Delete",
                confirmButtonColor: "#ec6c62"
            },
            function() {
                currentBook.destroyRecord()
                .then(() => {Materialize.toast('Deleted', 3000);})
                .catch(() => {Materialize.toast('Sorry! There was a problem deleting that book', 3000)});
            });
        },
    
        closeModal()
        {
            this.set('modalIsOpen', false);                
        },
        toggleReqModal(){
            this.toggleProperty('requestModalIsOpen');
        }
    }
});