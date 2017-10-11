import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('book', {path: '/book/:bookid'});
  this.route('profile', function() {
    this.route('about');
  });
  this.route('dashboard');
  this.route('books', function() {
    this.route('my');
  });
  this.route('settings');
});

export default Router;
