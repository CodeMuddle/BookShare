import Ember from 'ember';

export default Ember.Controller.extend({
    isAvailable:false,
    modalIsOpen: false,

    actions: {
        modalfire: function() {
            this.toggleProperty('modalIsOpen');
        },
        agree: function(){
            this.set('modalIsOpen', false);
            Materialize.toast('Request has been sent', 4000);
        },
        closeModal: function(){
            this.set('modalIsOpen', false);
        }
    }


});
