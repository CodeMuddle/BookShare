import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Controller.extend({
    queryParams: ['q', 'sort', 'dir', 'author', 'name'],
    q: '',
    sort: 'title',
    sortFields: ['title', 'author'],
    filterOpen: false,

    resultText: Ember.computed('q', 'author', 'title', function() {
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
    }),

    queryBooks: task(function *(ranFromFilter = false) {
        //We dont want our query to change unless the search button
        //in the filters section initiated the search
        if(ranFromFilter) {
            this.set('author', this.get('filterAuthor'));
            this.set('name', this.get('filterName'));
        }

        let author = this.get('author');
        let name = this.get('name');
        
        let queryFor = ['sort', 'dir'];
        
        if(author) queryFor.push('author');
        if(name) queryFor.push('name');
        if(!author && !name) queryFor.push('q');

        let books = yield this.store.query('book', this.getProperties(queryFor));
        this.set('model', books);
    }).restartable(),

    actions: {
        handleSort(field, dir) {
            this.set('sort', field);
            this.set('dir', dir);
            this.get('queryBooks').perform();
        },

        toggleFilter() {
            this.toggleProperty('filterOpen');
        },

        performSearch() {
            this.get('queryBooks').perform(true);
        }
    }
});
