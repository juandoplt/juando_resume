import { Col, Row, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    display: flex; 
    justify-content: space-between;
    flex-direction:column;
    padding:0;
    margin:0;
    @media (min-width: 576px) { 
        max-width:50%;
        margin:0 auto;
        flex-direction:row;
    }
`


const Footer = () => {
    return (
        <Container style={{ paddingTop: "2rem",paddingBottom:"2rem" }}>
            <Row>
                <Col>
                    <List>
                        <li><Link to="/" style={{ fontSize: ".7rem", textDecoration: "none", color: "#000", textTransform: "uppercase", fontWeight: "600" }}>Inicio</Link></li>
                        <li><Link to="/portfolio" style={{ fontSize: ".7rem", textDecoration: "none", color: "#000", textTransform: "uppercase", fontWeight: "600" }}>Portfolio</Link></li>
                        <li><Link to="/contacto" style={{ fontSize: ".7rem", textDecoration: "none", color: "#000", textTransform: "uppercase", fontWeight: "600" }}>Contacto</Link></li>
                        <li><a href="" target="_blank" style={{ fontSize: ".7rem", textDecoration: "none", color: "#000", textTransform: "uppercase", fontWeight: "600" }}>Curriculum</a></li>
                        <li><a href="" target="_blank" style={{ fontSize: ".7rem", textDecoration: "none", color: "#000", textTransform: "uppercase", fontWeight: "600" }}>Linkedin</a></li>
                        <li><a href="" target="_blank" style={{ fontSize: ".7rem", textDecoration: "none", color: "#000", textTransform: "uppercase", fontWeight: "600" }}>Behance</a></li>
                    </List>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;