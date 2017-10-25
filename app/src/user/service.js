import Ember from 'ember';
import {storageFor} from 'ember-local-storage';

export default Ember.Service.extend({
    detail: null,

    localStorage: storageFor('user'),

    init() {
        const localStorage = this.get('localStorage');
        this.set('detail', localStorage.get('detail'));
    },

    setDetails(detail) {
        this.set('detail', detail);
        this.set('localStorage.detail', detail);
    }
});
