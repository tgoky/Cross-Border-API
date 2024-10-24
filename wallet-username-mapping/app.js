require('dotenv').config();
const express = require('express');
const cors = require('cors'); // Import CORS
const connectDB = require('./config/db'); // Correct import for the connectDB function

const userRoutes = require('./routes/userRoutes'); // User routes

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for the frontend at localhost:5173 (Vite's default port)
app.use(cors({ origin: 'http://localhost:5173' })); // Allow requests from Vite

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/users', userRoutes); // All user-related routes

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
