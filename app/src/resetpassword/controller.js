import Ember from 'ember';
import UserValidation from '../../validations/resetpassword';

export default Ember.Controller.extend({
    UserValidation,
    'user-session': Ember.inject.service(),
    firebase: Ember.inject.service(),
    firebaseApp: Ember.inject.service(),

    email: '',

    actions: {
        validateLogin: function(changeset) {
            changeset.validate().then((data) => {
                if(changeset.get('isValid')) {
                    this.set('email', changeset.get('emailAddress'));

                    const ref = this.get('firebaseApp').auth();
                    
                    ref.sendPasswordResetEmail(this.get('email')).then(() => {
                        console.log('Reset Email Sent');
                        Materialize.toast('Reset Email Sent! Please Check your email address', 3000, 'rounded');
                        this.transitionToRoute('login');
                    }).catch(() => {
                        Materialize.toast('No such email Address Exists', 3000, 'rounded');
                        console.log('Error', error);
                    })
                } else {
                    console.log(changeset.get('errors'));   
                }
            });
        }
    }
});
