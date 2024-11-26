const {
  Customeraddress,
  Customer,
  Country,
  Region,
  District,
  Flat,
} = require("../models");
const {
  validateCustomeraddress,
} = require("../validations/customeraddressValidation");

exports.createCustomeraddress = async (req, res) => {
  const { error } = validateCustomeraddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customeraddress = await Customeraddress.create(req.body);
    res.status(201).send(customeraddress);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomeraddress = async (req, res) => {
  try {
    const customeraddresss = await Customeraddress.findAll();
    res.status(200).send(customeraddresss);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCustomeraddressById = async (req, res) => {
  try {
    const customeraddress = await Customeraddress.findByPk(req.params.id, {
      include: [
        {
          model: Customer,
          as: "customer",
        },
        {
          model: Country,
          as: "country",
        },
        {
          model: Region,
          as: "region",
        },
        {
          model: District,
          as: "district",
        },
        {
          model: Flat,
          as: "flat",
        },
      ],
    });
    if (!customeraddress)
      return res.status(404).send("Customeraddress not found");
    res.status(200).send(customeraddress);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateCustomeraddress = async (req, res) => {
  const { error } = validateCustomeraddress(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const customeraddress = await Customeraddress.findByPk(req.params.id);
    if (!customeraddress)
      return res.status(404).send("Customeraddress not found");

    await customeraddress.update(req.body);
    res.status(200).send(customeraddress);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteCustomeraddress = async (req, res) => {
  try {
    const customeraddress = await Customeraddress.findByPk(req.params.id);
    if (!customeraddress)
      return res.status(400).send("Customeraddress not found");
    await customeraddress.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
