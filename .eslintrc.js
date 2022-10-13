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

  rules: {
<<<<<<< HEAD
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
        'Photos',
        'Awards',
        'Events',
        'Places',
        'Articles',
        'Tags'
      ]
    }]
=======
    'vue/multi-word-component-names': 'off',
    'vue/attribute-hyphenation': ['error', 'never'],
>>>>>>> a75840d2e67651c411f478b564228ba8d2f39b44
  },
}
