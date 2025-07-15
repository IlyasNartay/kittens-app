const express = require('express');
const router = express.Router();
const controller = require('../controllers/kittens');

/**
 * @swagger
 * components:
 *   schemas:
 *     Kitten:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         name:
 *           type: string
 *         age:
 *           type: number
 *         breed:
 *           type: string
 *         description:
 *           type: string
 */

/**
 * @swagger
 * /api/kittens:
 *   get:
 *     summary: Получить всех котиков
 *     responses:
 *       200:
 *         description: Список котиков
 *         content:
 *          application/json:
 *              schema:
 *                  type: array
 *                  items:
 *                     $ref: '#/components/schemas/Kitten' 
 */

/**
 * @swagger
 * /api/kittens:
 *   post:
 *     summary: Зарегистрировать котика
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kitten'
 *     responses:
 *       201:
 *         description: Котик создан
 */
/**
 * @swagger
 * /api/kittens/{id}:
 *   put:
 *     summary: Обновить информацию о котике
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID котика
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kitten'
 *     responses:
 *       200:
 *         description: Котик обновлён
 */
/**
 * @swagger
 * /api/kittens/{id}:
 *   get:
 *     summary: Получить информацию о котике по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID котика
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Информация о котике
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Kitten'
 *       404:
 *         description: Котик не найден
 */

/**
 * @swagger
 * /api/kittens/{id}:
 *   delete:
 *     summary: Удалить котика по ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID котика для удаления
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Котик удалён
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Котик удалён
 *       404:
 *         description: Котик не найден
 */


router.get('/', controller.getAllKittens);
router.post('/', controller.createKitten);
router.get('/:id', controller.getKittenById);
router.put('/:id', controller.updateKitten);
router.delete('/:id', controller.deleteKitten);


module.exports = router;
