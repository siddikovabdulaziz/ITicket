const { Customercart, Customer } = require("../models");
const {
  validateCustomercart,
} = require("../validations/customercartValidation");
exports.createCustomercart = async (req, res) => {
  const { error } = validateCustomercart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customercart = await Customercart.create(req.body);
    res.status(201).send(customercart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomercart = async (req, res) => {
  try {
    const customercarts = await Customercart.findAll();
    res.status(200).send(customercarts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomercartById = async (req, res) => {
  try {
    const customercart = await Customercart.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
      ],
    });
    if (!customercart) return res.status(404).send("Customercart not found");
    res.status(200).send(customercart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateCustomercart = async (req, res) => {
  const { error } = validateCustomercart(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customercart = await Customercart.findByPk(req.params.id);
    if (!customercart) return res.status(404).send("Customercart not found");

    await customercart.update(req.body);
    res.status(200).send(customercart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteCustomercart = async (req, res) => {
  try {
    const customercart = await Customercart.findByPk(req.params.id);
    if (!customercart) return res.status(400).send("Customercart not found");
    await customercart.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
