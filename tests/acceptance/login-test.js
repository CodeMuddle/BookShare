import { test } from 'qunit';
import moduleForAcceptance from 'book-share/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | login');

test('Login Crendentials', function(assert) {
  visit('/login');
  fillIn('#emailAddress', 'jagat@gmail.com');
  fillIn('#passwordId', 'password123');
  click('#loginBtn');

  andThen(function() {
    assert.equal(currentURL(), '/', 'Correct Login Crendentials');
  });
});

test('Incorrect Login Crendentials', function(assert) {
  visit('/login');
  fillIn('#emailAddress', 'jagat@gmail.com');
  fillIn('#passwordId', 'password');
  click('#loginBtn');

  andThen(function() {
    assert.equal(currentURL(), '/login', 'Incorrect Login Crendentials');
  });
});

test('Validation not allowing to next route', function(assert) {
  visit('/login');
  click('#loginBtn');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('Validation Email Address empty', function(assert) {
  visit('/login');
  click('#loginBtn');

  andThen(function() {
    assert.equal(find('span#error-emailAddress').text(), `Can't be empty `, 'Correct Error message');
    assert.equal(currentURL(), '/login', 'Cannot route to next page');
  });
});

test('Validation Email Address incorrect format', function(assert) {
  visit('/login');
  fillIn('#emailAddress', 'jagat');
  click('#loginBtn');

  andThen(function() {
    assert.equal(find('span#error-emailAddress').text(), `Incorrect email format `, 'Correct Error message');
    assert.equal(currentURL(), '/login', 'Cannot route to next page');
  });
});

test('Validation Password', function(assert) {
  visit('/login');
  click('#loginBtn');

  andThen(function() {
    assert.equal(find('span#error-passwordId').text(), `Too Short (Minimum 8 characters) `, 'Correct Error message');
    assert.equal(currentURL(), '/login', 'Cannot route to next page');
  });
});