import Ember from 'ember';
import AuthenticatedRouteMixin from 'book-share/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    'user-session': Ember.inject.service(),

    /* beforeModel() {
        if (this.get('session.isAuthenticated') && this.get('user-session.details') == null) {
            this.store.findRecord('user', this.get('session.uid')).then((content) => {
                this.get('user-session').setDetails(content.data);
            }).catch((error) => {
                console.log('data error', error);
            })
        }
    }, */

    model() {
        return Ember.RSVP.hash({
            carouselBooks: this.store.query('book', {})
        });
    }
});