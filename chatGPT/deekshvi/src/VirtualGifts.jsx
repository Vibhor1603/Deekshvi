/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const VirtualGifts = () => {
  const gifts = [
    { name: 'Virtual Flower', emoji: '🌹' },
    { name: 'Virtual Chocolate', emoji: '🍫' },
    { name: 'Virtual Teddy Bear', emoji: '🧸' },
    { name: 'Virtual Heart', emoji: '❤️' },
    { name: 'Virtual Kiss', emoji: '💋' },
    { name: 'Virtual Hug', emoji: '🤗' },
  ];

  const [sentGifts, setSentGifts] = useState([]);

  const sendGift = (gift) => {
    setSentGifts([...sentGifts, gift]);
  };

  return (
    <div className="mb-4">
      <h2 className="text-center">Send Virtual Gifts</h2>
      <Row>
        {gifts.map((gift, index) => (
          <Col key={index} xs={6} md={4} className="mb-3">
            <Card className="text-center">
              <Card.Body>
                <Card.Title>{gift.emoji}</Card.Title>
                <Card.Text>{gift.name}</Card.Text>
                <Button variant="primary" onClick={() => sendGift(gift)}>Send</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {sentGifts.length > 0 && (
        <div className="mt-4">
          <h3>Sent Gifts</h3>
          <p>{sentGifts.map(gift => gift.emoji).join(' ')}</p>
        </div>
      )}
    </div>
  );
};

export default VirtualGifts;