const express = require("express");
const router = express.Router();
const seat_typeControllers = require("../controllers/seat_typeControllers");

/**
 * @swagger
 * tags:
 *   name: Seat_type
 *   description: Seat_type managment
 */

/**
 * @swagger
 *  /api/seat_type:
 *   post:
 *     tags: [Seat_type]
 *     summary: Create a new seat_type
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
 *         description: Seat_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seat_type", seat_typeControllers.createSeat_type);

/**
 * @swagger
 * /api/seat_type:
 *   get:
 *     tags: [Seat_type]
 *     summary: Get all seat_type
 *     responses:
 *       200:
 *         description: List of seat_type
 *       500:
 *         description: Server error
 */
router.get("/seat_type", seat_typeControllers.getSeat_type);

/**
 * @swagger
 * /api/seat_type/{id}:
 *  get:
 *    tags: [Seat_type]
 *    summary: get seat_type By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Seat_type ID
 *    responses:
 *      200:
 *        description: Seat_type details
 *      404:
 *        description: Seat_type not found
 *      500:
 *        description: Server error
 */
router.get("/seat_type/:id", seat_typeControllers.getSeat_typeById);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   put:
 *     tags: [Seat_type]
 *     summary: Update seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
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
 *         description: Seat_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 */
router.put("/seat_type/:id", seat_typeControllers.updateSeat_type);

/**
 * @swagger
 * /api/seat_type/{id}:
 *   delete:
 *     tags: [Seat_type]
 *     summary: Delete seat_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat_type ID
 *     responses:
 *       204:
 *         description: Seat_type deleted
 *       404:
 *         description: Seat_type not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/seat_type/:id", seat_typeControllers.deleteSeat_type);

module.exports = router;
