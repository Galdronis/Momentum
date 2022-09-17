const User = require('./User');
const Cards = require('./Cards');

User.hasMany(Cards, {
  foreignKey: 'user_id',
});

Cards.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Cards };
