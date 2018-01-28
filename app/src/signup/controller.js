import Ember from 'ember';
import UserValidation from '../../validations/user';
import {
	task
} from 'ember-concurrency';

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

	createUserTask: task(function * (changeset) {
		this.set('fname', changeset.get('fname'));
					this.set('lname', changeset.get('lname'));
					this.set('username', changeset.get('username'));
					this.set('passwordId', changeset.get('passwordId'));
					this.set('email', changeset.get('emailAddress'));

					if (this.get('email') && this.get('username')) {
						const ref = this.get('firebaseApp').auth();
						try { 
						let userData = yield ref.createUserWithEmailAndPassword(this.get('email'), this.get('passwordId'))
						var user = this.store.createRecord('user', {
							id: userData.uid,
							firstName: this.get('fname'),
							lastName: this.get('lname'),
							username: this.get('username'),
							email: this.get('email'),
						});

						yield user.save();
						Materialize.toast('User Created Successful', 3000, 'rounded');
						this.transitionToRoute('login');
						} catch (e) {
							Materialize.toast('Sorry!!! User Creation Unsuccessful', 3000, 'rounded');
							console.error('Error', error);
						}
					}
	}).drop(),

	actions: {
		createNew: function (changeset) {

			changeset.validate().then(() => {
				if (changeset.get('isValid')) {
					this.get('createUserTask').perform(changeset);
				} else {
					Materialize.toast('Fill out the required fields', 3000, 'rounded');
					console.log(changeset.get("errors"));
				}
			});
		}
	}
});
