import { motion } from "framer-motion";
import styled from 'styled-components'


const DescriptionSection = styled.div`
  background-color: #efefef;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   padding-top: 4%;
   padding-bottom: 4%;
   overflow:hidden;
`

const DescriptionTitle = styled(motion.h1)`
  text-align: center;
  text-transform: uppercase;
`

const DescriptionContent = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items:center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  position:relative;
  flex-direction:column;
`
const DescriptionParagraph = styled(motion.p)`
  max-width: 90%;
  text-align: center;
  @media (min-width: 576px) { 
    max-width: 50%;
  }
`

const DescriptionShows = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:20px;
  flex-direction:column;
  div{
    padding:1rem;
    img{
      border-radius:50%;
      margin:0 auto;
      display:block;
      margin-bottom:1rem;
    }
    h4,p{
      text-align:center;
    }
  }
  @media (min-width: 576px) { 
    flex-direction:row;
  }
`


export {
  DescriptionSection,
  DescriptionTitle,
  DescriptionContent,
  DescriptionParagraph,
  DescriptionShows
};