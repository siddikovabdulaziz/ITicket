const { District, Region } = require("../models");
const { validateDistrict } = require("../validations/districtValidations");

exports.createDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const district = await District.create(req.body);
    res.status(201).send(district);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDistrict = async (req, res) => {
  try {
    const districts = await District.findAll();
    res.status(200).send(districts);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getDistrictById = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: "region",
        },
      ],
    });
    if (!district) return res.status(404).send("District not found");
    res.status(200).send(district);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateDistrict = async (req, res) => {
  const { error } = validateDistrict(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(404).send("District not found");

    await district.update(req.body);
    res.status(200).send(district);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteDistrict = async (req, res) => {
  try {
    const district = await District.findByPk(req.params.id);
    if (!district) return res.status(400).send("District not found");
    await district.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
