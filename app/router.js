import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function(){
  this.route('todos', { path: '/' });
  this.route('done');
  this.route('undone');
});

export default Router;