require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db'); // Correct import for the connectDB function

const userRoutes = require('./routes/userRoutes'); // User routes

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes); // All user-related routes

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
