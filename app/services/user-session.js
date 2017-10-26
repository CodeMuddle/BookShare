import Ember from 'ember';

export default Ember.Service.extend({
    user: Ember.Object.create(),

    initials: Ember.computed('user.firstName', 'user.lastName', function() {
        let firstName = this.get('user.firstName');
        let lastName = this.get('user.lastName');
        let init = "";
        
        if(firstName && firstName.length > 0)
            init += firstName[0];

        if(lastName && lastName.length > 0) {
            init += lastName[0];
        }

        return init;
            
    }).readOnly(),

    setUser(user) {
        this.set('user', user);
    },

    clearUser() {
        this.set('user', Ember.Object.create());
    }
});

