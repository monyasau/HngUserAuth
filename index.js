// Load environment variables from .env file
require('dotenv').config();

// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const organisationRoutes = require('./routes/organisation');
const userRoutes = require('./routes/user');

// Initialize the Express app
const app = express();

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT || 80;

// Add support for Cross-Origin Resource Sharing (CORS)
app.use(cors());
app.options('*', cors());

// Configure body parser middleware to handle JSON and URL encoded data
app.use(bodyParser.json({ limit: '50mb' })); // support json encoded bodies
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use('/auth', authRoutes);
app.use('/api/organisations', organisationRoutes);
app.use('/api/users', userRoutes);

// Start the server and listen on the defined port
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Export the server for testing or other purposes
module.exports = server;
