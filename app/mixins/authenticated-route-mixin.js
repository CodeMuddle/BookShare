import Ember from 'ember';

export default Ember.Mixin.create({
    beforeModel(transition) {
        if(this.get('session.isAuthenticated') !== true) {
            transition.abort();
            transition.send('accessDenied');
        }
    }
});
