require('dotenv').config();  // Load environment variables
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectToMongoDB } = require('./db/connectMongoDB.js');  // Correct import
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/OnlineShopping', require('./route/route.js'));  // Ensure you require the correct route

// Try connecting to MongoDB
connectToMongoDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
