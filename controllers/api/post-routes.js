const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// POST route on the router
router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    
    console.log(req.session.user_id);
    
    // Creating a new Post using the Post model and the request body, along with the authenticated user's ID from the session
    Post.create({ ...body, user_id: req.session.user_id })
    .then(newPost => {
        // Sending a JSON response with the newly created post
        res.json(newPost);
    })
    .catch(err => {
        // Sending a 500 (Internal Server Error) response with the error information
        res.status(500).json(err);
    });
});

// Defining a PUT route on the router with a dynamic parameter ':id'
router.put('/:id', withAuth, async (req, res) => {
    console.log(req.body, req.params.id);
    Post.update(req.body, {
        where: {
            id: req.params.id,
        },
    })
    .then(affectedRows => {
        if(affectedRows > 0) {
            res.status(200).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

// Defining a DELETE route on the router with a dynamic parameter ':id'
router.delete('/:id', withAuth, async (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(affectedRows => {
        if(affectedRows > 0) {

            res.status(200).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});


module.exports = router;
