const Joi = require("joi");

const validateVenue_photo = (venue_photo) => {
  const schema = Joi.object({
    venue_id: Joi.number().required(),
    url: Joi.string().required(),
  });

  return schema.validate(venue_photo);
};
module.exports = { validateVenue_photo };
