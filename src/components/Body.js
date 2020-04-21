import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Book from './Book';

const BOOKS = [
  {title: 'Java', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Java'},
  {title: 'Laravel', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Laravel'},
  {title: 'PHP', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. PHP'},
  {title: 'ANGULAR', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Angular'}
]
const Body = () => {
  return (
    <Container>
      <Row>
        <Col>
          <input type="text" />
          <button>search</button>
        </Col>
      </Row>
      <Row>
          {
            BOOKS.map((book, key) => <Col><Book book={book} key={key}/></Col>)
          }
      </Row>
    </Container>
  )
};

export default Body;