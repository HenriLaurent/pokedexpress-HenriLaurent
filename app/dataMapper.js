// on crée une connection à la DB
const pg = require('pg');
const client = new pg.Client(process.env.PG_URL);
client.connect();


const dataMapper = {

  getAllPokemons: (callback) => {
    //console.log("dans dataMapper.getAllPokemons... on va appeler le callback apres la requete");
    
    client.query("SELECT * FROM pokemon;", callback);
  },

  getPokemonDetails: (numero, callback) => {
    const myQuery = `SELECT * FROM pokemon WHERE numero=${numero}`;
    client.query(myQuery, callback);
  },

  getPokemonTypes: (numero, callback) => {
    const myQuery = `SELECT * FROM type t 
    JOIN pokemon_type pt ON t.id = pt.type_id
    WHERE pt.pokemon_numero=${numero}`;
    client.query(myQuery, callback);
  }
  
};


module.exports = dataMapper;