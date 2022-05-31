const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const pagamento = db.sequelize.define("pagamento", {

  CodigoPartida: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  Pago: {
    type: db.Sequelize.BOOLEAN,
    allowNull: false,
  },

  DataPagamento: {
    type: db.Sequelize.DATEONLY,
    allowNull: false,
  },
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = pagamento;
