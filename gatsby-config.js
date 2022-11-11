module.exports = {
  siteMetadata: {
    title: `Personal Blog`,
    author: {
      name: `Cliff Sanchez`,
      summary: `who lives and works in New York - building useful things.`,
    },
    description: `A blog about technology and the Jamtack (Javascript, APIs and Markup)`,
    siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
    social: {
      twitter: `sanchezruns`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
   
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "UA-49315603-1", // Google Analytics / GA
      ],
      // This object is used for configuration specific to this plugin
      pluginConfig: {
        // Puts tracking script in the head instead of the body
        head: true,
      },
    }
  },{
    resolve: `gatsby-plugin-segment-js`,
    options: {
      // your segment write key for your production environment
      // when process.env.NODE_ENV === 'production'
      // required; non-empty string
      prodKey: 'U2c3bnqWQjP50YmebQhAaE9NE3qERyAx',

      // boolean (defaults to false) on whether you want
      // to include analytics.page() automatically
      // if false, see below on how to track pageviews manually
      trackPage: false,

      // number (defaults to 50); time to wait after a route update before it should
      // track the page change, to implement this, make sure your `trackPage` property is set to `true`
      trackPageDelay: 50,

      // If you need to proxy events through a custom endpoint,
      // add a `host` property (defaults to https://cdn.segment.io)
      // Segment docs:
      //   - https://segment.com/docs/connections/sources/custom-domains
      //   - https://segment.com/docs/connections/sources/catalog/libraries/website/javascript/#proxy
      host: 'https://override-segment-endpoint',

      // boolean (defaults to false); whether to delay load Segment
      // ADVANCED FEATURE: only use if you leverage client-side routing (ie, Gatsby <Link>)
      // This feature will force Segment to load _after_ either a page routing change
      // or user scroll, whichever comes first. This delay time is controlled by
      // `delayLoadTime` setting. This feature is used to help improve your website's
      // TTI (for SEO, UX, etc).  See links below for more info.
      // NOTE: But if you are using server-side routing and enable this feature,
      // Segment will never load (because although client-side routing does not do
      // a full page refresh, server-side routing does, thereby preventing Segment
      // from ever loading).
      // See here for more context:
      // GIF: https://github.com/benjaminhoffman/gatsby-plugin-segment-js/pull/19#issuecomment-559569483
      // TTI: https://github.com/GoogleChrome/lighthouse/blob/master/docs/scoring.md#performance
      // Problem/solution: https://marketingexamples.com/seo/performance
      delayLoad: false,

      // number (default to 1000); time to wait after scroll or route change
      // To be used when `delayLoad` is set to `true`
      delayLoadTime: 1000,

      // Whether to completely skip calling `analytics.load({writeKey})`.
      // ADVANCED FEATURE: only use if you are calling `analytics.load({writeKey})` manually
      // elsewhere in your code or are using a library
      // like: https://github.com/segmentio/consent-manager that will call it for you.
      // Useful for only loading the tracking script once a user has opted in to being tracked, for example.
      manualLoad: false,

      // This package will use a default version of Segment's code snippet, but
      // if you'd like to include your own you can do so here. This is useful if
      // the version this package uses is different than the one you'd like to
      // use...or you need to do something custom.
      // While you should NOT use a back-ticked template string here, the string
      // will be evaluated as template literal with the following variables
      // available to it:
      //    - `writeKey`: The appropriate value from the `prodKey` and `devKey`
      //      options, based on the `NODE_ENV`
      //    - any of the other options passed here
      // 
      // NOTES: 
      // - If you provide a custom snippet, an immediate call to
      //   `analytics.load()` and/or `analytics.page()` will not be added by
      //   this plugin. You can - of course - add them yourself to your snippet.
      // - If your custom snippet does not include a call to `analytics.load()`
      //   then you must either:
      //   1. Manually load it and set the `manualLoad` option here to `true`
      //   2. Use the `delayLoad` option here
      customSnippet: '!function(){var analytics=window.analytics||[];...;analytics.load("${writeKey}");analytics.page();}}();'
    }
  },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Gatsby Starter Blog RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}