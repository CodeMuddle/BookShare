import Ember from 'ember';

export default Ember.Component.extend({
    firstBook: null,
    editMode: false,

    labelClass: Ember.computed('editMode', function() {
        if(this.get('editMode')) return 'active';
        else return '';
    }),

    didReceiveAttrs()
    {
        this._super(...arguments);
        if(!this.editMode) {
            this.set('dataModel', {
                name: "",
                author: "",
                description: "",
                imageURL: "",
                status: "",
                isBorrowable: true
            });
        } else {
            this.set('dataModel', Object.assign({}, this.get('model').data));
        }
    },

    actions: {
        onUpdate() {
            this.sendAction('onActionClick', this.get('dataModel'));
        },
        onClose() {
            this.sendAction('onCancelClick');
        }
    }
});
