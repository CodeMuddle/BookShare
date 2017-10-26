import DS from 'ember-data';

export default DS.Model.extend({
    book: DS.belongsTo('book', {async: true, inverse: null}),
    requester: DS.belongsTo('user',{async:true, inverse: null}),
    owner: DS.belongsTo('user',{async:true, inverse:null}),
    returnTime: DS.attr('number'),
    createdTime: DS.attr('number'),
    duration:DS.attr('number'),
    actionTime: DS.attr('number'), //Timestamp for accept/decline
    status: DS.attr('string') //pending, accepted, declined    
});
