import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import styled from "styled-components";
import PulseDot from "../../../../components/general/pulseDot/pulseDot";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const KeyPointsContainer = styled(Container)`
  padding-top:5%;
  padding-bottom:5%;
`

const KeyPointsRow = styled(Row)`
  align-items: center;
  height: 100%;
  margin:15% 0;
  @media (min-width: 576px) { 
    height: 100vh;
  }
`

const KeyPointsTitle = styled.h1`
  text-align:center;
  text-transform:uppercase;
  margin-bottom:3rem;
`

const KeypointsSection = () => {
  return (
    <KeyPointsContainer>
      <KeyPointsRow>
        <KeyPointsTitle>Puntos Clave</KeyPointsTitle>

        <Swiper
          pagination={{
            type: "bullets",
          }}
          grabCursor={true}
          navigation={true}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <div style={{display:'flex',alignItems:"center",padding:"5% 5%"}}>
              <Col lg={4}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus interdum efficitur. Nunc sit amet justo mauris. Phasellus at metus sagittis, varius mauris ac, laoreet eros. In eget ex risus. Vivamus elementum erat ac condimentum hendrerit. Nunc in felis in diam molestie dictum. Quisque et cursus diam, eget maximus velit. Vivamus cursus et ligula vestibulum ultricies. Quisque et tristique est, eget tristique ex. Quisque mi felis, malesuada sit amet pulvinar et, dignissim rutrum odio.
                </p>
              </Col>
              <Col>
                <div style={{ position: "relative", width: 300, margin: "0 auto" }}>
                  <PulseDot left={20} top={40} />
                  <PulseDot right={20} top={90} />
                  <PulseDot left={50} top={220} />
                  <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/widget.png'}`} alt="" style={{ width:400, margin: "0 auto", display: "block" }} className="noselect" />
                </div>
              </Col>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{display:'flex',alignItems:"center",padding:"5% 2%"}}>
              <Col>
                <p>
                  Nullam in volutpat neque, et luctus tellus. Suspendisse ut lacus lorem. Nullam ut diam facilisis, tincidunt felis in, vulputate justo. Nam tincidunt arcu nec molestie hendrerit. Suspendisse elit ante, congue id hendrerit ut, euismod maximus felis. Sed et velit non mauris cursus hendrerit in quis felis. In eget nibh vel elit dictum consectetur. Donec tristique, metus in laoreet pulvinar, elit enim interdum felis, sit amet ornare lorem purus vel sem. Integer quis rhoncus est. Donec mollis sodales libero, vitae vehicula nisl tincidunt sollicitudin.
                </p>
              </Col>
              <Col>
                <div style={{ position: "relative", width: 300, margin: "0 auto" }}>
                  <PulseDot left={20} top={40} />
                  <PulseDot right={20} top={90} />
                  <PulseDot left={50} top={220} />
                  <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_02.png'}`} alt="" style={{ height: "600px", margin: "0 auto", display: "block" }} className="noselect" />
                </div>
              </Col>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{display:'flex',alignItems:"center",padding:"5% 2%"}}>
              <Col>
                <p>
                  Donec imperdiet sapien nec sapien tempor molestie. Phasellus tincidunt laoreet urna finibus posuere. Proin facilisis efficitur rutrum. Praesent ullamcorper dui sed sapien rutrum, at blandit augue pharetra. Nunc eget nisl dapibus, volutpat tortor vel, ultrices mauris. Cras eget lorem at quam hendrerit placerat. Donec tempus purus ex, ac dapibus lectus rhoncus nec. Suspendisse ut vulputate quam, nec gravida risus. Sed accumsan, dui non consequat luctus, magna diam lacinia risus, ac congue eros metus laoreet eros.
                </p>
              </Col>
              <Col>
                <div style={{ position: "relative", width: 300, margin: "0 auto" }}>
                  <PulseDot left={20} top={40} />
                  <PulseDot right={20} top={90} />
                  <PulseDot left={50} top={220} />
                  <img src={`${process.env.PUBLIC_URL + '/img/portfolio/fpd/phone_03.png'}`} alt="" style={{ height: "600px", margin: "0 auto", display: "block" }} className="noselect" />
                </div>
              </Col>
            </div>
          </SwiperSlide>

        </Swiper>
      </KeyPointsRow>
    </KeyPointsContainer>
  )
}

export default KeypointsSection;