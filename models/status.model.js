const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define("Status", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Status.associate = (models) => {
    Status.hasMany(models.Booking, {
      foreignKey: "status_id",
      as: "bookings",
    });
    Status.hasMany(models.Ticket, {
      foreignKey: "status_id",
      as: "ticket",
    });
  };
  return Status;
};
