import { motion } from 'framer-motion';
import { Container } from 'react-bootstrap';
import AnimatedListItem from "../../../../components/portfolio/AnimatedListItem";
import Separator from '../../../../components/general/Separator';

import {
    ToolsList,
    ElementsList,
    Product,
    ProductTitle,
    ProductAnimationContainer,
} from "./ProductDescriptionSection.styles";

import {
    transitionLi,
}
    from "./ProductDescriptionSection.animations";



const ProductDescriptionSection = () => {

    return (
        <>
            <Product>
                <Container>
                    <ProductAnimationContainer
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: .5 }}
                        viewport={{ once: true }}
                    >
                        <ProductTitle>Características del producto</ProductTitle>
                        <ElementsList>
                            <motion.li
                                transition={{ duration: .5, delay: .5 }}
                                whileInView={{ background: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"] }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    whileInView={{ y: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: .5 }}
                                    src={`${process.env.PUBLIC_URL + '/img/design_ux_icon.png'}`}
                                />
                                <span>Diseño UX/UI</span>
                            </motion.li>
                            <motion.li
                                transition={{ duration: .5, delay: 1.2 }}
                                whileInView={{ background: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"] }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    whileInView={{ y: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: .9}}
                                    src={`${process.env.PUBLIC_URL + '/img/mobile_development_icon.png'}`}
                                />
                                <span>Desarrollo mobile y web</span>
                            </motion.li>
                            <motion.li
                                transition={{ duration: .5, delay: 1.5 }}
                                whileInView={{ background: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"] }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    whileInView={{ y: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
                                    src={`${process.env.PUBLIC_URL + '/img/logo_design_icon.png'}`}
                                />

                                <span>Rediseño de logo</span>
                            </motion.li>
                            <motion.li
                                transition={{ duration: .5, delay: 1.7 }}
                                whileInView={{ background: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"] }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    whileInView={{ y: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 1.5 }}
                                    src={`${process.env.PUBLIC_URL + '/img/audiovisual_production_icon.png'}`}
                                />
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
                    </ProductAnimationContainer>
                </Container>
            </Product>
            <Separator backgroundColor="#efefef" fill="#000" translateY="-2px" />
        </>
    )
}

export default ProductDescriptionSection;