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
        align-items: center;
        border-radius: 3px;
        margin: 0.5rem; 
        text-align: center; 
        position:relative;
        flex-direction:column;
        @media (min-width: 576px) { 
            max-width:300px;
        }
        img{
            width: 130px
        }
        span{
            position:relative;
            display:block;
            z-index:3;
        }
    }
`


const Product = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;
    background-color:#D30558;
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