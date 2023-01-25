import { Paragraph, Title } from "../../../../components/text";
import { motion } from "framer-motion";
import styled from 'styled-components'
import { Container, Row } from "react-bootstrap";


const Hero = styled.div`
  background-color: #000;
  position: relative;
  overflow: hidden;
  flex-direction:column;
  display: flex;
  background-image: url(${process.env.PUBLIC_URL + '/img/portfolio/playgames/background.jpg'});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  @media (min-width: 576px) { 
    background-size: cover;
    align-items:center;
  }
`

const HeroContainer = styled(Container)`
    padding-top:5rem;
    color:#3a3a3a;
`

const HeroRow = styled(Row)`
  align-items: flex-start;
  @media (min-width: 576px) { 
    align-items:center;
  }
`

const HeroPhonesContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-direction:row;
  max-height: 70vh;
`

const HeaderText = styled(Title)`
  text-align: left;
  font-weight: 700;
  color: #fff;
  font-size: 4rem;
  text-align:center;
  @media (min-width: 576px) { 
  }
`

const SubHeaderText = styled(Title)`
  text-align: left;
  font-weight: 500;
  font-Size: 1.6rem;
  color: #fff;
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-align:center;
  @media (min-width: 576px) { 
  }
`

const DescriptionText = styled(Paragraph)`
  text-align: left;
  color: #fff;
  font-size: .9rem;
  max-width: none;
  text-align:center;
  @media (min-width: 576px) { 
    max-width: 60%;
    margin:0 auto;
  }
`


const PhoneAnimationOne = styled(motion.div)`
  z-index: 2;
  img{
    max-width:100%;
  }
`

const PhoneAnimationTwo = styled(PhoneAnimationOne)`
  z-index: 3;
  img{
    max-width:100%;
  }
`

const PhoneAnimationThree = styled(PhoneAnimationOne)`
  z-index: 4;
  img{
    max-width:100%;
  }
`

const ShadowGradient = styled.div`
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#d30558+70,d30558+100&0+70,1+100 */
background: -moz-linear-gradient(top,  rgba(211,5,88,0) 70%, rgba(211,5,88,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(211,5,88,0) 70%,rgba(211,5,88,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(211,5,88,0) 70%,rgba(211,5,88,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00d30558', endColorstr='#d30558',GradientType=0 ); /* IE6-9 */


  top:1px;
  width:100%;
  height:100%;
  position:absolute;
  z-index:5;
`

export {
  Hero,
  HeroContainer,
  HeroRow,
  HeroPhonesContainer,
  HeaderText,
  SubHeaderText,
  DescriptionText,
  ShadowGradient,
  PhoneAnimationOne,
  PhoneAnimationTwo,
  PhoneAnimationThree,
};