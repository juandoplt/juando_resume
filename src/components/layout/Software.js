import { motion } from 'framer-motion';
import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled from 'styled-components';
import Separator from '../general/Separator';
import { Paragraph, Title } from '../text';


const Section = styled.div`
    padding-top:6rem;
    padding-bottom:5rem;
    background: #6800f9;
    background: -moz-linear-gradient(top, #6800f9 0%, #8963e2 100%);
    background: -webkit-linear-gradient(top, #6800f9 0%, #8963e2 100%);
    background: linear-gradient(to bottom, #6800f9 0%, #8963e2 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#6800f9', endColorstr='#8963e2', GradientType=0);
`

const FirstTitle = styled(Title)`
    margin-bottom: 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    color:#fff;
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

const List = styled.ul`
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
    flex-wrap: wrap;
    align-items: center;
`

const Image = styled.img`
    max-width: 50px;
`

const WhiteImage = styled.img`
    filter: brightness(0) invert(1);
`

const ListItem = styled.li`
    text-align: center;
    margin: 0.5rem 0;
    min-height: 100px;
    width: 30%;
    @media (min-width: 576px) { 
        width: 10%;
     }
`

const Software = () => {
    return (
        <>
            <Separator fill="#FFF" backgroundColor="#6800f9" />
            <Section>
                <Container>
                    <Row>
                        <Col>
                            <motion.div
                                initial={{ opacity: 0,y:10}}
                                whileInView={{ opacity: 1,y:0 }}
                                transition={{ delay: .4 }}
                                viewport={{ once: true }}
                            >
                                <FirstTitle textAlign="center" fontWeight="bold">Herramientas, software y técnicas más ulitizados en mi carrera.</FirstTitle>
                            </motion.div>
                            <List>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .2 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/ps_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Photoshop</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .3 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/ai_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Illustrator</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .4 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/xd_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Adobe XD</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .5 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/ae_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">After Effects</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .6 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/premiere_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Premiere</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .7 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/sketch_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Sketch</Paragraph>
                                    </motion.div>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .8 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/xcode_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Xcode</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: .9 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/github_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Github</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/vs_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">VS Code</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/react_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">React</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/php_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">PHP</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/mysql_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Mysql</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <Image src={`${process.env.PUBLIC_URL + '/img/js_icon.png'}`} alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">JS</Paragraph>
                                    </motion.div>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.5 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/wp_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Wordpress</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.6 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/jekyll_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Jekyll</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.7 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/camera_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Fotografía</Paragraph>
                                    </motion.div>
                                </ListItem>
                                <ListItem>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        transition={{ delay: 1.8 }}
                                        viewport={{ once: true }}
                                    >
                                        <WhiteImage src={`${process.env.PUBLIC_URL + '/img/pencil_icon.png'}`} className="invert_colour" alt="" />
                                        <Paragraph size=".8rem" color="#FFF" textAlign="center">Prototipos</Paragraph>
                                    </motion.div>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <Separator fill="#8963e2" backgroundColor="#FFFFFF" />
        </>
    );
}

export default Software;