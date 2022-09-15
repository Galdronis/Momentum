const sequelize = require('../config/connection');
const { User } = require('../models');
const { Cards } = require("../models");

const userData = require('./userData.json');
const cardData = require('./cards.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await Cards.bulkCreate(cardData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();