import React from 'react';
import { Card } from 'react-bootstrap';


const Book = ({book}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Header>{book.title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>
              {book.description}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
  )
}

export default Book;