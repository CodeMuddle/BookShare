import Ember from 'ember';

export default Ember.Controller.extend({
    'user-session': Ember.inject.service(),
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
                //var self = this;
                this.get('user-session').clearUser();
                this.transitionToRoute('index');
            });
        }
    }
});
