import React, { useState } from 'react';
import { Card, Col, Container, Row, Form, Button } from 'react-bootstrap';
import Book from './Book';
import BookSearch from './BookSearch';
import {
  Link
} from "react-router-dom";

const BookView = ({books, onSearch}) => {

  const searchBook = (bookTitle) => {
    onSearch(bookTitle)
  }

  return (
    <Container>
      <Row>
        <Col>
          <BookSearch onSearch={searchBook}/>        
        </Col>
      </Row>
      <Row>
      <Link to="/books/new">About</Link>
      </Row>
      <Row>
          {
            books.map((book) => <Col  key={book.isbn}><Book book={book}/></Col>)
          }
      </Row>
    </Container>
  )
};


export default BookView;