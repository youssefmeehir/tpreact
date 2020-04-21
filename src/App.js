import React from 'react';
import './App.css';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import Header from './components/Header';
import Body from './components/Body';

function App() {
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
            <Body/>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
