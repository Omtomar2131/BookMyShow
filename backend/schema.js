const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    movie: {
        type: String,
        required: [true, 'Movie name is required'],
    },
    slot: {
        type: String,
        required: [true, 'Time slot is required'],
        enum: ['10:00 AM', '1:00 PM', '4:00 PM', '7:00 PM'], // Ensure there are spaces between time and AM/PM
    },
    seats: {
        A1: { type: Number, default: 0 },
        A2: { type: Number, default: 0 },
        A3: { type: Number, default: 0 },
        A4: { type: Number, default: 0 },
        D1: { type: Number, default: 0 },
        D2: { type: Number, default: 0 },
    }
});

const Ticket = mongoose.model('BookMovie', TicketSchema);

module.exports = Ticket;
