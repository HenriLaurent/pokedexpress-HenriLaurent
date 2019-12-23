const express = require('express');

const router = express.Router();

// on va chercher le(s) controller(s)
const mainController = require('./controllers/mainController');

router.get('/', mainController.homePage );


module.exports = router;