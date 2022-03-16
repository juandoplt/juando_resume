import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled, { keyframes } from 'styled-components';
import { Paragraph, Title } from '../text';


const firstBlobber = keyframes`
0% {
    border-radius:30% 70% 50% 50% / 47% 50% 50% 53%;
  }
  5% {
    border-radius:54% 46% 39% 61% / 37% 32% 68% 63% 
  }
  10% {
    border-radius: 69% 31% 71% 29%/67% 31% 69% 33%;
  }
  15% {
    border-radius: 60% 40% 71% 29%/63% 65% 35% 37%;
  }
  20% {
    border-radius: 61% 39% 51% 49%/57% 58% 42% 43%;
  }
  25% {
    border-radius: 66% 34% 25% 75%/47% 30% 70% 53%;
  }
  30% {
    border-radius: 32% 68% 38% 62%/65% 60% 40% 35%;
  }
  35% {
    border-radius: 63% 37% 41% 59%/35% 38% 62% 65%;
  }
  40% {
    border-radius: 57% 43% 49% 51%/55% 71% 29% 45%;
  }
  45% {
    border-radius: 47% 53% 34% 66%/65% 36% 64% 35%;
  }
  50% {
    border-radius: 44% 56% 32% 68%/69% 26% 74% 31%;
  }
  55% {
    border-radius: 28% 72% 37% 63%/71% 44% 56% 29%;
  }
  60% {
    border-radius: 38% 62% 35% 65%/74% 53% 47% 26%;
  }
  65% {
    border-radius: 73% 27% 46% 54%/54% 47% 53% 46%;
  }
  70% {
    border-radius: 75% 25% 47% 53%/49% 53% 47% 51%;
  }
  75% {
    border-radius: 62% 38% 43% 57%/55% 60% 40% 45%;
  }
  80% {
    border-radius: 41% 59% 65% 35%/73% 50% 50% 27%;
  }
  85% {
    border-radius: 55% 45% 57% 43%/73% 61% 39% 27%;
  }
  90% {
    border-radius: 74% 26% 33% 67%/40% 65% 35% 60%;
  }
  95% {
    border-radius: 58% 42% 57% 43%/53% 45% 55% 47%;
  }
  100% {
    border-radius: 48% 52% 68% 32%/42% 28% 72% 58%;
  }
`;
const secondBlobber = keyframes`
0% {
    border-radius:  53% 47% 74% 26% / 64% 22% 78% 36%;
  }
  5% {
    border-radius: 48% 52% 41% 59%/66% 37% 63% 34%;
  }
  10% {
    border-radius: 69% 31% 71% 29%/67% 31% 69% 33%;
  }
  15% {
    border-radius: 60% 40% 71% 29%/63% 65% 35% 37%;
  }
  20% {
    border-radius: 61% 39% 51% 49%/57% 58% 42% 43%;
  }
  25% {
    border-radius: 66% 34% 25% 75%/47% 30% 70% 53%;
  }
  30% {
    border-radius: 32% 68% 38% 62%/65% 60% 40% 35%;
  }
  35% {
    border-radius: 63% 37% 41% 59%/35% 38% 62% 65%;
  }
  40% {
    border-radius: 57% 43% 49% 51%/55% 71% 29% 45%;
  }
  45% {
    border-radius: 47% 53% 34% 66%/65% 36% 64% 35%;
  }
  50% {
    border-radius: 44% 56% 32% 68%/69% 26% 74% 31%;
  }
  55% {
    border-radius: 28% 72% 37% 63%/71% 44% 56% 29%;
  }
  60% {
    border-radius: 38% 62% 35% 65%/74% 53% 47% 26%;
  }
  65% {
    border-radius: 73% 27% 46% 54%/54% 47% 53% 46%;
  }
  70% {
    border-radius: 75% 25% 47% 53%/49% 53% 47% 51%;
  }
  75% {
    border-radius: 62% 38% 43% 57%/55% 60% 40% 45%;
  }
  80% {
    border-radius: 41% 59% 65% 35%/73% 50% 50% 27%;
  }
  85% {
    border-radius: 55% 45% 57% 43%/73% 61% 39% 27%;
  }
  90% {
    border-radius: 74% 26% 33% 67%/40% 65% 35% 60%;
  }
  95% {
    border-radius: 58% 42% 57% 43%/53% 45% 55% 47%;
  }
  100% {
    border-radius: 48% 52% 68% 32%/42% 28% 72% 58%;
  }
`;
const thirdBlobber = keyframes`
0% {
    border-radius: 87% 13% 28% 72% / 21% 40% 60% 79%;
  }
  5% {
    border-radius: 48% 52% 41% 59%/66% 37% 63% 34%;
  }
  10% {
    border-radius: 69% 31% 71% 29%/67% 31% 69% 33%;
  }
  15% {
    border-radius: 60% 40% 71% 29%/63% 65% 35% 37%;
  }
  20% {
    border-radius: 61% 39% 51% 49%/57% 58% 42% 43%;
  }
  25% {
    border-radius: 66% 34% 25% 75%/47% 30% 70% 53%;
  }
  30% {
    border-radius: 32% 68% 38% 62%/65% 60% 40% 35%;
  }
  35% {
    border-radius: 63% 37% 41% 59%/35% 38% 62% 65%;
  }
  40% {
    border-radius: 57% 43% 49% 51%/55% 71% 29% 45%;
  }
  45% {
    border-radius: 47% 53% 34% 66%/65% 36% 64% 35%;
  }
  50% {
    border-radius: 44% 56% 32% 68%/69% 26% 74% 31%;
  }
  55% {
    border-radius: 28% 72% 37% 63%/71% 44% 56% 29%;
  }
  60% {
    border-radius: 38% 62% 35% 65%/74% 53% 47% 26%;
  }
  65% {
    border-radius: 73% 27% 46% 54%/54% 47% 53% 46%;
  }
  70% {
    border-radius: 75% 25% 47% 53%/49% 53% 47% 51%;
  }
  75% {
    border-radius: 62% 38% 43% 57%/55% 60% 40% 45%;
  }
  80% {
    border-radius: 41% 59% 65% 35%/73% 50% 50% 27%;
  }
  85% {
    border-radius: 55% 45% 57% 43%/73% 61% 39% 27%;
  }
  90% {
    border-radius: 74% 26% 33% 67%/40% 65% 35% 60%;
  }
  95% {
    border-radius: 58% 42% 57% 43%/53% 45% 55% 47%;
  }
  100% {
    border-radius: 48% 52% 68% 32%/42% 28% 72% 58%;
  }
`;
const fourthBlobber = keyframes`
0% {
    border-radius:  28% 72% 73% 27% / 58% 13% 87% 42%;
  }
  5% {
    border-radius: 48% 52% 41% 59%/66% 37% 63% 34%;
  }
  10% {
    border-radius: 69% 31% 71% 29%/67% 31% 69% 33%;
  }
  15% {
      border-radius: 60% 40% 71% 29%/63% 65% 35% 37%;
  }
  20% {
      border-radius: 66% 34% 25% 75%/47% 30% 70% 53%;
  }
  25% {
      border-radius: 58% 42% 57% 43%/53% 45% 55% 47%;
  }
  30% {
      border-radius: 32% 68% 38% 62%/65% 60% 40% 35%;
  }
  35% {
      border-radius: 63% 37% 41% 59%/35% 38% 62% 65%;
  }
  40% {
      border-radius: 57% 43% 49% 51%/55% 71% 29% 45%;
  }
  45% {
      border-radius: 47% 53% 34% 66%/65% 36% 64% 35%;
  }
  50% {
      border-radius: 28% 72% 37% 63%/71% 44% 56% 29%;
  }
  55% {
      border-radius: 75% 25% 47% 53%/49% 53% 47% 51%;
  }
  60% {
      border-radius: 54% 46% 39% 61% / 37% 67% 33% 63% 
  }
  65% {
      border-radius: 73% 27% 46% 54%/54% 47% 53% 46%;
  }
  70% {
      border-radius: 38% 62% 35% 65%/74% 53% 47% 26%;
  }
  75% {
      border-radius: 74% 26% 33% 67%/40% 65% 35% 60%;
  }
  80% {
      border-radius: 41% 59% 65% 35%/73% 50% 50% 27%;
  }
  85% {
      border-radius: 55% 45% 57% 43%/73% 61% 39% 27%;
  }
  90% {
      border-radius: 62% 38% 43% 57%/55% 60% 40% 45%;
  }
  95% {
      border-radius: 61% 39% 51% 49%/57% 58% 42% 43%;
  }
  100% {
      border-radius: 48% 52% 68% 32%/42% 28% 72% 58%;
  }
`;
const wobbler = keyframes`
    0% {
        transform: rotateZ(8deg);
    }
    100% {
    transform: rotateZ(-8deg);
    }
`;
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
    font-size: 2.5rem;
    text-transform:uppercase;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 10%;
        display: block;
        margin: 1rem auto;
    }
