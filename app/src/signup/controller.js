import Ember from 'ember';
import EmberValidations from 'ember-validations';

const ValidationErrorMessages = {
    fullName: {
        fnameRequired: "First Name is Required",
        lnameRequired: "Last Name is Required",
        usernameRequired: "Username is Required",
    },
    emailAddress : {
        required: "Email Address is required",
        email: "Must be a valid email address"
    },
    password:{
        required:"Password is required",
        minlength:"Must be greater than 8 character",
        match:"Confirm Password does not match"
    }
};

export default Ember.Controller.extend(EmberValidations, {

    validations: {
        fname: {
            presence: {message: ValidationErrorMessages.fullName.fnameRequired},
        },
        lname: {
            presence: {message: ValidationErrorMessages.fullName.lnameRequired},
        },
        username: {
            presence: {message: ValidationErrorMessages.fullName.usernameRequired},
        },
        emailAddress: {
            presence: {message: ValidationErrorMessages.emailAddress.required},
            format: {
                allowBlank:true,
                with: /^.+@.+\..+$/,
                message: ValidationErrorMessages.emailAddress.email
            }
        },
        passwordId: {
            presence: {message: ValidationErrorMessages.password.required},
            length: {
                allowBlank:true,
                minimum: 8,
                messages: {
                    tooShort: ValidationErrorMessages.password.minlength
                }
            },
            confirmation: {message: ValidationErrorMessages.password.match}
        },
    },

    /* isFname: Ember.computed.notEmpty('fname'),
    isLname: Ember.computed.notEmpty('lname'),
    isUname: Ember.computed.notEmpty('username'),
    isValidEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isValidPassword: Ember.computed.gt('passwordId.length', 8),
    
    isSamePassword: Ember.computed('passwordId', 'confirmPass', {
        get(key) {
            if (this.get('passwordId') === this.get('confirmPass')){
                return true;
            } else {
                return false;
            }
        }
    }),

    fullName: Ember.computed('fname', 'lname', {
        get(key) {
            return `${this.get('fname')} ${this.get('lname')}`
        }
    }),

    isValid: Ember.computed.and('isFname', 'isLname', 'isUname', 'isValidEmail', 'isValidPassword', 'isSamePassword'),
    isDisabled: Ember.computed.not('isValid'), */

    showErrors: false,

    actions: {
        createNew: function() {
            const name = this.get('fullName');
            const username = this.get('username');
            const passwordId = this.get('passwordId');
            const email = this.get('emailAddress');
            console.log(name);

            this.validate().then(() => {
                const createUser = this.store.createRecord('signup', {
                    fname: fname,
                    lname: lname,
                    email: email,
                    username: username,
                    password: passwordId
                });
    
                createUser.save().then(() => {
                    console.log('User created');
                    Materialize.toast('User Created Successful', 3000, 'rounded');
                    this.transitionToRoute('login');
                }).catch(() => {
                    Materialize.toast('Sorry!!! User Creation Unsuccessful', 3000, 'rounded');
                });
            }).catch(() => {
                console.log(this.get("errors"));
                this.set('showErrors', true);
            })
        }
    }
});
