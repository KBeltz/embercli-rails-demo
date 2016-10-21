import Ember from 'ember';

export default Ember.Route.extend({
  model(post) {
    console.log("MODEL: " + post);
  },
  renderTemplate() {
    this.render('user.post', { into: 'application' });
  },
});
