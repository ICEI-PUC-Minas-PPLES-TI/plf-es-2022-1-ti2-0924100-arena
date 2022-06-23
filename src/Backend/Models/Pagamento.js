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
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: "Pendente"
  },

  DataPagamento: {
    type: db.Sequelize.DATEONLY,
  },

  Comprovante: {
    type: db.Sequelize.TEXT('medium')
  }
});

//pagamento.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

module.exports = pagamento;
