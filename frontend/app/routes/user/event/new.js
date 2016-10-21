import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  renderTemplate() {
    this.render('user.event.new', { into: 'application' });
  },
  actions: {
    save() {
      const user = this.modelFor('user');
      const newEvent = this.get('store').createRecord('event', this.currentModel);
      newEvent.set('user', user);
      newEvent.save().then(() => {
        this.transitionTo('user', user);
      });
    },
    cancel() {
      this.transitionTo('user', this.modelFor('user'));
    }
  }
});
