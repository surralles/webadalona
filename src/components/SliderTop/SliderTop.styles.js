import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"


export const StyledSlider = styled.div`
  .slick-dots {
    
   left:90%;
   bottom:50%;
   max-width:fit-content;
   overflow:hidden;
   
  }
  .slick-dots li{
    display:block ;
    width:40px;
    height:40px;

  }

  .slick-dots li button:before{
    color:white;
    font-size: 26px;
    line-height: 20px;
    box-shadow:  5px 5px 10px #878787;
         

  }
  .slick-dots li.slick-active button:before{
    color:white
 
  }

`;

export const WrapperSlider = styled.div`
  position: relative;
`

export const StyledImg = styled(GatsbyImage)`
min-height: 900px;
margin-bottom: 30px;
`;

export const SlideWrapper = styled.div`
  position: absolute;
  top: 25%;
  left: 10%;
  display: flex;
  align-items: top;
  justify-content: flex-start;
  align-content:flex-start;
  height: 100%;
  width: 100%;
  padding:10px;

  h1 {
    color: #fff;
    text-transform: none;
    text-align: left;
    line-height:1.5em;
    max-width:650px;
    font-size:1.5rem;


    @media screen and (min-width: 768px) {
      font-size: 2.7rem;
      font-weight:700;
    }
  }
`

export const SliderText = styled.div`

  h2 {
    font-size: 3rem;
    font-weight: 600;
    color: #000;
    text-transform: none;
    text-align: center;

  }
`


