import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    method: 'query',
    query: {},
    options: {},

    queryItems: task(function *(debounce=200) {
        yield timeout(debounce);

        let items;
        
        if(this.get('method') === 'findAll') {
            items = yield this.get('store').findAll(
                this.get('model'),
                this.get('options') || {}
            )
        } else {
            items = yield this.get('store').query(
                this.get('model'), 
                this.get('query') || {}
            );
        }

        this.sendAction('onData', items);
        this.set('items', items);
    }).restartable(),

    didReceiveAttrs() {
        this._super(...arguments);
        //Reload the data when the query changes
        this.get('queryItems').perform(this.get('debounce'));

        //Flag that we just received attributes
        this.set('justReceivedAttrs', true);
    },

    didRender() {
        // Store the height of the component to 
        // prevent page scrolling issues during reloads
        if(this.get('justReceivedAttrs') !== true) {
            this.$().css("min-height", "");
            this.$().css('min-height', this.$().height());
        } else {
            this.set('justReceivedAttrs', false);
        }
    },

    didInsertElement() {
        this._super(...arguments);
        this.get('queryItems').perform(this.get('debounce'));
    }
});