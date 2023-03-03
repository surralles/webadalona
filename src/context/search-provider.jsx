import * as React from "react"
import { createClient, Provider as UrlqProvider } from "urql"

export const urqlClient = createClient({
  url: `https://${'webadalona-ecommerce.myshopify.com'}/api/2021-01/graphql.json`,
  fetchOptions: {
    headers: {
      "X-Shopify-Storefront-Access-Token":
      '9817ccaacab74cd2aac18ed27a10591f',
    },
  },
})

export function SearchProvider({ children }) {
  return <UrlqProvider value={urqlClient}>{children}</UrlqProvider>
}