module.exports = {
  tabWidth: 2,
  printWidth: 100,
  proseWrap: 'preserve',
  semi: false,
  trailingComma: 'es5',
  arrowParens: 'always',
  singleQuote: true,
  overrides: [
    {
      files: '*',
      options: {
        parser: 'markdown',
        printWidth: 100,
        proseWrap: 'never',
        semi: false,
        trailingComma: 'none',
      },
    }
  ],
}
