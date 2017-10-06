import Ember from 'ember';

export default Ember.Controller.extend({
    modalIsOpen: false,
    deleteModalIsOpen: false,
    
        actions: {
            addModal: function() {
                this.toggleProperty('modalIsOpen');
            },
            deleteModal: function(){
                this.toggleProperty('deleteModalIsOpen');
            },
        }
});
