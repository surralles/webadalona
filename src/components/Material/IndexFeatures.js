import * as React from 'react';
import {Link } from 'gatsby-plugin-react-i18next';
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2";
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';

import { ContentFeatures} from './IndexFeatures.styles';
import {theme } from './MaterialTheme'

import { StaticImage } from "gatsby-plugin-image";

const IndexFeatures = () =>{

    const Item =styled(Paper)(({ theme })=>({
        padding:theme.spacing (1),
        }));

        const ColorButton = styled(Button)(({ theme }) => ({
            color:'#de3e66',
            
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
            src="../../images/ecommerce.png"
             loading="eager"
            width={280}
             formats={["auto", "webp", "avif"]}
             alt="Agencia ecommerce"
             style={{ marginBottom: `var(--space-2)` }}
              />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                Qué Ecommerce elegir
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                Especializados en comercio electrónico. Adaptamos sistemas de Ecommerce a la vanguardia de la innovación
                para cada situación de nuestros clientes. Te explicamos las diferencias
                en el comercio electrónico. 
                 </Typography>
            </CardContent>
            <CardActions>
            <Link to="/diferencias-ecommerce">
                <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más sobre Ecommerce</ColorButton>
            </Link>
            </CardActions>
             </Card>
             </Item>
          </Grid2>
          
        <Grid2  xs={12}  sm={5} md={4}>
            <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/shopify_why.png"
                loading="eager"
                width={120}
                formats={["auto", "webp", "avif"]}
                alt="Ventajas Shopify"
                style={{ marginBottom: `var(--space-2)` }}
                 />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="h5" component="div">
                Por qué Shopify
                </Typography>
                 <Typography align="left" variant="body2" color="text.secondary">
                Shopify es una plataforma de comercio electrónico de nivel empresarial
                ideal para empresas que buscan una solución escalable, flexible, confiable
                y segura con funciones avanzadas y soporte 24/7.
                 </Typography>
            </CardContent>
            <CardActions>
            <Link to="/sobre-shopify">
                <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más sobre Shopify</ColorButton>
            </Link> 
            </CardActions>
             </Card>
             </Item>
        </Grid2>
                <Grid2  xs={12}  sm={5} md={5}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/headless.png"
                loading="eager"
                width={180}
                formats={["auto", "webp", "avif"]}
                alt="Desarrollo Headless"
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
            <Link to="/desarrollo-headless">
                <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más sobre ventajas del desarrollo Headless</ColorButton>
            </Link>
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                <Grid2  xs={12}  sm={5} md={7}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/jamstack.png"
                loading="eager"
                width={220}
                formats={["auto", "webp", "avif"]}
                alt="Desarrollo Jamstack"
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
            <Link to="/universo-jamstack-comercio-online">
                <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más sobre la metodología Jamstack</ColorButton>
              </Link>  
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                <Grid2  xs={12}  sm={5} md={6}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/woocommerce.png"
                loading="eager"
                width={180}
                formats={["auto", "webp", "avif"]}
                alt="características woocommerce"
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
            <Link to="/caratcteristicas-clave-woocommerce-emprendedores">
                <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más sobre el desarrollo con Woocommerce</ColorButton>
              </Link>  
            </CardActions>
             </Card>
             </Item>
                </Grid2>
                <Grid2  xs={12}  sm={5} md={6}>
                <Item elevation ={4}>
            <Card >
             <StaticImage
                src="../../images/design.png"
                loading="eager"
                width={180}
                formats={["auto", "webp", "avif"]}
                alt="Agencia diseño web"
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
            <Link to="/diseno-web">
                <ColorButton variant="outlined" startIcon={<InfoIcon />} size="small">Más sobre el Diseño Web</ColorButton>
               </Link> 
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