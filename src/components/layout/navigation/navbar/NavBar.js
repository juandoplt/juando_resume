import {
  Nav,
  Navbar,
  Container,
  NavDropdown,
} from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg" fixed="top" variant="dark">
        <Container>
          <Link to="/" className="navbar-brand">Juando</Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

    </>
  );
}

export default Navigation;


