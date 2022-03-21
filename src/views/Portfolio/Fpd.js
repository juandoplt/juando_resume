import { useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import { Paragraph, Title } from "../../components/text";
import Animation from "../../utils/animation";
import styled from 'styled-components'
import { Col, Container, Row } from "react-bootstrap";
import AnimatedListItem from "../../components/portfolio/AnimatedListItem";
import { motion } from "framer-motion";

const Section = styled(Container)`
    padding-top:5rem;
    color:#3a3a3a
`

const ToolsList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  margin-right: 5rem;
  margin-left: -10px;
  flex-wrap: wrap;
`

const ElementsList = styled.ul`
  flex-direction: column;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-bottom:2rem;
`


const FpdPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const transition = {
    delay: 0.2
  }

  return (
    <Animation transition={.45}>
      <Section>
        <Row>
          <Col>
            <Title size="4rem" fontWeight="bold" letterSpacing="-3px">FPD</Title>
            <Title size="2rem" fontWeight="500">Portal de estadísticas y noticias de fútbol, App, Web y contenido en youtube</Title>
            <Title color="#000" size="1.5rem" fontWeight="500">Descripción de trabajo</Title>
            <Paragraph color="#000" size="1rem">
              Este es uno de los proyectos más grandes realizados, branding, desarrollo web y mobile, estructuración del backend, producción audiovisual y diseño de la interfaz y la experiencia de usuario de la app mobile.
            </Paragraph>

          </Col>
          <Col>
            <Title>Elementos</Title>
            <ElementsList>
              <li>
                • Diseño UX/UI.
              </li>
              <li>
                • Desarrollo App mobile y sitio web.
              </li>
              <li>
                • Rediseño de logo.
              </li>
              <li>
                • Producción audiovisual.
              </li>
            </ElementsList>
            <Title>Herramientas utilizadas</Title>
            <ToolsList>
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.1} text="React JS" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.2} text="React Native" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.3} text="Wordpress" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.4} text="Html" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.5} text="JS" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.6} text="Photoshop" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.7} text="Premiere" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.8} text="After effects" />
              <AnimatedListItem scale={[1, 1.2, 1]} duration={.5} delay={.9} text="Mysql" />
            </ToolsList>


          </Col>

        </Row>
        <Row style={{ padding: "3rem 0" }}>
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Otros trabajos</h1>
          <Col style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Link to={"/laddercup"}>
              <motion.img src={require("../../assets/images/fpd/project_2_screen.jpg")} whileHover={{ scale: 1.2, transition: { duration: .3 }, }} style={{}} />
              <h1 style={{ textAlign: "center", fontSize: "1.3rem", textTransform: "uppercase", fontWeight: "600" }}>Ladder Cup '21</h1>
            </Link>

          </Col>
          <Col style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Link to={"/fpd"}>
              <motion.img src={require("../../assets/images/fpd/project_2_screen.jpg")} whileHover={{ scale: 1.2, transition: { duration: .3 }, }} style={{}} />
              <h1 style={{ textAlign: "center", fontSize: "1.3rem", textTransform: "uppercase", fontWeight: "600" }}>Playgames</h1>
            </Link>
          </Col>
        </Row>
      </Section>
    </Animation>
  );
}

export default FpdPage;
