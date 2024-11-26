const { Country } = require("../models");
const { validateCountry } = require("../validations/countryValidations");

exports.createCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const country = await Country.create(req.body);
    res.status(201).send(country);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCountry = async (req, res) => {
  try {
    const countrys = await Country.findAll();
    res.status(200).send(countrys);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("Country not found");
    res.status(200).send(country);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateCountry = async (req, res) => {
  const { error } = validateCountry(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(404).send("Country not found");

    await country.update(req.body);
    res.status(200).send(country);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) return res.status(400).send("Country not found");
    await country.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
