/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'context',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' https://dl.frontapp.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.apiHost = 'http://localhost:3000';

    ENV.contentSecurityPolicy = {
      // Add localhost:3000, and ngrok for testing
      'script-src': "'self' 'unsafe-eval' https://dl.frontapp.com *.ngrok.com *.ngrok.com:35729",
      'connect-src': "'self' *.localhost:3000 *.ngrok.com"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.apiHost = 'https://experiment.com';
  }

  return ENV;
};
