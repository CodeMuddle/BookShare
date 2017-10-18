import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    userLoggedIn: true,
    hideNavBar: false,

    actions: {
        searchBook(query) {
            if(!query) return;
            this.transitionToRoute('books.index', {
                queryParams: {q: query}
            });
        }
    }
});
