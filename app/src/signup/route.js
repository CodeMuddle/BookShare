import Ember from 'ember';
import Changeset from 'ember-changeset';

export default Ember.Route.extend({
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
