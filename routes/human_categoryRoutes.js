const express = require("express");
const router = express.Router();
const human_categoryControllers = require("../controllers/human_categoryControllers");

/**
 * @swagger
 * tags:
 *   name: Human_category
 *   description: Human_category managment
 */

/**
 * @swagger
 *  /api/human_category:
 *   post:
 *     tags: [Human_category]
 *     summary: Create a new human_category
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: number
 *     responses:
 *       201:
 *         description: Human_category created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/human_category", human_categoryControllers.createHuman_category);

/**
 * @swagger
 * /api/human_category:
 *   get:
 *     tags: [Human_category]
 *     summary: Get all human_category
 *     responses:
 *       200:
 *         description: List of human_category
 *       500:
 *         description: Server error
 */
router.get("/human_category", human_categoryControllers.getHuman_category);

/**
 * @swagger
 * /api/human_category/{id}:
 *  get:
 *    tags: [Human_category]
 *    summary: get human_category By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Human_category ID
 *    responses:
 *      200:
 *        description: Human_category details
 *      404:
 *        description: Human_category not found
 *      500:
 *        description: Server error
 */
router.get(
  "/human_category/:id",
  human_categoryControllers.getHuman_categoryById
);

/**
 * @swagger
 * /api/human_category/{id}:
 *   put:
 *     tags: [Human_category]
 *     summary: Update human_category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               start_age:
 *                 type: number
 *               finish_age:
 *                 type: number
 *               gender:
 *                 type: number
 *     responses:
 *       200:
 *         description: Human_category updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Human_category not found
 *       500:
 *         description: Server error
 */
router.put(
  "/human_category/:id",
  human_categoryControllers.updateHuman_category
);

/**
 * @swagger
 * /api/human_category/{id}:
 *   delete:
 *     tags: [Human_category]
 *     summary: Delete human_category by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Human_category ID
 *     responses:
 *       204:
 *         description: Human_category deleted
 *       404:
 *         description: Human_category not found
 *       500:
 *         description: Server error
 *
 */
router.delete(
  "/human_category/:id",
  human_categoryControllers.deleteHuman_category
);

module.exports = router;
