import Ember from 'ember';
import UserValidation from '../../validations/userlogin';

export default Ember.Controller.extend({
    UserValidation,
    'user-session': Ember.inject.service(),

    actions: {
        validateLogin: function(changeset) {
            changeset.validate().then((data) => {
                if(changeset.get('isValid')) {
                    this.set('email', changeset.get('emailAddress'));
                    this.set('password', changeset.get('passwordId'));

                    //Open Firebase session
                    this.get('session').open('firebase', {
                        provider: 'password',
                        email: changeset.get('emailAddress'),
                        password: changeset.get('passwordId')
                    })
                    .then(() => {
                        return this.store.findRecord('user', this.get('session.uid')).then((content) => {
                            this.get('user-session').setDetails(content.data);
                        }).then(() => {
                            console.log('data ayo', this.get('user-session.details'));
                            Materialize.toast('Login Successful', 3000, 'rounded');
                            changeset.set('emailAddress', '');
                            changeset.set('passwordId', '');
                            this.transitionToRoute('dashboard');
                        })
                    })
                    
                    .catch((reason) => {
                        let message;
                        if(reason && reason.code) {
                            switch(reason.code) {
                                case 'auth/user-not-found':
                                    message = 'Oops! It looks like that user does not exist'; break;
                                case 'auth/wrong-password':
                                    message = 'Oops! You entered the incorrect password for that account'; break;
                                default:
                                    message = 'Oops! An Unknown Error Occured!';
                            }
                        } else {
                            message = 'Sorry! We could not log you in. Please try again later';
                        }
                        Materialize.toast(message, 3000, 'rounded');
                    })
                }
            });
        }
    }
});
