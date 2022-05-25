var plugins = [{
      name: 'gatsby-plugin-image',
      plugin: require('/Users/cliffsanchez/projects/repos/kenshinmax.github.io/node_modules/gatsby-plugin-image/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-google-gtag',
      plugin: require('/Users/cliffsanchez/projects/repos/kenshinmax.github.io/node_modules/gatsby-plugin-google-gtag/gatsby-ssr.js'),
      options: {"plugins":[],"trackingIds":["UA-49315603-1"],"pluginConfig":{"head":true}},
    },{
      name: 'gatsby-plugin-segment-js',
      plugin: require('/Users/cliffsanchez/projects/repos/kenshinmax.github.io/node_modules/gatsby-plugin-segment-js/gatsby-ssr.js'),
      options: {"plugins":[],"prodKey":"U2c3bnqWQjP50YmebQhAaE9NE3qERyAx","trackPage":false,"trackPageDelay":50,"host":"https://override-segment-endpoint","delayLoad":false,"delayLoadTime":1000,"manualLoad":false,"customSnippet":"!function(){var analytics=window.analytics||[];...;analytics.load(\"${writeKey}\");analytics.page();}}();"},
    },{
      name: 'gatsby-plugin-feed',
      plugin: require('/Users/cliffsanchez/projects/repos/kenshinmax.github.io/node_modules/gatsby-plugin-feed/gatsby-ssr.js'),
      options: {"plugins":[],"query":"\n          {\n            site {\n              siteMetadata {\n                title\n                description\n                siteUrl\n                site_url: siteUrl\n              }\n            }\n          }\n        ","feeds":[{"query":"\n              {\n                allMarkdownRemark(\n                  sort: { order: DESC, fields: [frontmatter___date] },\n                ) {\n                  nodes {\n                    excerpt\n                    html\n                    fields {\n                      slug\n                    }\n                    frontmatter {\n                      title\n                      date\n                      \n                    }\n                  }\n                }\n              }\n            ","output":"/rss.xml","title":"Gatsby Starter Blog RSS Feed"}]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/Users/cliffsanchez/projects/repos/kenshinmax.github.io/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/Users/cliffsanchez/projects/repos/kenshinmax.github.io/node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js'),
      options: {"plugins":[]},
    }]
/* global plugins */
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

function augmentErrorWithPlugin(plugin, err) {
  if (plugin.name !== `default-site-plugin`) {
    // default-site-plugin is user code and will print proper stack trace,
    // so no point in annotating error message pointing out which plugin is root of the problem
    err.message += ` (from plugin: ${plugin.name})`
  }

  throw err
}

export function apiRunner(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  plugins.forEach(plugin => {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      return
    }

    try {
      const result = apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  })

  return results.length ? results : [defaultReturn]
}

export async function apiRunnerAsync(api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  const results = []
  for (const plugin of plugins) {
    const apiFn = plugin.plugin[api]
    if (!apiFn) {
      continue
    }

    try {
      const result = await apiFn(args, plugin.options)

      if (result && argTransform) {
        args = argTransform({ args, result })
      }

      // This if case keeps behaviour as before, we should allow undefined here as the api is defined
      // TODO V4
      if (typeof result !== `undefined`) {
        results.push(result)
      }
    } catch (e) {
      augmentErrorWithPlugin(plugin, e)
    }
  }

  return results.length ? results : [defaultReturn]
}
