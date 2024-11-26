const {
  Booking,
  Cart,
  Status,
  Delivery,
  Payment,
  Discount,
} = require("../models");

const { validateBooking } = require("../validations/bookingValidations");

exports.createBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.create(req.body);
    res.status(201).send(booking);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBooking = async (req, res) => {
  try {
    const bookings = await Booking.findAll();
    res.status(200).send(bookings);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getBookingById = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id, {
      include: [
        {
          model: Cart,
          as: "cart",
        },
        {
          model: Status,
          as: "status",
        },
        {
          model: Delivery,
          as: "delivery",
        },
        {
          model: Payment,
          as: "payment",
        },
        {
          model: Discount,
          as: "discount",
        },
      ],
    });
    if (!booking) return res.status(404).send("Booking not found");
    res.status(200).send(booking);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateBooking = async (req, res) => {
  const { error } = validateBooking(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(404).send("Booking not found");

    await booking.update(req.body);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByPk(req.params.id);
    if (!booking) return res.status(400).send("Booking not found");
    await booking.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
