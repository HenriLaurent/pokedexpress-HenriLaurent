const express = require('express');

const router = express.Router();

// on va chercher le(s) controller(s)
const mainController = require('./controllers/mainController');
const typeController = require('./controllers/typeController');

router.get('/', mainController.homePage );
router.get('/pokemon/:numero', mainController.pokemonPage);

router.get('/types', typeController.typesPage);
router.get('/type/:typeId', typeController.pokemonsByType);

//et en dernier, la petite 404 qui fait plaisir
router.use( mainController.page404 );

module.exports = router;