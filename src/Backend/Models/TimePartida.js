const db = require("./Db"); //puxa conexão com o DataBase -> arena
const time = require("./Time")
const partida = require("./Partida")

// TABELA TIMEPARTIDA:

const timePartida = db.sequelize.define("timePartidas", {
  CodigoTime: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: time, 
      key: 'CodigoTime'
    }
  },

  CodigoTime2: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: time, 
      key: 'CodigoTime'
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
});

//timePartida.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

module.exports = timePartida;
