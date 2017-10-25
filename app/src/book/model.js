import DS from 'ember-data';
import computed from 'ember-computed';

export default DS.Model.extend({
    imageURL: DS.attr('string'),
    name: DS.attr('string'),
    author: DS.attr('string'),
    description: DS.attr('string'),
    user: DS.belongsTo('user', {async: true, inverse: null}),
    createdTime: DS.attr('string'),
    modifiedTime: DS.attr('string'),
    status: DS.belongsTo('book-status', {async: true, inverse: 'book'})
})
.reopen({
    imgurl: computed('imageURL', {
        get() {
            if(this.get('imageURL')) return this.get('imageURL');
            else return 'https://www.jordans.com/~/media/jordans%20redesign/no-image-found.ashx?h=275&la=en&w=275&hash=F87BC23F17E37D57E2A0B1CC6E2E3EEE312AAD5B';
        },

        set(key, value) {
            this.set('imageURL', value);
            return value;
        }
    })
});