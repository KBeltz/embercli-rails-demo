import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('user');
  },
  actions: {
    delete(user) {
      user.deleteRecord();
      user.save();
    }
  }
});
