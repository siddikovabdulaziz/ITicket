const express = require("express");
const router = express.Router();
const customeraddressControllers = require("../controllers/customeraddressControllers");

/**
 * @swagger
 * tags:
 *   name: Customeraddress
 *   description: Customeraddress managment
 */

/**
 * @swagger
 *  /api/customeraddress:
 *   post:
 *     tags: [Customeraddress]
 *     summary: Create a new customeraddress
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: number
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customeraddress created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post(
  "/customeraddress",
  customeraddressControllers.createCustomeraddress
);

/**
 * @swagger
 * /api/customeraddress:
 *   get:
 *     tags: [Customeraddress]
 *     summary: Get all customeraddress
 *     responses:
 *       200:
 *         description: List of customeraddress
 *       500:
 *         description: Server error
 */
router.get("/customeraddress", customeraddressControllers.getCustomeraddress);

/**
 * @swagger
 * /api/customeraddress/{id}:
 *  get:
 *    tags: [Customeraddress]
 *    summary: get customeraddress By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Customeraddress ID
 *    responses:
 *      200:
 *        description: Customeraddress details
 *      404:
 *        description: Customeraddress not found
 *      500:
 *        description: Server error
 */
router.get(
  "/customeraddress/:id",
  customeraddressControllers.getCustomeraddressById
);

/**
 * @swagger
 * /api/customeraddress/{id}:
 *   put:
 *     tags: [Customeraddress]
 *     summary: Update customeraddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customeraddress ID
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
 *               country_id:
 *                 type: number
 *               region_id:
 *                 type: number
 *               district_id:
 *                 type: number
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat:
 *                 type: number
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customeraddress updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customeraddress not found
 *       500:
 *         description: Server error
 */
router.put(
  "/customeraddress/:id",
  customeraddressControllers.updateCustomeraddress
);

/**
 * @swagger
 * /api/customeraddress/{id}:
 *   delete:
 *     tags: [Customeraddress]
 *     summary: Delete customeraddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customeraddress ID
 *     responses:
 *       204:
 *         description: Customeraddress deleted
 *       404:
 *         description: Customeraddress not found
 *       500:
 *         description: Server error
 *
 */
router.delete(
  "/customeraddress/:id",
  customeraddressControllers.deleteCustomeraddress
);

module.exports = router;
