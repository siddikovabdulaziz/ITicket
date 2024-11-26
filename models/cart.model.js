const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    finishedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
  Cart.associate = (models) => {
    Cart.hasMany(models.Booking, {
      foreignKey: "cart_id",
      as: "bookings",
    });
    Cart.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Cart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Cart.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
  };

  return Cart;
};
