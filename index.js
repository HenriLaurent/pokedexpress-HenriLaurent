// on récupère les variables d'environnement
const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 5050;


// on crée une connection à la DB
const pg = require('pg');
const client = new pg.Client(process.env.PG_URL);
client.connect();

// on crée une app express
const express = require('express');
const app = express();

// les réglages
app.set('view engine', 'ejs');
app.set('views', 'app/views');

// on fait du routage
app.get('/', (req, res) => {

  client.query("SELECT * FROM pokemon;", (err, data) => {
    // si y'a une erreur, on la log, ET on la renvoie au navigateur
    if (err) {
      console.log(err);
      return res.send(err);
    }

    // et sinon.....
    // on a compris (à grand coup de console.log), que nos données sont dans data.rows
    // donc on affiche notre view, en lui passant les données qui sont dans data.rows
    res.render('home', {
      pokemons: data.rows
    });

  });
});

// on lance l'application 
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});


