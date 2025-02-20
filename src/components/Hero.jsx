import { Container, Button } from 'react-bootstrap';
import CarWashImg from '../assets/medium_banner_2.jpg';
// import Carousel from 'react-bootstrap/Carousel';

const Hero = () => {
  return (
    <>
      <div
        className="home-banner d-flex align-items-center text-white"
        style={{
          backgroundImage: `url(${CarWashImg})`,
        }}
      >
        <Container className='home-banner-text'>
          <h1 className="mb-4 home-banner-title">AQUI VA EL TITULO</h1>
          <p className="mb-4">Cuidamos tu carro como si fuese nuestro propio carro.</p>
          <Button className="home-banner-btn" >VER SERVICIOS</Button>
        </Container>
      </div>

    </>
  );
};

export default Hero;


