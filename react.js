module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', 'eslint-plugin-react', './default.js'],
  rules: {
    // Default props for functional components are now deprecated
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
