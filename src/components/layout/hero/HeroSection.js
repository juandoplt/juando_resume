import React, { useState } from 'react';

import {
  Row,
  Container,
  Col,
} from 'react-bootstrap';

import { Title, Paragraph } from '../../text/';
import Section from '../../general/Section';
import { motion } from "framer-motion"
import styled from 'styled-components';
import Player from './Player';

const Span = styled(motion.span)`
    display:inline-block
`

const Column = styled(Col)`
    display:flex;
    justify-content:space-between;
    align-items:center;
    flex-direction:column;
    @media (min-width: 576px) { 
      flex-direction:row
  }
`

const SpecialSection = styled(Section)`
      padding-top:20%;
      padding-bottom:15%;
    @media (min-width: 576px) { 
      padding-top:8%;
      padding-bottom:8%;
      background-color: #fff;
  }
`

const FirstColumn = styled.div`
    // width:50%;
    @media (min-width: 576px) { 
      // width:50%;
  }
`

const ActivatePlayer = styled.button`
  text-align:center;
  text-decoration:none;
  display:block;
  border-radius:5px;
  border:1px solid #000;
  background:none;
  width:210px;
  padding:.5rem 0;
  color:#000;
  margin:1rem auto;
  position:relative;
  z-index:2;
  -webkit-transition: all .4s ease-in-out;
  -moz-transition: all .4s ease-in-out;
  -ms-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
  &:hover{
    cursor:pointer;
    background:#000;
    color:#fff;
  }
`

const HeroSection = () => {
  const [mortyDance, setMortyDance] = useState(false);

  const turnDanceMode = () => {
    setMortyDance(!mortyDance)
  }

  return (
    <SpecialSection>
      <Container>
        <Row>
          <Column>
            <FirstColumn>
              <Player mortyDance={mortyDance}/>
              <ActivatePlayer onClick={() => turnDanceMode()}>Darle ritmo a Morty</ActivatePlayer>
            </FirstColumn>
            <div>
              <Title size="3rem" fontWeight="bold">
                Hola, soy <Span animate={{ y: [-10, 0, -10], color: ["rgb(103,58,183)", "rgb(0,0,0)", "rgb(103,58,183)"] }} transition={{ type: "spring", stiffness: 0, repeat: Infinity, duration: 2 }}>juando</Span>
              </Title>
              <Title size="2rem" fontWeight="500">Argentino, <Span animate={{ color: ["rgb(0,0,0)", "rgb(103,58,183)", "rgb(0,0,0)"] }} transition={{ type: "spring", stiffness: 0, duration: 2, delay: 1 }}>Diseñador UX/UI</Span> y <Span animate={{ color: ["rgb(0,0,0)", "rgb(103,58,183)", "rgb(0,0,0)"] }} transition={{ type: "spring", stiffness: 0, duration: 2, delay: 1.5 }}>desarrollador</Span> <Span animate={{ color: ["rgb(0,0,0)", "rgb(103,58,183)", "rgb(0,0,0)"] }} transition={{ type: "spring", stiffness: 0, duration: 2, delay: 1.9 }}>de</Span> <Span animate={{ color: ["rgb(0,0,0)", "rgb(103,58,183)", "rgb(0,0,0)"] }} transition={{ type: "spring", stiffness: 0, duration: 2, delay: 2.1 }}>productos</Span><Span animate={{ color: ["rgb(0,0,0)", "rgb(103,58,183)", "rgb(0,0,0)"] }} transition={{ type: "spring", stiffness: 0, duration: 2, delay: 3 }}>.</Span></Title>
              <Paragraph color="#3a3a3a" fontSize="1.3rem" marginTop="1rem">
                En los últimos años me dedique al desarrollo de nuevos productos mobile, desde estrategias de marketing, branding, campañas de anuncios y diseño.
              </Paragraph>
            </div>
          </Column>
        </Row>
      </Container>
    </SpecialSection >
  );
}

export default HeroSection;



