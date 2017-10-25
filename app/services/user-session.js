import Ember from 'ember';

export default Ember.Service.extend({
    detail: {
        firstName: null,
        lastName: null,
        email: null
    },

    initials: Ember.computed('detail.firstName', 'detail.lastName', function() {
        let firstName = this.get('detail.firstName');
        let lastName = this.get('detail.lastName');
        let init = "";
        
        if(firstName && firstName.length > 0)
            init += firstName[0];

        if(lastName && lastName.length > 0) {
            init += lastName[0];
        }

        return init;
            
    }).readOnly(),

    setDetails(detail) {
        this.set('detail', detail);
    },

    clearDetails() {
        this.set('detail', {
            firstName: null,
            lastName: null,
            email: null
        });
    }
});

