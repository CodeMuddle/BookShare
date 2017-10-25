import DS from 'ember-data';

export default DS.Model.extend({
    isAvailable: DS.attr('boolean'),
    isBorrowed: DS.attr('boolean'),
    book: DS.belongsTo('book', {async: true, inverse: 'status'})
});