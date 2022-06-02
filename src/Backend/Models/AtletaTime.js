const db = require("./Db"); //puxa conexão com o DataBase -> arena
const atleta = require("./Atleta")
const time = require("./Time")

// TABELA ATLETATIMES:

const atletaTime = db.sequelize.define("atletaTimes", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: atleta,
      key: 'EmailAtleta'
    }
  },

  CodigoTime: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: time,
      key: 'CodigoTime'
    }
  },
});

atletaTime.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = atletaTime;
