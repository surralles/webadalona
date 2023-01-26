import * as React from 'react';
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';


import logo1 from "../../images/algolia.png";
import logo2 from "../../images/gatsbyjs.jpg";
import logo3 from "../../images/graphql.png";
import logo4 from "../../images/gsap.jpg";
import logo5 from "../../images/hubspot.png";
import logo6 from "../../images/analytics.jpg";
import logo7 from "../../images/mailchimp.png";
import logo8 from "../../images/react.jpg";
import logo9 from "../../images/shopify.png";
import logo10 from "../../images/woocommerce.jpg";
import logo11 from "../../images/wordpress.jpg";
import { ContentFeatures} from './IndexFeatures.styles';
import {theme } from './MaterialTheme'




import { StaticImage } from "gatsby-plugin-image";



const IndexFeatures = () =>{

    const Item =styled(Paper)(({ theme })=>({
        padding:theme.spacing (1),
        }));

        const ColorButton = styled(Button)(({ theme }) => ({
            color:'#ffffff',
            
            '&:hover': {
             
            },
          }));

    return(
         <>
    <ThemeProvider theme={theme}>
      
    <ContentFeatures>
     
   
    <Box >
    <Grid2 sx={{
    alignItems:'center'
   }}   container  spacing={2} >
        
         <Grid2 xs={12}  sm={5} md={8}>
         <Item elevation ={4}>
         <Card >
         <StaticImage
       src="../../images/example.png"
       
        loading="eager"
        width={120}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)` }}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                Ecommerce
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                Especializados en comercio electrónico. Adaptamos sistemas de Ecommerce a la vanguardia de la innovación
                para cada situación de nuestros clientes. Te explicamos las diferencias
                en el comercio electrónico. 
                 </Typography>
            </CardContent>
            <CardActions>
                <ColorButton variant="contained" startIcon={<InfoIcon />} size="small">Más sobre Ecommerce</ColorButton>
                
            </CardActions>
             </Card>
             </Item>
          </Grid2>
          
        <Grid2  xs={12}  sm={5} md={4}>
            <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/example.png"
                loading="eager"
                width={120}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-2)` }}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                Por qué Shopify
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                Shopify Plus es una plataforma de comercio electrónico de nivel empresarial
                ideal para empresas que buscan una solución escalable, flexible, confiable
                y segura con funciones avanzadas y soporte 24/7.
                 </Typography>
            </CardContent>
            <CardActions>
                <ColorButton variant="contained" startIcon={<InfoIcon />} size="small">Más sobre Shopify</ColorButton>
                
            </CardActions>
             </Card>
             </Item>
        </Grid2>
                <Grid2  xs={12}  sm={5} md={5}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/example.png"
                loading="eager"
                width={120}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-2)` }}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                Qué es el desarrollo 'Headless'
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                 El desarrollo 'Headless' significa desacoplar el backend (la parte administrativa del sitio web) 
                 con el frontend y es parte de la metodología Jamstack de desarrollo de aplicaciones web. Eso significa que el backend se usa para fines de conexiones API con distintas aplicaciones
                   y la representación frontal del sitio se ejecutan en frameworks (marcos de desarrollo) 
                  modernos como React.
                 </Typography>
            </CardContent>
            <CardActions>
                <ColorButton variant="contained" startIcon={<InfoIcon />} size="small">Más sobre ventajas del desarrollo Headless</ColorButton>
                
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                <Grid2  xs={12}  sm={5} md={7}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/example.png"
                loading="eager"
                width={120}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-2)` }}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                 Por qué usar Jamstack para su sitio de comercio electrónico
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                 El primer paso para comenzar a llegar a nuevos clientes o ganar visibilidad para
                  su marca comienza con su sitio web. Los sitios con metodología Jamstack son rápidos, pero 
                  ese no es el único beneficio para su marca y negocio que disfrutará si decide implementar esta forma 
                  de desarrollo.
                 </Typography>
            </CardContent>
            <CardActions>
                <ColorButton variant="contained" startIcon={<InfoIcon />} size="small">Más sobre la metodología Jamstack</ColorButton>
                
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                <Grid2  xs={12}  sm={5} md={6}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/example.png"
                loading="eager"
                width={120}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-2)` }}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                 Características clave de WooCommerce
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                 WooCommerce es una plataforma de comercio electrónico de código abierto asociada a sitios web 
                 diseñados con Wordpress. La principal ventaja de adoptar los servicios de desarrollo de WooCommerce es que 
                 es una plataforma completamente personalizable para emprendedores y pequeños empresarios. 
                 La principal ventaja del desarrollo en WooCommerce es que es liviano y fácil de alojar
                 en hostings compartidos y VPS.
                 </Typography>
            </CardContent>
            <CardActions>
                <ColorButton variant="contained" startIcon={<InfoIcon />} size="small">Más sobre el desarrollo con Woocommerce</ColorButton>
                
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                <Grid2  xs={12}  sm={5} md={6}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/example.png"
                loading="eager"
                width={120}
                quality={95}
                formats={["auto", "webp", "avif"]}
                alt=""
                style={{ marginBottom: `var(--space-2)` }}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                 Diseño web y Experiencia de Usuario 
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                 Encontramos soluciones creativas para cada proyecto, desde desarrollar una solución única que 
                 se adapte a la historia de su marca, hasta resolver desafíos técnicos de la 
                 experiencia del usuario acompañado de elementos visuales web elegantes que se sumen a su branding.
                 </Typography>
            </CardContent>
            <CardActions>
                <ColorButton variant="contained" startIcon={<InfoIcon />} size="small">Más sobre el Diseño Web</ColorButton>
                
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                 
            </Grid2>
            </Box> 
            </ContentFeatures>
            </ThemeProvider>
            </>


        );
    

}

export default IndexFeatures;