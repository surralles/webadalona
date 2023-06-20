import { useStaticQuery, graphql } from "gatsby"

export const SlideQuery = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage(databaseId: { eq: 47 }) {
        ACF_HomePage {
          slidertop1Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
              }
            }
          }
          slidertop1Title
          slidertop2Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
              }
            }
          }
          slidertop2Title
          slidertop3Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
              }
            }
          }
          slidertop3Title
          slidertop4Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
              }
            }
          }
          slidertop4Title
          slidertop5Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
              }
            }
          }
          slidertop5Title
          slidertop6Image {
            localFile {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
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
