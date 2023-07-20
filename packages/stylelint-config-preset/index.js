module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-rational-order'],
  customSyntax: 'postcss-less',
  plugins: [
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-prettier',
  ],
  rules: {
    'prettier/prettier': true,
    'string-quotes': ['single', {}],
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: ['/colorPalette'],
      },
    ],
    'no-descending-specificity': null,
    'no-invalid-position-at-import-rule': null,
    'declaration-empty-line-before': null,
    'keyframes-name-pattern': null,
    'custom-property-pattern': null,
    'number-max-precision': 8,
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'function-no-unknown': [
      true,
      {
        ignoreFunctions: [/~`\w*/, 'fade', 'lightness'],
      },
    ],
    'block-no-empty': true,
    'color-hex-length': 'long',
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'local'],
      },
    ],
    'at-rule-no-unknown': null,
    'comment-no-empty': true,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': true,
    'no-empty-first-line': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
  },
};
