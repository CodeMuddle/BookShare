import Ember from 'ember';

export default Ember.Route.extend({
    queryParams: {
        q: { replace: true },
        sort: { replace: true },
        dir: { replace: true },
        name: { replace: true },
        author: { replace: true }
    },

    model(params) {
        return this.store.query('book', params);
    },

    setupController(controller, model) {
        this._super(...arguments);
        if(controller.get('author')) this.controller.set('filterAuthor', controller.get('author'));
        if(controller.get('name')) this.controller.set('filterName', controller.get('name'));
    }
});
