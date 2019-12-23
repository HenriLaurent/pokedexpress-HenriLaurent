// on récupère les variables d'environnement
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5050;

// on crée une app express
const express = require('express');
const app = express();

// les réglages
app.set('view engine', 'ejs');
app.set('views', 'app/views');
// les fichiers statiques
app.use(express.static('public'));


// on fait du routage
const router = require('./app/router');
app.use(router);


// on lance l'application 
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


