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
          <KeyPointsTitle>Puntos Clave</KeyPointsTitle>
          <KeyPointsRow>
            <Col lg={6}>
              <p style={{ padding: "5%" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus interdum efficitur. Nunc sit amet justo mauris. Phasellus at metus sagittis, varius mauris ac, laoreet eros. In eget ex risus. Vivamus elementum erat ac condimentum hendrerit. Nunc in felis in diam molestie dictum. Quisque et cursus diam, eget maximus velit. Vivamus cursus et ligula vestibulum ultricies. Quisque et tristique est, eget tristique ex. Quisque mi felis, malesuada sit amet pulvinar et, dignissim rutrum odio.
              </p>
            </Col>
            <Col lg={6}>
              <div style={{ position: "relative", width: "90%", margin: "0 auto" }}>
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
            <Col lg={6}>
              <div style={{ position: "relative", width: "100%", margin: "0 auto" }}>
                <PulseDot right="12%" top="9%" size={20} color="rgba(255,0,0,.9)" />
                <PulseDot left="12%" top="14%" size={18} color="rgba(255,0,0,.9)" />
                <PulseDot right="10%" top="18%" size={25} color="rgba(255,0,0,1)" />
                <video style={{ width: "100%" }} muted autoPlay loop>
                  <source src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/video_ux.mp4'}`}  type="video/mp4" />
                </video>
              </div>
            </Col>
            <Col lg={6}>
              <p style={{ padding: "5%", color: "#fff" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus interdum efficitur. Nunc sit amet justo mauris. Phasellus at metus sagittis, varius mauris ac, laoreet eros. In eget ex risus. Vivamus elementum erat ac condimentum hendrerit. Nunc in felis in diam molestie dictum. Quisque et cursus diam, eget maximus velit. Vivamus cursus et ligula vestibulum ultricies. Quisque et tristique est, eget tristique ex. Quisque mi felis, malesuada sit amet pulvinar et, dignissim rutrum odio.
              </p>
            </Col>
          </KeyPointsRow>
        </Container>
      </KeyPointsContainer>
      <Separator backgroundColor="#fff" fill="#000" translateY="-2px"/>
      <KeyPointsContainer>
        <Container>
          <KeyPointsRow>
            <Col lg={6}>
              <p>
                Donec imperdiet sapien nec sapien tempor molestie. Phasellus tincidunt laoreet urna finibus posuere. Proin facilisis efficitur rutrum. Praesent ullamcorper dui sed sapien rutrum, at blandit augue pharetra. Nunc eget nisl dapibus, volutpat tortor vel, ultrices mauris. Cras eget lorem at quam hendrerit placerat. Donec tempus purus ex, ac dapibus lectus rhoncus nec. Suspendisse ut vulputate quam, nec gravida risus. Sed accumsan, dui non consequat luctus, magna diam lacinia risus, ac congue eros metus laoreet eros.
              </p>
            </Col>
            <Col lg={6}>
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
    </>
  )
}

export default KeypointsSection;