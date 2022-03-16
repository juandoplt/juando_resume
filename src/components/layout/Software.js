import {
    Row,
    Container,
    Col
} from 'react-bootstrap';

import styled from 'styled-components';
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
    color: #fff;
    margin-bottom:3rem;
    &:after{
        content: '';
        height: 2px;
        background: #d5d5d5;
        width: 20%;
        display: block;
        margin: 1rem auto;
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
    max-width: 35px;
`

const ListItem = styled.li`
    text-align: center;
    margin: 0.5rem 0;
    width: 10%;
    min-height: 100px;
`

const Software = () => {
    return (
        <>
            <div style={{background: "#6800f9"}}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{fill:" #fff"}}></path>
                </svg>
            </div>
            <Section>
                <Container>
                    <Row>
                        <Col>
                            <FirstTitle textAlign="center">Herramientas, software y técnicas más ulitizados en mi carrera.</FirstTitle>

                            <List>
                                <ListItem>

                                    <Image src={`${process.env.PUBLIC_URL + '/img/ps_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Photoshop</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/ai_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Illustrator</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/xd_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Adobe XD</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/ae_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">After Effects</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/premiere_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Premiere</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/sketch_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Sketch</Paragraph>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/xcode_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Xcode</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/github_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Github</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/vs_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">VS Code</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/react_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">React</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/php_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">PHP</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/mysql_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Mysql</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/js_icon.png'}`} alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">JS</Paragraph>
                                </ListItem>
                            </List>

                            <List>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/wp_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Wordpress</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/jekyll_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Jekyll</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/camera_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Fotografía</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Image src={`${process.env.PUBLIC_URL + '/img/pencil_icon.png'}`} className="invert_colour" alt="" />
                                    <Paragraph size=".8rem" color="#FFF" textAlign="center">Prototipos</Paragraph>
                                </ListItem>
                            </List>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <div>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" style={{ fill: "#8963e2" }}></path>
                </svg>
            </div>
        </>
    );
}

export default Software;