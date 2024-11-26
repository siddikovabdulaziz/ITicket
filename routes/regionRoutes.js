const express = require("express");
const router = express.Router();
const regionControllers = require("../controllers/regionControllers");

/**
 * @swagger
 * tags:
 *   name: Region
 *   description: Region managment
 */

/**
 * @swagger
 *  /api/region:
 *   post:
 *     tags: [Region]
 *     summary: Create a new region
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Region created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/region", regionControllers.createRegion);

/**
 * @swagger
 * /api/region:
 *   get:
 *     tags: [Region]
 *     summary: Get all region
 *     responses:
 *       200:
 *         description: List of region
 *       500:
 *         description: Server error
 */
router.get("/region", regionControllers.getRegion);

/**
 * @swagger
 * /api/region/{id}:
 *  get:
 *    tags: [Region]
 *    summary: get region By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Region ID
 *    responses:
 *      200:
 *        description: Region details
 *      404:
 *        description: Region not found
 *      500:
 *        description: Server error
 */
router.get("/region/:id", regionControllers.getRegionById);

/**
 * @swagger
 * /api/region/{id}:
 *   put:
 *     tags: [Region]
 *     summary: Update region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               postpone:
 *                 type: string
 *     responses:
 *       200:
 *         description: Region updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 */
router.put("/region/:id", regionControllers.updateRegion);

/**
 * @swagger
 * /api/region/{id}:
 *   delete:
 *     tags: [Region]
 *     summary: Delete region by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Region ID
 *     responses:
 *       204:
 *         description: Region deleted
 *       404:
 *         description: Region not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/region/:id", regionControllers.deleteRegion);

module.exports = router;
