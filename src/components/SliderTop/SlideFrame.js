import React from "react"
import { SlideQuery } from "./Slide"
import { getImage } from "gatsby-plugin-image"

import { StyledImg, Wrapper } from "./SliderTop.styles"

const SlideFrame = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = SlideQuery()

  const image3Data = getImage(data.slidertop3Image.localFile)

  return (
    <Wrapper>
      <StyledImg image={image3Data} alt="Hero image" />
    </Wrapper>
  )
}

export default SlideFrame
