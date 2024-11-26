const Joi = require("joi");

const validateHuman_category = (human_category) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_age: Joi.number().required(),
    finish_age: Joi.number().required(),
    gender: Joi.number().required(),
  });

  return schema.validate(human_category);
};
module.exports = { validateHuman_category };
