import Ember from 'ember';
import addEditValidations from '../../../validations/add-edit-validations';

export default Ember.Component.extend({
    addEditValidations,
    firstBook: null,
    editMode: false,
    classNames: ['input-field col s12'],

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
        onUpdate(changeset) {
            changeset.validate().then(() => {
                if(changeset.get('isValid')) {
                    changeset.save();
                    // console.log('Changeset milo');
                    this.sendAction('onActionClick', this.get('dataModel'));
                    console.log(this.get('dataModel'));
                } else {
                   console.log(changeset.get('errors'));
                }
            })
        },
        onClose() {
            this.sendAction('onCancelClick');
        }
    }
});
