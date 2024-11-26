const Joi = require("joi");

const validateTickettype = (tickettype) => {
  const schema = Joi.object({
    color: Joi.string().required(),
    name: Joi.string().required(),
    ticket_id: Joi.number().required(),
  });

  return schema.validate(tickettype);
};
module.exports = { validateTickettype };
