import Ember from 'ember';

//The list of routes which can be accessed when not logged in

const LOGGED_IN_DEFAULT = 'dashboard';
const LOGGED_OUT_DEFAULT = 'login';

export default Ember.Route.extend({
    beforeModel(transition) {
        if(typeof this.get('session.isAuthenticated') === "undefined") {
            return this.get('session').fetch().catch(() => {});
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
