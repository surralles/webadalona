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
    description: `Tu agencia de páginas web y tiendas online en Badalona (Barcelona). Posicionamiento SEO y SEM. Alto rendimiento para diferentes tamaños de neogio.`,
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
      resolve: 'gatsby-plugin-mailchimp',
      options: {
          endpoint: process.env.MAILCHIMP_ENDPOINT, 
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
    {
    resolve:`gatsby-plugin-sharp`,
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `dominantColor`,
        quality: 100,
        breakpoints: [800, 1080, 1366, 1920],
        backgroundColor: `transparent`,
        tracedSVGOptions: {},
        blurredOptions: {},
        jpgOptions: {},
        pngOptions: {},
        webpOptions: {},
        avifOptions: {},
      }
    }
  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
       
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logowbicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // the only required plugin option for WordPress is the GraphQL url.
        url:`https://demoswebadalona.es/graphql`,
        schema: {
          timeout: 90000,
        },
        
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `limelight`,
          `Frank Ruhl Libre\:400,700 `,
          `Poppins\:200,400,500` // you can also specify font weights and styles
        ],
        display: "swap",
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    },


  ],
}
