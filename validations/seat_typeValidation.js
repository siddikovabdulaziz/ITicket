const Joi = require("joi");

const validateSeat_type = (seat_type) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    start_age: Joi.number().required(),
    finish_age: Joi.number().required(),
    gender: Joi.number().required(),
  });

  return schema.validate(seat_type);
};
module.exports = { validateSeat_type };
