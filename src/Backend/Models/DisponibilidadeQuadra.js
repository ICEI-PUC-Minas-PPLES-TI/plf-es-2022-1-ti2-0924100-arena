const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const disponibilidadequadra = db.sequelize.define("disponibilidadequadra", {

  CodigoQuadra: {
    type: db.Sequelize.STRING(4),
    primaryKey: true,
    allowNull: false,
  },

  Data: {
    type: db.Sequelize.DATEONLY,
    allowNull: false,
  },

  Horario: {
    type: db.Sequelize.TIME,
    allowNull: false,
  },

  Alugado: {
      type: db.Sequelize.BOOLEAN,
      allowNull: false,
  }
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = disponibilidadequadra;
