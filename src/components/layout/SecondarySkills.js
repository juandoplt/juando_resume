import { motion } from 'framer-motion';
import {
  Row,
  Container,
  Col
} from 'react-bootstrap';

import {
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
} from '../layout/SecondarySkills/SecondarySkills.styles'

import styled from 'styled-components';

const RealContainer = styled(Container)`
  overflow:hidden;
  padding-top:20%;
  padding-bottom:20%;
  @media (min-width: 576px) { 
    padding-top:5%;
    padding-bottom:5%;
 }

`

const SecondarySkills = () => {
  return (
    <RealContainer>
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >
            <SpecialTitle textAlign="center" fontWeight="bold">Otras habilidades</SpecialTitle>
          </motion.div>
          <List>
            <ListItemLeft>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotateZ: [20, 0, 20] }}
                  transition={{ type: "spring", stiffness: 0, repeat: Infinity, duration: 10, delay: .2 }}
                >
                  <FirstCanvas></FirstCanvas>
                </motion.div>
                <TitleContainer>Dirección de <BigTitle>proyectos</BigTitle></TitleContainer>
                <Description>Dentro de mis habilidades está la de poder llevar a cabo proyectos en conjunto con equipos de
                  multiples disciplinas, ya que considero que tengo una visión única.</Description>
              </motion.div>
            </ListItemLeft>
            <ListItemRight>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotateZ: [47, 0, 47], rotateY: [-20, 0, -20] }}
                  transition={{ type: "spring", stiffness: 0, repeat: Infinity, duration: 16,delay:.8 }}
                >
                  <SecondCanvas></SecondCanvas>
                </motion.div>
                <TitleContainer>Producción <BigTitle>audiovisual</BigTitle></TitleContainer>
                <Description>Tengo la experiencia en producción audiovisual suficiente como para desarrollar un evento en vivo
                  por streaming.</Description>
              </motion.div>
            </ListItemRight>
            <ListItemLeft>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .6 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotateZ: [-40, 0, -40], rotateY: [-30, 0, -30] }}
                  transition={{ type: "spring", stiffness: 0, repeat: Infinity, duration: 13, delay: 1 }}
                >
                  <ThirdCanvas></ThirdCanvas>
                </motion.div>
                <TitleContainer>Desarrollo de<BigTitle>productos</BigTitle></TitleContainer>
                <Description>Crear es mi pasión por eso me dedico de lleno a crear productos.</Description>
              </motion.div>

            </ListItemLeft>
            <ListItemRight>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .8 }}
                viewport={{ once: true }}
              >
                <motion.div
                  animate={{ rotateZ: [30, 0, 30], rotateY: [-37, 0, -37] }}
                  transition={{ type: "spring", stiffness: 0, repeat: Infinity, duration: 8, delay: 1.3 }}
                >
                  <FourthCanvas></FourthCanvas>
                </motion.div>
                <TitleContainer>Estrategias de <BigTitle>marketing</BigTitle></TitleContainer>
                <Description>Para mi todo producto necesita su estrategia de marketing para que logre tener exito.</Description>
              </motion.div>
            </ListItemRight>
          </List>
        </Col>
      </Row>
    </RealContainer>
  );
}

export default SecondarySkills;