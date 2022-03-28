import styled from 'styled-components'

const SliderContainer = styled.div`
  background-color: #000; 
  padding-top: 10%;
  padding-bottom: 25%;
  transform: translateY(-1px);
  overflow:hidden;
  @media (min-width: 576px) { 
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const SliderTitle = styled.h1`
  text-align: center; 
  color: #fff;
  text-transform: uppercase;
  margin-top: 1rem; 
  margin-bottom: 3rem;
`

const SwiperImage = styled.img`
  max-height: 500px;
  margin: 0 auto;
  display: block;
  @media (min-width: 576px) { 
    max-height: 700px;
  }
`

export {
  SliderContainer,
  SliderTitle,
  SwiperImage
};