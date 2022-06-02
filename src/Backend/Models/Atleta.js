const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA ATLETAS:

const atleta = db.sequelize.define("atletas", {
  EmailAtleta: {
    type: db.Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },

  Nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },

  Senha: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },

  DataNascimento: {
    type: db.Sequelize.DATEONLY,
  },

  Sexo: {
    type: db.Sequelize.CHAR(1),
  },
});

//atleta.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = atleta;