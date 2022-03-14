import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from 'react-bootstrap';
import { Link } from "react-router-dom";


/*
function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">juando</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Portfolio" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">FPD</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Más Tenis / Set</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Playgames</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Ver todo</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
*/
const Navigation = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
    </>
  );
}

export default Navigation;


