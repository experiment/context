import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  workflowState: DS.attr('string'),
  url: DS.attr('string'),

  workflowStateShort: function() {
    switch (this.get('workflowState')) {
      case 'private':
        return 'pr';
      case 'ready':
        return 's';
      case 'reviewed':
        return 'r';
      case 'approved':
        return 'a';
      case 'rejected':
        return 'no';
      case 'idled':
        return 'i';
      case 'pre_launched':
        return 'pre';
      case 'launched':
        return 'l';
      case 'successful':
      case 'finished':
        return 'f';
      case 'paid':
        return 'pd';
      case 'failed':
        return 'fa';
      case 'cancelled':
        return 'c';
    }
  }.property('workflowState')
});
