const express = require('express');
const router = express.Router();
const controller = require('../controllers/PhotoEntry');
const multer = require('multer');
const { storage } = require('../utils/cloudinary');
const upload = multer({ storage });

/**
 * @swagger
 * /api/photo-entries:
 *   post:
 *     summary: Создать пост с изображением и геоданными
 *     consumes:
 *       - multipart/form-data
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - image
 *               - kittenId
 *             properties:
 *               image:
 *                 type: string
 *                 format: binary
 *               description:
 *                 type: string
 *               lat:
 *                 type: number
 *               lng:
 *                 type: number
 *               kittenId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Пост создан
 */
router.post('/', upload.single('image'), controller.createPhotoEntry);

/**
 * @swagger
 * /api/photo-entries:
 *   get:
 *     summary: Получить все посты
 *     responses:
 *       200:
 *         description: Список постов
 */
router.get('/', controller.getAllEntries);

module.exports = router;
