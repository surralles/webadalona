import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Hero from '../components/Hero/Hero'
import SliderTop from '../components/SliderTop/SliderTop';

import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Layout from '../components/Layout/Layout'
import IndexLogos from '../components/Material/IndexLogos'
import IndexFeatures from '../components/Material/IndexFeatures'
import Grid2 from "@mui/material/Unstable_Grid2";




const samplePageLinks = [
  {
    text: "Page 2",
    url: "page-2",
    badge: false,
    description:
      "A simple example of linking to another page within a Gatsby site",
  },
]

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

const IndexPage = () => (
  <Layout>
    <SliderTop/>
  
   
  
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={94}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-6)` }}
      />
       <div className={styles.firstDiv}>
      <h1>
        Desarrollo JAMSTACK y diseño web para el ECOMMERCE  
      </h1>
      <h2>Los clientes y motores de búsqueda quieren <b>sitios web rápidos</b></h2>
      <p>En Webadalona te ofrecemos una ventaja sobre tus competidores con la última tecnología 'Headless' construyendo tiendas online modernas veloces y SEO friendly. 
      Desde Badalona construímos tu sitio web, captando tu historia y mejorando la imagen de marca, facilitando las conversiones con herramientas de marketing. Trabajamos con:
      </p>
      </div>

      <IndexLogos/>

      <Grid2 sx={{
    alignItems:'center',
    maxWidth:'1200px',
    textAlign:'left',
    marginLeft:'auto',
    marginRight:'auto',
    padding:'10px'
   
    
   }}   container  spacing={0} >

      <Grid2 justifyContent="center" xs={12}  sm={5} md={5}>
      <StaticImage
        src="../images/central_2.jpg"
        loading="eager"
        width={450}
        quality={95}
        formats={["auto", "webp", "avif","svg"]}
        alt=""
        style={{ marginBottom: `var(--space-6)` }}
      />
      </Grid2>
      <Grid2 xs={12}  sm={5} md={7}>
      <h2>Descubre las modernas herramientas web</h2>
      <p>Cada proyecto es una nueva historia, sin embargo, algunas cosas permanecen igual. 
        Hemos elegido un conjunto de herramientas específico y encapsular los proyectos 
        para que diferentes presupuestos puedan disfrutar del mejor rendimiento posible.</p>
        </Grid2>
        </Grid2>

      


      <IndexFeatures/>



     

      <p className={styles.intro}>
        {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}

      </p>
    </div>
   
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  
  
  
</Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
