// src/controllers/userController.js
const User = require('../models/User');

// Fetch wallet address by username
exports.getWalletByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });

    if (user) {
      res.json({ walletAddress: user.walletAddress });
    } else {
      res.status(404).json({ message: 'Username not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
