
const dataMapper = require('../dataMapper');

const mainController = {
  homePage:  (req, res) => {
    console.log("on est dans mainController.homePage...on appelle dataMapper");


    dataMapper.getAllPokemons( (err, data) => {
      console.log("on est dans le callback, on a reçu une réponse de la DB");
      
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
  }
};



module.exports = mainController;