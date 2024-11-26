const { Discount } = require("../models");
const { validateDiscount } = require("../validations/discountValidation");

exports.createDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await Discount.create(req.body);
    res.status(201).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDiscount = async (req, res) => {
  try {
    const discounts = await Discount.findAll();
    res.status(200).send(discounts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDiscountById = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("Discount not found");
    res.status(200).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateDiscount = async (req, res) => {
  const { error } = validateDiscount(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(404).send("Discount not found");

    await discount.update(req.body);
    res.status(200).send(discount);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteDiscount = async (req, res) => {
  try {
    const discount = await Discount.findByPk(req.params.id);
    if (!discount) return res.status(400).send("Discount not found");
    await discount.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
