import Ember from 'ember';
import UserValidation from '../../validations/userlogin';

export default Ember.Controller.extend({
    UserValidation,

    actions: {
        validLogin: function(changeset) {

            changeset.validate().then(() => {
                if(changeset.get('isValid')) {
                    const email = changeset.get('emailAddress');
                    const password = changeset.get('passwordId');
                    
                    return this.store.findRecord('login', password).then((thik) => {
                        console.log('Thik xa', thik);
                        Materialize.toast('Login Successful', 10000, 'rounded');
                        this.set('emailAddress', '');
                        this.set('passwordId', '');
                        this.transitionToRoute('home');
                    }).catch((thikxaina) => {
                        console.log('Milena', thikxaina);
                        Materialize.toast('Incorrect User Credentials', 10000, 'rounded');
                        this.set('emailAddress', '');
                        this.set('passwordId', '');
                    })
                } else {
                    console.log(changeset.get("errors"));
                }
            })
        }
    }
});
