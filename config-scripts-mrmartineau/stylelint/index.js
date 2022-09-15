module.exports = {
  extends: ['stylelint-config-standard'],
  syntax: 'scss',
  rules: {
    'selector-type-case': null,
    'selector-type-no-unknown': null,
    'declaration-colon-newline-after': null,
    'value-list-max-empty-lines': null,
    indentation: null,
    'rule-empty-line-before': [
      'always',
      { ignore: ['after-comment', 'first-nested'] }
    ],
    'declaration-empty-line-before': [
      'always',
      {
        except: ['after-declaration', 'first-nested'],
        ignore: [
          'after-comment',
          'inside-single-line-block',
          'after-declaration'
        ]
      }
    ]
  }
}
