import Ember from 'ember';

export default Ember.Controller.extend({
    userSession: Ember.inject.service('user-session'),
    tabs: [
        { name: 'Overview', link: 'profile' },
        { name: 'About', link: 'profile.about' },
        { name: 'Requested Books', link: 'profile.requested-books' }
    ],

    

});
