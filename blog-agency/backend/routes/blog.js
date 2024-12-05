const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Get all blogs
router.get('/', async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Create a new blog
router.post('/', async (req, res) => {
  const blog = new Blog(req.body);
  await blog.save();
  res.json(blog);
});

// Update a blog
router.put('/:id', async (req, res) => {
  const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(blog);
});

// Delete a blog
router.delete('/:id', async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.json({ message: 'Blog deleted' });
});

module.exports = router;
