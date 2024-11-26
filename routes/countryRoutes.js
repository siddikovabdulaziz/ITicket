const express = require("express");
const router = express.Router();
const countryControllers = require("../controllers/countryControllers");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country managment
 */

/**
 * @swagger
 *  /api/country:
 *   post:
 *     tags: [Country]
 *     summary: Create a new country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       201:
 *         description: Country created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/country", countryControllers.createCountry);

/**
 * @swagger
 * /api/country:
 *   get:
 *     tags: [Country]
 *     summary: Get all country
 *     responses:
 *       200:
 *         description: List of country
 *       500:
 *         description: Server error
 */
router.get("/country", countryControllers.getCountry);

/**
 * @swagger
 * /api/country/{id}:
 *  get:
 *    tags: [Country]
 *    summary: get country By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Country ID
 *    responses:
 *      200:
 *        description: Country details
 *      404:
 *        description: Country not found
 *      500:
 *        description: Server error
 */
router.get("/country/:id", countryControllers.getCountryById);

/**
 * @swagger
 * /api/country/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.put("/country/:id", countryControllers.updateCountry);

/**
 * @swagger
 * /api/country/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       204:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/country/:id", countryControllers.deleteCountry);

module.exports = router;
