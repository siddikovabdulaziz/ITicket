const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("Venue", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    site: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    schema: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    district_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  Venue.associate = (models) => {
    Venue.hasMany(models.Event, {
      foreignKey: "venue_id",
      as: "event",
    });
    Venue.hasMany(models.Seat, {
      foreignKey: "venue_id",
      as: "seat",
    });
    Venue.hasMany(models.Venue_photo, {
      foreignKey: "venue_id",
      as: "venue_photo",
    });
    Venue.belongsTo(models.Venue_type, {
      foreignKey: "venue_type_id",
      as: "venue_type",
    });
    Venue.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    Venue.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
  };

  return Venue;
};
