CREATE DATABASE [ARENA]

GO

USE [ARENA]

GO
CREATE TABLE [Esporte]
([Código Esporte] char(2) not null,
[Nome] varchar(100) not null,
[Descrição] varchar(500) null
CONSTRAINT PK_Esporte PRIMARY KEY([Código Esporte])
)

GO

INSERT INTO [Esporte] VALUES ('01', 'futebol','O futebol, disputado classicamente entre duas equipes, cada uma com 11 jogadores, que utilizam principalmente os pés e a cabeça para movimentar a bola em direção ao campo adversário, tem o objetivo de colocá-la dentro do gol.')
INSERT INTO [Esporte] VALUES ('02', 'Vôlei', 'O voleibol é um esporte disputado por dois times que têm como objetivo lançar uma bola por cima de uma rede e fazer com que ela atinja o chão da quadra adversária, marcando, assim, um ponto.')
INSERT INTO [Esporte] VALUES ('03', 'Basquete', '
O basquete é uma modalidade esportiva muito dinâmica e intensa. Suas partidas são disputadas entre duas equipes compostas por cinco jogadores cada uma. Durante o jogo, o objetivo é fazer ponto ou converter a cesta, impedindo que a outra equipe marque pontos.')
INSERT INTO [Esporte] VALUES ('04', 'Futevôlei', 'É jogado por duas equipes formadas por dois ou quarto jogadores. O jogo é disputado em uma quadra de areia dividida por uma rede suspensa. Os jogadores têm por objetivo enviar a bola por cima da rede usando toques que podem ser efetuados com os pés, coxas, peito, cabeça e ombros.')
INSERT INTO [Esporte] VALUES ('05', 'Tênis', 'Tênis é um esporte praticado entre dois oponentes ou duas duplas de oponentes em uma quadra dividida por uma rede, onde os jogadores usam raquetes para rebater uma pequena bola de um lado para o outro')

go

CREATE TABLE [Atleta]
([E-mail Atleta] varchar(50) not null,
[Nome] varchar(100) not null,
[Senha] varchar(50) not null,
[Data de Nascimento] date null,
[Sexo] char(1) null,
[Data de Cadastro] date null,
CONSTRAINT PK_Atleta PRIMARY KEY([E-mail Atleta])

)

GO

CREATE TABLE [Locatário]
([E-mail Locatário] varchar(50) not null,
[Nome] varchar(100) not null,
[Senha] varchar(50) not null, 
[Contato] varchar(20) not null,
[Data de Nascimento] date null,
[Tipo da Chave PIX] varchar(50) not null,
[Chave PIX] varchar (50) not null,
CONSTRAINT PK_Locatario PRIMARY KEY([E-mail Locatário]),
CONSTRAINT UQ_Pix UNIQUE ([Chave PIX])
)

GO

CREATE TABLE [Quadra]  
([Código Quadra] char(4) not null, 
[E-mail Locatário] varchar(50) not null,
[CEP] char (8) not null,
[Número] smallint not null,
[Capacidade] smallint null,
[Preço] smallmoney not null,
CONSTRAINT PK_Quadra PRIMARY KEY([Código Quadra]),
CONSTRAINT FK_Quadra_Locatario FOREIGN KEY ([E-mail Locatário]) REFERENCES 
[Locatário] ([E-mail Locatário]),
)

CREATE TABLE [Esporte/Quadra]
([Código Quadra] char(4) not null,
[Código Esporte] char(2) not null,
CONSTRAINT PK_Esporte_Quadra PRIMARY KEY([Código Quadra],[Código Esporte]),
CONSTRAINT FK_Quadra_Esporte FOREIGN KEY ([Código Quadra]) REFERENCES 
[Quadra] ([Código Quadra]),
CONSTRAINT FK_Esporte_Quadra FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte])
)

GO

CREATE TABLE [Disponibilidade da Quadra]
([Código Quadra] char(4) not null,
[Data] date not null,
[Horário] time not null,
[Alugado] bit not null
CONSTRAINT PK_Disponiv PRIMARY KEY([Código Quadra]),
CONSTRAINT FK_Disponiv FOREIGN KEY ([Código Quadra]) REFERENCES 
[Quadra] ([Código Quadra])
)

GO

