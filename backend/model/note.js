const mongoose = require('mongoose');

const noteSchema =  new mongoose.Schema({
    url: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
});

module.exports = mongoose.model('Note', noteSchema);