const { Gender } = require("../models");
const { validateGender } = require("../validations/genderValidation");

exports.createGender = async (req, res) => {
  const { error } = validateGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const gender = await Gender.create(req.body);
    res.status(201).send(gender);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getGender = async (req, res) => {
  try {
    const genders = await Gender.findAll();
    res.status(200).send(genders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getGenderById = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(404).send("Gender not found");
    res.status(200).send(gender);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateGender = async (req, res) => {
  const { error } = validateGender(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(404).send("Gender not found");

    await gender.update(req.body);
    res.status(200).send(gender);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteGender = async (req, res) => {
  try {
    const gender = await Gender.findByPk(req.params.id);
    if (!gender) return res.status(400).send("Gender not found");
    await gender.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
