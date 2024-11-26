const { Admin } = require("../models");
const { validateAdmin } = require("../validations/adminValidations");

exports.createadmin = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const admin = await Admin.create(req.body);
    res.status(201).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAdmin = async (req, res) => {
  try {
    const admins = await Admin.findAll();
    res.status(200).send(admins);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).send("Admin not found");
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateAdmin = async (req, res) => {
  const { error } = validateAdmin(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(404).send("Admin not found");

    await admin.update(req.body);
    res.status(200).send(admin);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByPk(req.params.id);
    if (!admin) return res.status(400).send("Admin not found");
    await admin.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).send(err.message);
  }
};
