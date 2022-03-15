import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


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
      <Navbar bg="light" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">Juando</Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
              <Link to="/portfolio/fpd" className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

    </>
    // <>
    //   <Link to="/">Home</Link>
    //   <Link to="/about">About</Link>
    //   <Link to="/portfolio">Portfolio</Link>
    //   <Link to="/contact">Contact</Link>
    // </>
  );
}

export default Navigation;


