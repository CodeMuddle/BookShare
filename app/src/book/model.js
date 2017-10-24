import DS from 'ember-data';

export default DS.Model.extend({
    imgurl: DS.attr('string'),
    name: DS.attr('string'),
    author: DS.attr('string'),
    description: DS.attr('string'),
    isAvailable: DS.attr('boolean'),
    isBorrowed: DS.attr('boolean'),
    userId: DS.attr('string'),
    createdTime: DS.attr('string'),
    modifiedTime: DS.attr('string')
});