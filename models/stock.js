module.exports = (sequelize, DataTypes) => {
  return sequelize.define('stock', {
    category: {
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    cnt: {
      type: DataTypes.INTEGER
    },
    img: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
  });
};