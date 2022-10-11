module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/multi-word-component-names": ["error", {
      "ignores": [
        'News', 
        'Title', 
        'Text', 
        'Service', 
        'Description', 
        'List',
        'Quote', 
        'Callout', 
        'Videos', 
        'Numbers', 
        'Steps',
        'Persons',
        'Table',
        'Photos'
      ]
    }]
  },
}
