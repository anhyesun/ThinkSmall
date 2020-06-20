const OFF = 0;
const ON = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-base', 'airbnb/rules/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'arrow-parens': [ERROR, 'as-needed'],
    'no-case-declarations': OFF,
    'no-irregular-whitespace': OFF,
    'no-param-reassign': OFF,
    'no-restricted-globals': OFF,
    'no-shadow': OFF,
    'no-undef': OFF,
    'no-underscore-dangle': OFF,
    'no-unused-vars': [ON, { args: 'none' }],
    'no-use-before-define': OFF,
    'react/prop-types': OFF,
    'react/jsx-indent': [ON, 4],
    'react/jsx-indent-props': OFF,
    'react/jsx-filename-extension': OFF,
    'react/jsx-max-props-per-line': [ON],
    'react/jsx-props-no-spreading': OFF,
    'react/no-array-index-key': OFF,
    'react/no-unescaped-entities': OFF,
    indent: [ERROR, 4],
    quotes: [ERROR, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'import/no-extraneous-dependencies': ['error', { "devDependencies": true }],
  },
};
