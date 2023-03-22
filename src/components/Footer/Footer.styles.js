import styled from 'styled-components';
import { GatsbyImage } from "gatsby-plugin-image"


export const StyledImg = styled(GatsbyImage)`
  max-width: 300px;
  max-height: 300px;
  @media (max-width: 600px){
    max-height: 100px;
  }
  
`
export const Wrapper = styled.footer`
position: sticky;
  bottom: 0;
  left: 0;
  width: 100%;
  height:100;
  background-image: linear-gradient(to right, #fc5c7d, #8f329a);
  text-align:left;
`;

`
export const FooterWrapper = styled.div`

height:100%;
@media screen and (max-width: 1050px) { 
  flex-wrap:wrap 
 }
  display: flex;
  gap:20px;
  max-width:1300px;
  justify-content:center;
  color: #fff;
  text-align:left;
  h1{
    color: #fff;
    font-size:2.5em;
    font-weight:700;
    text-transform: capitalize;
  
  p {
    margin: 0;
    padding: 0;
  }

  a {
    color:#fff;
    magin-top:300px
  }
`

export const FirstColumn = styled.div`
margin-right:50px;
p{
  line-height:1.1em;
  margin-bottom:15px;
  font-size:.9em;
  color:#fff
}
`
export const Adress= styled.div`
min-width:200px;
h3{
  color:#fff;
  margin-bottom:10px
}
p{
  font-size:1em;
  line-height:1em;
}
`

export const LinksFooter = styled.div`
min-width:300px;
text-align:left;
a{
  color:#fff
};
h3{
  color:#fff;
  margin-bottom:10px
}
`
;
