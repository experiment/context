import Ember from 'ember';
import config from './../config/environment';

export function initialize() {
  Ember.$.ajaxPrefilter(function(options) {
    options.xhrFields = { withCredentials: true };
  });
}

export default {
  name: 'jquery',
  initialize: initialize
};
