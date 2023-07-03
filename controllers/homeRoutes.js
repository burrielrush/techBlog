const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Retrieve all posts and associated users
router.get('/', async (req, res) => {
  try {
    // Retrieve all posts with associated user data
    const dbPostData = await Post.findAll({
      include: [User],
    });

    // Transform the fetched data to plain JavaScript objects
    const posts = dbPostData.map((post) => post.get({ plain: true }));

    // Render the 'all-posts' template and pass the posts to the view
    res.render('all-posts', { posts });
  } catch (err) {
    // Handle any errors and send a 500 status code with the error details as a JSON response
    res.status(500).json(err);
  }
});

// Retrieve a single post, associated user, and comments
router.get('/post/:id', async (req, res) => {
  try {
    // Find a post by its ID and include associated user and comment data
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    
    if (dbPostData) {
      const post = dbPostData.get({ plain: true });

      res.render('single-post', { post });
    } else {
      // If no post is found, send a 404 status code as the response
      res.status(404).end();
    }
  } catch (err) {
    // Handle any errors and send a 500 status code with the error details as a JSON response
    res.status(500).json(err);
  }
});

// Render the login template if the user is not logged in
router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    // If the user is already logged in, redirect to the root URL
    res.redirect('/');
    return;
  }

  // Render the 'login' template
  res.render('login');
});

// Render the signup template if the user is not logged in
router.get('/signup', async (req, res) => {
  if (req.session.loggedIn) {
    // If the user is already logged in, redirect to the root URL
    res.redirect('/');
    return;
  }

  // Render the 'signup' template
  res.render('signup');
});

module.exports = router;
