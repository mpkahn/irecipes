const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');


router.get('/', withAuth, async (req, res) => {
  try {
    const postContent = await Post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postContent.map((post) => post.get({ plain: true }));

    res.render('adminposts', {
      layout: 'recipes',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postContent = await Post.findByPk(req.params.id);

    if (postContent) {
      const post = postContent.get({ plain: true });

      res.render('editpage', {
        layout: 'recipes',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('createpost', {
    layout: 'recipes',
  });
});


module.exports = router;
