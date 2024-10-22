const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Connect to MongoDB using the connection string from the .env file
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

// Export the connectDB function for use in other files
module.exports = connectDB;
