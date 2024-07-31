/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';

const LoveHoroscope = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [horoscope, setHoroscope] = useState('');

  const flirtyHoroscopes = [
    "Your charm is irresistible today. Your partner is super duper in love with you and might send you random pictures of himself today to impress you",
    "You look really hot today so your partner might ask you for some juicy thigh pics",
    "Watch out! Your partner may be feeling a bit sad today so cheer his mood up by sending some cute pictures with punyakoti",
    
    "Your love life is heating up! It's a perfect day for a passionate movie night.",
    "The stars align for a magical encounter. Dress to impress and let your confidence shine!",
    "Love and Blinkit both are  knocking at your door. Open your heart and let the romance flood in!"
  ];

  const generateHoroscope = (e) => {
    e.preventDefault();
    const randomIndex = Math.floor(Math.random() * flirtyHoroscopes.length);
    setHoroscope(flirtyHoroscopes[randomIndex]);
  };

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4">💖 Love Horoscope Generator 💖</h2>
      <Form onSubmit={generateHoroscope}>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Your Birthdate</Form.Label>
          <Form.Control
            type="date"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" type="submit">
            Reveal My Love Horoscope
          </Button>
        </div>
      </Form>
      {horoscope && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>💘 Your Love Horoscope, {name}! 💘</Card.Title>
            <Card.Text>{horoscope}</Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default LoveHoroscope;