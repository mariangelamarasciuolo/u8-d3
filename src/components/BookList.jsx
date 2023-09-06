import { Container, Row, Col, Card } from "react-bootstrap";
import library from "../data/books/romance.json";
import SingleBook from "./SingleBook";
const BookList = () => {
  return (
    <Container>
      <Row>
        {library.map((book, index) => {
          <SingleBook key={index} book={book} />;
          return (
            <Col xs={6} md={3} key={book.asin}>
              <Card>
                <Card.Img variant="top" src={book.img} style={{ objectFit: "content" }} />
                <Card.Body>
                  <Card.Title>{book.title} </Card.Title>
                  <Card.Text>{book.price} $</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default BookList;
