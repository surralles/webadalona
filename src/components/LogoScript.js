import React from 'react';
import {useEffect} from "react";
import Logo from '../images/designingecommerce_600-3.gif';
import { Link } from 'gatsby';
import { css } from "@emotion/react"


const LogoScript = () =>{

   
    useEffect(()=>{
       
   window.onscroll = function() {
        growShrinkLogo()
         };

        var Logo = document.getElementById("Logo");
        var endOfDocumentTop = 150;
        var size = 0;

         function growShrinkLogo() {
          var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

          if (size === 0 && scroll > endOfDocumentTop) {
            Logo.style.width = '60px';
            size = 1;
          } else if(size === 1 && scroll <= endOfDocumentTop){
            Logo.style.width = '80px';
            size = 0;
            }
         }
         
});


    return(
       

             <Link  to="/">
                 <img id="Logo" 
                    src ={Logo}
                     alt= "logo"
                     css={css`
                     width: 80px;
                     height:auto;
                     margin: 0;
                     padding: 120px 0 0 0;
        
          `} />
             </Link>
    )
}

export default LogoScript;