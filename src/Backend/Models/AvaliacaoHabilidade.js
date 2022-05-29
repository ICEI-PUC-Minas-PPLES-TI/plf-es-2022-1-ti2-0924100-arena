const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const avaliacaohabilidade = db.sequelize.define("avaliacaohabilidade", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  CodigoEsporte: {
    type: db.Sequelize.STRING(2),
    primaryKey: true,
    allowNull: false,
  },

  AtletaAvaliador: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  Nota: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = avaliacaohabilidade;
