import { motion } from 'framer-motion';

import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled from 'styled-components';
import Separator from '../general/Separator';
import { Paragraph, Title } from '../text';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animations/brain.json'

const RealRow = styled(Row)`
    align-items: center;
    overflow:hidden;
`

const Section = styled.div`
    padding-top:3rem;
    padding-bottom:4rem;
    background: #e9ecef;
`

const FirstTitle = styled(Title)`
    margin-bottom:3rem;
    font-size: 2.5rem;
    text-transform:uppercase;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 10%;
        display: block;
        margin: 1rem auto;
    }
`

const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 100%;
    @media (min-width: 576px) { 
        width: 50%;
     }
`

const ListItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SkillDots = styled.div`
    display: flex;
    flex-direction: row;
`

const Dot = styled.span`
    display: block;
    margin: 0 0.2rem;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #d0c1ec;
`

const DotHalfActive = styled(Dot)`
    background: #673ab7;
    background: -moz-linear-gradient(left, #673ab7 0%, #673ab7 50%, #d0c1ec 50%, #d0c1ec 100%);
    background: -webkit-linear-gradient(left, #673ab7 0%, #673ab7 50%, #d0c1ec 50%, #d0c1ec 100%);
    background: linear-gradient(to right, #673ab7 0%, #673ab7 50%, #d0c1ec 50%, #d0c1ec 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#673ab7', endColorstr='#d0c1ec', GradientType=1);
`

const DotActive = styled(Dot)`
    background-color: #673ab7;
`

const Image = styled.img`
    max-width: 30%;
    margin:0 0 0 auto;
    display:block;
`


const Skills = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        controls: false,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };


    return (
        <>
            <Section>
                <Container>
                    <RealRow>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: .4 }}
                            viewport={{ once: true }}
                        >
                            <FirstTitle color="#000" textAlign="center" fontWeight="bold">Habilidades</FirstTitle>
                        </motion.div>
                        <Col lg={5}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: .2 }}
                                viewport={{ once: true }}
                            >
                                <Lottie
                                    options={defaultOptions}
                                    height="100%"
                                    width="100%"
                                    style={{
                                        pointerEvents: "none"
                                    }}
                                />
                            </motion.div>
                        </Col>
                        <Col lg={7}>
                            <motion.div
                                initial={{ opacity: 0,y:-10 }}
                                whileInView={{ opacity: 1,y:0 }}
                                transition={{ delay: .3 }}
                                viewport={{ once: true }}
                            >
                                <List>
                                    <ListItem>
                                        <span>Diseño UX / UI</span>
                                        <SkillDots>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .2 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .3 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .4 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .5 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .6 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                        </SkillDots>
                                    </ListItem>
                                    <ListItem>
                                        <span>Desarrollo de productos</span>
                                        <SkillDots>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .7 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .8 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: .9 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotHalfActive></DotHalfActive>
                                            </motion.div>
                                        </SkillDots>
                                    </ListItem>
                                    <ListItem>
                                        <span>Frontend - Dev</span>
                                        <SkillDots>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.3 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                        </SkillDots>
                                    </ListItem>
                                    <ListItem>
                                        <span>App mobile - Dev</span>
                                        <SkillDots>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.7 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.8 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 1.9 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                        </SkillDots>
                                    </ListItem>
                                    <ListItem>
                                        <span>Backend - Dev</span>
                                        <SkillDots>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.2 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.3 }}
                                                viewport={{ once: true }}
                                            >
                                                <DotActive></DotActive>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.4 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 2.6 }}
                                                viewport={{ once: true }}
                                            >
                                                <Dot></Dot>
                                            </motion.div>
                                        </SkillDots>
                                    </ListItem>
                                </List>
                            </motion.div>
                        </Col>
                    </RealRow>
                </Container>
            </Section>
            <Separator fill="#e9ecef" backgroundColor="white" />
        </>
    );
}

export default Skills;