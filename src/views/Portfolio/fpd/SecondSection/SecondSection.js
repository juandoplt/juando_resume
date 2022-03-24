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
} from "./SecondSection.styles";

import {
    transitionLi,
}
    from "./SecondSection.animations";



const SecondSection = () => {

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
                                transition={transitionLi}
                                whileTap={{
                                    rotateY: 180
                                }}
                            >
                                <div></div>
                                <span>Diseño UX/UI</span>
                            </motion.li>
                            <motion.li
                                transition={transitionLi}
                                whileTap={{
                                    rotateY: 180
                                }}
                            >
                                <div></div>
                                <span>Desarrollo mobile y web</span>
                            </motion.li>
                            <motion.li
                                transition={transitionLi}
                                whileTap={{
                                    rotateY: 180
                                }}
                            >
                                <div></div>
                                <span>Rediseño de logo</span>
                            </motion.li>
                            <motion.li
                                transition={transitionLi}
                                whileTap={{
                                    rotateY: 180
                                }}
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
                    </ProductAnimationContainer>
                </Container>
            </Product>
            <Separator backgroundColor="#efefef" fill="#000" translateY="-2px" />
        </>
    )
}

export default SecondSection;