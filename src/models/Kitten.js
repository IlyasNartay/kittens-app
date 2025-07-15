const mongoose = require('mongoose');

const kittenSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    breed: String,
    description: String,
});

module.exports = mongoose.model('Kitten', kittenSchema);
