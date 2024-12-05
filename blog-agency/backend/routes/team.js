const express = require('express');
const Team = require('../models/Team');
const router = express.Router();

// Get all team members
router.get('/', async (req, res) => {
  try {
    const team = await Team.find();
    res.json(team);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Create a new team member
router.post('/', async (req, res) => {
  try {
    const teamMember = new Team(req.body);
    await teamMember.save();
    res.json(teamMember);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

// Update a team member
router.put('/:id', async (req, res) => {
  try {
    const updatedTeamMember = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTeamMember);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data or ID not found' });
  }
});

// Delete a team member
router.delete('/:id', async (req, res) => {
  try {
    await Team.findByIdAndDelete(req.params.id);
    res.json({ message: 'Team member deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
