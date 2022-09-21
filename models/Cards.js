const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cards extends Model{}

Cards.init(
  {
    //   id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: true,
    //   primaryKey: true,
    //   autoIncrement: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'cards',
  }
)

module.exports = Cards;