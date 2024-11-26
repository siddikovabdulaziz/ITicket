const express = require("express");
const router = express.Router();
const venueControllers = require("../controllers/venueControllers");

/**
 * @swagger
 * tags:
 *   name: Venue
 *   description: Venue managment
 */

/**
 * @swagger
 *  /api/venue:
 *   post:
 *     tags: [Venue]
 *     summary: Create a new venue
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               location:
 *                 type: string
 *               site:
 *                 type: string
 *               phone:
 *                 type: string
 *               venue_type_id:
 *                 type: number
 *               schema:
 *                 type: string
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Venue created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue", venueControllers.createVenue);

/**
 * @swagger
 * /api/venue:
 *   get:
 *     tags: [Venue]
 *     summary: Get all venue
 *     responses:
 *       200:
 *         description: List of venue
 *       500:
 *         description: Server error
 */
router.get("/venue", venueControllers.getVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *  get:
 *    tags: [Venue]
 *    summary: get venue By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue ID
 *    responses:
 *      200:
 *        description: Venue details
 *      404:
 *        description: Venue not found
 *      500:
 *        description: Server error
 */
router.get("/venue/:id", venueControllers.getVenueById);

/**
 * @swagger
 * /api/venue/{id}:
 *   put:
 *     tags: [Venue]
 *     summary: Update venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
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
 *         description: Venue updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 */
router.put("/venue/:id", venueControllers.updateVenue);

/**
 * @swagger
 * /api/venue/{id}:
 *   delete:
 *     tags: [Venue]
 *     summary: Delete venue by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue ID
 *     responses:
 *       204:
 *         description: Venue deleted
 *       404:
 *         description: Venue not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/venue/:id", venueControllers.deleteVenue);

module.exports = router;
