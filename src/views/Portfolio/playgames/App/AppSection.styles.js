import styled from 'styled-components'

const SliderContainer = styled.div`
/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#322f41+0,020219+100 */
background: rgb(50,47,65); /* Old browsers */
background: -moz-linear-gradient(top,  rgba(50,47,65,1) 0%, rgba(2,2,25,1) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(50,47,65,1) 0%,rgba(2,2,25,1) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(50,47,65,1) 0%,rgba(2,2,25,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#322f41', endColorstr='#020219',GradientType=0 ); /* IE6-9 */

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