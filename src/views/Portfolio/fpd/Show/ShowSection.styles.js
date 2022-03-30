import styled from 'styled-components'

const SliderContainer = styled.div`
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,212121+100 */
  background: rgb(0,0,0); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(0,0,0,1) 0%, rgba(33,33,33,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(0,0,0,1) 0%,rgba(33,33,33,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(33,33,33,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#212121',GradientType=0 ); /* IE6-9 */
  padding-top: 10%;
  padding-bottom: 25%;
  transform: translateY(-1px);
  overflow:hidden;
  display:flex;
  flex-wrap:wrap;
  @media (min-width: 576px) { 
    padding-top: 5%;
    padding-bottom: 5%;
  }
`

const SliderTitle = styled.h1`
  text-align: center; 
  color: #fff;
  width:100%;
  text-transform: uppercase;
  margin-top: 1rem; 
  margin-bottom: 3rem;
`

const SwiperContent = styled.div`
  width: 50%; 
  margin: 0 auto;
  height:100vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  iframe{
    height:300px;
    width:100%;
  }

  @media (min-width: 576px) { 
    // width: 45%;
    iframe{
      height:500px;
    }
  }
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
  SwiperImage,
  SwiperContent
};