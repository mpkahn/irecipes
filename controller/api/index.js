const router = require('express').Router();
// const [ROUTE IN THIS FOLDER] = require('./ROUTE IN THIS FOLDER');
// const {recipeRoutes} = require('./ROUTE IN THIS FOLDER');

router.use('/users', userRoutes);
router.use('/recipes', recipeRoutes);

module.exports = router;
