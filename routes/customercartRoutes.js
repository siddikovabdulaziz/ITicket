const express = require("express");
const router = express.Router();
const customercartControllers = require("../controllers/customercartControllers");

/**
 * @swagger
 * tags:
 *   name: Customercart
 *   description: Customercart managment
 */

/**
 * @swagger
 *  /api/customercart:
 *   post:
 *     tags: [Customercart]
 *     summary: Create a new cart
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Customercart created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customercart", customercartControllers.createCustomercart);

/**
 * @swagger
 * /api/customercart:
 *   get:
 *     tags: [Customercart]
 *     summary: Get all customercart
 *     responses:
 *       200:
 *         description: List of customercart
 *       500:
 *         description: Server error
 */
router.get("/customercart", customercartControllers.getCustomercart);

/**
 * @swagger
 * /api/customercart/{id}:
 *  get:
 *    tags: [Customercart]
 *    summary: get customercart By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customercart ID
 *    responses:
 *      200:
 *        description: Customercart details
 *      404:
 *        description: Customercart not found
 *      500:
 *        description: Server error
 */
router.get("/customercart/:id", customercartControllers.getCustomercartById);

/**
 * @swagger
 * /api/customercart/{id}:
 *   put:
 *     tags: [Customercart]
 *     summary: Update customercart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customercart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: number
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: number
 *               month:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Customercart updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customercart not found
 *       500:
 *         description: Server error
 */
router.put("/customercart/:id", customercartControllers.updateCustomercart);

/**
 * @swagger
 * /api/customercart/{id}:
 *   delete:
 *     tags: [Customercart]
 *     summary: Delete customercart by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customercart ID
 *     responses:
 *       204:
 *         description: Customercart deleted
 *       404:
 *         description: Customercart not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/customercart/:id", customercartControllers.deleteCustomercart);

module.exports = router;
