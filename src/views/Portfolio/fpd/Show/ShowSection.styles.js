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
  overflow:hidden;
  @media (min-width: 576px) { 
    padding-top: 5%;
    padding-bottom: 15%;
  }
  .parallax-video{
     position:relative;
     height:100%;
     width:100%;
     padding:5%;
     margin:2% 0;
     background-color:black;
     @media (min-width: 576px) { 
       margin:10% 0;
       padding:0%;
       width:60%;
    }
  }
  .parallax-video:nth-child(2){
      left:auto;
      @media (min-width: 576px) { 
        left:4%;
      }
  }
  .parallax-video:nth-child(3){
      left:auto;
      @media (min-width: 576px) { 
        left:30%;
      }
  }
  .parallax-video:nth-child(4){
      left:auto;
      @media (min-width: 576px) { 
        left:12%;
      }
  }
  .parallax-video:nth-child(5){
      left:auto;
      @media (min-width: 576px) { 
        left:38%;
      }
  }
`

const SliderTitle = styled.h1`
  text-align: center; 
  color: #fff;
  width:100%;
  text-transform: uppercase;
  margin-top: 1rem; 
  margin-bottom: 5rem;
  @media (min-width: 576px) { 
    margin-bottom: 3rem;
  }
`

const SwiperContent = styled.div`
  margin: 0 auto;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  iframe{
    height:300px;
    width:100%;
  }

  @media (min-width: 576px) { 
    flex-direction:row;
    iframe{
      height:440px;
    }
  }
`

const SwiperTextContent = styled.div`
  padding: 15px;
  width: 100%;
  @media (min-width: 576px) { 
    width: 70%;
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
  SwiperContent,
  SwiperTextContent
};