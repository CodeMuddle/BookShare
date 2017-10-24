import Ember from 'ember';
import UnauthenticatedRouteMixin from 'book-share/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
    model() {
        return {
            fname : '',
            lname : '',
            emailAddress : '',
            username: '',
            passwordId: '',
            passwordIdConfirmation: ''
        }
    }
});
