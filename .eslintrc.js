module.exports = {
  extends: [
    'codingitwrong',
  ],
  parser: 'babel-eslint',
  plugins: [
    'cypress',
    'jest',
    'react',
  ],
  env: {
    'cypress/globals': true,
    'browser': true,
    'jest/globals': true,
  },
};