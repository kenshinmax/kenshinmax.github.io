module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":630,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withWebp":false,"withAvif":false,"tracedSVG":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["UA-49315603-1"],"pluginConfig":{"head":true}},
    },{
      plugin: require('../node_modules/gatsby-plugin-segment-js/gatsby-browser.js'),
      options: {"plugins":[],"prodKey":"U2c3bnqWQjP50YmebQhAaE9NE3qERyAx","trackPage":false,"trackPageDelay":50,"host":"https://override-segment-endpoint","delayLoad":false,"delayLoadTime":1000,"manualLoad":false,"customSnippet":"!function(){var analytics=window.analytics||[];...;analytics.load(\"${writeKey}\");analytics.page();}}();"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter Blog","short_name":"GatsbyJS","start_url":"/","background_color":"#ffffff","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
