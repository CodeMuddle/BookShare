import Ember from 'ember';
import UserValidation from '../../validations/user';
export default Ember.Controller.extend({
    UserValidation,
    firebase: Ember.inject.service(),
    firebaseApp: Ember.inject.service(),

    fname: '',
    lname: '',
    username: '',
    passwordId: '',
    email: '',
    flagSet: false,

    actions: {
        createNew: function(changeset) {
            changeset.validate().then(() => {
                if(changeset.get('isValid')){
                    this.set('fname', changeset.get('fname'));
                    this.set('lname', changeset.get('lname'));
                    this.set('username', changeset.get('username'));
                    this.set('passwordId', changeset.get('passwordId'));
                    this.set('email', changeset.get('emailAddress'));

                    this.set('flagSet', true);

                    /* const createUser = this.store.createRecord('signup', {
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
                    }); */    
                } else {
                    console.log(changeset.get("errors"));
                }
            });

            if (changeset.get('isValid')) {
                if(this.get('flagSet') && this.get('email') && this.get('username')) {
                    const ref = this.get('firebaseApp').auth();

                    ref.createUserWithEmailAndPassword(this.get('email'), this.get('passwordId')).then((userData) => {
                        var user = this.store.createRecord('user', {
                            id: userData.uid,
                            firstName: this.get('fname'),
                            lastName: this.get('lname'),
                            username: this.get('username'),
                            email: this.get('email'),
                        });

                        user.save().then(() => {
                            console.log('User created');
                            Materialize.toast('User Created Successful', 3000, 'rounded');
                            this.transitionToRoute('login');
                        })
                    }).catch((error) => {
                        Materialize.toast('Sorry!!! User Creation Unsuccessful', 3000, 'rounded');
                        console.log('Error', error);
                    })
                }
                
            }
        }
    }
});
