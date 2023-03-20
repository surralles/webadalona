import * as React from "react"
import { graphql } from "gatsby"
import { LayoutShop } from "../../components/layout"
import { ProductListing } from "../../components/product-listing"
import { Seo } from "../../components/seo"
import { MoreButton } from "../../components/more-button"
import { title } from "./index.module.css"
import Layout from "../../components/Layout/Layout"


export default function Products({ data: { products } }) {
  return (
    <Layout>
    <LayoutShop>
      <h1 className={title}>Todos los productos</h1>
      
      <ProductListing products={products.nodes} />
      {products.pageInfo.hasNextPage && (
        <MoreButton to={`/search#more`}>Más productos</MoreButton>
      )}
    </LayoutShop>
    </Layout>
  )
}

export const Head = () => <Seo title="Todos los productos de Webadalona" />

export const query = graphql`
  {
    products: allShopifyProduct(sort: { publishedAt: ASC }, limit: 24) {
      nodes {
        ...ProductCard
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`