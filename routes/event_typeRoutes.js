const express = require("express");
const router = express.Router();
const event_typeControllers = require("../controllers/event_typeControllers");

/**
 * @swagger
 * tags:
 *   name: Event_type
 *   description: Event_type managment
 */

/**
 * @swagger
 *  /api/event_type:
 *   post:
 *     tags: [Event_type]
 *     summary: Create a new event_type
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Event_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/event_type", event_typeControllers.createEvent_type);

/**
 * @swagger
 * /api/event_type:
 *   get:
 *     tags: [Event_type]
 *     summary: Get all event_type
 *     responses:
 *       200:
 *         description: List of event_type
 *       500:
 *         description: Server error
 */
router.get("/event_type", event_typeControllers.getEvent_type);

/**
 * @swagger
 * /api/event_type/{id}:
 *  get:
 *    tags: [Event_type]
 *    summary: get event_type By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Event_type ID
 *    responses:
 *      200:
 *        description: Event_type details
 *      404:
 *        description: Event_type not found
 *      500:
 *        description: Server error
 */
router.get("/event_type/:id", event_typeControllers.getEvent_typeById);

/**
 * @swagger
 * /api/event_type/{id}:
 *   put:
 *     tags: [Event_type]
 *     summary: Update event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Event_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Event_type not found
 *       500:
 *         description: Server error
 */
router.put("/event_type/:id", event_typeControllers.updateEvent_type);

/**
 * @swagger
 * /api/event_type/{id}:
 *   delete:
 *     tags: [Event_type]
 *     summary: Delete event_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Event_type ID
 *     responses:
 *       204:
 *         description: Event_type deleted
 *       404:
 *         description: Event_type not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/event_type/:id", event_typeControllers.deleteEvent_type);

module.exports = router;
