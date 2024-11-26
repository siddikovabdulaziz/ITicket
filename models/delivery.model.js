const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Delivery = sequelize.define("Delivery", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Delivery.associate = (models) => {
    Delivery.hasMany(models.Booking, {
      foreignKey: "delivery_method_id",
      as: "bookings",
    });
  };

  return Delivery;
};
