import {
    validatePresence,
    validateLength,
    validateFormat
  } from 'ember-changeset-validations/validators';
  
  export default {
    name:[
      validateLength({max: 20, message: 'Too long'}),
      validatePresence({presence: true, message: 'Field cannot be empty'}),
    ],
    author:[
      validateLength({max: 20, message: 'Too long'}),
      validatePresence({presence: true, message: 'Field cannot be empty'}),
    ],
    description: [
      validateLength({max: 35, message: 'Too long'}),
      validatePresence({presence: true, message: 'Field cannot be empty'}),
    ],
    imageURL: [
      validateFormat({ type: 'url', message:'Please enter a valid url'})
    ]
  };