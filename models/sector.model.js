const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Sector = sequelize.define("Sector", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sector_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Sector.associate = (models) => {
    Sector.hasMany(models.Seat, {
      foreignKey: "sector_id",
      as: "seat",
    });
  };

  return Sector;
};
