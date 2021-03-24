const User = require('./users');
const Recipies = require('./recipes');


User.hasMany(Recipies, {
  foreignKey: 'user_id',
});

Recipies.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Recipies };
