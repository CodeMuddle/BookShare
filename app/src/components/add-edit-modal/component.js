import Ember from 'ember';

export default Ember.Component.extend({
    firstBook: null,
    editMode: false,
    loading: true,

    labelClass: Ember.computed('editMode', function() {
        if(this.get('editMode')) return 'active';
        else return '';
    }),

    didReceiveAttrs()
    {
        this._super(...arguments);
        if(!this.editMode) {
            this.set('dataModel', {
                book: {
                    name: "",
                    author: "",
                    description: "",
                    imageURL: ""
                },
                status: {
                    isAvailable: true
                }
            });
            this.set('loading', false);
        } else {
            this.get('model').get('status').then((status) => {
                this.set('dataModel', {
                    book: Object.assign({}, this.get('model').data),
                    status: Object.assign({}, status.data)
                });
                this.set('loading', false);
            })
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
