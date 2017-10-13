import Ember from 'ember';

export default Ember.Component.extend({
    query: '',
    loggedIn: false,
    prevLoggedIn: null,

    init() {
        this._super(...arguments);
        this.set('searchIsActive', false);
    },

    didRender() {
        this._super(...arguments);
        
        //Redo jQuery initializations if loggedIn has changed
        if(this.get('loggedIn') !== this.get('prevLoggedIn')) {
            //Store loggedIn status
            this.set('prevLoggedIn', this.get('loggedIn'));

            if(this.get('loggedIn') === false) return;

            this.$(".button-col").sideNav();
            // Initialize collapsible (uncomment the line below if you use the dropdown variation)
            this.$('.collapsible').collapsible();
            this.$(".dropdown-button").dropdown();
        }
    },

    actions: {
        activateSearch() {
            this.set('searchIsActive', true);
        },

        deactivateSearch() {
            this.set('searchIsActive', false);
        },

        onSearch() {
            this.sendAction('onSearch', this.get('query'));
        }
    }
});
