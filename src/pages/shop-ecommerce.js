import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import Seo from "../components/seo"
import Grid2 from "@mui/material/Unstable_Grid2";
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

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
        src="../images/ecommerce.png"
        loading="eager"
        width={450}
        quality={95}
        formats={["auto", "webp", "avif","svg"]}
        alt=""
        style={{ marginBottom: `var(--space-6)` }}
      />
      </Grid2>
      <Grid2 xs={12}  sm={5} md={7}>
      <h1>Descubre las <b>modernas</b> herramientas web</h1>
      <p>Cada proyecto es una nueva historia, sin embargo, algunas cosas permanecen igual. 
        Hemos elegido un conjunto de herramientas específico en los que encapsulamos los proyectos 
        para que diferentes presupuestos puedan disfrutar del mejor rendimiento posible.</p>
        </Grid2>
        </Grid2>

        </div>
     
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage

