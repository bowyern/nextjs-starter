const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
 
module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => (!dev), // Only enable PurgeCSS for production builds
    purgeCss: {
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      // Next doesn't use html or body tags anywhere by default.
      // Whitelist them here so PurgeCSS doesn't remove
      // some of the default Tailwind styles.
      whitelist: () => ['html', 'body']
    }
  })
)
