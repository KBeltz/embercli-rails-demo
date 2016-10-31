import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {};
  },
  renderTemplate() {
    this.render('user.post.comment.new', { into: 'application' });
  },
  actions: {
    save() {
      const user = this.modelFor('user');
      const post = this.modelFor('post');
      console.log("USER: " + user.id);
      console.log("POST: " + post);
      // const post = this.get('store').find('post', )
      // console.log("{POST}: " + post.id);
      // const newComment = this.get('store').createRecord('comment', this.currentModel);
      // newComment.set('post', post);
      // newComment.save().then(() => {
      //   this.transitionTo('post', post);
      //   });
    },
    cancel() {
      this.transitionTo('user', this.modelFor('user'));
    }
  }
});
