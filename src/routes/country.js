const express = require('express');
const router = express.Router();
const countryRoutes  = require('../controllers/country');

// Route to create a new country
router.post('/add', countryRoutes.createCountry);

// Route to get country details
router.get('/list', countryRoutes.getCountry);

module.exports = router;