import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import { Seo } from "../components/seo"
import Grid2 from "@mui/material/Unstable_Grid2";
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
import MailChimpForm from "../components/MailChimpForm/MailChimpForm"


import { graphql } from "gatsby"



const SecondPage = ({data}) => (
  <Layout>
    <div className={styles.serviceStyle}>
     <Grid2 sx={{
    alignItems:'center',
   
    textAlign:'left',
    marginLeft:'auto',
    marginRight:'auto',

    padding:'200px 10px',
    
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
      <h1>Las 9 mejores webs de abogados y porqué lo son</h1>
      <br/>
      <p>Con el apoyo del estudio que nos ha dado como resultado una lista que muestra aún más 
        de los mejores sitios web de abogados y asesorías para 2020 tendrás a tu disposición
         una guía para orientar la web de tu bufete a conseguir más clientes.</p><br/>
      <p>Podrás ver ejemplos de sitios web de abogados de todo el país, que hacen un gran trabajo
         para posicionarse en su localidad gracias al diseño web orientado al usuario y al SEO local.
          Podrás aprender sobre las mejores características y prácticas de cada uno para descubrir 
          oportunidades para mejorar tu sitio web.</p><br/>
          <p>Los mejores webs de abogados tienen objetivos claros para dirigirse a sus clientes y 
            lo que hemos hecho es revisar más de 1.200 de webs para calificar los 9 mejores en 
            base principalmente a tres factores generales y otros más específicos que explica 
            el porqué del ranking.</p>
            <MailChimpForm/>
        </Grid2>
        </Grid2>

        </div>
     
  </Layout>
)

export const Head = () => <Seo title="Las 9 mejores webs de abogados y porqué lo son" />

export default SecondPage

