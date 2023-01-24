const path = require('path')

module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: true,
    locales: ['en', 'ja'],
    defaultLocale: 'en',
    localePath: path.resolve('./locales')
  }
}
