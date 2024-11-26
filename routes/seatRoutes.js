const express = require("express");
const router = express.Router();
const seatControllers = require("../controllers/seatControllers");

/**
 * @swagger
 * tags:
 *   name: Seat
 *   description: Seat managment
 */

/**
 * @swagger
 *  /api/seat:
 *   post:
 *     tags: [Seat]
 *     summary: Create a new seat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_id:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       201:
 *         description: Seat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seat", seatControllers.createSeat);

/**
 * @swagger
 * /api/seat:
 *   get:
 *     tags: [Seat]
 *     summary: Get all seat
 *     responses:
 *       200:
 *         description: List of seat
 *       500:
 *         description: Server error
 */
router.get("/seat", seatControllers.getSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *  get:
 *    tags: [Seat]
 *    summary: get seat By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Seat ID
 *    responses:
 *      200:
 *        description: Seat details
 *      404:
 *        description: Seat not found
 *      500:
 *        description: Server error
 */
router.get("/seat/:id", seatControllers.getSeatById);

/**
 * @swagger
 * /api/seat/{id}:
 *   put:
 *     tags: [Seat]
 *     summary: Update seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector:
 *                 type: number
 *               row_number:
 *                 type: number
 *               number:
 *                 type: number
 *               venue_id:
 *                 type: number
 *               seat_type_id:
 *                 type: number
 *               location_in_schema:
 *                 type: string
 *     responses:
 *       200:
 *         description: Seat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 */
router.put("/seat/:id", seatControllers.updateSeat);

/**
 * @swagger
 * /api/seat/{id}:
 *   delete:
 *     tags: [Seat]
 *     summary: Delete seat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Seat ID
 *     responses:
 *       204:
 *         description: Seat deleted
 *       404:
 *         description: Seat not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/seat/:id", seatControllers.deleteSeat);

module.exports = router;
