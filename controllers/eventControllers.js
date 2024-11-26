const {
  Event,
  Event_type,
  Human_category,
  Venue,
  Language,
} = require("../models");
const { validateEvent } = require("../validations/eventValidation");

exports.createEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.create(req.body);
    res.status(201).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEvent = async (req, res) => {
  try {
    const events = await Event.findAll();
    res.status(200).send(events);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id, {
      include: [
        {
          model: Event_type,
          as: "event_type",
        },
        {
          model: Human_category,
          as: "human_category",
        },
        {
          model: Venue,
          as: "venue",
        },
        {
          model: Language,
          as: "language",
        },
      ],
    });
    if (!event) return res.status(404).send("Event not found");
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateEvent = async (req, res) => {
  const { error } = validateEvent(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(404).send("Event not found");

    await event.update(req.body);
    res.status(200).send(event);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (!event) return res.status(400).send("Event not found");
    await event.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
