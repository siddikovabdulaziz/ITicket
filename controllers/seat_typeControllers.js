const { Seat_type } = require("../models");
const { validateSeat_type } = require("../validations/seat_typeValidation");

exports.createSeat_type = async (req, res) => {
  const { error } = validateSeat_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat_type = await Seat_type.create(req.body);
    res.status(201).send(seat_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSeat_type = async (req, res) => {
  try {
    const seat_types = await Seat_type.findAll();
    res.status(200).send(seat_types);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getSeat_typeById = async (req, res) => {
  try {
    const seat_type = await Seat_type.findByPk(req.params.id);
    if (!seat_type) return res.status(404).send("Seat_type not found");
    res.status(200).send(seat_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateSeat_type = async (req, res) => {
  const { error } = validateSeat_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const seat_type = await Seat_type.findByPk(req.params.id);
    if (!seat_type) return res.status(404).send("Seat_type not found");

    await seat_type.update(req.body);
    res.status(200).send(seat_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteSeat_type = async (req, res) => {
  try {
    const seat_type = await Seat_type.findByPk(req.params.id);
    if (!seat_type) return res.status(400).send("Seat_type not found");
    await seat_type.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
