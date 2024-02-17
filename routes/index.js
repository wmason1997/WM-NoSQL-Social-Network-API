const router = require('express').Router();
const apiRoutes = require('./api'); // selecting the index.js in the api routes subfolder

router.use('/api', apiRoutes);

router.use((req, res) => res.send('Wrong route! - API'));

module.exports = router;