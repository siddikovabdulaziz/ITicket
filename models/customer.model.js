const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define("Customer", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    birth_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    gender_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    language_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    hashed_refresh_token: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Customer.associate = (models) => {
   
    Customer.belongsTo(models.Gender, {
      foreignKey: "gender_id",
      as: "gender",
    });
    
    Customer.hasMany(models.Customercart, {
      foreignKey: "customer_id",
      as: "customercart",
    });
    Customer.hasMany(models.Customeraddress, {
      foreignKey: "customer_id",
      as: "customeraddress",
    });
    Customer.hasMany(models.Cart, {
      foreignKey: "customer_id",
      as: "cart",
    });
    Customer.belongsTo(models.Language, {
      foreignKey: "language_id",
      as: "language",
    });
  };
  return Customer;
};
