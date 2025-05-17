const express = require('express');
const router = express.Router();
const Blog = require('../models/Blog');

// Save or update a draft
router.post('/save-draft', async (req, res) => {
  const { id, title, content, tags } = req.body;

  try {
    if (id) {
      const blog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags,
          status: 'draft',
          updated_at: new Date()
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const newBlog = await Blog.create({
        title,
        content,
        tags,
        status: 'draft',
        created_at: new Date(),
        updated_at: new Date()
      });
      res.json(newBlog);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error saving draft', details: err });
  }
});

// Publish blog
router.post('/publish', async (req, res) => {
  const { id, title, content, tags } = req.body;

  try {
    if (id) {
      const blog = await Blog.findByIdAndUpdate(
        id,
        {
          title,
          content,
          tags,
          status: 'published',
          updated_at: new Date()
        },
        { new: true }
      );
      res.json(blog);
    } else {
      const newBlog = await Blog.create({
        title,
        content,
        tags,
        status: 'published',
        created_at: new Date(),
        updated_at: new Date()
      });
      res.json(newBlog);
    }
  } catch (err) {
    res.status(500).json({ error: 'Error publishing blog', details: err });
  }
});

// Get all blogs
router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ updated_at: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blogs', details: err });
  }
});

// Get blog by ID
router.get('/:id', async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching blog', details: err });
  }
});

module.exports = router;
