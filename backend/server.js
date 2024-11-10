const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./dbConnection');

// CORS configuration - Allow only the frontend URL
app.use(cors({
    origin: 'http://localhost:3000', // Update this with your frontend URL (for React, it is typically localhost:3000)
    methods: ['GET', 'POST'], // Allow GET and POST requests
    allowedHeaders: ['Content-Type'], // Allow Content-Type header
}));

app.use(express.json());

// Connect to the database
connectDB();

// Use the routes with the correct path
app.use('/api', require('./routes'));

// Start the server on port 8080
app.listen(8080, () => {
    console.log('App is listening on port 8080');
});
