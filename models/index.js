const User = require('./User');
const Cards = require('./Cards');

User.hasMany(Cards, {
  primaryKey: 'user_id',
});

Cards.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Cards };
