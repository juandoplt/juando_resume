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
          <Link to="/juando_resume" className="navbar-brand">Juando</Link>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/juando_resume/portfolio" className="nav-link">Portfolio</Link>
              <Link to="/juando_resume/contact" className="nav-link">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />

    </>
  );
}

export default Navigation;


