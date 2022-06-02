const db = require("./Db"); //puxa conexão com o DataBase -> arena
const atleta = require("./Atleta")
const partida = require("./Partida")

// TABELA PPAGAMENTOS:

const pagamento = db.sequelize.define("pagamentos", {

  CodigoPartida: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: partida,
      key: 'CodigoPartida'
    }
  },

  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
    references: {
      model: atleta,
      key: 'EmailAtleta'
    }
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

//pagamento.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

module.exports = pagamento;
