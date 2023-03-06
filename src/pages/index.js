import * as React from "react"

import Hero from '../components/Hero/Hero'
import SliderTop from '../components/SliderTop/SliderTop';

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Layout from '../components/Layout/Layout'
import IndexGsap from './GsapScript'

import { graphql } from "gatsby"
import { LayoutShop } from "../components/layout"
import { ProductListing } from "../components/product-listing"


import { css } from "@emotion/react"

import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"


export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage-1" }) {
      products {
        ...ProductCard
      }
    }
  }
`

function HeroShop (props) {
  return (
    <div className={container}>
      <h1 className={intro}>Welcome to the GatsbyJS + Shopify Demo Store.</h1>
    
        <>
          <p className={callOut}>
            It's a proof-of-concept in a box, with 10k products and 30k variants
            to help you get to proof-of-concept as soon as right now.
          </p>
          <p className={callToAction}>
            Hook it up to your own Shopify store data and start customizing in
            minutes by deploying it to Gatsby Cloud for free. Grab your Shopify
            store credentials and
            <a href="https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-shopify&utm_campaign=shopify-starter">
              <img
                src="https://www.gatsbyjs.com/deploynow.png"
                alt="Deploy to Gatsby Cloud"
                className={deployButton}
              />
            </a>
          </p>
        </>
      
    </div>
  )
}


const moreLinks = [
  { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  {
    text: "Documentation",
    url: "https://gatsbyjs.com/docs/",
  },
  {
    text: "Starters",
    url: "https://gatsbyjs.com/starters/",
  },
  {
    text: "Showcase",
    url: "https://gatsbyjs.com/showcase/",
  },
  {
    text: "Contributing",
    url: "https://www.gatsbyjs.com/contributing/",
  },
  { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = ({ data }) => (
  <>
  <LayoutShop>
  <Layout>
  
    <SliderTop/>
      <LayoutShop>
     <HeroShop />
     <ProductListing products={data?.shopifyCollection?.products} />
     </LayoutShop> 
    <IndexGsap/>

    
   

   
    

  
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}



</Layout>
</LayoutShop> 

   
     </>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage
