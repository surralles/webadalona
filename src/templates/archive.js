import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import ArchiveSidebar from "../components/ArchiveSidebar/ArchiveSidebar"
import PaginationBlog from "../components/Pagination/Pagination"


import Layout from "../components/Layout/Layout"
import { Wrapper,
    ContentWrapper,
    PageContent,
    StyledH2,
    StyledDate,
    StyledReadMore, } from "./archive.styles"


  const archiveTemplate = ({
    data :{ allWpPost},
    pageContext:{catId,catName,catUri, categories, numPages, currentPage}

}) => (
   
   
    <Layout>
        
    <Wrapper>

    <ContentWrapper>
 
       <ArchiveSidebar catId={catId} categories={categories.edges} />
       <PageContent>
       <StaticImage
      src="../images/blog-webalona-ecommerce.png"
      placeholder="TRACED_SVG"
      width={600}
    
      alt="Blog sobre Ecommerce, marketing, desarrollo y diseño web de Webadalona"
    />

    <PaginationBlog
            catUri={catUri}
            page={currentPage}
            totalPages={numPages}
          />

       <h1 dangerouslySetInnerHTML={{ __html: catName }} />
          {allWpPost.edges.map(post => (
            <article key={post.node.id} className="entry-content">
              <Link to={`/blog${post.node.uri}`}>
                <StyledH2
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                />
              </Link>
              <StyledDate
                dangerouslySetInnerHTML={{ __html: post.node.date }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
              <StyledReadMore to={`/blog${post.node.uri}`}>
                Leer
              </StyledReadMore>
              <div className="dot-divider" />
            </article>
          ))}
          
          <PaginationBlog
            catUri={catUri}
            page={currentPage}
            totalPages={numPages}
          />
        
       </PageContent>
    </ContentWrapper>
    </Wrapper>
        {console.log(allWpPost)}
        Archive
        </Layout>
    

    )
export default archiveTemplate;

export const pageQuery = graphql`
  query($catId: String!, $skip: Int!, $limit: Int!) {
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $catId } } } } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          title
          excerpt
          uri
          slug
          date(formatString: "DD MM YYYY")
        }
      }
    }
  }
`
