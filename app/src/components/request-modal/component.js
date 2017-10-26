import Ember from 'ember';

export default Ember.Component.extend({
    isAccept:false,
    isDecline:false,
    requests: Ember.Object.create(),

    didReceiveAttrs() {
        let book = this.get('book');
        if(book) {
            book.get('requests').then((requests) => {
                this.set('requests', requests);
            });
        }
    },

    actions:{
        acceptReq(request) {
            request.set('status', "accepted");
            request.save()
            .then(() => {
                this.set('book.isBorrowed', true);
                return this.get('book').save();
            }).then(() => {
            });            
        },

        declineReq(request) {
            request.set('status', "declined");
            request.save();    
        },
        
        closeReqModal(){
            this.sendAction('onCloseClick');
        }

    }
});
