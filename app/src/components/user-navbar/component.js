import Ember from 'ember';

export default Ember.Component.extend({
    init() {
        this._super(...arguments);
        this.set('searchIsActive', false);
    },

    didRender() {
        this._super(...arguments);
        this.$(".button-col").sideNav();
        // Initialize collapsible (uncomment the line below if you use the dropdown variation)
        this.$('.collapsible').collapsible();
        this.$(".dropdown-button").dropdown();
    },

    actions: {
        activateSearch() {
            this.set('searchIsActive', true);
        },

        deactivateSearch() {
            this.set('searchIsActive', false);
        }
    }
});
