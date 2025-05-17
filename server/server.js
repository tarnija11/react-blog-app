const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // for .env config

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const blogRoutes = require('./routes/blogs');
app.use('/api/blogs', blogRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => console.error('MongoDB connection error:', err));
