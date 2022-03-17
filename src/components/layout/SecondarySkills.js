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