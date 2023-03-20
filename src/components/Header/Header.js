import React from 'react';

import Navigation from '../Navigation/Navigation'
//import { useMenuQuery } from '../../hooks/useMenuQuery';
import {Wrapper, Content} from './Header.styles';
import './header.module.css';

import { graphql, useStaticQuery } from "gatsby";
import LogoScript from '../LogoScript';


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
            <Navigation menu={data.wpMenu.menuItems.nodes} />
            </Content>
        </Wrapper>
    )
}

export default Header;