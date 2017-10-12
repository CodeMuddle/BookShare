import Ember from 'ember';

export default Ember.Component.extend({
    direction: '',
    sortField: '',
    iconAsc: 'arrow_downward',
    iconDesc: 'arrow_upward',
    iconNone: 'list',

    init() {
        this._super(...arguments);
        if(!this.get('direction')) this.set('direction', 'asc');
    },

    toggleDirection() {
        if(this.get('direction') === 'asc') {
            this.set('direction', 'desc');
        } else {
            this.set('direction', 'asc');
        }
    },

    actions: {
        onSort(field) {
            if(this.get('sortField') == field) {
                this.toggleDirection();
            } else {
                this.set('sortField', field);
                this.set('direction', this.get('defaultDirection'));
            }
            this.sendAction('onSort', this.get('sortField'), this.get('direction'));
        }
    }
});
