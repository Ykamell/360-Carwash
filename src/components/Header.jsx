import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='header' expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">360 CARWASH</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">INICIO</Nav.Link>
            <Nav.Link href="#services">SERVICIOS</Nav.Link>
            <Nav.Link href="#about">NOSOTROS</Nav.Link>
            <Nav.Link href="#contact">CONTACTANOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
