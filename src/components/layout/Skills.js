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
    width: 50%;
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
    return (
        <>
            <Section>
                <Container>
                    <Row>
                        <FirstTitle color="#000" textAlign="center">Habilidades</FirstTitle>
                        <Col lg={5}>
                            <Image src={`${process.env.PUBLIC_URL + '/img/brain.png'}`} alt="" />
                        </Col>
                        <Col lg={7}>
                            <List>
                                <ListItem>
                                    <span>Diseño UX / UI</span>
                                    <SkillDots>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <Dot></Dot>
                                    </SkillDots>
                                </ListItem>
                                <ListItem>
                                    <span>Desarrollo de productos</span>
                                    <SkillDots>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotHalfActive></DotHalfActive>
                                    </SkillDots>
                                </ListItem>
                                <ListItem>
                                    <span>Frontend - Dev</span>
                                    <SkillDots>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <Dot></Dot>
                                    </SkillDots>
                                </ListItem>
                                <ListItem>
                                    <span>App mobile - Dev</span>
                                    <SkillDots>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <Dot></Dot>
                                        <Dot></Dot>
                                    </SkillDots>
                                </ListItem>
                                <ListItem>
                                    <span>Backend - Dev</span>
                                    <SkillDots>
                                        <DotActive></DotActive>
                                        <DotActive></DotActive>
                                        <Dot></Dot>
                                        <Dot></Dot>
                                        <Dot></Dot>
                                    </SkillDots>
                                </ListItem>
                            </List>

                        </Col>
                    </Row>
                </Container>
            </Section>
            <Separator fill="#e9ecef" backgroundColor="white" />
        </>
    );
}

export default Skills;