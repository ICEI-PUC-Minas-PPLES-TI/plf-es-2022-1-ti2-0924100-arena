const db = require("./Db"); //puxa conexão com o DataBase -> arena
const atleta = require("./Atleta")
const partida = require("./Partida")

// TABELA AVALIAÇÃOCONDUTA:

const avaliacaoConduta = db.sequelize.define("avaliacaocondutas", {
  
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    
    references: {
      model: atleta, 
      key: 'EmailAtleta'
    }
  },

  AtletaAvaliador: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: atleta, 
      key: 'EmailAtleta'
    }
  },

  CodigoPartida: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: partida, 
      key: 'CodigoPartida'
    }
  },

  Nota: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },
});

//avaliacaoConduta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = avaliacaoConduta;
