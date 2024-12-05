const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/blogs', require('./routes/blogs'));
app.use('/api/services', require('./routes/services'));
app.use('/api/team', require('./routes/team'));
app.use('/api/contact', require('./routes/contact'));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
