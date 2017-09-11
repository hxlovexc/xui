let state = process.env.IS_DEV === 'true' ? 0 : 2;

module.exports = {
  root: true,
  parser: 'babel-eslint',
  //使用ECMAScript
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    "browser": true,
  },
  extends: 'standard',
  plugins: [
    'html'
  ],
  'rules': {
    "one-var": 0,
    "arrow-parens": 0,
    'generator-star-spacing': 0,
    'no-debugger': state,
    // 'no-console': state,
    "semi": [1, 'always'],
    "no-extra-semi": 2
  }
}
