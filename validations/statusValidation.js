const Joi = require("joi");

const validateStatus = (status) => {
  const schema = Joi.object({
    status: Joi.string().required(),
  });

  return schema.validate(status);
};
module.exports = { validateStatus };
