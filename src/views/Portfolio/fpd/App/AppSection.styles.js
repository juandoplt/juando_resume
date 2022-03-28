import styled from 'styled-components'

const SliderContainer = styled.div`
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,000000+100 */
background: rgb(30,87,153); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(30,87,153,1) 0%, rgba(0,0,0,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(30,87,153,1) 0%,rgba(0,0,0,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(30,87,153,1) 0%,rgba(0,0,0,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1e5799', endColorstr='#000000',GradientType=0 ); /* IE6-9 */

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