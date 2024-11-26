const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Language = sequelize.define("Language", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    language: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Language.associate = (models) => {
    Language.hasMany(models.Customer, {
      foreignKey: "language_id",
      as: "customer",
    });
    Language.hasMany(models.Event, {
      foreignKey: "language_id",
      as: "event",
    });
  };

  return Language;
};
