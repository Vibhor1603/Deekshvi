/* eslint-disable no-unused-vars */
import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import ImageCarousel from './ImageCarousel';
import Timeline from './Timeline';
import LoveNotes from './LoveNotes';
import MemoryGame from './MemoryGame';
import LoveQuotes from './LoveQuotes';
import VirtualGifts from './VirtualGifts';
import LoveCalculator from './LoveCalculator';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Navbar bg="tertiary" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className='nav-name'>
         
            <h1>Deekshvi</h1> 
          </Navbar.Brand>
        </Container>
      </Navbar>
      
      <Container className="mt-4">
        <ImageCarousel />
        <Timeline />
        <LoveNotes />
        <LoveQuotes />
        <VirtualGifts />
        <LoveCalculator />
        <MemoryGame />
      </Container>
      
      <footer className="text-center mt-4 pb-2">
        <p>© 2023 Deekshvi - Our Love Story</p>
      </footer>
    </div>
  );
};

export default App;