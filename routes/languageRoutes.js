const express = require("express");
const router = express.Router();
const languageControllers = require("../controllers/languageControllers");

/**
 * @swagger
 * tags:
 *   name: Language
 *   description: Language managment
 */

/**
 * @swagger
 *  /api/language:
 *   post:
 *     tags: [Language]
 *     summary: Create a new language
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Language created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/language", languageControllers.createLanguage);

/**
 * @swagger
 * /api/language:
 *   get:
 *     tags: [Language]
 *     summary: Get all language
 *     responses:
 *       200:
 *         description: List of language
 *       500:
 *         description: Server error
 */
router.get("/language", languageControllers.getLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *  get:
 *    tags: [Language]
 *    summary: get language By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Language ID
 *    responses:
 *      200:
 *        description: Language details
 *      404:
 *        description: Language not found
 *      500:
 *        description: Server error
 */
router.get("/language/:id", languageControllers.getLanguageById);

/**
 * @swagger
 * /api/language/{id}:
 *   put:
 *     tags: [Language]
 *     summary: Update language by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Language ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               language:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Language updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 */
router.put("/language/:id", languageControllers.updateLanguage);

/**
 * @swagger
 * /api/language/{id}:
 *   delete:
 *     tags: [Language]
 *     summary: Delete language by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Language ID
 *     responses:
 *       204:
 *         description: Language deleted
 *       404:
 *         description: Language not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/language/:id", languageControllers.deleteLanguage);

module.exports = router;
