import * as React from "react"
import Grid2 from "@mui/material/Unstable_Grid2"
import { StaticImage } from "gatsby-plugin-image"
import { ContentLogos } from "./IndexLogos.styles"

const IndexLogos = () => {
  return (
    <>
      <ContentLogos>
        <Grid2 container spacing={2} columns={10}>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/gatsbyjs.jpg"
              loading="eager"
              alt="gatsby logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/react.jpg"
              loading="eager"
              alt="react logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/graphql.png"
              loading="eager"
              alt="graphql logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/gsap.jpg"
              loading="eager"
              alt="graphql logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/shopify.png"
              loading="eager"
              alt="shopify logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/woocommerce.jpg"
              loading="eager"
              alt="woocommerce logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/wordpress.jpg"
              loading="eager"
              alt="wordpress logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/hubspot.png"
              loading="eager"
              alt="hubspot logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/analytics.jpg"
              loading="eager"
              alt="analytics logo"
            />
          </Grid2>
          <Grid2 xs={5} md={2}>
            <StaticImage
              src="../../images/mailchimp.png"
              loading="eager"
              alt="mailchimp logo"
            />
          </Grid2>
        </Grid2>
      </ContentLogos>
    </>
  )
}

export default IndexLogos
