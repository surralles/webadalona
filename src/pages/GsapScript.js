import * as React from "react"
import { gsap } from "gsap";
import { useEffect, useRef,useLayoutEffect } from "react";

import IndexLogos from '../components/Material/IndexLogos'
import IndexFeatures from '../components/Material/IndexFeatures'
import Grid2 from "@mui/material/Unstable_Grid2";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"
import LocomotiveScroll from 'locomotive-scroll';
import { ScrollTrigger } from "gsap/ScrollTrigger.js";
import SliderTestimonials from "../components/SliderTestimonials/SliderTetimonials";
import AccordionFaqs from "../components/AccordionFaqs/AccordionFaqs";


const samplePageLinks = [
  {
    text: "Diferencias Ecommerce",
    url: "/diferencias-ecommerce",
    badge: false,
    description:
      "Diferencias de tecnología Ecommerce",
  },
  {
    text: "Sobre Shopify",
    url: "/sobre-shopify",
    badge: false,
    description:
      "Ventajas y desventajas de Shopify",
  },
  {
    text: "Desarrollo Headless",
    url: "/desarrollo-headless",
    badge: false,
    description:
      "Ecommerce con desarrollo componible sin cabeza",
  },
  {
    text: "Universo Jamstack",
    url: "/universo-jamstack-comercio-online",
    badge: false,
    description:
      "Qué es Jamastack o arquitectura componible web",
  },
  {
    text: "Emprender con WooCommerce",
    url: "/caratcteristicas-clave-woocommerce-emprendedores",
    badge: false,
    description:
      "Woocommerce para emprendedores",
  },
  {
    text: "Diseño customizado",
    url: "/diseno-web",
    badge: false,
    description:
      "Personalización del diseño web y el branding de la marca",
  },
]
  
  gsap.registerPlugin(ScrollTrigger);

  const IndexGsap=()=>{

    let text = useRef() ;
    let text_0 = useRef() ;
    let text_1 = useRef() ;
    
 
    useEffect(()=>{  

    gsap.from(text,{
        scrollTrigger: {
            trigger: text,
            toggleActions: "play play restart play"
        },
        duration: 2,
        opacity: 0,
        scale: 1.1,
        ease: "expo"
    })

    gsap.from(text_0,{
      scrollTrigger: {
          trigger: text_0,
          toggleActions: "play play restart play"
      },
      duration: 2,
      opacity: 0,
      scale: 1.1,
      ease: "expo"
  })
      

    gsap.from(text_1,{
      scrollTrigger: {
          trigger: text_1,
          toggleActions: "play play restart play"
      },
      duration: 2,
      opacity: 0,
      scale: 1.1,
      ease: "expo"
  })
    

        
      },[])
      

    return(
        
   
    <div className={styles.textCenter}>

      
       <div className={styles.firstDiv}>
      <h1>
        Desarrollo JAMSTACK y diseño web para el ECOMMERCE  
      </h1>
      <h2 ref={(el)=>{text=el}}>Los clientes y motores de búsqueda quieren <b>sitios web rápidos</b></h2>
      <p >En Webadalona te ofrecemos una ventaja sobre tus competidores con la última tecnología 'Headless' construyendo tiendas online modernas veloces y SEO friendly. 
      Desde Badalona construímos tu sitio web, captando tu historia y mejorando la imagen de marca, facilitando las conversiones con herramientas de marketing. Trabajamos con:
      </p>
      </div>

      <IndexLogos />

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
        src="../images/central_p3.png"
        loading="eager"
        width={450}
        quality={95}
        formats={["auto", "webp", "avif","svg"]}
        alt=""
        style={{ marginBottom: `var(--space-6)` }}
      />
      </Grid2>
      <Grid2 xs={12}  sm={5} md={7}>

      <div className={styles.firstDiv}>
      <h1>
        Servicios a medida
      </h1>
      <h2 ref={(le)=>{text_0=le}}>Descubre las <b>modernas</b> herramientas web</h2>
      <p>Cada proyecto es una nueva historia, sin embargo, algunas cosas permanecen igual. 
        Hemos elegido un conjunto de herramientas específico en los que encapsulamos los proyectos 
        para que diferentes presupuestos puedan disfrutar del mejor rendimiento posible.</p>
        </div>
        </Grid2>
        </Grid2>
        

    
       <IndexFeatures/>
       <SliderTestimonials/>
       <div className={styles.firstDiv}>
      <h1>
        FAQS
      </h1>
      <h2 ref={(lo)=>{text_1=lo}}>12 preguntas que posiblemente tendrás sobre nuestro trabajo de <b>desarrollo y diseño web.</b></h2>
      <p >Si está buscando contratar a un desarrolador web para que te asesore y construya tu ecommerce hemos elaborado una lista básica de 12 preguntas antes de contactar con nosotros y darte la confianza que estás en el sitio adecuado.<br/>
          Con estas preguntas manifestamos total transparencia para que el  trabajo de crear tu sitio de comercio electrónico sea un proyecto de equipo donde tú disfrutes también del proceso.<br/>
          
      </p>
      </div>

        <AccordionFaqs />
       
      <p className={styles.intro}>
        {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> <br/> </>}
          </React.Fragment>
        ))}

      </p>

  
  </div>
   
    )
}

export default IndexGsap;