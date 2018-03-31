import nuxtConfig from 'nuxt-config'
let config

if (!process.client) {
  config = require('config')
  nuxtConfig.config = config
}

export default function ({nuxtState, beforeNuxtRender}, inject) {
  if (process.client) {
    config = nuxtState.__CONFIG__
    nuxtConfig.config = config
  }
  else {
    beforeNuxtRender(({nuxtState}) => {
      nuxtState.__CONFIG__ = config.get('<%= options.clientWhitelist %>')
    })
  }

  inject('config', config)
}
