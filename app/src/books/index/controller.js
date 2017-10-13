import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
    queryParams: ['q', 'sort', 'dir', 'author', 'name', 'page', 'limit'],
    q: '',
    sort: 'name',
    dir: 'asc',
    sortFields: ['name', 'author'],
    filterOpen: false,
    page: 1,
    limit: 20,

    searchQuery: Ember.computed('q', 'sort', 'dir', 'author', 'name', 'page', 'limit', function() {
        //Use 'author' and/or 'book' if present
        //Else, fall back to 'q'
        let author = this.get('author');
        let name = this.get('name');
        
        let queryFor = ['page', 'limit', 'sort', 'dir'];

        if(author) queryFor.push('author');
        if(name) queryFor.push('name');
        if(!author && !name) queryFor.push('q');

        return this.getProperties(queryFor);
    }).readOnly(),

    resultText: Ember.computed('q', 'author', 'name', function() {
        const author = this.get('author');
        const title = this.get('name');
        const q = this.get('q');

        if(q&& !author && !title) {
            return `Search Results for \`${q}\``;
        } else if (author && title) {
            return `\`${title}\` by \`${author}\``;
        } else if(author) {
            return `books by \`${author}\``;
        } else if(title) {
            return `books named \`${title}\``;
        } else {
            return `Please Enter a Valid Query`;
        }
    }).readOnly(),

    actions: {
        handleSort(field, dir) {
            this.setProperties({
                'sort': field,
                'dir': dir
            });
        },

        setPage(page) {
            this.set('page', page);
        },

        handleListLoaded(books) {
            this.set('meta', books.get('meta'));
        },

        toggleFilter() {
            this.toggleProperty('filterOpen');
        },

        filterSearch() {
            this.setProperties({
                'author': this.get('filterAuthor'),
                'name': this.get('filterName')
            });
        }
    }
});
