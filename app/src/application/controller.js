import Ember from 'ember';

export default Ember.Controller.extend({
    hideNavBar: false,

    actions: {
        searchBook(query) {
            if(!query) {
                return;
            }
            
            this.transitionToRoute('books.index', {
                queryParams: {q: query}
            });
        },

        logout() {
            this.get('session').close().then(() => {
                this.transitionToRoute('index');
            });
        }
    }
});
