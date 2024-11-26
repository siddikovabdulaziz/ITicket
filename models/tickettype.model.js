const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Tickettype = sequelize.define("Tickettype", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });



  
  Tickettype.associate = (models) => {
    Tickettype.belongsTo(models.Ticket, {
      foreignKey: "ticket_id",
      as: "ticket",
    });
  };
  return Tickettype;
};
