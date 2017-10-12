import Ember from 'ember';

export default Ember.Component.extend({
    tagName: 'ul',
    classNames: ['tabs'],

    didReceiveAttrs() {
        if(!this.get('tabSize')) {
            this.set('tabSize', 12/this.get('tabs').length);
        }
    },

    didInsertElement() {
        this._super(...arguments);
        this.$().tabs();
    }
});
