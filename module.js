const { resolve } = require('path')

const defaultOptions = {
  clientWhitelist: 'client'
}

module.exports = async function nuxtConfigModule (moduleOptions) {
  const options = Object.assign({}, defaultOptions, moduleOptions)

  this.addPlugin({
    src: resolve(__dirname, './plugin.js'),
    fileName: 'nuxt-config.js',
    options
  })
}

module.exports.meta = require('./package.json')
