const express = require("express");
const router = express.Router();
const districtControllers = require("../controllers/districtControllers");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District managment
 */

/**
 * @swagger
 *  /api/district:
 *   post:
 *     tags: [District]
 *     summary: Create a new district
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/district", districtControllers.createDistrict);

/**
 * @swagger
 * /api/district:
 *   get:
 *     tags: [District]
 *     summary: Get all district
 *     responses:
 *       200:
 *         description: List of district
 *       500:
 *         description: Server error
 */
router.get("/district", districtControllers.getDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *  get:
 *    tags: [District]
 *    summary: get district By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: District ID
 *    responses:
 *      200:
 *        description: District details
 *      404:
 *        description: District not found
 *      500:
 *        description: Server error
 */
router.get("/district/:id", districtControllers.getDistrictById);

/**
 * @swagger
 * /api/district/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: District updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.put("/district/:id", districtControllers.updateDistrict);

/**
 * @swagger
 * /api/district/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete district by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       204:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/district/:id", districtControllers.deleteDistrict);

module.exports = router;
