import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  workflowState: DS.attr('string'),
  url: DS.attr('string'),
  fundingStart: DS.attr('utc'),
  fundingEnd: DS.attr('utc'),
  fundingRaised: DS.attr('number'),
  fundingTarget: DS.attr('number'),
  location: DS.attr('string'),
  lastReviewer: DS.attr('string'),

  percentFunded: function() {
    return 100 * this.get('fundingRaised') / this.get('fundingTarget');
  }.property('fundingRaised', 'fundingTarget'),

  percentDuration: function () {
    var now = moment.utc();
    return 100 * (this.get('fundingEnd') - moment.utc()) / (this.get('fundingEnd') - this.get('fundingStart'));
  }.property('fundingStart', 'fundingEnd'),

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
  }.property('workflowState'),

  tooltip: function() {
    return this.get('percentFunded') + "% of $" + this.get('fundingTarget');
  }.property('percentFunded'),
});
