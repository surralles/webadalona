import * as React from "react"

import Hero from '../components/Hero/Hero'
import SliderTop from '../components/SliderTop/SliderTop';

import { Seo } from "../components/seo"
import * as styles from "../components/index.module.css"
import Layout from '../components/Layout/Layout'
import IndexGsap from './GsapScript'
import { StaticImage } from "gatsby-plugin-image"
import { Link, graphql } from "gatsby"
import { LayoutShop } from "../components/layout"
import { ProductListing } from "../components/product-listing"

import { ThemeProvider } from '@mui/material/styles';
import Grid2 from "@mui/material/Unstable_Grid2";
import InfoIcon from '@mui/icons-material/Info';
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import {theme } from '../components/Material/MaterialTheme'

import ProductAnimation from "../components/ProductAnimation/ProductAnimation";
import { css } from "@emotion/react"
import App from "../components/ScrollStarter/App";
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"

export const wquery = graphql`
  query  {
    
    shopifyCollection(handle: { eq: "frontpage-1" }) {
      products {
        ...ProductCard
      }
    }
  }
`;





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

const IndexPage = ({ data }) => {

 

    const ColorButton = styled(Button)(({ theme }) => ({
        color:'#de3e66',
        
        '&:hover': {
         
        },
      }));
     
      return(
  <>
   <ThemeProvider theme={theme}>
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





<Grid2 sx={{
    alignItems:'center',
    maxWidth:'1200px',
    textAlign:'left',
    marginLeft:'auto',
    marginRight:'auto',
    padding:'10px',
    
   }}   container  spacing={0} >

      <Grid2 justifyContent="center" xs={12}  sm={5} md={5}>
      <StaticImage
        src="../images/portadaebook.jpg"
        loading="eager"
        width={450}
        quality={95}
        formats={["auto", "webp", "avif","svg"]}
        alt=""
        style={{ marginBottom: `var(--space-6)` }}
      />
      </Grid2>
<Grid2 xs={12}  sm={5} md={7}>

<div className={styles.secondDiv}>
<h1>
Ejemplo de guía y marketing implementado 
</h1>
<h2>Descarga un estudio propio sobre buenas práticas</h2>
<p>Hicimos un estudio en este caso sobre más de 1200 bufetes de abogados pero 
  que puedes extrapolarlo a tu propio sector de negocio. Son claves 
  para no caer en errores sencillos de evitar en tu activo
  digital más importante en cuanto imagen de marca y reputación.
</p>
<p>También aprovecho así para darte un ejemplo de implementación de marketing digital en una web
  desacoplada como Webadalona donde conectamos servicios externos como en esta caso Mailchimp.
</p>
  </div>
 
  <Link to="/las-9-mejores-webs-de-abogados-y-porque">
   <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más info y descarga</ColorButton>
  </Link> 
  
  </Grid2>
  </Grid2>
  <App/>
</Layout>

</ThemeProvider>

   
     </>
)
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="" />

export default IndexPage

