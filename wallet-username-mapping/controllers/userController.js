// src/controllers/userController.js
const User = require('../models/User');

// Controller to register a new user
exports.registerWallet = async (req, res) => {
  const { username, walletAddress } = req.body;

  if (!username || !walletAddress) {
    return res.status(400).json({ message: 'Username and wallet address are required.' });
  }

  try {
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already taken.' });
    }

    const user = new User({ username, walletAddress });
    await user.save();
    res.status(201).json({ message: 'User registered successfully.' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Failed to register user.' });
  }
};

// Controller to get wallet address by username
exports.getWalletByUsername = async (req, res) => {
  const { username } = req.params;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    res.status(200).json({ walletAddress: user.walletAddress });
  } catch (error) {
    console.error('Error fetching wallet address:', error);
    res.status(500).json({ message: 'Failed to fetch wallet address.' });
  }
};
