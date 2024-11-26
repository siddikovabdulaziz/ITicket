const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define("Ticket", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seat_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service_free: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ticket_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Ticket.associate = (models) => {
    Ticket.hasMany(models.Cart, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
    Ticket.hasMany(models.Tickettype, {
      foreignKey: "ticket_id",
      as: "tickettype",
    });
    Ticket.belongsTo(models.Seat, {
      foreignKey: "seat_id",
      as: "seat",
    });
    Ticket.belongsTo(models.Status, {
      foreignKey: "status_id",
      as: "status",
    });
    Ticket.belongsTo(models.Event, {
      foreignKey: "event_id",
      as: "event",
    });
  };
  return Ticket;
};
