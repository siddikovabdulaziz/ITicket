const { Tickettype, Ticket } = require("../models");
const { validateTickettype } = require("../validations/tickettypeValidation");

exports.createTickettype = async (req, res) => {
  const { error } = validateTickettype(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const tickettype = await Tickettype.create(req.body);
    res.status(201).send(tickettype);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTickettype = async (req, res) => {
  try {
    const tickettypes = await Tickettype.findAll();
    res.status(200).send(tickettypes);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTickettypeById = async (req, res) => {
  try {
    const tickettype = await Tickettype.findByPk(req.params.id, {
      include: [
        {
          model: Ticket,
          as: "ticket",
        },
      ],
    });
    if (!tickettype) return res.status(404).send("Tickettype not found");
    res.status(200).send(tickettype);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTickettype = async (req, res) => {
  const { error } = validateTickettype(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const tickettype = await Tickettype.findByPk(req.params.id);
    if (!tickettype) return res.status(404).send("Tickettype not found");

    await tickettype.update(req.body);
    res.status(200).send(tickettype);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteTickettype = async (req, res) => {
  try {
    const tickettype = await Tickettype.findByPk(req.params.id);
    if (!tickettype) return res.status(400).send("Tickettype not found");
    await tickettype.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
