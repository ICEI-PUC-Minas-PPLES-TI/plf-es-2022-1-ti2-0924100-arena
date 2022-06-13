const db = require("./Db"); //puxa conexão com o DataBase -> arena
const quadra = require("./Quadra")
// TABELA ATLETAS:

const disponibilidadeQuadra = db.sequelize.define("disponibilidadeQuadras", {

  Data: {
    type: db.Sequelize.DATEONLY,
    allowNull: false,
  },

  HorarioInicio: {
    type: db.Sequelize.TIME,
    allowNull: false,
  },
  HorarioFim: {
    type: db.Sequelize.TIME,
    allowNull: false,
  },
  Alugado: {
      type: db.Sequelize.BOOLEAN,
      allowNull: false,
  }
});

disponibilidadeQuadra.belongsTo(quadra,{
  foreignKey: {
    name: 'CodigoQuadra',
    allowNull: false
  }
})

//disponibilidadeQuadra.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

module.exports = disponibilidadeQuadra;
