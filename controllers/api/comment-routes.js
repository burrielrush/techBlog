const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Defining a POST route on the router
router.post('/', withAuth, async (req, res) => {
    Comment.create({ ...req.body, user_id: req.session.user_id })
    .then(newComment => {
        res.json(newComment);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Exporting the router to be used in other parts of the application
module.exports = router;