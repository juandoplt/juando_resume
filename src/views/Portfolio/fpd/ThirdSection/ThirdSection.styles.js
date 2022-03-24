import { motion } from "framer-motion";
import styled from 'styled-components'


const Section = styled.div`
  background-color: #efefef;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding-top: 2%;
   padding-bottom: 2%
`

const AnimatedTitle = styled(motion.h1)`
  text-align: center;
  text-transform: uppercase;
`

const AnimatedContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items:center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position:relative;
  flex-direction:column;
`

const AnimatedOldLogoContainer = styled(motion.div)`
  position: absolute;
  top: 21%
`

const AnimatedNewLogoContainer = styled(motion.div)`
  width: 100%;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: relative;
  z-index: 3
`

const AnimatedParagraph = styled(motion.p)`
  max-width: 90%;
  text-align: center;
  @media (min-width: 576px) { 
    max-width: 50%;
  }
`

const AnimatedImage = styled(motion.img)`
  max-height: 200px;
  @media (min-width: 576px) { 
    max-height: 244px
  }
`


export {
  Section,
  AnimatedTitle,
  AnimatedContainer,
  AnimatedOldLogoContainer,
  AnimatedNewLogoContainer,
  AnimatedParagraph,
  AnimatedImage
};