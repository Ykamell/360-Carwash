import { Container, Accordion, Button } from "react-bootstrap"
import backgroundImage from "../../assets/muebles.jpeg"

export const SecondCompany = () => {
  return (
    <>
      <div
        className="company-banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="mb-4 company-banner-title">360 OTRA</h1>
      </div>
      <Container className="company-services-container">
        <h2> Nuestros servicios </h2>
        <div className="divider-title"></div>
        <Accordion className="services-accordions" defaultActiveKey="0">
          <Accordion.Item className="services-accordions-button" eventKey="0">
            <Accordion.Header>Servicio #1</Accordion.Header>
            <Accordion.Body>
              <h5>Descripción del servicio</h5>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h6>Precio: $ 100.000</h6>
              <Button>Reservar</Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-accordions-button" eventKey="1">
            <Accordion.Header>Servicio #2</Accordion.Header>
            <Accordion.Body>
              <h5>Descripción del servicio</h5>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h6>Precio: $ 100.000</h6>
              <Button>Reservar</Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-accordions-button" eventKey="2">
            <Accordion.Header>Servicio #3</Accordion.Header>
            <Accordion.Body>
              <h5>Descripción del servicio</h5>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h6>Precio: $ 100.000</h6>
              <Button>Reservar</Button>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="services-accordions-button" eventKey="3">
            <Accordion.Header>Servicio #4</Accordion.Header>
            <Accordion.Body>
              <h5>Descripción del servicio</h5>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h6>Precio: $ 100.000</h6>
              <Button>Reservar</Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  )
}
