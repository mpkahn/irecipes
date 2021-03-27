const User = require('./users');
const Recipe = require('./Recipes');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Recipe.hasMany(Comment, {
  foreignKey: 'RecipeId',
  onDelete: 'CASCADE'
});


module.exports = {
  User,
  Comment,
  Recipe
};