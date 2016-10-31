import Ember from 'ember';

export default Ember.Route.extend({
  model(comment) {
    console.log("MODEL: " + comment);
  }
});
