const db = require("./Db");//puxa conexão com o DataBase -> arena

// TABELA LOCATARIO:

const locatario = db.sequelize.define('locatarios',{
    
    EmailLocatario: {
        type: db.Sequelize.STRING,
        primaryKey: true,
        allowNull: false
    },

    Nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    Senha: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    Contato: {
        type: db.Sequelize.STRING,
        allowNull: false
    },

    DataNascimento: {
        type: db.Sequelize.DATE
    },

    TipoChavePix: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    
    ChavePix: {
        type: db.Sequelize.STRING,
        unique: true,
        allowNull: false
    }

})

//locatario.sync({force: true})// Mantenha-se comentado caso já exista esta tabela

module.exports = locatario;
/**
 * `EmailLocatario` varchar(50) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Senha` varchar(50) NOT NULL,
  `Contato` varchar(20) NOT NULL,
  `DataNascimento` date DEFAULT NULL,
  `TipoChavePIX` varchar(50) NOT NULL,
  `ChavePIX` varchar(50) NOT NULL,
  PRIMARY KEY (`EmailLocatario`),
  UNIQUE KEY `UQ_Pix` (`ChavePIX`)
 * 
 */