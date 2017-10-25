import Ember from 'ember';

export function initial(params) {
  return params[0].substring(0, 1);
}

export default Ember.Helper.helper(initial);
