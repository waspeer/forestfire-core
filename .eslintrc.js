module.exports = {
  extends: ['./node_modules/poetic/config/eslint/eslint-config.js'],
  // Add custom rules here
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
  },
};
