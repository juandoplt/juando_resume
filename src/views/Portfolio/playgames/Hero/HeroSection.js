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
              <HeaderText>Playgames</HeaderText>
              <SubHeaderText>Portal de noticias gamer y juegos</SubHeaderText>
              <DescriptionText>
                Playgames es un portal dedicado exclusivamente a noticias de juegos y también cuenta con unos mini juegos para los usuarios suscriptos.
              </DescriptionText>
              <DescriptionText>
                Mi rol aquí fue el de desarrollar toda la estética, UX y UI. También participar en la creación del logo ya que tenia que ir a la par con la estética.
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
