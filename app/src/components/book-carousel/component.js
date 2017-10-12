import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['carousel'],

    init() {
        this._super(...arguments);
        this.incrementProperty('idCount');
        if(!this.get('id')) this.set('id', "carousel-"+this.get('idCount'));
        this._keyHandler = this._keyHandler.bind(this);
    },

    didInsertElement() {
        this._super(...arguments);
        this.$().carousel({
            dist: -70, 
            padding: 120
        });
        //Add a key event listener
        this.$(document).on('keyup', this._keyHandler);
    },

    willDestroyElement() {
        this._super(...arguments);
        this.$(document).off('keyup', 'document', this._keyHandler);
    },

    _keyHandler(e) {
        switch(e.keyCode) {
            case 37:
                this.$().carousel("prev");
            break;
            case 39:
                this.$().carousel("next");
            break;
        }
    }
}).reopenClass({
    idCount: 0
});