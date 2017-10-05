import Ember from 'ember';

export default Ember.Controller.extend({

    modalIsOpen: false,

    actions: {
        modalfire: function() {
            this.toggleProperty('modalIsOpen');
        }
    }


});
