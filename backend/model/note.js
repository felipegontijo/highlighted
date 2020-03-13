import mongoose, { Schema } from 'mongoose';

const noteSchema = new Schema({
    url: String,
    title: String,
    content: String
});

module.exports = mongoose.model('Note', noteSchema);