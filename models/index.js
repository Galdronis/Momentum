const User = require('./User');
const Cards = require('./Cards');

User.hasMany(Cards, {
  foreignKey: 'book_id',
});

Cards.belongsTo(User, {
  foreignKey: 'book_id',
});

module.exports = { User, Cards };
