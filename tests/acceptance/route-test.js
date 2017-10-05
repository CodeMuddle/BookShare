import { test } from 'qunit';
import moduleForAcceptance from 'book-share/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | route');

test('visiting root', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/');
  });
});

test('visiting login', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(currentURL(), '/login');
  });
});

test('visiting signup', function(assert) {
  visit('/signup');

  andThen(function() {
    assert.equal(currentURL(), '/signup');
  });
});

test('Routing from login to Sign Up', function(assert) {
  visit('/login');

  andThen(function() {
    assert.equal(find('.card-content p a').text(), 'Sign Up', 'Sign Up link');
    click('.card-content p a');

    andThen(function() {
      assert.equal(currentURL(), '/signup', 'Routed to Sign Up page');
    });
  });
});

test('Login link in Navbar', function(assert){
  visit('/signup');

  andThen(function() {
    assert.equal(find('.nav-wrapper ul li:first a').text(), 'Login', 'Link present');
    click('.nav-wrapper ul li a');
    
    andThen(function() {
      assert.equal(currentURL(), '/login', 'Routed to Login page');
    });
  })
});

test('Routing from Sign Up to Login', function(assert){
  visit('/signup');

  andThen(function() {
    assert.equal(find('.card-content .margin-top-2 p a').text(), 'Login', 'Link present');
    click('.card-content .margin-top-2 p a');
    
    andThen(function() {
      assert.equal(currentURL(), '/login', 'Routed to Login page');
    });
  })
});