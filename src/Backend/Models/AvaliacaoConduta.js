const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const avaliacaoconduta = db.sequelize.define("avaliacaoconduta", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  AtletaAvaliador: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  CodigoPartida: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  Nota: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = avaliacaoconduta;