CREATE TABLE [Atleta/Esporte]
([E-mail Atleta] varchar(50) not null,
[Código Esporte] char(2) not null
CONSTRAINT PK_Atleta_Esporte PRIMARY KEY([E-mail Atleta],[Código Esporte]),
CONSTRAINT FK_Atleta_Esporte FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Esporte_Atleta FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte])
)

GO

CREATE TABLE [Time]
([Código Time] char(4) not null,
[Código Esporte] char(2) not null,
[Nome] varchar not null,
[Número máximo] smallint null,
[Número de Atletas] smallint null,
[Nível] smallint null,
CONSTRAINT PK_Time PRIMARY KEY([Código Time]),
CONSTRAINT FK_Time_Esporte FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte])
)

GO

CREATE TABLE [Atleta/Time]
([E-mail Atleta] varchar not null,
[Código Time] char(4) not null,
CONSTRAINT PK_Atleta_Time PRIMARY KEY([E-mail Atleta],[Código Time]),
CONSTRAINT FK_Atleta_Time FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Time_Atleta FOREIGN KEY ([Código Time]) REFERENCES 
[Time] ([Código Time])
)

GO

CREATE TABLE [Partida]
([Código Partida] char(4) not null,
[Código Quadra] char(4) not null,
[Código Esporte] char(2) not null,
[Horário de Início] time not null,
[Horário de Fim] time not null,
[Data] date not null,
[Mínimo de particioantes] smallint null,
[Preço] smallmoney not null,
CONSTRAINT PK_Partida PRIMARY KEY([Código Partida]),
CONSTRAINT FK_Partida_Quadra FOREIGN KEY ([Código Quadra]) REFERENCES 
[Quadra] ([Código Quadra]),
CONSTRAINT FK_Partida_Esporte FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte])
)

GO

CREATE TABLE [Time/Partida]
([Código Time] char(4) not null,
[Código Time 2] char(4) not null,
[Código Partida] char(4) not null,
CONSTRAINT PK_Time_Parida PRIMARY KEY([Código Time],[Código Time 2],[Código Partida]),
CONSTRAINT FK_Time_Partida FOREIGN KEY ([Código Time]) REFERENCES 
[Time] ([Código Time]),
CONSTRAINT FK_Time_Partida FOREIGN KEY ([Código Time 2]) REFERENCES 
[Time] ([Código Time]),
CONSTRAINT FK_Partifa_Time FOREIGN KEY ([Código Partida]) REFERENCES 
[Partida] ([Código Partida])
)

GO

CREATE TABLE[Pagamento]
([Código Partida] char(4) not null,
[E-mail Atleta] varchar(50) not null,
[Pago] bit not null,
[Data de Pagamento] date not null,
CONSTRAINT PK_Pagamento PRIMARY KEY([Código Partida],[E-mail Atleta]),
CONSTRAINT FK_Pago_Partida FOREIGN KEY ([Código Partida]) REFERENCES 
[Quadra] ([Código Quadra]),
CONSTRAINT FK_Pago_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta])
)

GO

CREATE TABLE [Avaliação/Conduta]
([E-mail Atleta] varchar(50) not null,
[Atleta Avaliador] varchar(50) not null,
[Código Partida] char(4) not null,
[nota] smallint null,
CONSTRAINT PK_Conduta PRIMARY KEY([E-mail Atleta],[Atleta Avaliador],[Código Partida]),
CONSTRAINT FK_conduta_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_conduta_Atleta_2 FOREIGN KEY ([Atleta Avaliador]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_conduta_Partida FOREIGN KEY ([Código Partida]) REFERENCES 
[Partida] ([Código Partida])
)

GO

CREATE TABLE [Avaliação/Habilidade]
([E-mail Atleta] varchar(50) not null,
[Código Esporte] char(2) not null,
[Atleta Avaliador] varchar(50) not null,
[nota] smallint null,
CONSTRAINT PK_Habilidade PRIMARY KEY([E-mail Atleta],[Código Esporte],[Atleta Avaliador]),
CONSTRAINT FK_Habilidade_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Habilidade_Esporte FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte]),
CONSTRAINT FK_Habilidade_2 FOREIGN KEY ([Atleta Avaliador]) REFERENCES 
[Atleta] ([E-mail Atleta])
)


