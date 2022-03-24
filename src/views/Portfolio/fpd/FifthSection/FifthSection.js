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

const FifthSection = () => {
  return (
    <KeyPointsContainer>
      <Row>
        <KeyPointsTitle>Puntos Clave</KeyPointsTitle>
        <TabsContainer>
          <TabsSelector
            defaultActiveKey="home"
            transition={false}
          >
            <Tab eventKey="home" title="Home">
              <Container>
                <Row>
                  <Col>
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_01.png'}`} alt="" style={{height:"500px",margin:"0 auto"}}/>
                  </Col>
                  <Col>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, massa feugiat dapibus sodales, nisi velit aliquet mi, nec fermentum lectus justo nec risus. Nulla in ex ac mi aliquet blandit. Cras vehicula mauris lacus, at commodo purus cursus vel. Aenean malesuada facilisis ullamcorper.
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <Container>
                <Row>
                  <Col>
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_02.png'}`} alt="" style={{height:"500px",margin:"0 auto"}}/>
                  </Col>
                  <Col>
                    Suspendisse a eleifend velit. Donec mollis mollis justo, non dignissim libero. Cras at purus nisi. Sed sagittis purus in massa tincidunt pharetra.
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="contact" title="Contact">
              <Container>
                <Row>
                  <Col>
                    <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_03.png'}`} alt="" style={{height:"500px",margin:"0 auto"}} />
                  </Col>
                  <Col>
                  Mauris in dui neque. Quisque ultrices purus metus, quis suscipit ligula pharetra eu. In auctor nibh eget nisi auctor, et iaculis nisl tincidunt. 
                  </Col>
                </Row>
              </Container>
            </Tab>
          </TabsSelector>

        </TabsContainer>
      </Row>
    </KeyPointsContainer>
  )
}

export default FifthSection;