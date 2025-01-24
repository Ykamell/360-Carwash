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

    {/* <Carousel>
      <Carousel.Item>
        <div className="carousel-image-with-overlay">
          <img
            className="d-block w-100"
            src={CarWashImg}
            alt="First slide"
          />
        </div>
        <Carousel.Caption>
          <h2>Caring for Your Car Like Our Own</h2>
          <p>Reliable services to keep your vehicle in top condition.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-with-overlay">
          <img
            className="d-block w-100"
            src={CarWashImg}
            alt="Second slide"
          />
        </div>
        <Carousel.Caption>
          <h2>Second slide label</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel-image-with-overlay">
          <img
            className="d-block w-100"
            src={CarWashImg}
            alt="Third slide"
          />
        </div>
        <Carousel.Caption>
          <h2>Third slide label</h2>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

    </>
  );
};

export default Hero;


