import { Container, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className="py-5 bg-light" id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Form>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Your Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="success" type="submit">
          Send
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
