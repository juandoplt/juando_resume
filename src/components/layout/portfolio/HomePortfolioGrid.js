import {
    Row,
    Container,
    Col
} from 'react-bootstrap';
import { motion } from 'framer-motion';

import styled from 'styled-components';
import { Paragraph, Title } from '../../text';
import Section from '../../general/Section';
import Separator from '../../general/Separator';
import HomeGridItem from './HomeGridItem';
import { Link } from 'react-router-dom';

const FirstTitle = styled(Title)`
    margin-bottom: 3rem;
    font-size:2rem;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 10%;
        display: block;
        margin: 1rem auto;
    }
    @media (min-width: 576px) { 
        font-size: 2.5rem;
     }
`

const PortfolioLink = styled(Link)`
    text-align: center;
    padding: 1rem;
    width: 290px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:#000;
    border: 1px solid #3c3c3c;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    margin: 2rem auto;
    -webkit-transition: all .4s ease-in-out;
    -moz-transition: all .4s ease-in-out;
    -ms-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    &:hover{
        color:#fff;
        background:#6800f9;
        border:1px solid #4a1691;
        box-shadow:0 0 20px rgba(0,0,0,0.5)
    }
`


const HomePortfolioGrid = () => {
    return (
        <>
            <Separator fill="white" backgroundColor="#212529" />
            <Section paddingBottom="5%" paddingTop="5%" backgroundColor="#212529">
                <Container>
                    <Row>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .4 }}
                            viewport={{ once: true }}
                        >
                            <FirstTitle textAlign="center" color="#fff" textTransform="uppercase" fontWeight="bold">Mi experiencia</FirstTitle>
                        </motion.div>

                        <HomeGridItem
                            to="/fpd"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_fpd.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/fpd_logo.png'}`}
                            delay={.2}
                        />
                        <HomeGridItem
                            to="/laddercup"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_ladder.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/ladder_logo.png'}`}
                            marginBottom="1.5"
                            delay={.4}

                        />
                        <HomeGridItem
                            to="/playgames"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_playgames.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/playgames_logo.png'}`}
                            delay={.6}

                        />
                        <HomeGridItem
                            to="/mastenis"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_mastenis.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/mastenis_logo.png'}`}
                            delay={.8}

                        />
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .4 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                animate={{ y: [-5, 0, -5] }}
                                transition={{ type: "spring", stiffness: 0, repeat: Infinity, duration: 2 }}
                            >
                                <PortfolioLink to="/portfolio">
                                    Ver más trabajos
                                </PortfolioLink>
                            </motion.div>
                        </motion.div>
                    </Row>
                </Container>
            </Section>
        </>
    );
}

export default HomePortfolioGrid;