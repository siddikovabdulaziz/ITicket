const Joi = require("joi");

const validateSeat = (seat) => {
  const schema = Joi.object({
    sector_id: Joi.number().required(),
    row_number: Joi.number().required(),
    number: Joi.number().required(),
    venue_id: Joi.number().required(),
    seat_type_id: Joi.number().required(),
    location_in_schema: Joi.string().required(),
  });

  return schema.validate(seat);
};
module.exports = { validateSeat };
