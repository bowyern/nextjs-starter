const withCss = require('@zeit/next-css')
const withPurgeCss = require('next-purgecss')
 
module.exports = withCss(
  withPurgeCss({
    purgeCssEnabled: ({ dev, isServer }) => (!dev) // Only enable PurgeCSS for production builds
  })
)
