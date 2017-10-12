import Ember from 'ember';

export default Ember.Controller.extend({
    tabs: [
        { name: 'Overview', link: 'profile' },
        { name: 'About', link: 'profile.about' },
        { name: 'Requested Books', link: 'profile' }
    ]
});
