import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {}
  },
  actions: {
    save() {
      const newUser = this.get('store').createRecord('user', this.currentModel);
      newUser.save().then((user) => {
        this.transitionTo('user', user);
      });
    },
    cancel() {
      this.transitionTo('users');
    }
  }
});
