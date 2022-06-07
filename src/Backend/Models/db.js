//CRIA UMA CONEXAO COM O BANCO DE DADOS MYSQL;
const Sequelize = require("sequelize");
// BANCO DE DADOS , USUARIO , SENHA
const sequelize = new Sequelize("arena", "root", "123456", {
  host: "localhost", // SERVIDOR -> NO CASO LOCAL
  dialect: "mysql", // LINGUAGEM SQL
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
};
