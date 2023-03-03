import { useStaticQuery,graphql } from "gatsby";

export const useMapQuery =() =>{

    const data = useStaticQuery(graphql`
    query  {
        staticMap {
        childFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED)
            }
        }
    }
      }
      
    
    `)
    
    return data
}


