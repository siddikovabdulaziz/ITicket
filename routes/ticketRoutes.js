const express = require("express");
const router = express.Router();
const ticketControllers = require("../controllers/ticketControllers");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket managment
 */

/**
 * @swagger
 *  /api/ticket:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: string
 *               service_free:
 *                 type: string
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: number
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket", ticketControllers.createTicket);

/**
 * @swagger
 * /api/ticket:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all ticket
 *     responses:
 *       200:
 *         description: List of ticket
 *       500:
 *         description: Server error
 */
router.get("/ticket", ticketControllers.getTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *  get:
 *    tags: [Ticket]
 *    summary: get ticket By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Ticket ID
 *    responses:
 *      200:
 *        description: Ticket details
 *      404:
 *        description: Ticket not found
 *      500:
 *        description: Server error
 */
router.get("/ticket/:id", ticketControllers.getTicketById);

/**
 * @swagger
 * /api/ticket/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: number
 *               seat_id:
 *                 type: number
 *               price:
 *                 type: string
 *               service_free:
 *                 type: string
 *               status_id:
 *                 type: number
 *               ticket_type:
 *                 type: number
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put("/ticket/:id", ticketControllers.updateTicket);

/**
 * @swagger
 * /api/ticket/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       204:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/ticket/:id", ticketControllers.deleteTicket);

module.exports = router;
