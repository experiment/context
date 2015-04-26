import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    var _this = this;

    Front.on('conversation', function(data) {
      _this.send('conversationChanged', data.contact.handle);
    });
  },

  actions: {
    conversationChanged: function(email) {
      this.transitionToRoute('user', email);
    }
  }
});
