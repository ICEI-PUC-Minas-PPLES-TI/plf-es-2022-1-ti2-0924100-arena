const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const atletatime = db.sequelize.define("atletatime", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  CodigoTime: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = atletatime;
