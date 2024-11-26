module.exports = (sequelize, DataTypes) => {
  const Human_category = sequelize.define("Human_category", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    start_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    finish_age: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    gender: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  Human_category.associate = (models) => {
    Human_category.belongsTo(models.Gender, {
      foreignKey: "gender",
      as: "gender_info",
    });
  };

  return Human_category;
};
