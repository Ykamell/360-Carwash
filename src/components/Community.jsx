import { Container } from "react-bootstrap";
import firstImg from "../assets/car-wash.jpeg";
import secondImg from "../assets/DSC08500.webp";
import thirdImg from "../assets/hero_PN1305_HowOftenWashCar_Header-1.jpg";
import fourthImg from "../assets/istockphoto-1287044692-612x612.jpg";

const images = [
  { id: 1, img: firstImg },
  { id: 2, img: secondImg },
  { id: 3, img: thirdImg },
  { id: 4, img: fourthImg }
];

export const Community = () => {
  return (
    <Container className="community-container">
      <h2>ÚNETE A NUESTRA COMUNIDAD</h2>
      <div className="divider-title"></div>
      <a href='https://www.instagram.com/360carwash/' target='_blank' className="community-images">
        {images.map((image) => (
          <img key={image.id} src={image.img} alt={`Imagen ${image.id}`} />
        ))}
      </a>
    </Container>
  );
};