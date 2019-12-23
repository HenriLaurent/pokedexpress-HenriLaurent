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


// on rajoute les session
const session = require('express-session');
app.use(session({
  secret: 'a mighty secret',
  saveUninitialized: true,
  resave: true,
}));
// et on fait un petit middleware pour s'assurer que notre list "team" existe bien dans la session
app.use( (req, res, next) => {
  if(!req.session.team) {
    req.session.team = [];
  }
  next();
});


// on rajoute urlencoded (anciennement "body-parser") pour traiter les routes en POST
app.use(express.urlencoded({
  extended: true
}));

// on fait du routage
const router = require('./app/router');
app.use(router);


// on lance l'application 
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


