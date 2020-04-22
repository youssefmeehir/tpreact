import React, { useState, useEffect } from 'react';
import './App.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';

const BOOKS = [
  {id: 'EE1', title: 'Java', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Java'},
  {id: 'EE2',title: 'Laravel', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Laravel'},
  {id: 'EE3',title: 'PHP', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. PHP'},
  {id: 'EE4',title: 'ANGULAR', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante. Angular'}
]

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(BOOKS);
    console.log('useEffect');
  }, []);

  const searchBook = (bookName) => {
    const newBooks = BOOKS.filter(book => book.title.includes(bookName));
    console.log(newBooks);
    setBooks(newBooks);
  };

  return (
    
    <Container fluid>
      <Row>
        <Col>
          <Header/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Container>
            <Body books={books} onSearch={searchBook}/>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
