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



const SecondarySkills = () => {
  return (
    <Container className="portfolioGrid">
      <Row>
        <Col>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .4 }}
            viewport={{ once: true }}
          >
            <SpecialTitle textAlign="center" fontWeight="bold">Habilidades blandas</SpecialTitle>
          </motion.div>
          <List>
            <ListItemLeft>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .2 }}
                viewport={{ once: true }}
              >
                <FirstCanvas></FirstCanvas>
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
                <SecondCanvas></SecondCanvas>
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
                <ThirdCanvas></ThirdCanvas>
                <TitleContainer>Desarrollo de<BigTitle>productos</BigTitle></TitleContainer>
                <Description>Crear es mi pasión y lo más entretenido para mí es desarrollar nuevos prodcutos</Description>
              </motion.div>

            </ListItemLeft>
            <ListItemRight>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: .8 }}
                viewport={{ once: true }}
              >
                <FourthCanvas></FourthCanvas>
                <TitleContainer>Estrategias de <BigTitle>marketing</BigTitle></TitleContainer>
                <Description>No hay diseño sin una visión de marketing.</Description>
              </motion.div>
            </ListItemRight>
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default SecondarySkills;