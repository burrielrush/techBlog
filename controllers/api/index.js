const router = require('express').Router();

// Importing routes
const userRoutes = require('./user-routes');

const commentRoutes = require('./comment-routes');

const postRoutes = require('./post-routes');

// Registering routes under specific endpoints
router.use('/users', userRoutes);

router.use('/comments', commentRoutes);

router.use('/post', postRoutes);

module.exports = router;
