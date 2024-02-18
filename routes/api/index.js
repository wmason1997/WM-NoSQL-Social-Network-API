const router = require('express').Router();

const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/users', userRoutes); // needed to add the / before users for Insomnia
router.use('/thoughts', thoughtRoutes); // needed to add the / before thoughts for Insomnia

module.exports = router;