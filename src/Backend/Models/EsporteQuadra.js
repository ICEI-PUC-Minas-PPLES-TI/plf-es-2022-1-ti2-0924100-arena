const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA Esporte:

const esportequadra = db.sequelize.define("esportequadra", {
  CodigoQuadra: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  CodigoEsporte: {
    type: db.Sequelize.STRING(2),
    primaryKey: true,
    allowNull: false,
  },
});

//esporte.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = esportequadra;
