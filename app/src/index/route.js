import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    /* beforeModel() {
        if (session.isAuthenticated) {

        }
    }, */

    setupController(controller, model) {
        this.controllerFor('application').set('hideNavBar', true);
    },

    deactivate() {
        this.controllerFor('application').set('hideNavBar', false);
    }
});
