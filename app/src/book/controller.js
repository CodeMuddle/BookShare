import Ember from 'ember';

export default Ember.Controller.extend({
    modalIsOpen: false,
    userSession:Ember.inject.service('user-session'),
    defDays:7,
        actions: {
            modalfire() {
                this.toggleProperty('modalIsOpen');
            },
            agree(book){ 
            //    console.log(this.get('defDays'));
            //     debugger;
            let createRequest;
               let createdTime = Math.floor(Date.now()/1000);
               let duration = this.get('defDays');
               let returnTime = createdTime + (duration*86400);
               let user = this.get('userSession.user');
               let owner = book.get('user').then((owner)=>{
                createRequest = this.store.createRecord('bookrequest',{
                        book,
                        requester:user,
                        owner,
                        createdTime,
                        duration,
                        returnTime,
                        status: 'pending'
                    });
                return createRequest.save();
               })
               .then(() => {
                    return book.get('requests');
               })
               .then((requests) => {
                    requests.addObject(createRequest);
                    return book.save();
               })
               .then(()=>{
                    Materialize.toast('Request has been sent', 3000);
                    this.set('modalIsOpen',false);
               }).catch(()=>{
                Materialize.toast('Something went horribly wrong', 3000);
               });
               
            },
            closeModal(){
                this.set('modalIsOpen', false);
            }
        }
});
