const { Venue_photo, Venue } = require("../models");
const { validateVenue_photo } = require("../validations/venue_photoValidation");

exports.createVenue_photo = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_photo = await Venue_photo.create(req.body);
    res.status(201).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenue_photo = async (req, res) => {
  try {
    const venue_photos = await Venue_photo.findAll();
    res.status(200).send(venue_photos);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getVenue_photoById = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id, {
      include: [
        {
          model: Venue,
          as: "venue",
        },
      ],
    });
    if (!venue_photo) return res.status(404).send("Venue_photo not found");
    res.status(200).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateVenue_photo = async (req, res) => {
  const { error } = validateVenue_photo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id);
    if (!venue_photo) return res.status(404).send("Venue_photo not found");

    await venue_photo.update(req.body);
    res.status(200).send(venue_photo);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteVenue_photo = async (req, res) => {
  try {
    const venue_photo = await Venue_photo.findByPk(req.params.id);
    if (!venue_photo) return res.status(400).send("Venue_photo not found");

    await venue_photo.destory();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
