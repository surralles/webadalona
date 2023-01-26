import React, {useState} from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderText,StyledImg,WrapperSlider,SlideWrapper,StyledSlider} from "./SliderTop.styles"
import {getImage, GatsbyImage } from 'gatsby-plugin-image';
import { SlideQuery } from "./Slide";
import image1 from "../../images/example.png";
import styled from "@emotion/styled"
import { css } from "@emotion/react"



 const SliderTop =()=> {

      const settings = {
        dots: true,
        infinite: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        
        autoplaySpeed: 4000,
        cssEase: "linear"
      };

      const {wpPage:{ACF_HomePage:data},
    }= SlideQuery();
    
   
  
      

      return (
      
        <div>
          
          < StyledSlider >
          
          <Slider {...settings}>

                  
         < WrapperSlider >
       
          <StyledImg image ={getImage(data.slidertop1Image.localFile)} alt="Hero image"/>
         
          <SlideWrapper>
            <h1>{data.slidertop1Title}</h1>
          </SlideWrapper>
          </WrapperSlider>

          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop2Image.localFile)} alt="Hero image" />
          <SlideWrapper>
            <h1>{data.slidertop2Title}</h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop3Image.localFile)} alt="Hero image" />
          <SlideWrapper>
            <h1>{data.slidertop3Title}</h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop4Image.localFile)} alt="Hero image" />
          <SlideWrapper>
            <h1>{data.slidertop4Title}</h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop5Image.localFile)} alt="Hero image" />
          <SlideWrapper>
            <h1>{data.slidertop5Title}</h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop6Image.localFile)} alt="Hero image" />
          <SlideWrapper>
            <h1>{data.slidertop6Title}</h1>
          </SlideWrapper>
          </WrapperSlider>
         
    

         
          </Slider>
          </StyledSlider>

          
          
         
          <div clasName="square-wrapper">
          <div className="square">
          <img 
      
            src={image1}
            css={css`
            margin-top:0px;
       
          animation :ima 2s infinite;
          @keyframes ima {
            0%{
          opacity:.6;
            }
            100%{
              opacity:1;
            }
          }
          }
        
          `}/>
          
          </div>
         </div>
          
        </div>
        
      );
    
  }




  export default SliderTop

