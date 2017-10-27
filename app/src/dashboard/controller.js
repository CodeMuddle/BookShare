import Ember from 'ember';

export default Ember.Controller.extend({
    listQuery: { page: 1, limitToLast: 10 },
    listMeta: { page: 0, totalPages: 0 },

    actions: {
        handleListLoaded(books) {
            this.set('listMeta', books.get('meta'));
        },

        setPage(page) {
            this.set('listQuery', {page});
        }
    }
});
