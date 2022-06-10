const db = require("./Db"); //puxa conexão com o DataBase -> arena
const quadra = require("./Quadra")
const esporte = require("./Esporte")

// TABELA PARTIDAS:

const partida = db.sequelize.define('partidas',{
    CodigoPartida: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      CodigoTime: {
        type: db.Sequelize.INTEGER,
        allowNull: true,
      },
      HorarioInicio: {
        type: db.Sequelize.TIME,
        allowNull: false
      },
      HorarioFim: {
        type: db.Sequelize.TIME,
        allowNull: false
      },
      Data: {
        type: db.Sequelize.DATEONLY
      },
      MinimoParticipantes: {
          type: db.Sequelize.SMALLINT
      },
      Preco: {
          type: db.Sequelize.DECIMAL(10,2),
          allowNull: false
      }
})

partida.belongsTo(quadra,{
    foreignKey: {
        name: 'CodigoQuadra',
        allowNull: false
      }
})

partida.belongsTo(esporte,{
    foreignKey: {
        name: 'IdEsporte',
        allowNull: false
      }
})

//partida.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.


module.exports = partida;