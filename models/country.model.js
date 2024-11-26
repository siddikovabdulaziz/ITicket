const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define("Country", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Country.associate = (models) => {
    Country.hasMany(models.Customeraddress, {
      foreignKey: "country_id",
      as: "customeraddress",
    });
  };

  return Country;
};
