import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  renderTemplate() {
    this.render('user.post.new', { into: 'application' });
  },
  actions: {
    save() {
      const user = this.modelFor('user');
      const newPost = this.get('store').createRecord('post', this.currentModel);
      newPost.set('user', user);
      newPost.save().then(() => {
        this.transitionTo('user', user);
      });
    },
    cancel() {
      this.transitionTo('user', this.modelFor('user'));
    }
  }
});
