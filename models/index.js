const User = require('./user');
const Recipes = require('./Recipes');
const Comment = require('./Comment');

Recipes.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Recipes.hasMany(Comment, {
  foreignKey: 'RecipeId',
  onDelete: 'CASCADE'
});


module.exports = {
  User,
  Comment,
  Recipes
};