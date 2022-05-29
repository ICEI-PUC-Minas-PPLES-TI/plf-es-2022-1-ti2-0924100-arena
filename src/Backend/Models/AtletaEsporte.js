const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const atletaesporte = db.sequelize.define("atletaesporte", {
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
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = atletaesporte;
