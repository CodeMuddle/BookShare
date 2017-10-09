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
  fillIn('#passwordIdConfirmation', 'password123');
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
    assert.equal(find('span#error-fname').text(), `Can't be empty `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});

test('Validation Last Name', function(assert) {
  visit('/signup');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('span#error-lname').text(), `Can't be empty `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});

test('Validation User Name', function(assert) {
  visit('/signup');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('span#error-username').text(), `Can't be empty `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});

test('Validation Email Address empty', function(assert) {
  visit('/signup');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('span#error-emailAddress').text(), `Can't be empty `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});

test('Validation Email Address incorrect format', function(assert) {
  visit('/signup');
  fillIn('#emailAddress', 'jagat');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('span#error-emailAddress').text(), `Incorrect email format `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});

test('Validation Password', function(assert) {
  visit('/signup');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('span#error-passwordId').text(), `Too Short (Minimum 8 characters) `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});

test('Validation Password Confirmation', function(assert) {
  visit('/signup');
  fillIn('#passwordId', 'password123');
  click('#signBtn');

  andThen(function() {
    assert.equal(find('span#error-passwordIdConfirmation').text(), `Password doesn't match `, 'Correct Error message');
    assert.equal(currentURL(), '/signup', 'Cannot route to next page');
  });
});