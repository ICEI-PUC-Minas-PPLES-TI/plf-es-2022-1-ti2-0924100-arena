const db = require("./Db"); //puxa conexão com o DataBase -> arena
const atleta = require("./Atleta")
const esporte = require("./Esporte")

// TABELA AVALIAÇÃOHABILIDADE:

const avaliacaoHabilidade = db.sequelize.define("avaliacaohabilidades", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: atleta, 
      key: 'EmailAtleta'
    }
  },

  CodigoEsporte: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: esporte, 
      key: 'IdEsporte'
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

  Nota: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },
});

//avaliacaoHabilidade.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = avaliacaoHabilidade;
