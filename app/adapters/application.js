import DS from 'ember-data';
import config from 'context/config/environment';

export default DS.ActiveModelAdapter.extend({
  host: config.apiHost,
  namespace: 'admin/api'
});
