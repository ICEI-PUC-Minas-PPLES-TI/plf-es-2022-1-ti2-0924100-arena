const db = require("./Db"); //puxa conexão com o DataBase -> arena

// TABELA Esporte:

const esporte = db.sequelize.define("esportes", {
  IdEsporte: {
    type: db.Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },

  Nome: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },

  Descricao: {
    type: db.Sequelize.TEXT,
  },
});

//esporte.sync({force: true})// Mantenha-se comentado caso já exista esta tabela.

//APOS JÁ TER CRIADO A TABELA ESPORTES:;

/*
esporte.create({
  id: 1,
  Nome:'Futebol',
  Descricao: 'O futebol, disputado classicamente entre duas equipes, cada uma com 11 jogadores, que utilizam principalmente os pés e a cabeça para movimentar a bola em direção ao campo adversário, tem o objetivo de colocá-la dentro do gol.'

})

esporte.create({
  id: 2,
  Nome:'Vôlei',
  Descricao: 'O voleibol é um esporte disputado por dois times que têm como objetivo lançar uma bola por cima de uma rede e fazer com que ela atinja o chão da quadra adversária, marcando, assim, um ponto.'

})

esporte.create({
  id: 3,
  Nome:'Basquete',
  Descricao: 'O basquete é uma modalidade esportiva muito dinâmica e intensa. Suas partidas são disputadas entre duas equipes compostas por cinco jogadores cada uma. Durante o jogo, o objetivo é fazer ponto ou converter a cesta, impedindo que a outra equipe marque pontos.'

})

esporte.create({
  id: 4,
  Nome:'Futevôlei',
  Descricao: 'É jogado por duas equipes formadas por dois ou quarto jogadores. O jogo é disputado em uma quadra de areia dividida por uma rede suspensa. Os jogadores têm por objetivo enviar a bola por cima da rede usando toques que podem ser efetuados com os pés, coxas, peito, cabeça e ombros.'

})

esporte.create({
  id: 5,
  Nome:'Tênis',
  Descricao: 'Tênis é um esporte praticado entre dois oponentes ou duas duplas de oponentes em uma quadra dividida por uma rede, onde os jogadores usam raquetes para rebater uma pequena bola de um lado para o outro.'

})

*/


module.exports = esporte;
