const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA Esporte:

const timepartida = db.sequelize.define("timepartida", {
  CodigoTime: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  CodigoTime2: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  CodigoPartida: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },
});

//esporte.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = timepartida;
