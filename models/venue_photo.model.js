const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Venue_photo = sequelize.define("Venue_photo", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Venue_photo.associate = (models) => {
    Venue_photo.belongsTo(models.Venue, {
      foreignKey: "venue_id",
      as: "venue",
    });
  };

  return Venue_photo;
};
