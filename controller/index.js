const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes = require('./homeRoutes');
const recipeRoutes = require('./recipe-routes.js');



router.use('/recipe', recipeRoutes);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);



module.exports = router;
