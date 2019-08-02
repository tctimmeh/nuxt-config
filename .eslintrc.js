module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: 'standard',
  plugins: [
    'jest',
    'vue'
  ],
  rules: {
    // Allow paren-less arrow functions
    'arrow-parens': 'off',
    // Allow superfluous trailing commas
    'comma-dangle': 'off',
    // Allow async-await
    'generator-star-spacing': 'off',
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Do not allow console.logs etc...
    'no-console': 'error'
  },
  globals: {
    'jest/globals': true,
    jasmine: true
  }
}
