import * as React from 'react';
import Grid2 from "@mui/material/Unstable_Grid2";
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
import { ContentLogos} from './IndexLogos.styles';

const IndexLogos = () =>{

    return(
         <>
     
        <ContentLogos>
        <Grid2 container spacing={2} columns={10}>
                <Grid2 xs={5} md={2}>
                    <img src={logo2} alt ="logo gatsby" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo8} alt ="logo react" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo3} alt ="logo graphql" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo4} alt ="logo gsap" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo9} alt ="logo shopify" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo10} alt ="logo woocommerce" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo11} alt ="logo wordpress" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo5} alt ="logo hubspot" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo6} alt ="logo analytics google" />
                </Grid2>
                <Grid2  xs={5} md={2}>
                <img src={logo7} alt ="logo mailchimp" />
                </Grid2>
            </Grid2>
            </ContentLogos>
            </>

        );
    
}

export default IndexLogos;