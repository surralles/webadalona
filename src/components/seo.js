import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"


export function Seo({
  titulo = "",
  descripcion = "",
 
  pathname="",
  children = null,
}) {
  const location = useLocation()
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
         title
         siteUrl
         description
         
         
        }
      }
    }
  `)

  const {
    title,
    siteUrl,
    description,
 
  } = siteMetadata

  const seo = {
    title: titulo  ,
    metaDescription: descripcion || description ,
    url: pathname ? `${siteUrl}${pathname}` : location.href,
    
    
  }

  const metaDescription = descripcion || description
  const defaultTitle = title || titulo




  return (
    <>
        <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
      <meta name="description" content={seo.metaDescription} />
    
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.metaDescription} />
     
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      
      <meta name="twitter:description" content={seo.description} />
      
      
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      
      {children}
    </>
  )
}