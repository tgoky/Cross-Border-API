// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to register a new user with a wallet address
router.post('/register', userController.registerWallet);

// Route to fetch wallet address by username
router.get('/:username', userController.getWalletByUsername);

module.exports = router;
