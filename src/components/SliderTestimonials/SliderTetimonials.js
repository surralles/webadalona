import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Link } from 'gatsby-plugin-react-i18next';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import { StaticImage } from "gatsby-plugin-image";
import { ThemeProvider } from '@mui/material/styles';
import {theme } from '../Material/MaterialTheme'

import Typography from '@mui/material/Typography';
import { ContentFeatures} from '../Material/IndexFeatures.styles';

const SliderTestimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed:10000,
        autoplaySpeed: 10000,
        cssEase: "linear",
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true
             
            }
          },
          
        ]
      };

return(
    <ThemeProvider theme={theme}>
    <ContentFeatures>
    <Link to="https://goo.gl/maps/Wt6SKuBpTQuk78zU8">
    <Slider {...settings}>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_1.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)` , float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Sergio Medialdea
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                Después de haber probado con varias empresas en Badalona para potenciar mi web y con ello darme a conocer para captar clientes, puedo decir que tuve la suerte de dar con Diseño Web.
                Me asesoraron de la mejor manera posible actualizando y dándole a mi página web ese toque que le faltaba para captar la atención de la gente, y gracias a la campaña de Google ADS que me están llevando a cabo ya tengo un nombre entre las empresas del sector de mi ciudad.
                Los recomiendo al 100%, por su profesionalidad, constancia y capacidad de trabajo, muchas gracias.
                 </Typography>
            </CardContent>
    </Card>
    </div>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_2.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)`, float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Abril Dissenys
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                 Gracias Jordi Surrallés. Después de años bregando con informáticos en mi vida a habido de todo. 
                 Conocer a Jordi y dejar mi web en sus manos y siguiendo sus recomendaciones en todos los campos bien sea.
                  Seo, diseño, y estrategias de venta, por fin estoy conociendo lo que es un colaborador ya que siempre va por delante de mí. El precio por la calidad es excelente.  Muy agradecida
                 </Typography>
            </CardContent>
    </Card>
    </div>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_3.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)`, float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Albert López
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                 Hola, me llamo Albert y soy un pequeño emprendedor. 
                 Decidí contratar a Jordi para que me diseñara la web y a día de hoy estoy muy contento por el trabajo. 
                 Buscaba un profesional, comprometido y sobre todo que entendiera el concepto de mi proyecto y el resultado 
                 ha sido muy satisfactorio.
                 </Typography>
            </CardContent>
    </Card>
    </div>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_4.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)`, float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Carlos Prim
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                 Buen trabajo de WEBadalona en nuestra empresa B2B ASESORES LEGALES. 
                 Seguimos confiando con Jordi Surrallés y su equipo.
                 </Typography>
            </CardContent>
    </Card>
    </div>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_5.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)`, float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Albert Corominas
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                 Hice un encargo de poco volumen, pero con algunas peculiaridades que requerían conocimientos de matemáticas para 
                 ser adecuadamente interpretadas. El resultado fue correcto, con un plazo de entrega más breve de lo 
                 que me esperaba y con una relación calidad/precio realmente excelente.
                 </Typography>
            </CardContent>
    </Card>
    </div>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_6.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)`, float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Oriol Solé Granier
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                 Como jefe de proyecto de la UOC trabajé en él y no tengo más que buenas palabras: 
                 profesionalidad, buen trato, buenos resultados. Un placer trabajar en ella.

                 </Typography>
            </CardContent>
    </Card>
    </div>

    <div>
    <Card variant="outlined"
    sx={{marginRight:'60px'}}>
         <StaticImage
       src="../../images/testimonio_7.jpg"
       
        loading="eager"
        width={86}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-2)`, float:`left`}}
      />
            <CardContent >
                 <Typography gutterBottom fontWeight={500} align="left" variant="subtitle2" component="div">
                Xavier Abat
                </Typography>
                <Rating name="read-only" defaultValue={5} readOnly />
                 <Typography align="left" variant="body2" color="text.secondary">
                 B2B ASESORES LEGALES

                 </Typography>
            </CardContent>
    </Card>
    </div>



    </Slider>
    </Link>
    </ContentFeatures>
    </ThemeProvider>
)
}

export default SliderTestimonials;