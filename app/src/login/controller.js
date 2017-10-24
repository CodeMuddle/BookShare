import Ember from 'ember';
import UserValidation from '../../validations/userlogin';

export default Ember.Controller.extend({
    UserValidation,

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
                        Materialize.toast('Login Successful', 3000, 'rounded');
                        changeset.set('emailAddress', '');
                        changeset.set('passwordId', '');
                        this.transitionToRoute('dashboard');
                    })
                    .catch((reason) => {
                        let message;
                        if(reason && reason.code) {
                            if(reason.code == 'auth/user-not-found') {
                                message = 'Incorrect User Credentials';
                            } else {
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
