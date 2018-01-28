import Ember from 'ember';

export function textTrim([word, length]/*, hash*/) {
  if(word && word.length > length) {
    return word.substr(0,length-2)+"...";
  }
  return word;
}
export default Ember.Helper.helper(textTrim);
