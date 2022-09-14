const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cards extends Model{}

Cards.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
)

module.exports = Cards;