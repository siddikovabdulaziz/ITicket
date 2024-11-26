const Joi = require("joi");

const validateCountry = (country) => {
  const schema = Joi.object({
    country: Joi.string().min(3).required(),
  });

  return schema.validate(country);
};
module.exports = { validateCountry };
