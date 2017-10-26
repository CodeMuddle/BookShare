import Ember from 'ember';

export default Ember.Component.extend({
    isAccept:false,
    isDecline:false,

    actions:{
        acceptReq(){
            
            this.set('isAccept', true);
        },
        closeReqModal(){
            this.sendAction('onCloseClick');
        }

    }
});
