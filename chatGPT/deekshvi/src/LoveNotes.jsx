/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const LoveNotes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([...notes, newNote]);
      setNewNote('');
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-center mb-4">Love Notes</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control 
            as="textarea" 
            rows={3} 
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Write a love note..."
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Note
        </Button>
      </Form>
      <div className="mt-4">
        {notes.map((note, index) => (
          <Card key={index} className="mb-2">
            <Card.Body>{note}</Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LoveNotes;