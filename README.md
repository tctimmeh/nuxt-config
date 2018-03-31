# nuxt-config
[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-config/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-config)
[![npm](https://img.shields.io/npm/dt/nuxt-config.svg?style=flat-square)](https://npmjs.com/package/nuxt-config)
[![Dependencies](https://david-dm.org/tctimmeh/nuxt-config/status.svg?style=flat-square)](https://david-dm.org/tctimmeh/nuxt-config)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Nuxt module for the node [config](https://www.npmjs.com/package/config) package

## Features

This is a [Nuxt](https://nuxtjs.org/) module which adds support for the [config](https://www.npmjs.com/package/config)
npm package. 

On the server configuration values are read from your configuration files complete with local overrides, environment
variables, and everything else the config package provides.

On the client, configuration values are read from state transmitted with the server-rendered HTML, just like the Nuxt
state and the Vuex store data.

## Setup
- Add `nuxt-config` dependency using yarn or npm to your project
- Add `nuxt-config` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-config',

    // With options
    ['nuxt-config', { /* module options */ }],
 ]
}
```

## Usage

### Create Config Files

Create a set of configuration files for the [config](https://www.npmjs.com/package/config) package at the top level of
your Nuxt project (or wherever they will be accessible when you run a nuxt command).

Your configuration files **must** contain a sub-object of values that are safe to send to the client. This prevents
the possibility that sensitive data is transmitted to the browser. By default nuxt-config will look for an object
called `client` in the config set and only transmit these values to the client.

See "Client Whitelisting" below for more detail.

### Retrieving Config Values

**NOTE**: Avoid using `.get()`, `.has()` or any other method that you would normally expect on a `config` object. They 
will not be available in the browser.

#### Inside Components

Access configuration values using the `$config` property inside Vue components. For example:

    {
      methods: {
        doSomething() {
          console.log('A config value!', this.$config.someValue)
        }
      }
    }

#### Outside Components

Configuration data can be read from anywhere like so:

    import { config } from 'nuxt-config'
    
    console.log(config.someValue)

### Client Whitelisting

The nuxt-config module does not send all of your configuration data to the browser. You **must** provide an 
configuration sub-object that contains a whitelisted set of values that are safe to send to untrusted third parties.

For example:

    # default.js
    const defer = require('config/defer').deferConfig

    module.exports = {
      secretPassword: 'hide this',
      sharedValue: 1000,
      
      client: {
        sharedValue: defer(function() { return this.sharedValue })
      }
    }
 
In the above example, only the `sharedValue` option will be sent to the browser. Also note the use of the the config 
package's `defer` function to keep the config DRY. This is highly recommended. 

It is important to keep the _shape_ of the client-safe config object the same as the normal config values. In other 
words, if a value is accessible as `apiServer.uri` in the default config, then it should be present at 
`client.apiServer.uri` for the client. This way your isomorphic code can always access `apiServer.uri` and always get
the correct value.

#### Configuring the Whitelist

You can change the name of the client whitelist object with the `clientWhiteList` option. For example:

    # nuxt.config.js
    {
      modules: [
        [ 'nuxt-config', {
          clientWhiteList: '__client_only'
        }]
      ]
    }

## Development

- Clone this repository
- Install dependnecies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Tim Court <tctimmeh@gmail.com>
