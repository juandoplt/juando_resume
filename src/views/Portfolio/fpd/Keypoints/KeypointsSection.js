import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";


const KeyPointsContainer = styled(Container)`
  padding-top:5%;
  padding-bottom:5%;
`

const KeyPointsTitle = styled.h1`
  text-align:center;
  text-transform:uppercase;
`

const TabsContainer = styled(Col)`
  padding-top:2%;
  .tab-content{
    margin-top:2rem;
    .container {
      .row{
        .col{
          display:flex;
          align-items:center;
        }
      }
    }
  }
`

const TabsSelector = styled(Tabs)`
  justify-content:center;

  li{
    button{
      &.nav-link{
        color:rgba(0,0,0,.4);
        border:0;

      }
      &.nav-link.active{
        border:0;
        border-bottom:2px solid #000
      }
      &:hover{
        color:rgba(0,0,0,1);
        opacity:1
      }
    }
  }
`

const KeypointsSection = () => {
  return (
    <KeyPointsContainer>
      <Row>
        <KeyPointsTitle>Puntos Clave</KeyPointsTitle>
        <Col>
          <p>
            Lorem Ipsum
          </p>
        </Col>
        <Col>
          <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_01.png'}`} alt="" style={{ height: "500px", margin: "0 auto" }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_02.png'}`} alt="" style={{ height: "500px", margin: "0 auto" }} />
        </Col>
        <Col>
          <p>
            Lorem Ipsum
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem Ipsum
          </p>
        </Col>
        <Col>
          <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_03.png'}`} alt="" style={{ height: "500px", margin: "0 auto" }} />
        </Col>
      </Row>
    </KeyPointsContainer>
  )
}

export default KeypointsSection;