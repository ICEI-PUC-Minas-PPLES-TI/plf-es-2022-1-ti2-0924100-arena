CREATE DATABASE [ARENA]

GO

USE [ARENA]

GO
CREATE TABLE [Esporte]
([C�digo Esporte] char(2) not null,
[Nome] varchar not null,
[Descri��o] varchar null
CONSTRAINT PK_Esporte PRIMARY KEY([C�digo Esporte])
)

GO

CREATE TABLE [Atleta]
([E-mail Atleta] varchar not null,
[Nome] varchar not null,
[Senha] varchar not null,
[Data de Nascimento] date null,
[Sexo] char(1) null,
CONSTRAINT PK_Atleta PRIMARY KEY([E-mail Atleta])

)

GO

CREATE TABLE [Locat�rio]
([E-mail Locat�rio] varchar not null,
[Nome] varchar not null,
[Senha] varchar not null, 
[Contato] varchar not null,
[Data de Nascimento] date null,
[Chave PIX] varchar not null,
CONSTRAINT PK_Locatario PRIMARY KEY([E-mail Locat�rio]),
CONSTRAINT UQ_Pix UNIQUE ([Chave PIX])
)

GO

CREATE TABLE [Quadra]  
([C�digo Quadra] char(4) not null, 
[E-mail Locat�rio] varchar not null,
[CEP] char (8) not null,
[N�mero] smallint not null,
[Capacidade] smallint null,
[Pre�o] smallmoney not null,
CONSTRAINT PK_Quadra PRIMARY KEY([C�digo Quadra]),
CONSTRAINT FK_Quadra_Locatario FOREIGN KEY ([E-mail Locat�rio]) REFERENCES 
[Locat�rio] ([E-mail Locat�rio]),
)

CREATE TABLE [Esporte/Quadra]
([C�digo Quadra] char(4) not null,
[C�digo Esporte] char(2) not null,
CONSTRAINT PK_Esporte_Quadra PRIMARY KEY([C�digo Quadra],[C�digo Esporte]),
CONSTRAINT FK_Quadra_Esporte FOREIGN KEY ([C�digo Quadra]) REFERENCES 
[Quadra] ([C�digo Quadra]),
CONSTRAINT FK_Esporte_Quadra FOREIGN KEY ([C�digo Esporte]) REFERENCES 
[Esporte] ([C�digo Esporte])
)

GO

CREATE TABLE [Disponibilidade da Quadra]
([C�digo Quadra] char(4) not null,
[Data] date not null,
[Hor�rio] time not null,
[Alugado] bit not null
CONSTRAINT PK_Disponiv PRIMARY KEY([C�digo Quadra]),
CONSTRAINT FK_Disponiv FOREIGN KEY ([C�digo Quadra]) REFERENCES 
[Quadra] ([C�digo Quadra])
)

GO

CREATE TABLE [Atleta/Esporte]
([E-mail Atleta] varchar not null,
[C�digo Esporte] char(2) not null
CONSTRAINT PK_Atleta_Esporte PRIMARY KEY([E-mail Atleta],[C�digo Esporte]),
CONSTRAINT FK_Atleta_Esporte FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Esporte_Atleta FOREIGN KEY ([C�digo Esporte]) REFERENCES 
[Esporte] ([C�digo Esporte])
)

GO

CREATE TABLE [Time]
([C�digo Time] char(4) not null,
[C�digo Esporte] char(2) not null,
[Nome] varchar not null,
[N�mero m�ximo] smallint null,
[N�mero de Atletas] smallint null,
[N�vel] smallint null,
CONSTRAINT PK_Time PRIMARY KEY([C�digo Time]),
CONSTRAINT FK_Time_Esporte FOREIGN KEY ([C�digo Esporte]) REFERENCES 
[Esporte] ([C�digo Esporte])
)

GO

CREATE TABLE [Atleta/Time]
([E-mail Atleta] varchar not null,
[C�digo Time] char(4) not null,
CONSTRAINT PK_Atleta_Time PRIMARY KEY([E-mail Atleta],[C�digo Time]),
CONSTRAINT FK_Atleta_Time FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Time_Atleta FOREIGN KEY ([C�digo Time]) REFERENCES 
[Time] ([C�digo Time])
)

GO

CREATE TABLE [Partida]
([C�digo Partida] char(4) not null,
[C�digo Quadra] char(4) not null,
[C�digo Esporte] char(2) not null,
[Hor�rio de In�cio] time(5) not null,
[Hor�rio de Fim] time not null,
[Data] date not null,
[M�nimo de particioantes] smallint null,
CONSTRAINT PK_Partida PRIMARY KEY([C�digo Partida]),
CONSTRAINT FK_Partida_Quadra FOREIGN KEY ([C�digo Quadra]) REFERENCES 
[Quadra] ([C�digo Quadra]),
CONSTRAINT FK_Partida_Esporte FOREIGN KEY ([C�digo Esporte]) REFERENCES 
[Esporte] ([C�digo Esporte])
)

GO

CREATE TABLE [Time/Partida]
([C�digo Time] char(4) not null,
[C�digo Partida] char(4) not null,
CONSTRAINT PK_Time_Parida PRIMARY KEY([C�digo Time],[C�digo Partida]),
CONSTRAINT FK_Time_Partida FOREIGN KEY ([C�digo Time]) REFERENCES 
[Time] ([C�digo Time]),
CONSTRAINT FK_Partifa_Time FOREIGN KEY ([C�digo Partida]) REFERENCES 
[Partida] ([C�digo Partida])
)

GO

CREATE TABLE[Pagamento]
([C�digo Partida] char(4) not null,
[E-mail Atleta] varchar not null,
[Pago] bit not null,
CONSTRAINT PK_Pagamento PRIMARY KEY([C�digo Partida],[E-mail Atleta]),
CONSTRAINT FK_Pago_Partida FOREIGN KEY ([C�digo Partida]) REFERENCES 
[Quadra] ([C�digo Quadra]),
CONSTRAINT FK_Pago_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta])
)

GO

CREATE TABLE [Avalia��o/Conduta]
([E-mail Atleta] varchar not null,
[Atleta Avaliador] varchar not null,
[nota] smallint null,
CONSTRAINT PK_Conduta PRIMARY KEY([E-mail Atleta],[Atleta Avaliador]),
CONSTRAINT FK_conduta_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_conduta_Atleta_2 FOREIGN KEY ([Atleta Avaliador]) REFERENCES 
[Atleta] ([E-mail Atleta])
)

GO

CREATE TABLE [Avalia��o/Habilidade]
([E-mail Atleta] varchar not null,
[C�digo Esporte] char(2) not null,
[Atleta Avaliador] varchar not null,
[nota] smallint null,
CONSTRAINT PK_Habilidade PRIMARY KEY([E-mail Atleta],[C�digo Esporte],[Atleta Avaliador]),
CONSTRAINT FK_Habilidade_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Habilidade_Esporte FOREIGN KEY ([C�digo Esporte]) REFERENCES 
[Esporte] ([C�digo Esporte]),
CONSTRAINT FK_Habilidade_2 FOREIGN KEY ([Atleta Avaliador]) REFERENCES 
[Atleta] ([E-mail Atleta])
)


