module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    // Max line length set to 120 comments, excluding URLs.
    'max-len': [
      'error',
      {
        code: 80, // Matching prettier's recommended print width
        comments: 120,
        ignoreUrls: true,
      },
    ],

    // Prettier overrides
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        singleQuote: true, // Ensures compatibility with Airbnb rules
        trailingComma: 'es5', // Ensures compatibility with Airbnb rules
      },
    ],

    // Sort keys alphabetically - warning only as erroring will cause a lot of problems for mature apps.
    // Good habit to have though, makes working with large objects/data structures easier IMO
    'sort-keys': 'warn',
  },
};
