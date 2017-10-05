import { test } from 'qunit';
import moduleForAcceptance from 'book-share/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | signup');

test('Create new user', function(assert) {
  visit('/signup');
  fillIn('#fname', 'Jagat');
  fillIn('#lname', 'Tuladhar');
  fillIn('#username', 'jagatula');
  fillIn('#emailAddress', 'jagat@gmail.com');
  fillIn('#passwordId', 'password123');
  fillIn('#confirmPass', 'password123');
  click('#signBtn');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('Validation not allowing to next route', function(assert) {
  visit('/signup');
  click('#signBtn');

  andThen(function() {
    assert.equal(currentURL(), '/signup');
  });
});

test('Validation First Name', function(assert) {
  visit('/signup');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('p:first'), 'First Name is Required');
  });
});
