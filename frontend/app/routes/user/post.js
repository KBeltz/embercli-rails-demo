import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // return this.get('store').findAll('post');
    return {};
  },
  renderTemplate() {
    this.render('user.post', { into: 'application' });
  },
});
