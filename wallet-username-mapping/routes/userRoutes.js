// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getWalletByUsername } = require('../controllers/userController');

// Route to get wallet by username
router.get('/:username', getWalletByUsername);

module.exports = router;
