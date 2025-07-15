const PhotoEntry = require('../models/PhotoEntry');

exports.createPhotoEntry = async (req, res) => {
  try {
    
    console.log('Файл:', req.file);             // 🔍
    console.log('Тело запроса:', req.body);     // 🔍

    const { description, lat, lng, kittenId } = req.body;

    if (!req.file?.path) {
      return res.status(400).json({ error: 'Файл не загружен' });
    }

    const entry = new PhotoEntry({
      imageUrl: req.file.path,
      description,
      location: { lat, lng },
      kittenId,
    });

    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await PhotoEntry.find().populate('kittenId', 'name breed');
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
