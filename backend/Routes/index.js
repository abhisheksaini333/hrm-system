const express = require('express');
const router = express.Router();

// import the conteoller
const locationCOontroller = require('../Controllers/Locations');

// declare the routes and boind to controller methids

router.get('/getAllLocations', locationCOontroller.getAllLocations);
router.get('/getPropertyTypes', (req, res) => { });


module.exports = router;