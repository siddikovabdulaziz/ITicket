const express = require("express");
const router = express.Router();
const cartControllers = require("../controllers/cartControllers");

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Cart managment
 */

/**
 * @swagger
 *  /api/cart:
 *   post:
 *     tags: [Cart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date
 *               finishedAt:
 *                 type: string
 *                 format: date
 *               status_id:
 *                 type: number
 *     responses:
 *       201:
 *         description: Cart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart", cartControllers.createCart);

/**
 * @swagger
 * /api/cart:
 *   get:
 *     tags: [Cart]
 *     summary: Get all cart
 *     responses:
 *       200:
 *         description: List of cart
 *       500:
 *         description: Server error
 */
router.get("/cart", cartControllers.getCart);

/**
 * @swagger
 * /api/cart/{id}:
 *  get:
 *    tags: [Cart]
 *    summary: get cart By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Cart ID
 *    responses:
 *      200:
 *        description: Cart details
 *      404:
 *        description: Cart not found
 *      500:
 *        description: Server error
 */
router.get("/cart/:id", cartControllers.getCartById);

/**
 * @swagger
 * /api/cart/{id}:
 *   put:
 *     tags: [Cart]
 *     summary: Update cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: number
 *               customer_id:
 *                 type: number
 *               createdAt:
 *                 type: string
 *                 format: date-time
 *               finishedAt:
 *                 type: string
 *                 format: date-time
 *               status_id:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 */
router.put("/cart/:id", cartControllers.updateCart);

/**
 * @swagger
 * /api/cart/{id}:
 *   delete:
 *     tags: [Cart]
 *     summary: Delete cart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Cart ID
 *     responses:
 *       204:
 *         description: Cart deleted
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/cart/:id", cartControllers.deleteCart);

module.exports = router;
