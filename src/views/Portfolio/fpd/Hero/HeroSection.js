import { Col } from "react-bootstrap";
import useWindowSize from "../../../../utils/useWindowSize";

import {
  HeaderText,
  SubHeaderText,
  DescriptionText,
  Hero,
  HeroContainer,
  HeroRow,
  ShadowGradient,
  PhoneAnimationOne,
  PhoneAnimationTwo,
  PhoneAnimationThree,
  HeroPhonesContainer
} from "./HeroSection.styles";

import {
  firstPhone,
  secondPhone,
  thirdPhone,
  firstPhoneTransition,
  secondPhoneTransition,
  thirdPhoneTransition,
}
  from "./HeroSection.animations";

const HeroSection = () => {

  return (
    <>
      <Hero>
        <HeroContainer>
          <HeroRow>
            <Col>
              <HeaderText>FPD</HeaderText>
              <SubHeaderText>Portal de estadísticas y noticias de fútbol</SubHeaderText>
              <DescriptionText>
                Este es uno de los proyectos más grandes realizados, branding, desarrollo web y mobile, estructuración del backend, producción audiovisual y diseño de la interfaz y la experiencia de usuario de la app mobile.
              </DescriptionText>
            </Col>
          </HeroRow>
        </HeroContainer>
        <HeroPhonesContainer>
          <ShadowGradient />
          <PhoneAnimationOne
            animate={firstPhone}
            transition={firstPhoneTransition}
          >
            <img src={require('../../../../assets/images/fpd/phone_03.png')}
            />
          </PhoneAnimationOne>
          <PhoneAnimationTwo
            animate={secondPhone}
            transition={secondPhoneTransition}
          >
            <img src={require('../../../../assets/images/fpd/phone_01.png')}
            />
          </PhoneAnimationTwo>
          <PhoneAnimationThree
            animate={thirdPhone}
            transition={thirdPhoneTransition}
          >
            <img src={require('../../../../assets/images/fpd/phone_04.png')}
            />
          </PhoneAnimationThree>
        </HeroPhonesContainer>
      </Hero>
    </>
  );
}

export default HeroSection;
