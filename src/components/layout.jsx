import * as React from "react"
import { SkipNavContent, SkipNavLink } from "./skip-nav"
import { Header } from "./header"

export function LayoutShop({ children }) {
  return (
    
<div>
   <SkipNavLink />
   <Header />
   
      <SkipNavContent>{children}</SkipNavContent>
      </div> 
  )
}