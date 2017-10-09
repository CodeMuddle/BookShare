import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
       var dt = this.store.findRecord('book', params.bookid);
       return dt;
    }
});
