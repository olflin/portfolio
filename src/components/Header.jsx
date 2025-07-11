import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import '../assets/styles/Header.css';

function Header() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="/" className="text-uppercase ">
                  John Doe
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar" />

                <Navbar.Collapse id="navbar">
                    <Nav className="ms-auto text-uppercase">
                        <NavLink to="/"   className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                        Home
                        </NavLink>

                        <NavLink to="/services" className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                          Services
                        </NavLink>

                        <NavLink to="/Portfolio" className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                          Portfolio
                        </NavLink>

                        <NavLink to="/contact" className={({ isActive }) =>
                            isActive ? "nav-link active" : "nav-link"
                        }>
                          Contact
                        </NavLink>

                        <NavLink to="/mentions" className="nav-link">
                          Mentions légales
                        </NavLink>
                  </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;