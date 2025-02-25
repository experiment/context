import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  name: DS.attr('string'),
  backedProjectCount: DS.attr('number'),

  projects: DS.hasMany('project')
});
