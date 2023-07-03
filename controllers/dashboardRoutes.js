const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for the dashboard, requires authentication
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id,
        },
    })
    .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('allPostsAdmin', {
            layout: 'dashboard',
            posts,
        });
    })
    .catch(err => {
        console.log(err);
        res.redirect('login');
    });
});

//Get the new post form for creating a new post, requires authentication
router.get('/new', (req, res) => {
    res.render('new-post', {
        layout: 'dashboard',
    });
});

//Get a single post fr editing in the dashboard,   requires authentication
router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id)
    .then(dbPostData => {
        if(dbPostData) {
            const post = dbPostData.get({ plain: true });
            res.render('edit-post', {
                layout: 'dashboard',
                post,
            });
        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;
