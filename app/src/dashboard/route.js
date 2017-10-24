import Ember from 'ember';
import AuthenticatedRouteMixin from 'book-share/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model() {
        return Ember.RSVP.hash({
            carouselBooks: this.store.findAll('book')
        });
    }
});