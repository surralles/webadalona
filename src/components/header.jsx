import * as React from "react"
import { Link } from "gatsby"


import { Navigation } from "./navigation"

import {
  header,
  container,
  logo as logoCss,
  searchButton,
  nav,
} from "./header.module.css"

export function Header() {
  

  

  

  return (
    <div className={container}>
      <header className={header}>
       
        <Navigation className={nav} />
       
        
      </header>
     
    </div>
  )
}