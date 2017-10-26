import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.authenticatedRoute('book', {path: '/book/:bookid'});
  this.authenticatedRoute('profile', function() {
    this.route('about');
  });
  this.authenticatedRoute('dashboard');
  this.authenticatedRoute('books', function() {
    this.route('my');
  });
  this.authenticatedRoute('settings');
  this.route('notfound', { path: '/*path' });
  this.route('resetpassword');
});

export default Router;
