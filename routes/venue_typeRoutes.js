const express = require("express");
const router = express.Router();
const venue_typeControllers = require("../controllers/venue_typeControllers");

/**
 * @swagger
 * tags:
 *   name: Venue_type
 *   description: Venue_type managment
 */

/**
 * @swagger
 *  /api/venue_type:
 *   post:
 *     tags: [Venue_type]
 *     summary: Create a new venue_type
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
 *         description: Venue_type created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue_type", venue_typeControllers.createVenue_type);

/**
 * @swagger
 * /api/venue_type:
 *   get:
 *     tags: [Venue_type]
 *     summary: Get all venue_type
 *     responses:
 *       200:
 *         description: List of venue_type
 *       500:
 *         description: Server error
 */
router.get("/venue_type", venue_typeControllers.getVenue_type);

/**
 * @swagger
 * /api/venue_type/{id}:
 *  get:
 *    tags: [Venue_type]
 *    summary: get venue_type By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue_type ID
 *    responses:
 *      200:
 *        description: Venue_type details
 *      404:
 *        description: Venue_type not found
 *      500:
 *        description: Server error
 */
router.get("/venue_type/:id", venue_typeControllers.getVenue_typeById);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   put:
 *     tags: [Venue_type]
 *     summary: Update venue_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_type ID
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
 *         description: Venue_type updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue_type not found
 *       500:
 *         description: Server error
 */
router.put("/venue_type/:id", venue_typeControllers.updateVenue_type);

/**
 * @swagger
 * /api/venue_type/{id}:
 *   delete:
 *     tags: [Venue_type]
 *     summary: Delete venue_type by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_type ID
 *     responses:
 *       204:
 *         description: Venue_type deleted
 *       404:
 *         description: Venue_type not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/venue_type/:id", venue_typeControllers.deleteVenue_type);

module.exports = router;
