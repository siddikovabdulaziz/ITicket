const express = require("express");
const router = express.Router();
const paymentControllers = require("../controllers/paymentControllers");

/**
 * @swagger
 * tags:
 *   name: Payment
 *   description: Payment managment
 */

/**
 * @swagger
 *  /api/payment:
 *   post:
 *     tags: [Payment]
 *     summary: Create a new payment
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
 *         description: Payment created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/payment", paymentControllers.createPayment);

/**
 * @swagger
 * /api/payment:
 *   get:
 *     tags: [Payment]
 *     summary: Get all payment
 *     responses:
 *       200:
 *         description: List of payment
 *       500:
 *         description: Server error
 */
router.get("/payment", paymentControllers.getPayment);

/**
 * @swagger
 * /api/payment/{id}:
 *  get:
 *    tags: [Payment]
 *    summary: get payment By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Payment ID
 *    responses:
 *      200:
 *        description: Payment details
 *      404:
 *        description: Payment not found
 *      500:
 *        description: Server error
 */
router.get("/payment/:id", paymentControllers.getPaymentById);

/**
 * @swagger
 * /api/payment/{id}:
 *   put:
 *     tags: [Payment]
 *     summary: Update payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
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
 *         description: Payment updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 */
router.put("/payment/:id", paymentControllers.updatePayment);

/**
 * @swagger
 * /api/payment/{id}:
 *   delete:
 *     tags: [Payment]
 *     summary: Delete payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       204:
 *         description: Payment deleted
 *       404:
 *         description: Payment not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/payment/:id", paymentControllers.deletePayment);

module.exports = router;
