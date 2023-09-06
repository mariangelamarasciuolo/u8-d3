/* import React, { Component } from "react"; */
import { Container, Row, Col, Card } from "react-bootstrap";
import library from "../data/books/romance.json";

const SingleBook = () => {
  const primoLibro = library[0];
  return (
    <Container>
      <Row>
        <Col md={4} className="mb-3">
          <Card>
            <Card.Img variant="top" src={primoLibro.img} alt={primoLibro.title} />
            <Card.Body>
              <Card.Title>{primoLibro.title}</Card.Title>
              <Card.Text>{primoLibro.price}€</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default SingleBook;
