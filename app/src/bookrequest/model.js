import DS from 'ember-data';

export default DS.Model.extend({
    bookId: DS.attr('string'),
    requesterId: DS.attr('string'),
    bookOwnerId: DS.attr('string'),
    duration: DS.attr('string'),
    createdTime: DS.attr('string'),
    actionTime: DS.attr('string'), //Timestamp for accept/decline
    status: DS.attr('string') //pending, accepted, declined
});
