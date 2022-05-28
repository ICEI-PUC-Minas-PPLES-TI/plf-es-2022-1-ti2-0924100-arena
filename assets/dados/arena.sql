-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: arena
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `atleta`
--

DROP TABLE IF EXISTS `atleta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atleta` (
  `EmailAtleta` varchar(50) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Senha` varchar(50) NOT NULL,
  `DataNascimento` date DEFAULT NULL,
  `Sexo` char(1) DEFAULT NULL,
  `DataCadastro` date DEFAULT NULL,
  PRIMARY KEY (`EmailAtleta`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atleta`
--

LOCK TABLES `atleta` WRITE;
/*!40000 ALTER TABLE `atleta` DISABLE KEYS */;
/*!40000 ALTER TABLE `atleta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atletaesporte`
--

DROP TABLE IF EXISTS `atletaesporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atletaesporte` (
  `EmailAtleta` varchar(50) NOT NULL,
  `CodigoEsporte` char(2) NOT NULL,
  PRIMARY KEY (`EmailAtleta`,`CodigoEsporte`),
  KEY `FK_Esporte_Atleta` (`CodigoEsporte`),
  CONSTRAINT `FK_Atleta_Esporte` FOREIGN KEY (`EmailAtleta`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_Esporte_Atleta` FOREIGN KEY (`CodigoEsporte`) REFERENCES `esporte` (`CodigoEsporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atletaesporte`
--

LOCK TABLES `atletaesporte` WRITE;
/*!40000 ALTER TABLE `atletaesporte` DISABLE KEYS */;
/*!40000 ALTER TABLE `atletaesporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `atletatime`
--

DROP TABLE IF EXISTS `atletatime`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `atletatime` (
  `EmailAtleta` varchar(50) NOT NULL,
  `CodigoTime` char(4) NOT NULL,
  PRIMARY KEY (`EmailAtleta`,`CodigoTime`),
  KEY `FK_Time_Atleta` (`CodigoTime`),
  CONSTRAINT `FK_Atleta_Time` FOREIGN KEY (`EmailAtleta`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_Time_Atleta` FOREIGN KEY (`CodigoTime`) REFERENCES `time` (`CodigoTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `atletatime`
--

LOCK TABLES `atletatime` WRITE;
/*!40000 ALTER TABLE `atletatime` DISABLE KEYS */;
/*!40000 ALTER TABLE `atletatime` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacaoconduta`
--

DROP TABLE IF EXISTS `avaliacaoconduta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacaoconduta` (
  `EmailAtleta` varchar(50) NOT NULL,
  `AtletaAvaliador` varchar(50) NOT NULL,
  `CodigoPartida` char(4) NOT NULL,
  `Nota` smallint DEFAULT NULL,
  PRIMARY KEY (`EmailAtleta`,`AtletaAvaliador`,`CodigoPartida`),
  KEY `FK_conduta_Atleta_2` (`AtletaAvaliador`),
  KEY `FK_conduta_Partida` (`CodigoPartida`),
  CONSTRAINT `FK_conduta_Atleta` FOREIGN KEY (`EmailAtleta`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_conduta_Atleta_2` FOREIGN KEY (`AtletaAvaliador`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_conduta_Partida` FOREIGN KEY (`CodigoPartida`) REFERENCES `partida` (`CodigoPartida`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacaoconduta`
--

LOCK TABLES `avaliacaoconduta` WRITE;
/*!40000 ALTER TABLE `avaliacaoconduta` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacaoconduta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `avaliacaohabilidade`
--

DROP TABLE IF EXISTS `avaliacaohabilidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `avaliacaohabilidade` (
  `EmailAtleta` varchar(50) NOT NULL,
  `CodigoEsporte` char(2) NOT NULL,
  `AtletaAvaliador` varchar(50) NOT NULL,
  `Nota` smallint DEFAULT NULL,
  PRIMARY KEY (`EmailAtleta`,`CodigoEsporte`,`AtletaAvaliador`),
  KEY `FK_Habilidade_Esporte` (`CodigoEsporte`),
  KEY `FK_Habilidade_2` (`AtletaAvaliador`),
  CONSTRAINT `FK_Habilidade_2` FOREIGN KEY (`AtletaAvaliador`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_Habilidade_Atleta` FOREIGN KEY (`EmailAtleta`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_Habilidade_Esporte` FOREIGN KEY (`CodigoEsporte`) REFERENCES `esporte` (`CodigoEsporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `avaliacaohabilidade`
--

LOCK TABLES `avaliacaohabilidade` WRITE;
/*!40000 ALTER TABLE `avaliacaohabilidade` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacaohabilidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `disponibilidadequadra`
--

DROP TABLE IF EXISTS `disponibilidadequadra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `disponibilidadequadra` (
  `CodigoQuadra` char(4) NOT NULL,
  `Data` date NOT NULL,
  `Horario` time NOT NULL,
  `Alugado` bit(1) NOT NULL,
  PRIMARY KEY (`CodigoQuadra`),
  CONSTRAINT `FK_Disponiv` FOREIGN KEY (`CodigoQuadra`) REFERENCES `quadra` (`CodigoQuadra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `disponibilidadequadra`
--

LOCK TABLES `disponibilidadequadra` WRITE;
/*!40000 ALTER TABLE `disponibilidadequadra` DISABLE KEYS */;
/*!40000 ALTER TABLE `disponibilidadequadra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `esporte`
--

DROP TABLE IF EXISTS `esporte`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `esporte` (
  `CodigoEsporte` char(2) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Descrição` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`CodigoEsporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `esporte`
--

LOCK TABLES `esporte` WRITE;
/*!40000 ALTER TABLE `esporte` DISABLE KEYS */;
INSERT INTO `esporte` VALUES ('01','Futebol','O futebol, disputado classicamente entre duas equipes, cada uma com 11 jogadores, que utilizam principalmente os pés e a cabeça para movimentar a bola em direção ao campo adversário, tem o objetivo de colocá-la dentro do gol.'),('02','Vôlei','O voleibol é um esporte disputado por dois times que têm como objetivo lançar uma bola por cima de uma rede e fazer com que ela atinja o chão da quadra adversária, marcando, assim, um ponto.'),('03','Basquete','O basquete é uma modalidade esportiva muito dinâmica e intensa. Suas partidas são disputadas entre duas equipes compostas por cinco jogadores cada uma. Durante o jogo, o objetivo é fazer ponto ou converter a cesta, impedindo que a outra equipe marque pontos.'),('04','Futevôlei','É jogado por duas equipes formadas por dois ou quarto jogadores. O jogo é disputado em uma quadra de areia dividida por uma rede suspensa. Os jogadores têm por objetivo enviar a bola por cima da rede usando toques que podem ser efetuados com os pés, coxas, peito, cabeça e ombros.'),('05','Tênis','Tênis é um esporte praticado entre dois oponentes ou duas duplas de oponentes em uma quadra dividida por uma rede, onde os jogadores usam raquetes para rebater uma pequena bola de um lado para o outro');
/*!40000 ALTER TABLE `esporte` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `esportequadra`
--

DROP TABLE IF EXISTS `esportequadra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `esportequadra` (
  `CodigoQuadra` char(4) NOT NULL,
  `CodigoEsporte` char(2) NOT NULL,
  PRIMARY KEY (`CodigoQuadra`,`CodigoEsporte`),
  KEY `FK_Esporte_Quadra` (`CodigoEsporte`),
  CONSTRAINT `FK_Esporte_Quadra` FOREIGN KEY (`CodigoEsporte`) REFERENCES `esporte` (`CodigoEsporte`),
  CONSTRAINT `FK_Quadra_Esporte` FOREIGN KEY (`CodigoQuadra`) REFERENCES `quadra` (`CodigoQuadra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `esportequadra`
--

LOCK TABLES `esportequadra` WRITE;
/*!40000 ALTER TABLE `esportequadra` DISABLE KEYS */;
/*!40000 ALTER TABLE `esportequadra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locatario`
--

DROP TABLE IF EXISTS `locatario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locatario` (
  `EmailLocatario` varchar(50) NOT NULL,
  `Nome` varchar(100) NOT NULL,
  `Senha` varchar(50) NOT NULL,
  `Contato` varchar(20) NOT NULL,
  `DataNascimento` date DEFAULT NULL,
  `TipoChavePIX` varchar(50) NOT NULL,
  `ChavePIX` varchar(50) NOT NULL,
  PRIMARY KEY (`EmailLocatario`),
  UNIQUE KEY `UQ_Pix` (`ChavePIX`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locatario`
--

LOCK TABLES `locatario` WRITE;
/*!40000 ALTER TABLE `locatario` DISABLE KEYS */;
/*!40000 ALTER TABLE `locatario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento` (
  `CodigoPartida` char(4) NOT NULL,
  `EmailAtleta` varchar(50) NOT NULL,
  `Pago` bit(1) NOT NULL,
  `DataPagamento` date NOT NULL,
  PRIMARY KEY (`CodigoPartida`,`EmailAtleta`),
  KEY `FK_Pago_Atleta` (`EmailAtleta`),
  CONSTRAINT `FK_Pago_Atleta` FOREIGN KEY (`EmailAtleta`) REFERENCES `atleta` (`EmailAtleta`),
  CONSTRAINT `FK_Pago_Partida` FOREIGN KEY (`CodigoPartida`) REFERENCES `quadra` (`CodigoQuadra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento`
--

LOCK TABLES `pagamento` WRITE;
/*!40000 ALTER TABLE `pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partida`
--

DROP TABLE IF EXISTS `partida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partida` (
  `CodigoPartida` char(4) NOT NULL,
  `CodigoQuadra` char(4) NOT NULL,
  `CodigoEsporte` char(2) NOT NULL,
  `HorarioInicio` time NOT NULL,
  `HorarioFim` time NOT NULL,
  `Data` date NOT NULL,
  `MinimoParticipantes` smallint DEFAULT NULL,
  `Preco` decimal(10,2) NOT NULL,
  PRIMARY KEY (`CodigoPartida`),
  KEY `FK_Partida_Quadra` (`CodigoQuadra`),
  KEY `FK_Partida_Esporte` (`CodigoEsporte`),
  CONSTRAINT `FK_Partida_Esporte` FOREIGN KEY (`CodigoEsporte`) REFERENCES `esporte` (`CodigoEsporte`),
  CONSTRAINT `FK_Partida_Quadra` FOREIGN KEY (`CodigoQuadra`) REFERENCES `quadra` (`CodigoQuadra`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partida`
--

LOCK TABLES `partida` WRITE;
/*!40000 ALTER TABLE `partida` DISABLE KEYS */;
/*!40000 ALTER TABLE `partida` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quadra`
--

DROP TABLE IF EXISTS `quadra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quadra` (
  `CodigoQuadra` char(4) NOT NULL,
  `EmailLocatario` varchar(50) NOT NULL,
  `CEP` char(8) NOT NULL,
  `Numero` smallint NOT NULL,
  `Capacidade` smallint DEFAULT NULL,
  `Preco` decimal(10,2) NOT NULL,
  PRIMARY KEY (`CodigoQuadra`),
  KEY `FK_Quadra_Locatario` (`EmailLocatario`),
  CONSTRAINT `FK_Quadra_Locatario` FOREIGN KEY (`EmailLocatario`) REFERENCES `locatario` (`EmailLocatario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quadra`
--

LOCK TABLES `quadra` WRITE;
/*!40000 ALTER TABLE `quadra` DISABLE KEYS */;
/*!40000 ALTER TABLE `quadra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `time`
--

DROP TABLE IF EXISTS `time`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `time` (
  `CodigoTime` char(4) NOT NULL,
  `CodigoEsporte` char(2) NOT NULL,
  `Nome` varchar(50) NOT NULL,
  `NumeroMaximo` smallint DEFAULT NULL,
  `NumeroAtletas` smallint DEFAULT NULL,
  `Nivel` smallint DEFAULT NULL,
  PRIMARY KEY (`CodigoTime`),
  KEY `FK_Time_Esporte` (`CodigoEsporte`),
  CONSTRAINT `FK_Time_Esporte` FOREIGN KEY (`CodigoEsporte`) REFERENCES `esporte` (`CodigoEsporte`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `time`
--

LOCK TABLES `time` WRITE;
/*!40000 ALTER TABLE `time` DISABLE KEYS */;
/*!40000 ALTER TABLE `time` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timepartida`
--

DROP TABLE IF EXISTS `timepartida`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timepartida` (
  `CodigoTime` char(4) NOT NULL,
  `CodigoTime2` char(4) NOT NULL,
  `CodigoPartida` char(4) NOT NULL,
  PRIMARY KEY (`CodigoTime`,`CodigoTime2`,`CodigoPartida`),
  KEY `FK_Time_Partida2` (`CodigoTime2`),
  KEY `FK_Partida_Time` (`CodigoPartida`),
  CONSTRAINT `FK_Partida_Time` FOREIGN KEY (`CodigoPartida`) REFERENCES `partida` (`CodigoPartida`),
  CONSTRAINT `FK_Time_Partida` FOREIGN KEY (`CodigoTime`) REFERENCES `time` (`CodigoTime`),
  CONSTRAINT `FK_Time_Partida2` FOREIGN KEY (`CodigoTime2`) REFERENCES `time` (`CodigoTime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timepartida`
--

LOCK TABLES `timepartida` WRITE;
/*!40000 ALTER TABLE `timepartida` DISABLE KEYS */;
/*!40000 ALTER TABLE `timepartida` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-27 17:19:56
