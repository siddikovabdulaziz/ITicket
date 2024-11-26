const Joi = require("joi");

const validateFlat = (flat) => {
  const schema = Joi.object({
    etaj: Joi.number().required(),
    condition: Joi.string().required(),
  });

  return schema.validate(flat);
};
module.exports = { validateFlat };
