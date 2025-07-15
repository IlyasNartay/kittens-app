const PhotoEntry = require('../models/PhotoEntry');

exports.createPhotoEntry = async (req, res) => {
  try {
    const { description, lat, lng, kittenId } = req.body;

    console.log('📦 req.body:', req.body);
    console.log('🖼️ req.file:', req.file);

    if (!req.file?.path) {
      return res.status(400).json({ error: 'Файл не загружен' });
    }

    const newEntry = new PhotoEntry({
      imageUrl: req.file.path,
      description,
      location: {
        lat: parseFloat(lat),
        lng: parseFloat(lng),
      },
      kittenId,
    });

    await newEntry.save();
    res.status(201).json(newEntry);
  } catch (err) {
    console.error('❌ Ошибка при создании поста:', err);
    res.status(500).json({ error: err.message });
  }
};

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await PhotoEntry.find().populate('kittenId');
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
