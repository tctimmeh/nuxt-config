const defer = require('config/defer').deferConfig

module.exports = {
  simpleValue: 'simple config value',
  isoValue: 'isomorphic SERVER',
  sharedEnvValue: 'environment value',
  envValue: 'environment value SERVER',

  client: {
    simpleValue: defer(function() { return this.simpleValue }),
    isoValue: 'isomorphic CLIENT',
    sharedEnvValue: defer(function() { return this.sharedEnvValue }),
    envValue: 'environment value CLIENT',
  }
}
