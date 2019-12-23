// on crée une connection à la DB
const pg = require('pg');
const client = new pg.Client(process.env.PG_URL);
client.connect();


const dataMapper = {

  getAllPokemons: (callback) => {
    console.log("dans dataMapper.getAllPokemons... on va appeler le callback apres la requete");
    
    client.query("SELECT * FROM pokemon;", callback);
  }
  
};


module.exports = dataMapper;