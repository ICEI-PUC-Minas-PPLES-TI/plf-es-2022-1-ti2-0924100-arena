const db = require("./Db"); //puxa conexão com o DataBase -> arena
const quadra = require("./Quadra")
// TABELA ATLETAS:

const disponibilidadeQuadra = db.sequelize.define("disponibilidadeQuadras", {

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

disponibilidadeQuadra.belongsTo(quadra,{
  foreignKey: {
    name: 'CodigoQuadra',
    allowNull: false
  }
})

//disponibilidadeQuadra.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

<<<<<<< HEAD
module.exports = disponibilidadeQuadra;
=======
module.exports = disponibilidadeQuadra;
>>>>>>> a6186efcad25c02ba8bedc4042b6c9cd3a0afe0e
