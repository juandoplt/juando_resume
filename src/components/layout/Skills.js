import {
    Row,
    Container,
    Col
} from 'react-bootstrap';


const Skills = () => {
    return (
        <Container className="portfolioGrid">
            <Row>
                <Col lg={6} style={{ paddingBottom: 12 }}>
                Habilidades
                Diseño UX / UI
Desarrollo de productos
Frontend - Dev
App mobile - Dev
Backend - Dev

                </Col>
            </Row>
        </Container>
    );
}

export default Skills;