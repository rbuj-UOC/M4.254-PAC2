import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: { globals: globals.browser, mocha: 'true' },
    rules: {
      indent: ['error', 2],
      'prefer-const': 'error',
      semi: 'error'
    }
  },
  pluginJs.configs.recommended,
  eslintConfigPrettier,
];
