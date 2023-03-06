import * as React from "react"
import { StoreContext } from "../context/store-context"
import {  useContext } from "react";
import { addToCart as addToCartStyle } from "./add-to-cart.module.css"

export function AddToCart({ variantId, quantity, available, ...props }) {
  const { addVariantToCart, loading } = useContext(StoreContext)

  function add_to_cart(e) {
    e.preventDefault()
    addVariantToCart(variantId, quantity)
  }

  return (
    <button
      type="submit"
      className={addToCartStyle}
      onClick={(add_to_cart)}
      disabled={!available || loading}
      {...props}
    >
      {available ? "Add to Cart" : "Out of Stock"}
    </button>
  )
}