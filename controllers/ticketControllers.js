const { Ticket, Event, Tickettype, Seat, Status } = require("../models");
const { validateTicket } = require("../validations/ticketValidation");

exports.createTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.create(req.body);
    res.status(201).send(ticket);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTicket = async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).send(tickets);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id, {
      include: [
        {
          model: Event,
          as: "event",
        },
        {
          model: Tickettype,
          as: "tickettype",
        },
        {
          model: Seat,
          as: "seat",
        },
        {
          model: Status,
          as: "status",
        },
      ],
    });
    if (!ticket) return res.status(404).send("Ticket not found");
    res.status(200).send(ticket);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateTicket = async (req, res) => {
  const { error } = validateTicket(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(404).send("Ticket not found");

    await ticket.update(req.body);
    res.status(200).send(ticket);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByPk(req.params.id);
    if (!ticket) return res.status(400).send("Ticket not found");
    await ticket.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
