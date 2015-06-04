import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'svg',
  classNames: 'progress-bubble',

  didInsertElement: function () {
    this._draw();
  },

  _draw: function () {
    var width = Ember.$(this.element).width();

    var svg = d3.select(this.element)
      .select('g');
    svg.attr('transform', 'translate(' + width / 2 + ',' + width / 2 + ')');

    var fundingArc = d3.svg.arc()
      .outerRadius(width / 2)
      .innerRadius(width / 2.3)
      .startAngle(0)
      .endAngle(this.get('percentFunded') * Math.PI / 50 );

    var durationArc = d3.svg.arc()
      .outerRadius(width / 2)
      .innerRadius(0)
      .startAngle(0)
      .endAngle((100 - this.get('percentDuration')) * Math.PI / 50 );

    svg.select('circle')
      .attr('r', width / 2);

    svg.select('path.funding')
      .attr('d', fundingArc);

    svg.select('path.duration')
      .attr('d', durationArc);
  }
});
