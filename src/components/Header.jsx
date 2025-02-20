import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { FaHome, FaOilCan, FaTools } from "react-icons/fa";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar className="header" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">360 CARWASH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/">INICIO</Nav.Link>

            <div
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavDropdown
                title="SERVICIOS"
                id="basic-nav-dropdown"
                show={showDropdown}
                className="custom-dropdown"
              >
                <div className="custom-dropdown-menu">
                  <div className="custom-dropdown-item">
                    <a href="/360carwash" className="company-services"><FaHome /> 360 CARWASH</a>
                    <a href="#">Servicio 1</a>
                    <a href="#">Servicio 2</a>
                    <a href="#">Servicio 3</a>
                  </div>
                  
                  <div className="custom-dropdown-item">
                    <a href="/360otra" className="company-services"><FaOilCan /> 360 OTRA</a>
                    <a href="#">Servicio 1</a>
                    <a href="#">Servicio 2</a>
                    <a href="#">Servicio 3</a>
                    <a href="#">Servicio 4</a>
                  </div>
                  
                  <div className="custom-dropdown-item">
                    <a href="/360otra2" className="company-services"><FaTools /> 360 OTRA 2</a>
                    <a href="#">Servicio 1</a>
                    <a href="#">Servicio 2</a>
                  </div>
                </div>
              </NavDropdown>
            </div>

            <Nav.Link href="#about">NOSOTROS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
