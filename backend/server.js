const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./dbConnection');

// CORS configuration - Allow only the frontend URL
app.use(cors({
    origin: 'https://book-my-show-lemon-rho.vercel.app', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'], 
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
