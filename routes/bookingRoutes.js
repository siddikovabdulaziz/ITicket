const express = require('express')
const router = express.Router();
const bookingController = require("../controllers/bookingControllers")

/** 
* @swagger
* tags:
*    name: Bookings
*    description: Bookings management
*/

/**
* @swagger
* /api/bookings:
*  post:
*     tags: [Bookings]
*     summary: Create a new booking
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               cart_id:
*                 type: number
*               createdAt:
*                 type: string
*                 format: date
*               fineshed:
*                 type: string
*                 format: date
*               payment_method_id:
*                 type: number
*               delivery_method_id:
*                 type: number
*               discount_coupon_id:
*                 type: number
*               status_id:
*                 type: number
*     responses:
*       201:
*         description: booking created 
*       400:
*         description: Invalid input
*       500:
*         description: Server error
*/
router.post("/bookings", bookingController.createBooking)

/**
* @swagger
* /api/bookings:
*   get:
*     tags: [Bookings]
*     summary: Get all bookings
*     responses:
*       200: 
*         description: List of bookings
*       500:
*         description: Server error
*/
router.get("/bookings", bookingController.getBooking)

/**
* @swagger
* /api/bookings/{id}:
*   get:
*     tags: [Bookings]
*     summary: Update bookings by ID
*     parameters:
*       - in: path
*         name: id
*         schema:
*           type: integer
*         required: true
*         description: booking ID
*     responses:
*       '200':
*         description: Booking detailes
*       '400':
*         description: Booking not found
*       '500':
*         description: Server error
*/
router.get("/bookings/:id", bookingController.getBookingById)

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     tags: [Bookings]
 *     summary: Update booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
*               cart_id:
*                 type: number
*               createdAt:
*                 type: string
*                 format: date
*               fineshed:
*                 type: string
*                 format: date
*               payment_method_id:
*                 type: number
*               delivery_method_id:
*                 type: number
*               discount_coupon_id:
*                 type: number
*               status_id:
*                 type: number
 *     responses:
 *       200:
 *         description: Booking updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put("/bookings/:id", bookingController.updateBooking)

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     tags: [Bookings]
 *     summary: Delete booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       204:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.delete("/bookings/:id", bookingController.deleteBooking)

module.exports = router
