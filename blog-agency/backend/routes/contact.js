const express = require('express');
const Contact = require('../models/Contact');
const router = express.Router();

// Get all messages
router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find();
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Submit a new message
router.post('/', async (req, res) => {
  try {
    const message = new Contact(req.body);
    await message.save();
    res.json({ message: 'Message sent successfully' });
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Delete a message
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
