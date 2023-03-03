
import {useStaticQuery,graphql} from 'gatsby';

export const SlideQuery = () =>{

    const data = useStaticQuery(graphql`

    query  {
  wpPage(databaseId: {eq: 47}) {
   
    ACF_HomePage {
      slidertop1Image {
        localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
      }
      slidertop1Title
      slidertop2Image {
        localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
      }
      slidertop2Title
      slidertop3Image {
        localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
      }
      slidertop3Title
      slidertop4Image {
        localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
      }
      slidertop4Title
      slidertop5Image {
        localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
      }
      slidertop5Title
      slidertop6Image {
        localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
            }
          }
      }
      slidertop6Title
    }
  }
  }
  
  `)
  


  return data
}
