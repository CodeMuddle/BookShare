import { test } from 'qunit';
import moduleForAcceptance from 'book-share/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | route test');

test('test-if-signup-works', function(assert) {
  visit('/');
  click("a#signup");

  andThen(function() {
    assert.equal(currentURL(),'/signup');
  });
});

test('test-if-login-works', function(assert) {
  visit('/');
  click("a#login");

  andThen(function() {
    assert.equal(currentURL(),'/login');
  });
});