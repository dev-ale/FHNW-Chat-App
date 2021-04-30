const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 20
    },
    type: {
        type: String,
        required: false,
        min: 3,
        max: 12
    },
    creator: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Room',roomSchema);
