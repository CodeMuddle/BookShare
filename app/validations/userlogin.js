import {
    validatePresence,
    validateLength,
    validateConfirmation,
    validateFormat
} from 'ember-changeset-validations/validators';

export default {
    emailAddress: [
        validateFormat({allowBlank: true, type: 'email', message: 'Incorrect email format'}),
        validatePresence({presence: true, message: `Can't be empty`}
    )],
    passwordId: validateLength({min : 8, message: 'Too Short (Minimum 8 characters)'})
}