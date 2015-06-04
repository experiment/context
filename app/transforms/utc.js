import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    return moment.utc(serialized);
  },

  serialize: function(deserialized) {
    return deserialized;
  }
});
