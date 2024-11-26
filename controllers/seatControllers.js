const { Seat, Sector, Venue, Seat_type } = require("../models");
const { validateSeat } = require("../validations/seatValidations");

exports.createSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.create(req.body);
    res.status(201).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSeat = async (req, res) => {
  try {
    const seats = await Seat.findAll();
    res.status(200).send(seats);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSeatById = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id, {
      include: [
        {
          model: Sector,
          as: "sector",
        },
        {
          model: Venue,
          as: "venue",
        },
        {
          model: Seat_type,
          as: "seat_type",
        },
      ],
    });
    if (!seat) return res.status(404).send("Seat not found");
    res.status(200).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateSeat = async (req, res) => {
  const { error } = validateSeat(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(404).send("Seat not found");

    await seat.update(req.body);
    res.status(200).send(seat);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteSeat = async (req, res) => {
  try {
    const seat = await Seat.findByPk(req.params.id);
    if (!seat) return res.status(400).send("Seat not found");
    await seat.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
