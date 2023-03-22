import React from "react";
import {FooterWrapper,Wrapper,FixedWrapper,LinksFooter,FirstColumn,StyledImg,Adress} from './Footer.styles';
import MailIcon from '@mui/icons-material/Mail';
import Button from "@mui/material/Button";
import { Link } from "gatsby"
import {whiteButton } from '../Material/MaterialTheme'
import { ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { getImage } from "gatsby-plugin-image"
import { useMapQuery } from "../../hooks/useMapQuery"


const Footer = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    textTransform:'lowercase',  
    '&:hover': {
    },
  }));
  
  
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
  
const data=useMapQuery();
console.log(data)

  const imageData = getImage(data.staticMap.childFile)
 
  return(
  <>
  <ThemeProvider theme={whiteButton}>
 
  <Wrapper>
  
    <FooterWrapper>
    
      <FirstColumn>
      <h1>Hablamos,</h1> 
      <p>Establecido en Badalona después de 15 años
       de experiencia dando servicio a profesionales, 
       pequeñas y medianas empresas. </p>
    
      <p>Cuéntame sobre tu proyecto o tus dudas<br/>y configuramos un plan viable.</p>
       <p><a href="mailto:jordi@webadalona.es">
        <ColorButton variant="outlined" startIcon={<MailIcon/>} size="small">jordi@webadalona.es</ColorButton>
        </a>
        </p> 
        <a href="https://www.instagram.com/webadalona/">
        <InstagramIcon 
        color="primary"
        sx={{marginRight:"20px"}} />
       </a>
        <a href="https://twitter.com/JordiSurralles">
        <TwitterIcon color="primary"
          sx={{marginRight:"20px"}} />
        </a>
        <a href="https://www.linkedin.com/in/jsurralles/">
        <LinkedInIcon color="primary"/>
        </a>
      </FirstColumn>
    
      <LinksFooter>
      <h3>Información</h3>
      
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> <br/> </>}
          </React.Fragment>
        ))}
      
      </LinksFooter>
      <Adress>
        <h3>Donde</h3>
        <p>BDN LAB<br/>
        General Weyler, 128<br/>
        08912 Badalona<br/>Barcelona</p>
      </Adress>
      <div>
      <a href="https://goo.gl/maps/FjeLdH2Z55aAiJiU6">
      <StyledImg image={imageData} alt="Localizacion en Badalona de Webadalona"/>
      </a>
      </div>
      
    </FooterWrapper>
    
    </Wrapper>
    </ThemeProvider>
    </>
  )  
}

export default Footer;


