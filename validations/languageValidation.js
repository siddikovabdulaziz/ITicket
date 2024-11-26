const Joi = require("joi");

const validateLanguage = (language) => {
  const schema = Joi.object({
    language: Joi.string().required(),
    description: Joi.string().required(),
  });

  return schema.validate(language);
};
module.exports = { validateLanguage };
