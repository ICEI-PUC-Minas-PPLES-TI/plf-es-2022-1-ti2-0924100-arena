const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA QUADRA:

const quadra = db.sequelize.define("quadra", {
    EmailLocatario: {
        type: db.Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
    },

    CodigoQuadra: {
        type: db.Sequelize.STRING(4),
        primaryKey: true,
        allowNull: false,
    },

    CEP: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },

    Numero: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },

    Capacidade: {
        type: db.Sequelize.INTEGER,
    },

    Preco: {
        type: db.Sequelize.DECIMAL(6, 2),
    },
});

//quadra.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = quadra;
