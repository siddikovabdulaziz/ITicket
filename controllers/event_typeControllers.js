const { Event_type } = require("../models");
const { validateEvent_type } = require("../validations/event_typeValidation");

exports.createEvent_type = async (req, res) => {
  const { error } = validateEvent_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event_type = await Event_type.create(req.body);
    res.status(201).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEvent_type = async (req, res) => {
  try {
    const event_types = await Event_type.findAll();
    res.status(200).send(event_types);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEvent_typeById = async (req, res) => {
  try {
    const event_type = await Event_type.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Event_type not found");
    res.status(200).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateEvent_type = async (req, res) => {
  const { error } = validateEvent_type(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event_type = await Event_type.findByPk(req.params.id);
    if (!event_type) return res.status(404).send("Event_type not found");

    await event_type.update(req.body);
    res.status(200).send(event_type);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteEvent_type = async (req, res) => {
  try {
    const event_type = await Event_type.findByPk(req.params.id);
    if (!event_type) return res.status(400).send("Event_type not found");
    await event_type.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
