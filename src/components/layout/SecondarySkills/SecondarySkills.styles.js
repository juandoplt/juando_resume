import styled, { keyframes } from 'styled-components';
import { Paragraph, Title } from '../../text';

const pulseRed = keyframes`
0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7);
    }
    
    70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(255, 82, 82, 0);
    }
    
    100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(255, 82, 82, 0);
    }
`;

const SpecialTitle = styled(Title)`
    margin-bottom:3rem;
    font-size: 2rem;
    text-transform:uppercase;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 10%;
        display: block;
        margin: 1rem auto;
    }
    @media (min-width: 576px) { 
      font-size: 2.5rem;
   }
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction:column;
    @media (min-width: 576px) { 
        flex-direction: row;
     }
`

const TitleContainer = styled.h4`
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: lighter;
    text-align: left;
    @media (min-width: 576px) { 
      font-size: 2.5rem;
   }
`

const BigTitle = styled.span`
    font-weight: bold;
    display: block;
    font-size: 3rem;
    margin-top: -9px;
    @media (min-width: 576px) { 
      font-size: 4rem;
   }
`

const Description = styled.p`
    font-size: 1.1rem;
    text-align: left;
`
const ListItemLeft = styled.li`
    margin: 2rem 0;
    position: relative;
    text-align:left;
    width: 100%;
    padding:0 1rem;
    @media (min-width: 576px) { 
      width: 40%;
   }
`


const FirstCanvas = styled.canvas`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 30% 70% 50% 50% / 47% 50% 50% 53%;
`

const SecondCanvas = styled(FirstCanvas)`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 75% 25% 47% 53%/19% 33% 27% 71%;
`

const ThirdCanvas = styled(FirstCanvas)`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 28% 72% 37% 63%/71% 44% 56% 29%;
`

const FourthCanvas = styled(FirstCanvas)`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 74% 26% 33% 67%/40% 65% 35% 60%;
`

const ListItemRight = styled(ListItemLeft)`
    ${TitleContainer}{
        text-align:right
    }
    ${Description}{
        text-align:right
    }
    ${SecondCanvas}, ${FourthCanvas}{
        right:0;
        left:auto;
    }
`

export {
  pulseRed,
  SpecialTitle,
  List,
  TitleContainer,
  BigTitle,
  Description,
  ListItemLeft,
  FirstCanvas,
  SecondCanvas,
  ThirdCanvas,
  FourthCanvas,
  ListItemRight
};
