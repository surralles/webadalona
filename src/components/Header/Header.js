import React from 'react';

import Navigation from '../Navigation/Navigation'

import Logo from '../../images/designingecommerce_600.gif';
//import { useMenuQuery } from '../../hooks/useMenuQuery';
import {Wrapper, Content} from './Header.styles';
import './header.module.css';

import { graphql, useStaticQuery } from "gatsby";
import { Script } from "gatsby";
import { css } from "@emotion/react"
import LogoScript from '../LogoScript';


import styles from "./header.module.css"

const Header = () =>{

  //const {language:activeLanguage,languages, originalPath, t, i18n } = useI18next();
  //const availableLanguages = languages.filter((language) => language !== activeLanguage);
    //const {wpMenu} = useMenuQuery();
 
    
    const data = useStaticQuery(graphql`
    query {
        
         wpMenu(name: {eq: "mainMenu"}) {
          menuItems {
            nodes {
              label
              parentId
              url
              id
              childItems {
                nodes {
                  label
                  title
                  id
                  url
                }
              }
            }
          }
        }
      }
      `
    )

  
    

    return(
        <Wrapper>
       
            
            <Content>
            <LogoScript/>
           {/*
            <Link  to="/">
            <Script id="logoscrollsize" dangerouslySetInnerHTML={{__html:` window.onscroll = function() {
            growShrinkLogo()
             };
    
            var Logo = document.getElementById("Logo");
            var endOfDocumentTop = 150;
            var size = 0;
    
             function growShrinkLogo() {
              var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    
              if (size == 0 && scroll > endOfDocumentTop) {
                Logo.style.width = '60px';
                size = 1;
              } else if(size == 1 && scroll <= endOfDocumentTop){
                Logo.style.width = '120px';
                size = 0;
                }
             }`
             }}/>
           
                    <img id="Logo" 
                    src ={Logo}
                     alt= "logo"
                     css={css`
                     width: 120px;
                     margin: 0;
                     padding: 120px 0 0 0;
        
          `} />
                </Link>
            */}
       <Navigation menu={data.wpMenu.menuItems.nodes} />

      
               
            </Content>

           {/*  
           "Language Switcher"
           <ul className="languages">
        {availableLanguages.map((lng) => (
          <li key={lng}>
            <Link to={originalPath} language={lng} className="toggle">
          {lng.toUpperCase()}
              {lng}
            </Link>
          </li>
        ))}
      </ul>*/}
        </Wrapper>
    )
}

export default Header;