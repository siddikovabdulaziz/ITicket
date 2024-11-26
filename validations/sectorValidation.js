const Joi = require("joi");

const validateSector = (sector) => {
  const schema = Joi.object({
    sector_name: Joi.string().min(3).required(),
  });

  return schema.validate(sector);
};
module.exports = { validateSector };
