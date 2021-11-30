import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import contact from "./../../../images/contact.jpg";

const Contact = () => {
  return (
    <Container className="py-5">
      <Row>
        <h2 className="text-center">Contact Me</h2>
        <div className="col-lg-6">
          <img src={contact} alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 pt-5">
          <Form
            action="https://formsubmit.co/mahabubimon@yahoo.com"
            method="POST"
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name:</Form.Label>
              <Form.Control type="text" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" name="message" rows="10" required />
            </Form.Group>
            <Button type="submit">Send Message</Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
