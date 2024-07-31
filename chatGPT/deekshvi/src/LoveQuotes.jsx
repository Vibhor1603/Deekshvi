/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const LoveQuotes = () => {
  const quotes = [
    "I love you not only for what you are, but for what I am when I am with you.",
    "You are my today and all of my tomorrows.",
    "You are my forever wala pyar ",
    "In all the world, there is no heart for me like yours.",
    "I love you more than I have ever found a way to say to you.",
    "You are the finest, loveliest, tenderest, HOTTEST!!! and most beautiful person I have ever known—and even that is an understatement.",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="mb-4">
      <h2 className="text-center">Love Quotes</h2>
      <Card className="text-center">
        <Card.Body>
          <Card.Text>{currentQuote}</Card.Text>
          <Button variant="primary" onClick={getRandomQuote}>Generate New Quote</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoveQuotes;