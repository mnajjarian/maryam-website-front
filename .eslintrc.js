module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': ['error'],
  },
};
