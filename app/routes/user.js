import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var _this = this;

    return this.store.find('user', { email: params.email }).then(function(users){
      if (users.content[0]) {
        return _this.store.find('user', users.content[0].id);
      } else {
        return null;
      }
    });
  }
});
