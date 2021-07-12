module.exports = {
  siteMetadata: {
    title: `Sprillow`,
    description: `Sprillow Limited is a design & development studio specializing in distributed systems software applications. It was founded in July of 2019.`,
    author: `@Sprillow`,
    siteUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://sprillow.com'
  },
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: "tpp7wji",
        },
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "content",
      },
    },
    `gatsby-transformer-csv`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sprillow`,
        short_name: `sprillow`,
        start_url: `/`,
        background_color: `#1B2723`,
        theme_color: `#1B2723`,
        display: `minimal-ui`,
        icon: `src/images/sprillow-logo-with-text-anzac.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: "70b44a7909b7b50b16441d99fe68f24d",
        // Puts tracking script in the head instead of the body (optional)
        head: false,
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        respectDNT: true,
        // Avoids sending pageview hits from custom paths (optional)
        // exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Override the default event types (optional)
        // eventTypes: {
        //   outboundLinkClick: 'OUTBOUND_LINK_CLICK',
        //   pageView: 'PAGE_VIEW',
        // },
        // Amplitude JS SDK configuration options (optional)
        amplitudeConfig: {
          // no cookies!
          storage: 'localStorage',
          trackingOptions: {
            city: true,
            country: true,
            carrier: false,
            device_manufacturer: true,
            device_model: true,
            dma: true,
            ip_address: false,
            language: true,
            os_name: true,
            os_version: true,
            platform: true,
            region: true,
            version_name: true,
          }
        },
        // Specify NODE_ENVs in which the plugin should be loaded (optional)
        environments: ["production"],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
