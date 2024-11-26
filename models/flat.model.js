const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Flat = sequelize.define("Flat", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    etaj: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    condition: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Flat.associate = (models) => {
    Flat.hasMany(models.Customeraddress, {
      foreignKey: "flat_id",
      as: "customeraddress",
    });
  };

  return Flat;
};
