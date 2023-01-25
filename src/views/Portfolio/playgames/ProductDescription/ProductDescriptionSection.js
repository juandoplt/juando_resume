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
                                transition={{ duration: .3, delay: .3 }}
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
                                transition={{ duration: .5, delay: .5 }}
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
                                transition={{ duration: .5, delay: .8 }}
                                whileInView={{ background: ["rgba(255,255,255,1)", "rgba(255,255,255,0)"] }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    whileInView={{ y: [1, 0, 1] }}
                                    transition={{ repeat: Infinity, duration: 2, delay: 1.2 }}
                                    src={`${process.env.PUBLIC_URL + '/img/logo_design_icon.png'}`}
                                />

                                <span>Diseño de identidad</span>
                            </motion.li>
                            </ElementsList>
                        <ToolsList>
                            <AnimatedListItem delay={.1} text="Html" />
                            <AnimatedListItem delay={.2} text="CSS" />
                            <AnimatedListItem delay={.3} text="React Native" />
                            <AnimatedListItem delay={.4} text="Photoshop" />
                            <AnimatedListItem delay={.5} text="Illustrator" />
                            <AnimatedListItem delay={.6} text="Mysql" />
                            <AnimatedListItem delay={.7} text="Php" />
                        </ToolsList>
                    </ProductAnimationContainer>
                </Container>
            </Product>
            <Separator backgroundColor="#322F41" fill="#D30558" translateY="-2px" />
        </>
    )
}

export default ProductDescriptionSection;