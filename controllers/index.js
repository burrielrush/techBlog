const router = require('express').Router();

// Import home-routes.js
const homeRoutes = require('./homeRoutes.js');

//  Use homeRoutes for handling routes starting from the root URL
router.use('/', homeRoutes);

module.exports = router;
