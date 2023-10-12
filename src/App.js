import logo from './assets/images/star-logo.png';
import './App.css';
import React from 'react';

import {
  Button,
  Row,
  Container
} from 'react-bootstrap';
import Starships from './components/starships';

function App() {

  return (
    <Container fluid="md" > 
      <header className="App-header">
        <img src={logo} className="star-logo" alt="Star CACI" />
      </header>
      <section>
        <Button className='btn-get-stars'  >Get Starships</Button>
      </section>
      <Row>
        <Starships />
      </Row>

    </Container>
  );
}


export default App;
