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

const FirstTitle = styled(Title)`
    margin-bottom: 3rem;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 10%;
        display: block;
        margin: 1rem auto;
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
                            <FirstTitle textAlign="center" color="#fff" textTransform="uppercase" size="2.5rem" fontWeight="bold">Mi experiencia</FirstTitle>
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
                            to="/laddercup"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_playgames.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/playgames_logo.png'}`}
                            delay={.6}

                        />
                        <HomeGridItem
                            to="/laddercup"
                            backgroundImage={`url(${process.env.PUBLIC_URL + '/img/background_mastenis.jpg'})`}
                            logoImage={`${process.env.PUBLIC_URL + '/img/mastenis_logo.png'}`}
                            delay={.8}

                        />
                    </Row>
                </Container>
            </Section>
        </>
    );
}

export default HomePortfolioGrid;