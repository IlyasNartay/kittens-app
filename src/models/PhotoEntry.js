const mongoose = require('mongoose');

const photoEntrySchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  description: { type: String },
  location: {
    lat: Number,
    lng: Number,
  },
  kittenId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Kitten',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('PhotoEntry', photoEntrySchema);
