
import React from "react"

import { StoreProvider } from "./store-context"

const CombinedProvider = ({ element }) => {
  return (
    <StoreProvider>{element}</StoreProvider>
  )
}

export default CombinedProvider