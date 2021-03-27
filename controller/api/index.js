const router = require('express').Router();

const postRoutes = require('./post-routes');
const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');



// const [ROUTE IN THIS FOLDER] = require('./ROUTE IN THIS FOLDER');
// const {recipeRoutes} = require('./ROUTE IN THIS FOLDER');
router.use('/comment', commentRoutes);

router.use('/user', userRoutes);
// router.use('/recipes', recipeRoutes);
router.use('/post', postRoutes);


module.exports = router;
