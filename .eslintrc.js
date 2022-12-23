module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'prettier/prettier': ['error', { singleQuote: true }],
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/default-props-match-prop-types': 0,
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/destructuring-assignment': 'off',
  },
};
