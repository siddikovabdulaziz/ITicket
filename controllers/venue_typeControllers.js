const { Venue_type } = require("../models");
const { validateVenue_type } = require("../validations/venue_typeValidation");

exports.createVenue_type = async (req, res) => {
  const { error } = validateVenue_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_type = await Venue_type.create(req.body);
    res.status(201).send(venue_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenue_type = async (req, res) => {
  try {
    const venue_types = await Venue_type.findAll();
    res.status(200).send(venue_types);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenue_typeById = async (req, res) => {
  try {
    const venue_type = await Venue_type.findByPk(req.params.id);
    if (!venue_type) return res.status(404).send("Venue_type not found");
    res.status(200).send(venue_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateVenue_type = async (req, res) => {
  const { error } = validateVenue_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_type = await Venue_type.findByPk(req.params.id);
    if (!venue_type) return res.status(404).send("Venue_type not found");

    await venue_type.update(req.body);
    res.status(200).send(venue_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenue_type = async (req, res) => {
  try {
    const venue_type = await Venue_type.findByPk(req.params.id);
    if (!venue_type) return res.status(400).send("Venue_type not found");
    await venue_type.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
