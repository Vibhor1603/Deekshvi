/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const LoveCalculator = () => {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculateLove = (e) => {
    e.preventDefault();
    // This is a fun, non-scientific calculation
    const loveScore = Math.floor(Math.random() * 5)+ 96;
    setResult(loveScore);
  };

  return (
    <div className="mb-4">
      <h2 className="text-center">Love Calculator</h2>
      <Form onSubmit={calculateLove}>
        <Form.Group className="mb-3">
          <Form.Label>Enter Name</Form.Label>
          <Form.Control 
            type="text" 
            value={name1}
            onChange={(e) => setName1(e.target.value)}
            required
          />
        </Form.Group>+
        <Form.Group className="mb-3">
          <Form.Label>Enter Second Name</Form.Label>
          <Form.Control 
            type="text" 
            value={name2}
            onChange={(e) => setName2(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">Calculate Love</Button>
      </Form>
      {result !== null && (
        <Alert variant="success" className="mt-3">
          The love score between {name1} and {name2} is {result}%!
          {result > 80 && " Wow, that's true love!"}
          {result > 60 && result <= 80 && " That's a strong connection!"}
          {result > 40 && result <= 60 && " There's potential here!"}
          {result <= 40 && " Keep working on your relationship!"}
        </Alert>
      )}
    </div>
  );
};

export default LoveCalculator;