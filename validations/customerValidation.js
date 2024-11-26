const Joi = require("joi");

const validateCustomer = (customer) => {
  const schema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    phone: Joi.string().required(),
    email: Joi.string().required(),
    birth_date: Joi.date().required(),
    gender_id: Joi.number().integer().required(), 
    language_id: Joi.number().required(),
    hashed_refresh_token: Joi.string().required(),
  });

  return schema.validate(customer);
};

module.exports = { validateCustomer };
