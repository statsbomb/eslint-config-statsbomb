module.exports = {
  env: {
    browser: true,
  },
  extends: ['airbnb-typescript', './default.js'],
  overrides: [
    {
      extends: ['./test.js'],
      files: [
        '*.{test,stories}.{ts,tsx}',
        '**/{test,__tests__,__mocks__,__fixtures__,__stories__}/*.{ts,tsx}',
      ],
    },
    {
      extends: ['plugin:storybook/recommended'],
      files: ['*.stories.{ts|tsx|mdx}'],
    },
  ],
  rules: {
    'react/require-default-props': 'off',
  },
};
