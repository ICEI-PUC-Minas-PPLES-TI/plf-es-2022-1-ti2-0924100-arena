const db = require("./Db"); //puxa conexão com o DataBase -> arena
const atleta = require("./Atleta")
const partida = require("./Partida")





//TABELA PARA TER O MOTIVO DE RECUSA DE PAGAMENTOS:

const reclamacao = db.sequelize.define("reclamacoes", {
    CodigoPartida: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: partida,
            key: 'CodigoPartida'
        }
    },

    EmailAtleta: {
        type: db.Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        references: {
            model: atleta,
            key: 'EmailAtleta'
        }
    },

    Motivo: {
        type: db.Sequelize.STRING(500),
        allowNull: false
    }


})

reclamacao.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

module.exports = reclamacao;