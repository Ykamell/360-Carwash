import { Carousel, Card, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Juan Pérez",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "Excelente servicio, realmente quedé sorprendido con la calidad.",
  },
  {
    id: 2,
    name: "María Rodríguez",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "Muy profesionales y atentos. Recomiendo totalmente.",
  },
  {
    id: 3,
    name: "Carlos Gómez",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Una experiencia increíble, superaron mis expectativas.",
  },
  {
    id: 4,
    name: "María Rodríguez",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "4 Muy profesionales y atentos. Recomiendo totalmente.",
  },
  {
    id: 5,
    name: "Carlos Gómez",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "5 Una experiencia increíble, superaron mis expectativas.",
  },
];

export const Clients = () => {
  return (
    <Container className="client-container">
      <h2 className="text-center mb-4">NUESTROS CLIENTES</h2>
      <div className="divider-title"></div>
      <Container className="mobile-clients-card-container">
        <Carousel>
          {testimonials.map((testimonial) => (
            <Carousel.Item key={testimonial.id} className="text-center">
              <Card className="client-card">
                <Card.Img
                  variant="top"
                  src={testimonial.image}
                  className="rounded-circle"
                />
                <Card.Body>
                  <Card.Text className="fw-bold"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></Card.Text>
                  <Card.Text className="fw-bold">{testimonial.name}</Card.Text>
                  <Card.Text className="card-text-body"> &quot;{testimonial.review}&quot;  </Card.Text>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </Container>
  );
}
