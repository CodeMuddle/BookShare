import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('book',{path: '/book/:bookid'});
  this.route('home',  function() {
    this.route('dashboard');
    this.route('myBooks', function() {
      this.route('myBook',{path: '/:bookid'});
    });
    this.route('profile', function() {
      this.route('about');
    });
  });
  
});

export default Router;
