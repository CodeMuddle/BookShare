import Ember from 'ember';
import EmberValidations from 'ember-validations';

const ValidationErrorMessages = {
    emailAddress : {
        required: "Email Address is required",
        email: "Must be a valid email address"
    },
    password:{
        required:"Password is required",
        minlength:"Must be greater than 8 character",
        //match:"Confirm Password does not match"
    }
};


export default Ember.Controller.extend(EmberValidations, {

    validations: {
        emailAddress: {
            presence: {message: ValidationErrorMessages.emailAddress.required},
            format: {
                with: /^.+@.+\..+$/,
                message: ValidationErrorMessages.emailAddress.email
            }
        },
        passwordId: {
            presence: {message: ValidationErrorMessages.password.required},
            length: {
                minimum: 8,
                messages: {
                    tooShort: ValidationErrorMessages.password.minlength
                }
            },
            //confirmation: {message: ValidationErrorMessages.password.match}
        },
    },

    showErrors: false,

    /* isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isValidPassword: Ember.computed.gt('passwordId.length', 8),
    isValid: Ember.computed.and('isValidPassword', 'isValidEmail'), */
    //isDisabled: Ember.computed.not('isValid'),

    actions: {
        validLogin: function() {

            /* if(!this.get('isValid')) {
                //show error message only
                return;
            } */
            const email = this.get('emailAddress');
            const password = this.get('passwordId');

            this.validate().then((data) => {
                console.log('Alright Validation worked',data);
                return this.store.findRecord('login', password).then((thik) => {
                    console.log('Thik xa', thik);
                    Materialize.toast('Login Successful', 10000, 'rounded');
                    this.set('emailAddress', '');
                    this.set('passwordId', '');
                    this.transitionToRoute('index');
                }).catch((thikxaina) => {
                    console.log('Milena', thikxaina);
                    Materialize.toast('Incorrect User Credentials', 10000, 'rounded');
                    this.set('emailAddress', '');
                    this.set('passwordId', '');
                })
            }).catch(() => {
                console.log(this.get("errors"));
                this.set('showErrors', true);
                /* var errorHashes = this.get('errors');
                var errorKeys = Object.keys(errorHashes);
                errorKeys.forEach((key) => {
                    errorHashes[key].forEach((error) => {
                        Materialize.toast(`${key} ${error}`, 3000, 'rounded')
                    })
                }) */
            });
        }
    }
});
