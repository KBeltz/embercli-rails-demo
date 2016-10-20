import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
  deletePost(post) {
    post.deleteRecord();
    post.save();
  }
}
});
