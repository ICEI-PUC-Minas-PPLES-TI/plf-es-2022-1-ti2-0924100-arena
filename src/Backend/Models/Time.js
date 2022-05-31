const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA Esporte:

const time = db.sequelize.define("time", {
  CodigoTime: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  CodigoEsporte: {
    type: db.Sequelize.STRING(2),
    allowNull: false,
  },

  Nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },

  NumeroMaximo: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },

  NumeroAtletas: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },

  Nivel: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },
});

//esporte.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = time;
