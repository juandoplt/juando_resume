import styled from 'styled-components'

const ShowContainer = styled.div`
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,212121+100 */
  background: rgb(0,0,0); /* Old browsers */
  background: -moz-linear-gradient(top,  rgba(0,0,0,1) 0%, rgba(33,33,33,1) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(0,0,0,1) 0%,rgba(33,33,33,1) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(33,33,33,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#212121',GradientType=0 ); /* IE6-9 */
  padding-top: 10%;
  padding-bottom: 15%;
  // height:100vh;
  overflow:hidden;
  .parallax-video{
    margin:0 .3rem
  }
  @media (min-width: 576px) { 
    padding-top: 5%;
    padding-bottom: 10%;
  }
`

const ShowTitle = styled.h1`
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

const ShowContent = styled.div`
  display:flex;
  justify-content:center;
  padding:2rem 0;
  flex-wrap:wrap;
  @media (min-width: 576px) { 
    flex-direction:row;
  }
`

const ShowVideoContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  padding:0.5rem;
  img{
    width:100%;
    @media (min-width: 576px) { 
      width:80%;
    }
    @media (min-width: 1500px) { 
      width:60%;
    }
  }
  
`

const ShowContentDescription = styled.div`
`

const ShowImage = styled.img`
  width:150px;
  display: block;
  margin:0 .5rem;
  margin-bottom:.5rem;
  @media (min-width: 576px) { 
    width:250px;
  }
`

export {
  ShowContainer,
  ShowTitle,
  ShowImage,
  ShowContent,
  ShowContentDescription,
  ShowVideoContent
};