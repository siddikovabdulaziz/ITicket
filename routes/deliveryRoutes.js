const express = require("express");
const router = express.Router();
const deliveryControllers = require("../controllers/deliveryControllers");

/**
 * @swagger
 * tags:
 *   name: Delivery
 *   description: Delivery managment
 */

/**
 * @swagger
 *  /api/delivery:
 *   post:
 *     tags: [Delivery]
 *     summary: Create a new delivery
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
 *         description: Delivery created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/delivery", deliveryControllers.createDelivery);

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     tags: [Delivery]
 *     summary: Get all delivery
 *     responses:
 *       200:
 *         description: List of delivery
 *       500:
 *         description: Server error
 */
router.get("/delivery", deliveryControllers.getDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *  get:
 *    tags: [Delivery]
 *    summary: get delivery By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Delivery ID
 *    responses:
 *      200:
 *        description: Delivery details
 *      404:
 *        description: Delivery not found
 *      500:
 *        description: Server error
 */
router.get("/delivery/:id", deliveryControllers.getDeliveryById);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     tags: [Delivery]
 *     summary: Update delivery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery ID
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
 *         description: Delivery updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 */
router.put("/delivery/:id", deliveryControllers.updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     tags: [Delivery]
 *     summary: Delete delivery by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Delivery ID
 *     responses:
 *       204:
 *         description: Delivery deleted
 *       404:
 *         description: Delivery not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/delivery/:id", deliveryControllers.deleteDelivery);

module.exports = router;
