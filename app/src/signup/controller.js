import Ember from 'ember';
import UserValidation from '../../validations/user';
export default Ember.Controller.extend({
    UserValidation,

    actions: {
        createNew: function(changeset) {
            changeset.validate().then(() => {
                if(changeset.get('isValid')){
                    const name = `${changeset.get('fname')} ${changeset.get('lname')}`;
                    const username = changeset.get('username');
                    const passwordId = changeset.get('passwordId');
                    const email = changeset.get('emailAddress');

                    const createUser = this.store.createRecord('signup', {
                        name: name,
                        email: email,
                        username: username,
                        password: passwordId
                    });
        
                    createUser.save().then(() => {
                        console.log('User created');
                        Materialize.toast('User Created Successful', 3000, 'rounded');
                        this.transitionToRoute('login');
                    }).catch(() => {
                        Materialize.toast('Sorry!!! User Creation Unsuccessful', 3000, 'rounded');
                    });    
                } else {
                    console.log(changeset.get("errors"));
                }
            })
        }
    }
});
