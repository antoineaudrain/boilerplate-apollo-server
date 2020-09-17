module.exports = {
  env: {
    es2020: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error']
  },
  ignorePatterns: ['dist/*', 'node-modules/*']
}
