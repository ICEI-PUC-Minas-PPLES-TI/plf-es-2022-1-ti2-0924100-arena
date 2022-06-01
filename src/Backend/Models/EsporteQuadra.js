const db = require("./Db"); //puxa conexão com o DataBase -> arena
const esporte = require("./Esporte")//PUXA A TABELA ESPORTE
const quadra = require("./Quadra")//PUXA A TABELA QUADRA

const esporteQuadra = db.sequelize.define('esporteQuadras', {
  
  IdEsporte: {
    type: db.Sequelize.INTEGER,
    references: {
      model: esporte, 
      key: 'IdEsporte'
    }
  },
  CodigoQuadra: {
    type: db.Sequelize.INTEGER,
    references: {
      model: quadra,
      key: 'CodigoQuadra'
    }
  }
});



esporte.belongsToMany(quadra,{through: 'esporteQuadras'})
quadra.belongsToMany(esporte,{through: 'esporteQuadras'})
//esporteQuadra.sync({force: true})


module.exports = esporteQuadra;
