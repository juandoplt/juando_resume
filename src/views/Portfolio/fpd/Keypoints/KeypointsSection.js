import { Col, Container } from "react-bootstrap";
import PulseDot from "../../../../components/general/pulseDot/pulseDot";
import Separator from "../../../../components/general/Separator";

import {
  KeyPointsContainer,
  KeyPointsRow,
  KeyPointsTitle,
} from "./KeypointsSection.styles";

const KeypointsSection = () => {
  return (
    <>
      <KeyPointsContainer>
        <Container>
          <KeyPointsTitle>Vistas complejas</KeyPointsTitle>
          <KeyPointsRow>
            <Col lg={7}>
              <h3 style={{ padding: "2% 5%" }}>Creación de grupos</h3>
              <p style={{ padding: "2% 5%" }}>
                Una de las vistas más complejas es la de "Grupos", donde el usuario puede crear grupos, buscarlos, ver el estado de sus grupos y además aceptar jugadores que se sumen a su grupo. No solo estan estas complejidades en la vista si no que también el usuario puede participar de multiples grupos a la vez.
              </p>
              <p style={{ padding: "2% 5%" }}>
                El desafío fue lograr que esta vista a pesar de toda la complejidad que tiene por detrás se vea lo más simple posible.
              </p>
            </Col>
            <Col lg={5}>
              <div style={{ position: "relative", width: "70%", margin: "0 auto" }}>
                <video style={{ width: "100%" }} muted autoPlay loop>
                  <source src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/general_ux.mp4'}`} type="video/mp4" />
                </video>
              </div>
            </Col>
          </KeyPointsRow>
        </Container>
      </KeyPointsContainer>
      <Separator fill="#fff" backgroundColor="#000" translateY="-2px"/>
      <KeyPointsContainer background="black">
        <Container>
          <KeyPointsRow>
            <Col lg={5}>
              <div style={{ position: "relative", width: "100%", margin: "0 auto" }}>
                <PulseDot right="12%" top="9%" size={20} color="rgba(255,0,0,.9)" />
                <PulseDot left="12%" top="14%" size={18} color="rgba(255,0,0,.9)" />
                <PulseDot right="10%" top="18%" size={25} color="rgba(255,0,0,1)" />
                <video style={{ width: "100%" }} muted autoPlay loop>
                  <source src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/video_ux.mp4'}`}  type="video/mp4" />
                </video>
              </div>
            </Col>
            <Col lg={7}>
            <h3 style={{ padding: "2% 5%",color:"#fff" }}>Carga de resultados</h3>
              <p style={{ padding: "2% 5%",color:"#fff" }}>
                En esta vista en particular la idea era simplificar la selección de fechas, carga de resultados y elección de torneos. Ya que nuestro objetivo era aligerar la carga de resultados, y no que cada vez que el usuario termine de cargar el resultado pida confirmar.
              </p>
              <p style={{ padding: "2% 5%",color:"#fff" }}>
                En cambio el objetivo busqué guardar datos siempre que el usuario cargue resultados, de esa forma el usuario no tiene que pensar si se guardaron o no, ya que un pequeño check le indica que se guardo con éxito. Esto también aligera mucho la carga en nuestra API.
              </p>
            </Col>
          </KeyPointsRow>
        </Container>
      </KeyPointsContainer>
      <Separator backgroundColor="#fff" fill="#000" translateY="-2px"/>
      <KeyPointsContainer>
        <Container>
          <KeyPointsRow>
            <Col lg={7}>
            <h3 style={{ padding: "2% 5%",color:"#3a3a3a" }}>Widgets de equipos</h3>
              <p style={{ padding: "2% 5%",color:"#3a3a3a" }}>
                Esta vista resume de forma rápida el estado de los equipos que el usuario sigue. Al mostrar los últimos 5 partidos que obtuvo el equipo.
              </p>
              <p style={{ padding: "2% 5%",color:"#3a3a3a" }}>
                Con código de color (verde ganado, rojo perdido, amarillo empatado) el usuario de forma rápida puede ver si su equipo esta bien o mal y lo puede ver con todos los equipos que el usuario sigue. 
              </p>
              <p style={{ padding: "2% 5%",color:"#3a3a3a" }}>
                Trabajamos mucho la performance para que esta vista pudiera resistir cientos de equipos y no se viera afectada la performance.
              </p>
            </Col>
            <Col lg={5}>
              <div style={{ position: "relative", width: "100%", margin: "0 auto" }}>
                <PulseDot right="17%" top="20%" size={20} color="rgba(255,0,0,.9)" />
                <PulseDot left="12%" top="17%" size={18} color="rgba(255,0,0,.9)" />
                <PulseDot left="50%" top="30%" size={25} color="rgba(255,0,0,1)" />
                <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/widget.png'}`} alt="" style={{ width: "100%", margin: "0 auto", display: "block" }} className="noselect" />
              </div>
            </Col>
          </KeyPointsRow>
        </Container>

      </KeyPointsContainer>
      <Separator fill="#fff" backgroundColor="#000" translateY="-2px"/>
      <KeyPointsContainer background="black">
        <Container>
          <KeyPointsRow>
            <Col lg={5}>
              <div style={{ position: "relative", width: "100%", margin: "0 auto" }}>
                <PulseDot right="12%" top="9%" size={20} color="rgba(255,0,0,.9)" />
                <PulseDot left="12%" top="14%" size={18} color="rgba(255,0,0,.9)" />
                <PulseDot right="10%" top="18%" size={25} color="rgba(255,0,0,1)" />
                <video style={{ width: "100%" }} muted autoPlay loop>
                  <source src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/wizard_3.mp4'}`}  type="video/mp4" />
                </video>
              </div>
            </Col>
            <Col lg={7}>
            <h3 style={{ padding: "2% 5%",color:"#fff" }}>Carga de resultados</h3>
              <p style={{ padding: "2% 5%",color:"#fff" }}>
                En esta vista en particular la idea era simplificar la selección de fechas, carga de resultados y elección de torneos. Ya que nuestro objetivo era aligerar la carga de resultados, y no que cada vez que el usuario termine de cargar el resultado pida confirmar.
              </p>
              <p style={{ padding: "2% 5%",color:"#fff" }}>
                En cambio el objetivo busqué guardar datos siempre que el usuario cargue resultados, de esa forma el usuario no tiene que pensar si se guardaron o no, ya que un pequeño check le indica que se guardo con éxito. Esto también aligera mucho la carga en nuestra API.
              </p>
            </Col>
          </KeyPointsRow>
        </Container>
      </KeyPointsContainer>
    </>
  )
}

export default KeypointsSection;