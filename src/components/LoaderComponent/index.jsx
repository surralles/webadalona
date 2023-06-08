import React from "react"

// Styled
import { LoaderComponentStyled } from "./styled"

//
import { Loader } from "../icons"

const LoaderComponent = ({
  size = 150,
  text = "Loading",
  color = "#000",
  isFullPage = false,
}) => {
  return (
    <LoaderComponentStyled isFullPage={isFullPage}>
      <div>
        <Loader size={size} color={color} />
      </div>
    </LoaderComponentStyled>
  )
}

export default LoaderComponent
