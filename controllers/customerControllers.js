const { Customer, Language, Gender } = require("../models");
const { validateCustomer } = require("../validations/customerValidation");

exports.createCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer = await Customer.create(req.body);
    res.status(201).send(customer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomer = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).send(customers);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id, {
      include: [
        {
          model: Language,
          as: "language",
        },
        {
          model: Gender,
          as: "gender",
        },
      ],
    });
    if (!customer) return res.status(404).send("Customer not found");
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.updateCustomer = async (req, res) => {
  const { error } = validateCustomer(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(404).send("Customer not found");

    await customer.update(req.body);
    res.status(200).send(customer);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) return res.status(400).send("Customer not found");
    await customer.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
