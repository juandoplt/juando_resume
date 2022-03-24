import { motion } from "framer-motion";
import styled from 'styled-components'

const ToolsList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    max-width:100%;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    @media (min-width: 576px) { 
        max-width:50%;
    }
    @media (min-width: 1900px) { 
        max-width:30%;
    }
`

const ElementsList = styled.ul`
    list-style: none; 
    display: flex; 
    flex-wrap: wrap;
    justify-content: center;
    padding: 0;
    margin: 2rem 0;
    width: 100%;
    li{
        color: #fff; 
        width: 43%; 
        height: 250px;
        background-color: rgba(255,255,255,.2); 
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        justify-content: center; 
        align-items: flex-end;
        border-radius: 3px;
        margin: 0.5rem; 
        text-align: center; 
        position:relative;
        padding-bottom: 3rem;
        @media (min-width: 576px) { 
            max-width:300px;
        }
        &:nth-child(1){
            background-image: url(${process.env.PUBLIC_URL + '/img/portfolio/fpd/background_product_1.jpg'});
        }
        &:nth-child(2){
            background-image: url(${process.env.PUBLIC_URL + '/img/portfolio/fpd/background_product_2.jpg'});
        }
        &:nth-child(3){
            background-image: url(${process.env.PUBLIC_URL + '/img/portfolio/fpd/background_product_3.jpg'});
        }
        &:nth-child(4){
            background-image: url(${process.env.PUBLIC_URL + '/img/portfolio/fpd/background_product_4.jpg'});
        }

        div{
            background: -moz-linear-gradient(top,  rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.9) 100%); /* FF3.6-15 */
            background: -webkit-linear-gradient(top,  rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.9) 100%); /* Chrome10-25,Safari5.1-6 */
            background: linear-gradient(to bottom,  rgba(0,0,0,0.4) 0%,rgba(0,0,0,0.9) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#66000000', endColorstr='#e6000000',GradientType=0 ); /* IE6-9 */
            
            width:100%;
            height:100%;
            position:absolute;
            top:0;
            left:0;
            z-index:1;
        }
        span{
            position:relative;
            display:block;
            z-index:3;
        }
    }
`


const Product = styled.div`
    // display: flex;
    // align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    // position: relative;
    // overflow: hidden;
    background-color:#000;
`

const ProductTitle = styled.h1`
    color: #fff;
    text-transform: uppercase;
    text-align: center;
`

const ProductAnimationContainer = styled(motion.div)`
    zIndex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100% 
`

export {
  ToolsList,
  ElementsList,
  Product,
  ProductTitle,
  ProductAnimationContainer,
};