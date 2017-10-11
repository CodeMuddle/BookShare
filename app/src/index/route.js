import Ember from 'ember';

export default Ember.Route.extend({
    setupController(controller, model) {
        this.controllerFor('application').set('hideNavBar', true);
    },

    deactivate() {
        this.controllerFor('application').set('hideNavBar', false);
    }
});
