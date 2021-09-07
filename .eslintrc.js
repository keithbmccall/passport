module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['prettier', 'jsx-a11y', 'import', '@typescript-eslint'],
  extends: [
    '@react-native-community',
    'kentcdodds',
    'kentcdodds/react',
    'kentcdodds/jsx-a11y',
    'kentcdodds/best-practices',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  root: true,

  globals: {
    global: true,
    document: true,
    setTimeout: true,
    setInterval: true,
    console: true,
    window: true,
    __DEV__: true,
  },
  rules: {
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    '@typescript-eslint/rule-name': 0,
    'jsx-a11y/click-events-have-key-events': 1,
    '@typescript-eslint/no-unused-vars': 1,
    'react/self-closing-comp': 1,
    '@typescript-eslint/no-unnecessary-condition': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'react/react-in-jsx-scope': 0,
    'react/no-unstable-nested-components': 0,
    'one-var': 0,
  },
};
