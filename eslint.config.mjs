import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import mochaPlugin from 'eslint-plugin-mocha';

import globals from 'globals';

export default [
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      indent: ['error', 2],
      'prefer-const': 'error',
      semi: 'error'
    }
  },
  pluginJs.configs.recommended,
  mochaPlugin.configs.flat.recommended,
  eslintConfigPrettier
];