`

const List = styled.ul`
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
`

const TitleContainer = styled.h4`
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-weight: lighter;
    text-align: left;
`

const BigTitle = styled.span`
    font-weight: bold;
    display: block;
    font-size: 4rem;
    margin-top: -9px;
`

const Description = styled.p`
    font-size: 1.1rem;
    text-align: left;
`
const ListItemLeft = styled.li`
    width: 40%;
    margin: 2rem 0;
    position: relative;
    text-align:left;
`


const FirstCanvas = styled.canvas`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 30% 70% 50% 50% / 47% 50% 50% 53%;
    animation: ${firstBlobber} 32s 8s ease-in-out infinite, wobbler 12s 0s linear infinite alternate;
`

const SecondCanvas = styled(FirstCanvas)`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 30% 70% 50% 50% / 47% 50% 50% 53%;
    animation: ${secondBlobber} 32s 8s ease-in-out infinite, wobbler 12s 0s linear infinite alternate;
`

const ThirdCanvas = styled(FirstCanvas)`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 30% 70% 50% 50% / 47% 50% 50% 53%;
    animation: ${thirdBlobber} 32s 8s ease-in-out infinite, wobbler 12s 0s linear infinite alternate;
`

const FourthCanvas = styled(FirstCanvas)`
    width: 210px;
    height: 210px;
    position: absolute;
    left: 0;
    top: 0;
    background: #6801f814;
    border-radius: 30% 70% 50% 50% / 47% 50% 50% 53%;
    animation: ${fourthBlobber} 32s 8s ease-in-out infinite, wobbler 12s 0s linear infinite alternate;
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



