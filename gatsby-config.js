module.exports = {
  siteMetadata: {
    title: `Hossein Maktoobian`,
    description: `This is the personal website of a web developer.`,
    author: `@hmak-me`,
  },
  plugins: [
    `gatsby-plugin-stylus`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hossein Maktoobian`,
        short_name: `hmak.me`,
        start_url: `/`,
        background_color: `#1c1c1e`,
        theme_color: `#2c2c2e`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
