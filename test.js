// on se connecte à la DB

// pour ça on a besoin du module
const pg = require('pg');


// on crée une connection (un "client")
const client = new pg.Client("postgres://pokedex:pokedex@localhost/pokedex");
client.connect();

// entre la connexion et la deconnexion, on peut faire des trucs !
// par exemple, bah des requpetes SQL !

/**
 * Première syntaxe : avec des fonctions "à l'ancienne"
 */

// function monCallback( err, data ) {
//   // quand on reçoit la réponse de la DB, histoire d'être propre, on se déconnecte.
//   client.end();

//   // premier reflexe, dans TOUT callback :
//   // si j'ai une erreur, on l'affiche, et on quitte.
//   if (err) {
//     console.log(err);
//     return;
//   }

//   // sinon, on peut jouer avec data (c-à-d, le résulat de la requête)
//   //console.log(data);
//   console.log('réponse reçue, tout va bien');
// };
// client.query("SELECT * FROM pokemon", monCallback );
// console.log("requete lancée");


/**
 * Deuxième syntaxe (ça fait STRICTEMENT la même chose)
 *  avec une fonction fléchée
 */
client.query("SELECT * FROM pokemon", (err, data) => {
  client.end();
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
});

