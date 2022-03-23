import { motion } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import AnimatedListItem from "../../../../components/portfolio/AnimatedListItem";
import styled from 'styled-components'


import {
    Section,
    AnimatedTitle,
    AnimatedContainer,
    AnimatedOldLogoContainer,
    AnimatedNewLogoContainer,
    AnimatedParagraph,
    AnimatedImage
} from "./SecondSection.styles";

import {
    fadeAndScaleOut,
    fadeAndScaleIn,
}
    from "./SecondSection.animations";
import Separator from '../../../../components/general/Separator';

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
        width: 45%; 
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




const SecondSection = () => {
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", paddingTop: "5%", paddingBottom: "5%", position: "relative", overflow: "hidden" }}>
                <div style={{ top: 0, width: "100%", position: "absolute", overflow: "hidden", height: "100%", backgroundColor: "#000" }}>
                    <div style={{ width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,.8)", zIndex: 1, position: "absolute" }}></div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: .5 }}
                    viewport={{ once: true }}
                    style={{ padding: 30, zIndex: 3, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", width: "100%" }}
                >
                    <h1 style={{ color: "#fff", textTransform: "uppercase" }}>Características del producto</h1>
                    <ElementsList>
                        <motion.li
                            animate={{ y: [0,10,0],filter:["drop-shadow(0px 0px 20px rgba(103, 58, 183,.3)", "drop-shadow(0px 0px 10px rgba(103, 58, 183,.3)"] }}
                            transition={{ type: "spring", stiffness: 440, repeat: Infinity, duration: 2, delay: .2 }}
                        >
                            <div></div>
                            <span>Diseño UX/UI</span>
                        </motion.li>
                        <motion.li
                            animate={{ y: [0,10,0],filter:["drop-shadow(0px 0px 20px rgba(103, 58, 183,.3)", "drop-shadow(0px 0px 10px rgba(103, 58, 183,.3)"] }}
                            transition={{ type: "spring", stiffness: 440, repeat: Infinity, duration: 2, delay: .4 }}
                        >
                            <div></div>
                            <span>Desarrollo mobile y web</span>
                        </motion.li>
                        <motion.li
                            animate={{ y: [0,10,0],filter:["drop-shadow(0px 0px 20px rgba(103, 58, 183,.3)", "drop-shadow(0px 0px 10px rgba(103, 58, 183,.3)"] }}
                            transition={{ type: "spring", stiffness: 440, repeat: Infinity, duration: 2, delay: .6 }}
                        >
                            <div></div>
                            <span>Rediseño de logo</span>
                        </motion.li>
                        <motion.li
                            animate={{ y: [0,10,0],filter:["drop-shadow(0px 0px 20px rgba(103, 58, 183,.3)", "drop-shadow(0px 0px 10px rgba(103, 58, 183,.3)"] }}
                            transition={{ type: "spring", stiffness: 440, repeat: Infinity, duration: 2, delay: .8 }}
                        >
                            <div></div>
                            <span>Producción audiovisual</span>
                        </motion.li>
                    </ElementsList>
                    <ToolsList>
                        <AnimatedListItem delay={.1} text="React JS" />
                        <AnimatedListItem delay={.2} text="React Native" />
                        <AnimatedListItem delay={.3} text="Wordpress" />
                        <AnimatedListItem delay={.4} text="Html" />
                        <AnimatedListItem delay={.5} text="JS" />
                        <AnimatedListItem delay={.6} text="Photoshop" />
                        <AnimatedListItem delay={.7} text="Premiere" />
                        <AnimatedListItem delay={.8} text="After effects" />
                        <AnimatedListItem delay={.9} text="Mysql" />
                    </ToolsList>
                </motion.div>
            </div >
            <Separator backgroundColor="#efefef" fill="#000" />
        </>
    )
}

export default SecondSection;