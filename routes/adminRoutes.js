const express = require("express");
const router = express.Router();
const adminControllers = require("../controllers/adminControllers");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin managment
 */

/**
 * @swagger
 *  /api/admin:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/admin", adminControllers.createadmin);

/**
 * @swagger
 * /api/admin:
 *   get:
 *     tags: [Admin]
 *     summary: Get all admin
 *     responses:
 *       200:
 *         description: List of admin
 *       500:
 *         description: Server error
 */
router.get("/admin", adminControllers.getAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *  get:
 *    tags: [Admin]
 *    summary: get admin By ID
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Admin ID
 *    responses:
 *      200:
 *        description: Admin details
 *      404:
 *        description: Admin not found
 *      500:
 *        description: Server error
 */
router.get("/admin/:id", adminControllers.getAdminById);

/**
 * @swagger
 * /api/admin/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: Admin updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.put("/admin/:id", adminControllers.updateAdmin);

/**
 * @swagger
 * /api/admin/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       204:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 *
 */
router.delete("/admin/:id", adminControllers.deleteAdmin);

module.exports = router;
