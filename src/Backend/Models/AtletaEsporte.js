const db = require("./Db"); //puxa conexão com o DataBase -> arena
const atleta = require("./Atleta")
const esporte = require("./Esporte") 

// TABELA ATLETAESPORTE:

const atletaEsporte = db.sequelize.define("atletaesportes", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: atleta, 
      key: 'EmailAtleta'
    }
  },

  IdEsporte: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: esporte, 
      key: 'IdEsporte'
    }
  },
});

//atletaEsporte.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = atletaEsporte;
