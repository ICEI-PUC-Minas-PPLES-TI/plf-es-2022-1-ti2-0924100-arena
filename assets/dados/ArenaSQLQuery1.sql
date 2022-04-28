CREATE DATABASE [ARENA]

GO

USE [ARENA]

GO
CREATE TABLE [Esporte]
([Código Esporte] char(2) not null,
[Nome] varchar not null,
[Descrição] varchar null
CONSTRAINT PK_Esporte PRIMARY KEY([Código Esporte])
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

CREATE TABLE [Locatário]
([E-mail Locatário] varchar not null,
[Nome] varchar not null,
[Senha] varchar not null, 
[Contato] varchar not null,
[Data de Nascimento] date null,
[Chave PIX] varchar not null,
CONSTRAINT PK_Locatario PRIMARY KEY([E-mail Locatário]),
CONSTRAINT UQ_Pix UNIQUE ([Chave PIX])
)

GO

CREATE TABLE [Quadra]  
([Código Quadra] char(4) not null, 
[E-mail Locatário] varchar not null,
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
([E-mail Atleta] varchar not null,
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
[Horário de Início] time(5) not null,
[Horário de Fim] time not null,
[Data] date not null,
[Mínimo de particioantes] smallint null,
CONSTRAINT PK_Partida PRIMARY KEY([Código Partida]),
CONSTRAINT FK_Partida_Quadra FOREIGN KEY ([Código Quadra]) REFERENCES 
[Quadra] ([Código Quadra]),
CONSTRAINT FK_Partida_Esporte FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte])
)

GO

CREATE TABLE [Time/Partida]
([Código Time] char(4) not null,
[Código Partida] char(4) not null,
CONSTRAINT PK_Time_Parida PRIMARY KEY([Código Time],[Código Partida]),
CONSTRAINT FK_Time_Partida FOREIGN KEY ([Código Time]) REFERENCES 
[Time] ([Código Time]),
CONSTRAINT FK_Partifa_Time FOREIGN KEY ([Código Partida]) REFERENCES 
[Partida] ([Código Partida])
)

GO

CREATE TABLE[Pagamento]
([Código Partida] char(4) not null,
[E-mail Atleta] varchar not null,
[Pago] bit not null,
CONSTRAINT PK_Pagamento PRIMARY KEY([Código Partida],[E-mail Atleta]),
CONSTRAINT FK_Pago_Partida FOREIGN KEY ([Código Partida]) REFERENCES 
[Quadra] ([Código Quadra]),
CONSTRAINT FK_Pago_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta])
)

GO

CREATE TABLE [Avaliação/Conduta]
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

CREATE TABLE [Avaliação/Habilidade]
([E-mail Atleta] varchar not null,
[Código Esporte] char(2) not null,
[Atleta Avaliador] varchar not null,
[nota] smallint null,
CONSTRAINT PK_Habilidade PRIMARY KEY([E-mail Atleta],[Código Esporte],[Atleta Avaliador]),
CONSTRAINT FK_Habilidade_Atleta FOREIGN KEY ([E-mail Atleta]) REFERENCES 
[Atleta] ([E-mail Atleta]),
CONSTRAINT FK_Habilidade_Esporte FOREIGN KEY ([Código Esporte]) REFERENCES 
[Esporte] ([Código Esporte]),
CONSTRAINT FK_Habilidade_2 FOREIGN KEY ([Atleta Avaliador]) REFERENCES 
[Atleta] ([E-mail Atleta])
)


