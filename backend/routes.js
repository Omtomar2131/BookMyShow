const express = require('express');
const router = express.Router();
const Ticket = require('./schema');

// POST Route for Booking
router.post('/booking', async (req, res) => {
    const { movie, slot, seats } = req.body;

    // Check if required fields are present
    if (!movie || !slot || !seats) {
        return res.status(400).json({
            data: null,
            message: 'Please provide all required fields (movie, slot, seats).'
        });
    }

    try {
        // Create a new ticket entry
        const myData = new Ticket({ movie, slot, seats });

        // Save the booking to the database
        const saved = await myData.save();

        res.status(200).json({
            data: saved, // Return the saved data (not the object before saving)
            message: 'Booking Successful'
        });
    } catch (err) {
        console.error(err); // Log the error to the console for debugging
        res.status(500).json({
            data: null,
            message: `Something went wrong, try again: ${err.message}`
        });
    }
});

// GET Route for Fetching Last Booking
router.get('/booking', async (req, res) => {
    try {
        // Fetch the last booking from the database
        const myData = await Ticket.find().sort({ _id: -1 }).limit(1);

        if (myData.length === 0) {
            res.status(200).json({
                data: null,
                message: 'No previous booking found'
            });
        } else {
            res.status(200).json({
                data: myData[0], // Return the most recent booking
                message: 'Last booking fetched successfully'
            });
        }
    } catch (err) {
        console.error(err); // Log the error to the console for debugging
        res.status(500).json({
            data: null,
            message: `Something went wrong! ${err.message}`
        });
    }
});

module.exports = router;
