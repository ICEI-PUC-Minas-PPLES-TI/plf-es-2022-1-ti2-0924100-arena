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

    NomeQuadra: {
<<<<<<< HEAD
      type: db.Sequelize.STRING,
      allowNull: false
=======
        type: db.Sequelize.STRING,
        allowNull: false
>>>>>>> 988a1450dd2a8b78ca1a6e5c478f8f294a462d91
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
