// eslint.config.js

import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import playwright from 'eslint-plugin-playwright'
import prettier from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // ===== ignores 环境文件 =====
  {
    ignores: [
      'node_modules',
      'dist',
      'build',
      'coverage',
      'playwright-report',
      'test-results',
    ],
  },
  // ===== Node 环境文件 =====
  {
    files: ['*.ts', 'src/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'error',
    },
  },

  // ===== Playwright 测试环境 =====
  {
    files: ['tests/**/*.ts'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node, // Playwright 其实是 node + browser 混合
      },
    },
    plugins: {
      playwright,
    },
    rules: {
      ...playwright.configs.recommended.rules,
    },
  },

  eslintConfigPrettier,
]