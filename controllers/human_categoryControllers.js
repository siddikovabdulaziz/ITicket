const { Human_category, Gender } = require("../models");
const {
  validateHuman_category,
} = require("../validations/human_categoryValidation");

exports.createHuman_category = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const human_category = await Human_category.create(req.body);
    res.status(201).send(human_category);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getHuman_category = async (req, res) => {
  try {
    const human_categorys = await Human_category.findAll({
      include: [
        {
          model: Gender,
          as: "gender_info", 
          attributes: ["id", "name"], 
        },
      ],
    });
    res.status(200).send(human_categorys);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.getHuman_categoryById = async (req, res) => {
  try {
    const human_category = await Human_category.findByPk(req.params.id, {
      include: [
        {
          model: Gender,
          as: "gender_info", 
          attributes: ["id", "name"], 
        },
      ],
    });
    if (!human_category)
      return res.status(404).send("Human_category not found");

    res.status(200).send(human_category);
  } catch (err) {
    res.status(500).send(err.message);
  }
};


exports.updateHuman_category = async (req, res) => {
  const { error } = validateHuman_category(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const human_category = await Human_category.findByPk(req.params.id);
    if (!human_category)
      return res.status(404).send("Human_category not found");

    await human_category.update(req.body);
    res.status(200).send(human_category);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteHuman_category = async (req, res) => {
  try {
    const human_category = await Human_category.findByPk(req.params.id);
    if (!human_category)
      return res.status(400).send("Human_category not found");
    await human_category.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
