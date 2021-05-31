module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  extends: [
    'eslint:recommended', // eslint default rules
    'plugin:@typescript-eslint/eslint-recommended', // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended', // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    'plugin:jsx-a11y/recommended', // accessibility plugin
  ],
  rules: {
    '@typescript-eslint/ban-ts-ignore': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    'react/display-name': ['off'],
    'no-shadow': ['warn', { allow: ['headers'] }],
    'jsx-a11y/media-has-caption': ['off'],
    '@typescript-eslint/no-unused-vars': ['warn', { allow: ['React'] }],
    'react/no-render-return-value': ['warn'],
    'react/prop-types': 'off', // We turn off prop-types rule, as we will use TypeScript's types instead.
    'no-var': ['warn'],
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
  env: {
    commonjs: true,
    browser: true,
    es2020: true,
    node: true,
  },
}
