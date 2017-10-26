import {
    validatePresence,
    validateFormat
} from 'ember-changeset-validations/validators';

export default {
    emailAddress: [
        validateFormat({allowBlank: true, type: 'email', message: 'Incorrect email format'}),
        validatePresence({presence: true, message: `Can't be empty`}
    )]
}