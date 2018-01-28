module.exports = {
  globals: {
    server: true,
    "document":true,
    "window":true,
    "-Promise":true,
    "Materialize":true,
    "moment":true,
    "Promise":true,
    "E":true,
    "introJs":true,
    "introJs()":true,
    "AmCharts":true,
    "chart":true
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
  }
};
