// route/route.js
const express = require('express');
const router = express.Router();
const { createData } = require('../controller/controller.js');

// Define the POST route for form submission
router.post('/', createData);

module.exports = router;
