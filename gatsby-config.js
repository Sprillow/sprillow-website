module.exports = {
  siteMetadata: {
    title: `Sprillow`,
    description: `Sprillow Limited is a design, development and consultation studio focused on co-creating systems change initiatives. It was founded in July of 2019.`,
    author: `@Sprillow`,
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
        icon: `src/images/sprillow-logo-light-green.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
