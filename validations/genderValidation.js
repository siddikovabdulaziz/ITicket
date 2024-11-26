const Joi = require("joi");

const validateGender = (gender) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(gender);
};
module.exports = { validateGender };
