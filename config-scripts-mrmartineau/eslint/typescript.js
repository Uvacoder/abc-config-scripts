module.exports = {
  extends: [
    './index',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': {
      allowTypedFunctionExpressions: false
    }
  }
}
