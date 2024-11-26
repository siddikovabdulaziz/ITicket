const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define("Region", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    postpone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Region.associate = (models) => {
    Region.hasMany(models.District, {
      foreignKey: "region_id",
      as: "district",
    });
    Region.hasMany(models.Customeraddress, {
      foreignKey: "region_id",
      as: "customeraddress",
    });
    Region.hasMany(models.Venue, {
      foreignKey: "region_id",
      as: "venue",
    });
  };

  return Region;
};
