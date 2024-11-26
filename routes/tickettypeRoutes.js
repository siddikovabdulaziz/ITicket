const express = require("express");
const router = express.Router();
const tickettypeControllers = require("../controllers/tickettypeControllers");

/**
 * @swagger
 * tags:
 *   name: Tickettype
 *   description: Tickettype managment
 */

/**
 * @swagger
 *  /api/tickettype:
 *   post:
 *     tags: [Tickettype]
 *     summary: Create a new tickettype
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Tickettype created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/tickettype", tickettypeControllers.createTickettype);

/**
 * @swagger
 * /api/tickettype:
 *   get:
 *     tags: [Tickettype]
 *     summary: Get all tickettype
 *     responses:
 *       200:
 *         description: List of tickettype
 *       500:
 *         description: Server error
 */
router.get("/tickettype", tickettypeControllers.getTickettype);

/**
 * @swagger
 * /api/tickettype/{id}:
 *  get:
 *    tags: [Tickettype]
 *    summary: get tickettype By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Tickettype ID
 *    responses:
 *      200:
 *        description: Tickettype details
 *      404:
 *        description: Tickettype not found
 *      500:
 *        description: Server error
 */
router.get("/tickettype/:id", tickettypeControllers.getTickettypeById);

/**
 * @swagger
 * /api/tickettype/{id}:
 *   put:
 *     tags: [Tickettype]
 *     summary: Update tickettype by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Tickettype ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               color:
 *                 type: string
 *               name:
 *                 type: string
 *               ticket_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Tickettype updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Tickettype not found
 *       500:
 *         description: Server error
 */
router.put("/tickettype/:id", tickettypeControllers.updateTickettype);

/**
 * @swagger
 * /api/tickettype/{id}:
 *   delete:
 *     tags: [Tickettype]
 *     summary: Delete tickettype by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Tickettype ID
 *     responses:
 *       204:
 *         description: Tickettype deleted
 *       404:
 *         description: Tickettype not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/tickettype/:id", tickettypeControllers.deleteTickettype);

module.exports = router;
