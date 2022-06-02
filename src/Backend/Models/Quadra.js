const db = require("./Db"); //puxa conexão com o DataBase -> arena
const locatario = require("./Locatario")// puxa a tabela locatario
// TABELA QUADRA:

const quadra = db.sequelize.define("quadras", {
    /*
    EmailLocatario: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    */
    CodigoQuadra: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    CEP: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    Numero: {
        type: db.Sequelize.SMALLINT,
        allowNull: false
    },

    Capacidade: {
        type: db.Sequelize.INTEGER,
    },

    Preco: {
        type: db.Sequelize.DECIMAL(6, 2),
        allowNull: false
    },
});

//TRATA A FOREINGKEY
quadra.belongsTo(locatario,{
    foreignKey: {
        name: 'EmailLocatario',
        allowNull: false
      }
})

//quadra.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = quadra;
