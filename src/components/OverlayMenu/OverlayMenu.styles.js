import styled from "styled-components"

export const Overlay = styled.div`


  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? "1" : "0")};
  transform: ${props =>
    props.menuOpen ? "translateX(0%)" : "translateX(-100%)"}; 
    transition:all  0.3s ease;
    
  z-index:100000  ;
  background: #fff;
  left: 0px;
  padding: 20px;
 

 .inner-wrap{
  display:flex;
  flex-wrap: nowrap;
  width: 100%;
    height: 100%;
    background: transparent;
   
  }
   
  
  

  .inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #000;
    width: 50%;
    height: 100%;
    color: #fff;
    padding: 40px;
   
 

    .overlayMenu {
      text-align: left;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 10px 0;
      }

      li.overlayActive {
        color: #ee2562;
      }

      a {
        font-family: 'Frank Ruhl Libre', Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;
        font-weight:700,
        line-height:.7em!important;

        :hover {
          color: #ee2562;
        }
      }
    }
  }
  .closeButton {
    position: absolute;
    top: 50px;
    right: 17%;
    color: #fff;
    width: 40px;
    height: 40px;
    cursor: pointer;
    transition: all .5s ease;
    outline: none;

    :hover {
      transform: rotate(90deg);
    }
  }
  
  .inner-contact{
  
    animation: pulse 4s ;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    width: 50%;
    height: 100%;
    
    padding: 40px;
    color:#000
    transform: ${props =>
      props.menuOpen ? "translateX(-10%)" : "translateX(-100%)"}; 
    

  
    
  }
  @keyframes pulse {
    0% {
      transform: translateX(-100%); 
    }
    
   
    
    100% {
      transform: translateX(0);
    }
  }

  @media (max-width: 800px) {
    a{
      font-size:1em!important;
    };
    .inner{
      width:100%
    }
    .inner-contact{
      display:none;
    }
    
  }
  .contacto{
    margin-top: 15px;
    margin-bottom:15px;
  }
  @media (min-width: 800px)
  .contacto{
    display:none
  }

`
