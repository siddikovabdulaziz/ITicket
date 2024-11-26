const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const District = sequelize.define("District", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  District.associate = (models) => {
    District.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    District.hasMany(models.Customeraddress, {
      foreignKey: "district_id",
      as: "customeraddress",
    });
    District.hasMany(models.Venue, {
      foreignKey: "district_id",
      as: "venue",
    });
  };

  return District;
};
