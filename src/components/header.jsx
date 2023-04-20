import * as React from "react"
import { Link } from "gatsby"
import { Toast } from "./toast"
import { CartButton } from "./cart-button"
import { StoreContext } from "../context/store-context"
import { Navigation } from "./navigation"
import SearchIcon from "../icons/search"
import {  useContext } from "react";
import {
  header,
  container,
  accountButton,
  searchButton,
  nav,
} from "./header.module.css"

import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { ThemeProvider } from '@mui/material/styles';
import {theme } from './Material/MaterialTheme'
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';

export function Header() {

  const ColorButton = styled(Button)(({ theme }) => ({
    color:'#de3e66',
    
    '&:hover': {
     
    },
  }));

  
  const { checkout, loading, didJustAddToCart } = useContext(StoreContext)

  const items = checkout ? checkout.lineItems : []

  const quantity = items.reduce((total, item) => {
    return total + item.quantity
  }, 0)
  
  return (
    <ThemeProvider theme={theme}>
    <div className={container}>
      <header className={header}>
        
        <Navigation className={nav} />
        <Link to="/account" className={accountButton}>
        <ColorButton variant="outlined" startIcon={<PermIdentityIcon />} size="small">Acceder</ColorButton>
        </Link>

        <Link to="/search" className={searchButton}>
          <SearchIcon />
        </Link>
        <CartButton quantity={quantity} />
        
       
        
      </header>
      <Toast show={loading || didJustAddToCart}>
        {!didJustAddToCart ? (
          "Updating…"
        ) : (
          <>
            Añadido al carrito{" "}
            <svg
              width="14"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.019 10.492l-2.322-3.17A.796.796 0 013.91 6.304L6.628 9.14a1.056 1.056 0 11-1.61 1.351z"
                fill="#fff"
              />
              <path
                d="M5.209 10.693a1.11 1.11 0 01-.105-1.6l5.394-5.88a.757.757 0 011.159.973l-4.855 6.332a1.11 1.11 0 01-1.593.175z"
                fill="#fff"
              />
              <path
                d="M5.331 7.806c.272.326.471.543.815.163.345-.38-.108.96-.108.96l-1.123-.363.416-.76z"
                fill="#fff"
              />
            </svg>
          </>
        )}
      </Toast>
     
    </div>
    </ThemeProvider>
  )
}