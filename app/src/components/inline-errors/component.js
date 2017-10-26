import Ember from 'ember';

export default Ember.Component.extend({
    classNames:['input-field'],

    inputClass: Ember.computed('changeset', 'propertyId', function() {
        let iClass;
        const data = this.get(`changeset.error.${this.get('propertyId')}`);
        if (data)
            iClass = 'validate invalid';
        else 
            iClass = 'validate';
        return iClass;
    }),

    labelClass: Ember.computed('editMode', function() {
        if(this.get('editMode')) return 'active';
        else return '';
    }),
});
