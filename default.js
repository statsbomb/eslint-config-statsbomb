module.exports = {
  env: {
    es6: true,
    jest: true,
  },
  extends: ['prettier'],
  plugins: ['eslint-plugin-react', 'prettier'],
  rules: {
    // For some reason this is causing an error in react projects, adding it here even though it should be covered by
    // Airbnb's own config.
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Max line length set to 120, excluding URLs.
    'max-len': [
      'error',
      {
        code: 120,
        comments: 120,
        ignoreUrls: true,
      },
    ],

    // Prettier overrides
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        printWidth: 80,
        singleQuote: true, // Ensures compatibility with Airbnb rules
      },
    ],

    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],

    // Sort keys alphabetically - warning only as erroring will cause a lot of problems for mature apps.
    // Good habit to have though, makes working with large objects/data structures easier IMO
    'sort-keys': 'warn',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
};
