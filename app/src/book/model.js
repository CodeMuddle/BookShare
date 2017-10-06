import DS from 'ember-data';

export default DS.Model.extend({
    imgurl: DS.attr('string'),
    name:   DS.attr('string'),
    author: DS.attr('string'),
    status: DS.attr('boolean'),
    description: DS.attr('string'),
});
