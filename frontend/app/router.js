import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('users');
  this.route('user.new', { path: 'users/new' });
  this.route('user', { path: 'users/:user_id' }, function() {
    this.route('post.new', { path: 'posts/new' });
  });
});

export default Router;
