const express = require("express");
const router = express.Router();
const discountControllers = require("../controllers/discountControllers");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount managment
 */

/**
 * @swagger
 *  /api/discount:
 *   post:
 *     tags: [Discount]
 *     summary: Create a new discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Discount created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/discount", discountControllers.createDiscount);

/**
 * @swagger
 * /api/discount:
 *   get:
 *     tags: [Discount]
 *     summary: Get all discount
 *     responses:
 *       200:
 *         description: List of discount
 *       500:
 *         description: Server error
 */
router.get("/discount", discountControllers.getDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *  get:
 *    tags: [Discount]
 *    summary: get discount By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Discount ID
 *    responses:
 *      200:
 *        description: Discount details
 *      404:
 *        description: Discount not found
 *      500:
 *        description: Server error
 */
router.get("/discount/:id", discountControllers.getDiscountById);

/**
 * @swagger
 * /api/discount/{id}:
 *   put:
 *     tags: [Discount]
 *     summary: Update discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *                 format: date
 *     responses:
 *       200:
 *         description: Discount updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.put("/discount/:id", discountControllers.updateDiscount);

/**
 * @swagger
 * /api/discount/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       204:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/discount/:id", discountControllers.deleteDiscount);

module.exports = router;
