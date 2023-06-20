import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"
import { SlideQuery } from "../SliderTop/Slide"
import SlideFrame from "../SliderTop/SlideFrame"
const Hero = () => {
  const {
    wpPage: { ACF_HomePage: data },
  } = SlideQuery()

  const imageData = getImage(data.slidertop3Image.localFile)
  const image2Data = getImage(data.slidertop1Image.localFile)

  return (
    <Wrapper>
      <StyledImg image={imageData} alt="Hero image" />

      <HeaderWrapper>
        <h1></h1>
      </HeaderWrapper>

      <StyledImg image={image2Data} alt="Hero image" />
    </Wrapper>
  )
}

export default Hero
