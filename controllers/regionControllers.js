const { Region } = require("../models");
const { validateRegion } = require("../validations/regionValidation");

exports.createRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const region = await Region.create(req.body);
    res.status(201).send(region);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getRegion = async (req, res) => {
  try {
    const regions = await Region.findAll();
    res.status(200).send(regions);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getRegionById = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region not found");
    res.status(200).send(region);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateRegion = async (req, res) => {
  const { error } = validateRegion(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(404).send("Region not found");

    await region.update(req.body);
    res.status(200).send(region);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteRegion = async (req, res) => {
  try {
    const region = await Region.findByPk(req.params.id);
    if (!region) return res.status(400).send("Region not found");
    await region.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
