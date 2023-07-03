const router = require('express').Router();
const { User } = require('../../models');

//Create a new user with the provided username and password
router.post('/', async (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    .then(dbUserData => {
      // Save user data and send a JSON response
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })
    .catch(err => {
      // Log any errors and send a 500 status 
        console.log(err);
        res.status(500).json(err);
    });
});

// Find a user with the provided username 
router.post('/login', async (req, res) => {
   User.findOne({ 
         where: {
              username: req.body.username,
         },
    })
    .then(dbUserData => {
      // Checking is user exists
        if(!dbUserData) {
            res.status(400).json({ message: 'Username not found' });
            return;
        }
        // Check if password is valid
        const validPassword = dbUserData.checkPassword(req.body.password);
        if(!validPassword) {
            res.status(400).json({ message: 'Password incorrect!' });
            return;
        }
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json({ user: dbUserData, message: 'You are logged in!' });
        });
    });
});

router.post('/logout', async (req, res) => {
    if(req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

router.delete('user/:id', async (req, res) => {
    User.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(404).json({ message: 'User ID not found!' });
            return;
        }
        res.json(dbUserData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
