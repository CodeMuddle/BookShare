import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return this.store.query("bookrequest", {
            orderBy: 'requester',
            equalTo: this.get('session.uid')
        });
    }
});
