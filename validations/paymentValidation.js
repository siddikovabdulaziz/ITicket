const Joi = require("joi");

const validatePayment = (payment) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  return schema.validate(payment);
};
module.exports = { validatePayment };
