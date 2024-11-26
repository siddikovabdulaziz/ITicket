const Joi = require("joi");

const validateCart = (cart) => {
  const schema = Joi.object({
    ticket_id: Joi.number().required(),
    customer_id: Joi.number().required(),
    createdAt: Joi.date().required(),
    finishedAt: Joi.date().required(),
    status_id: Joi.number().required(),
  });

  return schema.validate(cart);
};
module.exports = { validateCart };
