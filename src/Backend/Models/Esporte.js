const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA Esporte:

const esporte = db.sequelize.define("esporte", {
  IdEsporte: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  Nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },

  Descricao: {
    type: db.Sequelize.TEXT,
  },
});

//esporte.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = esporte;
