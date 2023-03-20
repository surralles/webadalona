import React from 'react';
import styled from 'styled-components'
import {graphql} from "gatsby"
import Layout from '../components/Layout/Layout'
import PageHero from '../components/PageHero/PageHero'
import * as styles from "../components/index.module.css"
import Seo from "../components/seo"
import Grid2 from "@mui/material/Unstable_Grid2";
import { useEffect, useRef} from "react";
import { gsap } from "gsap";


const Wrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

const PageContent = styled.article`
  margin-top: 20px;
`


const PageTemplate =({ data })=>{

  let text = useRef() ;
 
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
  },[])
      

  return(
  
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
      {data.wpPage.featuredImage ?(
        <PageHero
        img={
            data.wpPage.featuredImage.node.localFile.childImageSharp.gatsbyImageData

        }
        />
    ): null}
      </Grid2>
      <Grid2 xs={12}  sm={5} md={7}>
      <h1 ref={(el)=>{text=el}} dangerouslySetInnerHTML={{ __html: data.wpPage.ACF_Page.introductionPageTitle }} />
      <p  dangerouslySetInnerHTML={{__html: data.wpPage.ACF_Page.introductionPageField }} />
        </Grid2>
        </Grid2>

        </div>
    <Wrapper>
        <ContentWrapper >
        
        <PageContent>
   
   <h1 dangerouslySetInnerHTML={{ __html: data.wpPage.title}} />
          <div dangerouslySetInnerHTML={{ __html: data.wpPage.content}} />
   </PageContent>
   </ContentWrapper>
    </Wrapper>
    
        
    
</Layout>
  )
}

export default PageTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wpPage(id: { eq: $id }) {
      ACF_HomePage{
        slidertop1Title

      }
      ACF_Page {
      introductionPageField
      introductionPageTitle
    }
      id
      title
      content
      status
      featuredImage {
        node {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(width: 800, placeholder: TRACED_SVG)
            }
          }
        }
      }
      wpChildren {
        nodes {
          ... on WpPage {
            id
            uri
            title
            link
          }
        }
      }
      wpParent {
        node {
          ... on WpPage {
            id
            uri
            title
            wpChildren {
              nodes {
                ... on WpPage {
                  id
                  title
                  link
                  uri
                }
              }
            }
          }
        }
      }
    }
  }
`