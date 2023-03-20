import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { StyledImg,WrapperSlider,SlideWrapper,StyledSlider} from "./SliderTop.styles"
import {getImage } from 'gatsby-plugin-image';
import { SlideQuery } from "./Slide";


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
    
      const {wpPage:{ACF_HomePage:data}
    }= SlideQuery();
    
      return (
      
        <div>
          
          < StyledSlider >
          
          <Slider {...settings}>

                  
         < WrapperSlider >
       
          <StyledImg image ={getImage(data.slidertop1Image.localFile)} alt="Web realizada por Webadalona"/>
         
          <SlideWrapper>
          <h1><a href="https://cottonandbuttons.com/">{data.slidertop1Title}</a> </h1>  
          </SlideWrapper>
          </WrapperSlider>

          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop2Image.localFile)} alt="Web realizada por Webadalona" />
          <SlideWrapper>
            <h1><a href="https://b2b-asesores.com/">{data.slidertop2Title}</a></h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop3Image.localFile)} alt="Web realizada por Webadalona" />
          <SlideWrapper>
            <h1><a href="https://www.coptest.es/">{data.slidertop3Title}</a></h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop4Image.localFile)} alt="Web realizada por Webadalona" />
          <SlideWrapper>
            <h1><a href="https://clinicadentalmarmol.com/">{data.slidertop4Title}</a></h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop5Image.localFile)} alt="Web realizada por Webadalona" />
          <SlideWrapper>
            <h1><a href="https://www.abrildissenys.com/">{data.slidertop5Title}</a></h1>
          </SlideWrapper>
          </WrapperSlider>
         
          < WrapperSlider>
          <StyledImg image ={getImage(data.slidertop6Image.localFile)} alt="Web realizada por Webadalona" />
          <SlideWrapper>
            <h1><a href="https://starblau.com/">{data.slidertop6Title}</a></h1>
          </SlideWrapper>
          </WrapperSlider>

          </Slider>
          </StyledSlider>

        </div>
        
      );
    
  }

  export default SliderTop

