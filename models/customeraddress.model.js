const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  const Customeraddress = sequelize.define("Customeraddress", {
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
    country_id: {
      type: DataTypes.INTEGER,
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
    street: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    house: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    flat_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_index: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Customeraddress.associate = (models) => {
    Customeraddress.belongsTo(models.Customer, {
      foreignKey: "customer_id",
      as: "customer",
    });
    Customeraddress.belongsTo(models.Country, {
      foreignKey: "country_id",
      as: "country",
    });
    Customeraddress.belongsTo(models.Region, {
      foreignKey: "region_id",
      as: "region",
    });
    Customeraddress.belongsTo(models.Flat, {
      foreignKey: "flat_id",
      as: "flat",
    });
    Customeraddress.belongsTo(models.District, {
      foreignKey: "district_id",
      as: "district",
    });
  };

  return Customeraddress;
};
