const db = require("./Db"); //puxa conexão com o DataBase -> arena
const esporte = require("./Esporte")// puxa a tabela esporte
// TABELA Esporte:

const time = db.sequelize.define("times", {
  CodigoTime: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  
  /*
  CodigoEsporte: {
    type: db.Sequelize.STRING(2),
    allowNull: false,
  },
  */
  Nome: {
    type: db.Sequelize.STRING,
    unique: true,
    allowNull: false,
  },

  NumeroMaximo: {
    type: db.Sequelize.INTEGER,
    allowNull: true,
  },

  NumeroAtletas: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
  },

  Nivel: {
    type: db.Sequelize.SMALLINT,
    allowNull: true,
  },
});

//TRATA A FOREINGKEY
time.belongsTo(esporte,{
  foreignKey: {
      name: 'IdEsporte',
      allowNull: false
    }
})

//time.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

module.exports = time;
