const mongoose = require('mongoose');

const messagesSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min:3,
        max: 50
    },
    msg: {
        type: String
    },
    roomId: {
        type: String
    },
    date: {
        type: String,
        
    }
})

module.exports = mongoose.model('Messages', messagesSchema);
