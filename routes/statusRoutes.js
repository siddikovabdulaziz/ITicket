const express = require("express");
const router = express.Router();
const statusControllers = require("../controllers/statusControllers");

/**
 * @swagger
 * tags:
 *   name: Status
 *   description: Status managment
 */

/**
 * @swagger
 *  /api/status:
 *   post:
 *     tags: [Status]
 *     summary: Create a new status
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       201:
 *         description: Status created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/status", statusControllers.createStatus);

/**
 * @swagger
 * /api/status:
 *   get:
 *     tags: [Status]
 *     summary: Get all status
 *     responses:
 *       200:
 *         description: List of status
 *       500:
 *         description: Server error
 */
router.get("/status", statusControllers.getStatus);

/**
 * @swagger
 * /api/status/{id}:
 *  get:
 *    tags: [Status]
 *    summary: get status By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Status ID
 *    responses:
 *      200:
 *        description: Status details
 *      404:
 *        description: Status not found
 *      500:
 *        description: Server error
 */
router.get("/status/:id", statusControllers.getStatusById);

/**
 * @swagger
 * /api/status/{id}:
 *   put:
 *     tags: [Status]
 *     summary: Update status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Status updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 */
router.put("/status/:id", statusControllers.updateStatus);

/**
 * @swagger
 * /api/status/{id}:
 *   delete:
 *     tags: [Status]
 *     summary: Delete status by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Status ID
 *     responses:
 *       204:
 *         description: Status deleted
 *       404:
 *         description: Status not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/status/:id", statusControllers.deleteStatus);

module.exports = router;
