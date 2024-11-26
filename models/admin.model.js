const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hashed_password: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_creator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });

  Admin.beforeSave(async (admin, options) => {
    if (admin.changed("hashed_password")) {
      admin.hashed_password = await bcrypt.hash(admin.hashed_password, 10);
    }
  });
  return Admin;
};
