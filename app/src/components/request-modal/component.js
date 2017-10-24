import Ember from 'ember';

export default Ember.Component.extend({
    isAccept:true,

    actions:{
        acceptReq(){
            console.log('request is accepted');
        }
    }
});
