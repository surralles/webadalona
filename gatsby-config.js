/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Webadalona`,
    description: `Desarrollo y diseño web en Badalona`,
    author: `@webadalona`,
    siteUrl: `https://webadalona.es/`,
  },
  plugins: [

    {
      resolve: "gatsby-source-shopify",
      options: {
        password: process.env.GATSBY_SHOPIFY_APP_PASSWORD,
        storeUrl: process.env.GATSBY_SHOPIFY_STORE_URL,
        shopifyConnections: ["collections"],
      },
    },

    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
          key: `AIzaSyBEKS2fj1nAFH3FnRBVvA9Zf7_OFKBQ4wM`,
          center: `41.44224918854802, 2.2383211844614177`,
      },
  },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:`http://webadalonaheadless.local/graphql`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,

    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700`,
          `Frank Ruhl Libre\:400,700 `,
          `Roboto\:400,700`,
          `Poppins\:200,400,500`// you can also specify font weights and styles
        ],
        display: 'swap'
      }
    },
  ],
}
