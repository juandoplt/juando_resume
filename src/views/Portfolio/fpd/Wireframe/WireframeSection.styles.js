import styled from 'styled-components'

const Title = styled.h1`
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  text-shadow: 0px 0 50px black;
  max-width:50%;
`

const SubTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size:1.5rem;
  font-weight:normal;
  text-shadow: 0px 0 50px black;
  max-width:50%;
`

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction:column;
  height: 100%;
  position: absolute;
  z-index: 2;
  background: rgb(0 0 0 / 75%);
`

const AnimationContent = styled.div`
  display: flex;
  left: 0;
  position: absolute;
  z-index: 0;
  min-height: 100vh;
  padding-top: 5%;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  @media (min-width: 576px) { 
    width: 100%;
  }
`

const Image = styled.img`
  width: 150px;
  margin-right: 30px; 
  filter: blur(2px);

@media (min-width: 576px) { 
  width: 200px;
}
`

const AnimationContainer = styled.div`
  display: flex;
  overflow: hidden;
  background-color: #000;
  height: 100vh;
  position: relative
`

export {
  AnimationContent,
  Image,
  AnimationContainer,
  TitleContainer,
  SubTitle,
  Title
};