import { Container, Row, Col } from "react-bootstrap";


import {
  DescriptionSection,
  DescriptionTitle,
  DescriptionContent,
  DescriptionParagraph,
  DescriptionShows,
} from "./ShowsDescriptionSection.styles";

import Separator from "../../../../components/general/Separator";


const ShowsDescriptionSection = () => {
  return (
    <>
      <Separator backgroundColor="#efefef" fill="white" />
      <DescriptionSection>
        <Container>
          <Row style={{ position: "relative" }}>
            <Col>
              <DescriptionContent
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .5 }}
                viewport={{ once: true }}
              >
                <DescriptionTitle>Producción audiovisual</DescriptionTitle>
                <DescriptionParagraph>Dentro de los desafíos de este producto apareció la oportunidad de realizar producciones audiovisuales.</DescriptionParagraph>
                <DescriptionParagraph>Se crearon 3 shows entorno al humor y que lograran apuntar a un target más amplio que solamente fanáticos del fútbol.</DescriptionParagraph>
                <DescriptionShows>
                  <div>
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/china.jpg'}`}/>
                    <h4>"Ping Pong de la China"</h4>
                    <p>Conducido por la China Ansa, este show trae distintas celebridades que tienen que responder preguntas mientras se realiza una entrevista.</p>
                  </div>
                  <div>
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/ernesto.jpg'}`}/>
                    <h4>"Modo Hincha, Ernesto Provitilo"</h4>
                    <p>Ernesto Provitilo trae en este show la actualidad de River, pero también le añade su opinión y visión sin filtros.</p>
                  </div>
                  <div>
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/tony.jpg'}`}/>
                    <h4>"Modo Hincha, Tony Serpa"</h4>
                    <p>El nemesis de Ernesto trae este show polémico donde descarga su personalidad a pleno y también trae actualidad de Boca.</p>
                  </div>
                </DescriptionShows>
              </DescriptionContent>
            </Col>
          </Row>
        </Container>
      </DescriptionSection>
    </>
  );
}

export default ShowsDescriptionSection;
