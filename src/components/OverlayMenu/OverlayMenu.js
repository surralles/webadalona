import React, {useState} from "react";
import { Link } from 'gatsby';
import InvertedLogo from '../../images/logo-inverted.svg'
import Logo from '../../images/designingecommerce_600.gif';
import CloseButton from '../../images/close_btn.svg'
//import { useMenuQuery } from '../../hooks/useMenuQuery';
import {Overlay} from './OverlayMenu.styles'
import { graphql, useStaticQuery } from "gatsby";

const OverlayMenu =({ menuOpen, callback}) => {

   // const { nodes } = useMenuQuery();

   const data = useStaticQuery(graphql`
   query  {
       
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


    return (
        <Overlay menuOpen ={menuOpen}>
         <div className ="inner-wrap">
         <div className ="inner">
        
            <Link  to="/">
                    <img className ="invertedLogo"  src ={Logo} width="" alt= "webadalona logo" />
                </Link>
            <ul className="overlayMenu">
                {data.wpMenu.menuItems.nodes.map(item =>(
                    !item.parentId ? (
                        <li key={item.id}>
                            <Link to={item.url} activeClassName="overlayActive">
                            {item.label}

                            </Link>
                        </li>

                    ):null
                ))}

            </ul>
            <div 
            className="closeButton"
            onClick ={callback}
            onKeyDown={callback}
            role="button"
            tabIndex= "0"
            
            >
                <img src={CloseButton} alt="close-button"/>
            </div>

            </div> 

            <div className ="inner-contact">
              <p>Lo que sea</p>
            </div>
            </div> 
            
        </Overlay>

    )
}

export default OverlayMenu