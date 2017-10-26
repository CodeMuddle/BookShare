import Ember from 'ember';

//The list of routes which can be accessed when not logged in

const LOGGED_IN_DEFAULT = 'dashboard';
const LOGGED_OUT_DEFAULT = 'login';

export default Ember.Route.extend({
    'user-session': Ember.inject.service(),

    beforeModel(transition) {
        if(typeof this.get('session.isAuthenticated') === "undefined") {
            return this.get('session').fetch().catch(() => {});
        }
    },

    model() {
        if (this.get('session.isAuthenticated')) {
            return this.store.findRecord('user', this.get('session.uid')).then((content) => {
                this.get('user-session').setUser(content);
            }).catch((error) => {
                console.log('data error', error);
            })
        }
    },

    actions: {
        accessDenied() {
            if(this.get('session.isAuthenticated'))
                this.transitionTo(LOGGED_IN_DEFAULT);
            else
                this.transitionTo(LOGGED_OUT_DEFAULT);
        }
    }
});