const SecondarySkills = () => {
    return (
        <Container className="portfolioGrid">
            <Row>
                <Col>
                    <SpecialTitle textAlign="center">Otras habilidades que poseo</SpecialTitle>
                    <List>
                        <ListItemLeft>
                            <FirstCanvas></FirstCanvas>
                            <TitleContainer>Dirección de <BigTitle>proyectos</BigTitle></TitleContainer>
                            <Description>Dentro de mis habilidades está la de poder llevar a cabo proyectos en conjunto con equipos de
                                multiples disciplinas, ya que considero que tengo una visión única.</Description>
                        </ListItemLeft>
                        <ListItemRight>
                            <SecondCanvas></SecondCanvas>
                            <TitleContainer>Producción <BigTitle>audiovisual</BigTitle></TitleContainer>
                            <Description>Tengo la experiencia en producción audiovisual suficiente como para desarrollar un evento en vivo
                                por streaming.</Description>
                        </ListItemRight>
                        <ListItemLeft>
                            <ThirdCanvas></ThirdCanvas>
                            <TitleContainer>Desarrollo de<BigTitle>productos</BigTitle></TitleContainer>
                            <Description>Crear es mi pasión y lo más entretenido para mí es desarrollar nuevos prodcutos</Description>
                        </ListItemLeft>
                        <ListItemRight>
                            <FourthCanvas></FourthCanvas>
                            <TitleContainer>Estrategias de <BigTitle>marketing</BigTitle></TitleContainer>
                            <Description>No hay diseño sin una visión de marketing.</Description>
                        </ListItemRight>
                    </List>
                </Col>
            </Row>
        </Container>
    );
}

export default SecondarySkills;