import Ember from 'ember';
import UserValidation from '../../validations/userlogin';

export default Ember.Controller.extend({
    UserValidation,
    firebase: Ember.inject.service(),
    session: Ember.inject.service(),

    setFlag: false,
    email: '',
    password: '',

    actions: {
        validLogin: function(changeset) {
            changeset.validate().then(() => {
                if(changeset.get('isValid')) {
                    this.set('email', changeset.get('emailAddress'));
                    this.set('password', changeset.get('passwordId'));

                    this.set('setFlag', true);

                    //debugger;

                    /* self.open('firebase', {
                        provider: 'password',
                        email: email,
                        password: password
                    }).then(() => {
                        console.log('Thik xa', thik);
                        Materialize.toast('Login Successful', 10000, 'rounded');
                        this.set('emailAddress', '');
                        this.set('passwordId', '');
                        this.transitionToRoute('dashboard');
                    }).catch(() => {
                        console.log('Milena', thikxaina);
                        Materialize.toast('Incorrect User Credentials', 10000, 'rounded');
                        this.set('emailAddress', '');
                        this.set('passwordId', '');
                        console.log('Incorrect UserName and password');
                    }) */
                } else {
                    console.log(changeset.get("errors"));
                }
            })

            if (changeset.get('isValid')) {
                if(this.get('setFlag') && this.get('email') && this.get('password')) {
                    this.get('session').open('firebase', {
                        provider: 'password',
                        email: this.get('email'),
                        password: this.get('password')
                    }).then((thik) => {
                        //console.log('Thik xa', thik);
                        Materialize.toast('Login Successful', 10000, 'rounded');
                        changeset.set('emailAddress', '');
                        changeset.set('passwordId', '');
                        this.transitionToRoute('dashboard');
                        this.set('setFlag', false);
                    }).catch((thikxaina) => {
                        //console.log('Milena', thikxaina);
                        Materialize.toast('Incorrect User Credentials', 10000, 'rounded');
                        changeset.set('emailAddress', '');
                        changeset.set('passwordId', '');
                        console.log('Incorrect UserName and password');
                        this.set('setFlag', false);
                    })
                }
                
            }
        }
    }
});
