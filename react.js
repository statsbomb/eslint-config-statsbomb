module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb', './default.js'],
  overrides: [
    {
      env: {
        jest: true,
      },
      extends: ['./test.js'],
      files: [
        '*.{test,stories}.{js,jsx}',
        '**/{test,__tests__,__mocks__,__fixtures__,__stories__}/*.{js,jsx}',
      ],
    },
    {
      extends: ['plugin:storybook/recommended'],
      files: ['*.stories.{js|jsx|mdx}'],
    },
  ],
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
