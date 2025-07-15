const Kitten = require('../models/Kitten');

exports.createKitten = async (req, res) => {
    try {
        const kitten = new Kitten(req.body);
        await kitten.save();
        res.status(201).json(kitten);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getAllKittens = async (req, res) => {
    try {
        const kittens = await Kitten.find();
        res.json(kittens);
    } catch (err) {
        res.status(500).json({ error: 'Ошибка сервера' });
    }
};

exports.getKittenById = async (req, res) => {
    try {
        const kitten = await Kitten.findById(req.params.id);
        if (!kitten) {
            return res.status(404).json({ error: 'Котик не найден' });
        }
        res.json(kitten);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteKitten = async (req, res) => {
    try {
        const kitten = await Kitten.findByIdAndDelete(req.params.id);
        if (!kitten) {
            return res.status(404).json({ error: 'Котик не найден' });
        }
        res.json({ message: 'Котик удалён' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateKitten = async (req, res) => {
    try {
        const kitten = await Kitten.findByIdAndUpdate(req.params.id, req.body, {
            new: true, runValidators: true
        });

        if (!kitten) {
            return res.status(404).json({ error: 'Котик не найден' });
        }

        res.json(kitten);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};