import pluginJs from '@eslint/js'
import pluginPrettier from 'eslint-plugin-prettier'
export default {
  languageOptions: {
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
    },
  },
  plugins: {
    js: pluginJs,
    prettier: pluginPrettier,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'off',
  },
}
