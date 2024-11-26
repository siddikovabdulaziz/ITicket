const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customercart = sequelize.define("Customercart", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    year: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    month: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    is_main: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
  });
  Customercart.associate = (models) => {
    Customercart.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
  };

  return Customercart;
};
