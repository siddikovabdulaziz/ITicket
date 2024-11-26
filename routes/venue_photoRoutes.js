const express = require("express");
const router = express.Router();
const venue_photoControllers = require("../controllers/venue_photoControllers");

/**
 * @swagger
 * tags:
 *   name: Venue_photo
 *   description: Venue_photo managment
 */

/**
 * @swagger
 *  /api/venue_photo:
 *   post:
 *     tags: [Venue_photo]
 *     summary: Create a new venue_photo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: Venue_photo created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue_photo", venue_photoControllers.createVenue_photo);

/**
 * @swagger
 * /api/venue_photo:
 *   get:
 *     tags: [Venue_photo]
 *     summary: Get all venue_photo
 *     responses:
 *       200:
 *         description: List of venue_photo
 *       500:
 *         description: Server error
 */
router.get("/venue_photo", venue_photoControllers.getVenue_photo);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *  get:
 *    tags: [Venue_photo]
 *    summary: get venue_photo By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Venue_photo ID
 *    responses:
 *      200:
 *        description: Venue_photo details
 *      404:
 *        description: Venue_photo not found
 *      500:
 *        description: Server error
 */
router.get("/venue_photo/:id", venue_photoControllers.getVenue_photoById);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   put:
 *     tags: [Venue_photo]
 *     summary: Update venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_photo ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: number
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: Venue_photo updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Venue_photo not found
 *       500:
 *         description: Server error
 */
router.put("/venue_photo/:id", venue_photoControllers.updateVenue_photo);

/**
 * @swagger
 * /api/venue_photo/{id}:
 *   delete:
 *     tags: [Venue_photo]
 *     summary: Delete venue_photo by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Venue_photo ID
 *     responses:
 *       204:
 *         description: Venue_photo deleted
 *       404:
 *         description: Venue_photo not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/venue_photo/:id", venue_photoControllers.deleteVenue_photo);

module.exports = router;
