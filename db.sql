-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: 192.168.10.10    Database: homestead
-- ------------------------------------------------------
-- Server version	8.0.27-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `candidats`
--

DROP TABLE IF EXISTS `candidats`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidats` (
  `id` int NOT NULL AUTO_INCREMENT,
  `grade` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `ordre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `niveau_etude` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `postes_occupees` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `realisation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `cv` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidats`
--

LOCK TABLES `candidats` WRITE;
/*!40000 ALTER TABLE `candidats` DISABLE KEYS */;
INSERT INTO `candidats` VALUES (6,'jhh11111','jjjjjjjjj','fffff','fffffff','fffffffff','','2022-05-18 09:30:56','2022-05-18 10:10:46'),(37,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:47:44','2022-05-28 12:47:44'),(38,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:47:44','2022-05-28 12:47:44');
/*!40000 ALTER TABLE `candidats` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidatures`
--

DROP TABLE IF EXISTS `candidatures`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidatures` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date_insertion` datetime DEFAULT NULL,
  `etat` int DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `iduser` int DEFAULT NULL,
  `idsession` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `iduser_idx` (`iduser`),
  KEY `idsession_idx` (`idsession`),
  CONSTRAINT `idsession` FOREIGN KEY (`idsession`) REFERENCES `sessiondevotes` (`id`),
  CONSTRAINT `iduser` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidatures`
--

LOCK TABLES `candidatures` WRITE;
/*!40000 ALTER TABLE `candidatures` DISABLE KEYS */;
INSERT INTO `candidatures` VALUES (1,'2022-01-01 00:00:00',1,'2022-05-18 10:11:30','2022-05-18 14:08:24',35,4),(7,NULL,0,'2022-05-31 16:34:43','2022-05-31 16:34:43',36,4),(8,NULL,0,NULL,NULL,37,4),(9,NULL,NULL,NULL,NULL,38,4);
/*!40000 ALTER TABLE `candidatures` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `lois`
--

DROP TABLE IF EXISTS `lois`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lois` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `regles` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `condition_electeur` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `condition_candidat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lois`
--

LOCK TABLES `lois` WRITE;
/*!40000 ALTER TABLE `lois` DISABLE KEYS */;
INSERT INTO `lois` VALUES (1,'ghjkgh','ghjk','ghjk','ghjk','2022-05-17 15:01:35','2022-05-17 15:01:35');
/*!40000 ALTER TABLE `lois` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `membres`
--

DROP TABLE IF EXISTS `membres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `membres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `profession` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `cv` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `poste_occupee` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nom` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `prenom` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `cin` int DEFAULT NULL,
  `idprogramme` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `membres`
--

LOCK TABLES `membres` WRITE;
/*!40000 ALTER TABLE `membres` DISABLE KEYS */;
INSERT INTO `membres` VALUES (1,'refre',NULL,'ergre','2022-05-31 16:34:07','2022-05-31 16:34:07','zergz','ezgzeg',25454,1);
/*!40000 ALTER TABLE `membres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objectifs`
--

DROP TABLE IF EXISTS `objectifs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `objectifs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `domaine` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `sous_domaine` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `mission` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_debut_objectif` date DEFAULT NULL,
  `date_fin_objectif` date DEFAULT NULL,
  `propositions` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `reformes_a_venir` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `idprogramme` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idprogramme_idx` (`idprogramme`),
  CONSTRAINT `idprogramme` FOREIGN KEY (`idprogramme`) REFERENCES `programmeelectorals` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objectifs`
--

LOCK TABLES `objectifs` WRITE;
/*!40000 ALTER TABLE `objectifs` DISABLE KEYS */;
INSERT INTO `objectifs` VALUES (1,'qdfgqdfg',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-18 10:11:30','2022-05-18 10:11:30',1);
/*!40000 ALTER TABLE `objectifs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organisateurdevotes`
--

DROP TABLE IF EXISTS `organisateurdevotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organisateurdevotes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fonction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `grade` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `organisme` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organisateurdevotes`
--

LOCK TABLES `organisateurdevotes` WRITE;
/*!40000 ALTER TABLE `organisateurdevotes` DISABLE KEYS */;
INSERT INTO `organisateurdevotes` VALUES (8,'klk','jkkkk','jjj','2022-05-17 16:50:34','2022-05-17 16:50:34');
/*!40000 ALTER TABLE `organisateurdevotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programmeelectorals`
--

DROP TABLE IF EXISTS `programmeelectorals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `programmeelectorals` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titre` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `symbole_electoral` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `sous_domaine` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_debut_programme` date DEFAULT NULL,
  `date_fin_programme` date DEFAULT NULL,
  `objectif_global` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `introduction` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `etat` int DEFAULT NULL,
  `date_insertion` date DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programmeelectorals`
--

LOCK TABLES `programmeelectorals` WRITE;
/*!40000 ALTER TABLE `programmeelectorals` DISABLE KEYS */;
INSERT INTO `programmeelectorals` VALUES (1,'uubh_555555','hhhhh',NULL,'2022-01-01','2022-01-01','hy_','_',0,'2022-01-01','2022-05-18 10:11:44','2022-05-18 10:11:51');
/*!40000 ALTER TABLE `programmeelectorals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `refreshTokens`
--

DROP TABLE IF EXISTS `refreshTokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `refreshTokens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=126 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `refreshTokens`
--

LOCK TABLES `refreshTokens` WRITE;
/*!40000 ALTER TABLE `refreshTokens` DISABLE KEYS */;
INSERT INTO `refreshTokens` VALUES (1,'3cd88bd4-940e-4a52-a1af-7cfd588368b2','2022-05-18 09:46:57','2022-05-17 09:46:57','2022-05-17 09:46:57'),(2,'220db4d7-87b3-475e-b1d2-1049b27ee084','2022-05-18 09:48:59','2022-05-17 09:48:59','2022-05-17 09:48:59'),(3,'2c1d094e-08c7-436f-8334-bf1c4f2996dc','2022-05-18 09:49:52','2022-05-17 09:49:52','2022-05-17 09:49:52'),(4,'d23620f4-cb0d-4e76-8430-5d267bd87752','2022-05-18 09:50:46','2022-05-17 09:50:46','2022-05-17 09:50:46'),(5,'8fc0fbc9-9352-48d6-9ced-6890cabd1901','2022-05-18 09:51:31','2022-05-17 09:51:31','2022-05-17 09:51:31'),(6,'ac5f163e-a757-40df-b5fb-7f3a4fcfbed4','2022-05-18 09:52:34','2022-05-17 09:52:34','2022-05-17 09:52:34'),(7,'7a7877d6-3f6e-45ba-8eaa-e7a21cc3aa99','2022-05-18 09:53:21','2022-05-17 09:53:21','2022-05-17 09:53:21'),(8,'8d1bbc7b-6006-4279-9f62-d8976f7f8d7c','2022-05-18 09:54:14','2022-05-17 09:54:14','2022-05-17 09:54:14'),(9,'feb1eefe-f86b-421f-b924-cbf30f388f70','2022-05-18 10:06:25','2022-05-17 10:06:25','2022-05-17 10:06:25'),(10,'e32a9d15-2488-456f-9b8d-d25ea382b5d2','2022-05-18 14:20:11','2022-05-17 14:20:11','2022-05-17 14:20:11'),(11,'8246bd8c-2f07-4f42-9fa8-a5d3f9b968f7','2022-05-18 14:25:09','2022-05-17 14:25:09','2022-05-17 14:25:09'),(12,'1ee93419-1a5a-4a55-ba45-da31821e4760','2022-05-18 14:44:15','2022-05-17 14:44:15','2022-05-17 14:44:15'),(13,'6ffe52ea-5663-4ab2-a5a5-a6b5942cc74c','2022-05-18 14:45:17','2022-05-17 14:45:17','2022-05-17 14:45:17'),(14,'6d654b23-db59-4116-8460-f9509a1a947c','2022-05-18 15:05:46','2022-05-17 15:05:46','2022-05-17 15:05:46'),(15,'95677c79-7501-46b7-ad8b-a2f52beaa124','2022-05-18 16:44:56','2022-05-17 16:44:56','2022-05-17 16:44:56'),(16,'18fcfe2f-df45-4a06-8a0b-e6d27b2edb3c','2022-05-18 16:48:46','2022-05-17 16:48:46','2022-05-17 16:48:46'),(17,'079d05ae-d4fd-494d-8a63-392a5d88c2d3','2022-05-18 16:55:18','2022-05-17 16:55:18','2022-05-17 16:55:18'),(18,'02d1a239-d578-43f3-84f9-bca64210971b','2022-05-18 16:56:23','2022-05-17 16:56:23','2022-05-17 16:56:23'),(19,'3b365c0b-2f98-43ac-8a39-9fdb454dfa6c','2022-05-18 16:58:06','2022-05-17 16:58:06','2022-05-17 16:58:06'),(20,'ddbddb72-150c-40b0-b84b-43641a40ff80','2022-05-18 16:59:08','2022-05-17 16:59:08','2022-05-17 16:59:08'),(21,'d979152c-c546-454c-8eeb-855696c0c70a','2022-05-18 16:59:40','2022-05-17 16:59:40','2022-05-17 16:59:40'),(22,'1e9e803b-5d21-45ec-9843-2fb19f9f4b70','2022-05-18 17:00:32','2022-05-17 17:00:32','2022-05-17 17:00:32'),(23,'e98e8677-fdd5-45f4-b380-606b03e41d31','2022-05-19 09:42:59','2022-05-18 09:42:59','2022-05-18 09:42:59'),(24,'d3bcc974-453b-44ee-9df9-8fed8a002499','2022-05-19 09:58:47','2022-05-18 09:58:47','2022-05-18 09:58:47'),(25,'f7233edb-4169-4be7-8890-2a8c497c1a37','2022-05-19 10:11:08','2022-05-18 10:11:08','2022-05-18 10:11:08'),(26,'4f47d345-b4a5-4e97-96cb-1ddb543d3c3a','2022-05-19 10:12:09','2022-05-18 10:12:09','2022-05-18 10:12:09'),(27,'668d00ca-8b68-4d8e-b267-9d202cc54259','2022-05-19 10:12:47','2022-05-18 10:12:47','2022-05-18 10:12:47'),(28,'6ead1f48-7714-4c66-a720-6e7a2ef1cd57','2022-05-19 14:14:14','2022-05-18 14:14:14','2022-05-18 14:14:14'),(29,'f94406c7-3622-496c-88f1-8cad87b0a3c8','2022-05-19 15:04:20','2022-05-18 15:04:20','2022-05-18 15:04:20'),(30,'53e86b26-6eea-484b-8dfa-4ebdfc5130b2','2022-05-19 16:21:08','2022-05-18 16:21:08','2022-05-18 16:21:08'),(31,'79cfdc1e-7273-45ed-8735-f67176490f8b','2022-05-19 17:24:43','2022-05-18 17:24:43','2022-05-18 17:24:43'),(32,'9e2b1117-d336-4dc6-bb8b-d8c77fa5aec5','2022-05-19 22:42:17','2022-05-18 22:42:17','2022-05-18 22:42:17'),(33,'2b3573a7-40cf-409c-925d-4777bb119978','2022-05-19 22:43:08','2022-05-18 22:43:08','2022-05-18 22:43:08'),(34,'dd747fd7-2326-4eb5-b22f-a042e6c24310','2022-05-24 11:22:51','2022-05-23 11:22:51','2022-05-23 11:22:51'),(35,'37fae63a-1df6-4163-b002-6e079403bc4f','2022-05-24 11:36:20','2022-05-23 11:36:20','2022-05-23 11:36:20'),(36,'e1e6a983-300d-4daa-907c-1062e1ba44a2','2022-05-24 11:59:00','2022-05-23 11:59:00','2022-05-23 11:59:00'),(37,'351d5f37-3e22-42bc-9581-df9bf3533579','2022-05-24 12:06:45','2022-05-23 12:06:45','2022-05-23 12:06:45'),(38,'a938d20a-e8c8-4b1f-a80e-0b3376b43da8','2022-05-24 12:09:54','2022-05-23 12:09:54','2022-05-23 12:09:54'),(39,'a7bce0a6-60d4-405d-a57a-fe3733380781','2022-05-24 12:30:12','2022-05-23 12:30:12','2022-05-23 12:30:12'),(40,'73bcd022-86e2-4b4a-9774-806b07abd9c6','2022-05-24 12:32:28','2022-05-23 12:32:28','2022-05-23 12:32:28'),(41,'856fefac-1581-466a-a289-14508d3d6887','2022-05-24 12:38:35','2022-05-23 12:38:35','2022-05-23 12:38:35'),(42,'8b9dec82-322f-4029-b1ef-5a4030ca7037','2022-05-24 12:38:54','2022-05-23 12:38:54','2022-05-23 12:38:54'),(43,'87a613e8-9964-4e94-8b1f-6a429ee9f568','2022-05-24 12:43:17','2022-05-23 12:43:17','2022-05-23 12:43:17'),(44,'b96919d4-4285-4c21-b6be-ce6de1a54fde','2022-05-24 12:55:53','2022-05-23 12:55:53','2022-05-23 12:55:53'),(45,'8c711c2a-31bf-4551-9ceb-b7c7dfcdeb15','2022-05-24 13:18:48','2022-05-23 13:18:48','2022-05-23 13:18:48'),(46,'db840b89-ca4e-481a-8a1e-1e84db16769e','2022-05-24 13:22:14','2022-05-23 13:22:14','2022-05-23 13:22:14'),(47,'26dfd456-66c4-4e24-bf0c-5e445feda927','2022-05-24 13:26:57','2022-05-23 13:26:57','2022-05-23 13:26:57'),(48,'b78bec7e-2feb-4723-bb81-744985eb4f13','2022-05-24 13:46:39','2022-05-23 13:46:39','2022-05-23 13:46:39'),(49,'35b69879-06a1-432d-ba10-9898ecdab444','2022-05-24 19:05:04','2022-05-23 19:05:04','2022-05-23 19:05:04'),(50,'f5d9d96a-cfb2-49dd-920e-b21a9254133f','2022-05-25 04:59:14','2022-05-24 04:59:14','2022-05-24 04:59:14'),(51,'ab3e1dfa-7770-4599-be75-ce94db8c53f2','2022-05-25 09:40:44','2022-05-24 09:40:44','2022-05-24 09:40:44'),(52,'86ab0f6c-b597-4f32-8ee1-728319ad2cc9','2022-05-25 10:46:43','2022-05-24 10:46:44','2022-05-24 10:46:44'),(53,'afa23991-0590-46fc-a892-9768cb57d8e2','2022-05-25 10:47:27','2022-05-24 10:47:27','2022-05-24 10:47:27'),(54,'34ffd01d-2f77-4384-9331-e5a63211b148','2022-05-25 11:29:43','2022-05-24 11:29:43','2022-05-24 11:29:43'),(55,'0ec93d1c-c4f3-464c-8cc6-109fc8c92e30','2022-05-25 12:45:22','2022-05-24 12:45:23','2022-05-24 12:45:23'),(56,'eae73183-55ed-4527-8f2a-d5f88b7c43d1','2022-05-29 08:51:57','2022-05-28 08:51:57','2022-05-28 08:51:57'),(57,'7962fe59-451d-4fff-9638-8a2326cd3510','2022-05-29 09:41:11','2022-05-28 09:41:11','2022-05-28 09:41:11'),(58,'01089af7-6d03-4571-8509-56ffe60c9532','2022-06-01 14:20:14','2022-05-31 14:20:14','2022-05-31 14:20:14'),(59,'077e2579-5f3b-4bba-aeb4-711039220633','2022-06-01 14:21:46','2022-05-31 14:21:46','2022-05-31 14:21:46'),(60,'2165ecb0-9469-40bb-849d-e1718957d10e','2022-06-01 15:09:01','2022-05-31 15:09:01','2022-05-31 15:09:01'),(61,'b3cdcce8-2efa-4ab3-a714-3368292c1847','2022-06-01 15:09:48','2022-05-31 15:09:48','2022-05-31 15:09:48'),(62,'46a5d899-798f-4bb2-92c7-10704f799e33','2022-06-01 15:50:41','2022-05-31 15:50:41','2022-05-31 15:50:41'),(63,'68fb478b-6281-457f-a86a-b15af8567c8a','2022-06-01 15:56:50','2022-05-31 15:56:50','2022-05-31 15:56:50'),(64,'cb2c1ca9-ee36-4158-9312-7f71a34516bf','2022-06-01 15:57:36','2022-05-31 15:57:36','2022-05-31 15:57:36'),(65,'e3ab92f2-8dba-46fc-af47-069bb6dc3325','2022-06-01 16:31:42','2022-05-31 16:31:42','2022-05-31 16:31:42'),(66,'00cb3623-7b85-477f-b7c0-ae0656165b34','2022-06-01 16:31:58','2022-05-31 16:31:58','2022-05-31 16:31:58'),(67,'e18b204b-912f-4694-a457-611bae82d9b5','2022-06-01 16:34:54','2022-05-31 16:34:54','2022-05-31 16:34:54'),(68,'c118d50d-d897-4a2d-9392-f0f2e5c391e6','2022-06-01 16:50:34','2022-05-31 16:50:34','2022-05-31 16:50:34'),(69,'16dbe521-8db4-4693-afae-4d09aff874f4','2022-06-01 17:22:33','2022-05-31 17:22:33','2022-05-31 17:22:33'),(70,'c7711a1f-2754-4573-a8e9-a1f9b42f6ac2','2022-06-01 17:31:15','2022-05-31 17:31:15','2022-05-31 17:31:15'),(71,'a505a1ca-e745-4dc5-a521-abb682ae763a','2022-06-01 17:32:09','2022-05-31 17:32:09','2022-05-31 17:32:09'),(72,'ed5a6d3d-0099-4a24-8ef3-f931ce7bd8ee','2022-06-01 18:50:28','2022-05-31 18:50:28','2022-05-31 18:50:28'),(73,'53265bcc-ffb1-4fe2-b31b-124525340814','2022-06-01 18:50:28','2022-05-31 18:50:28','2022-05-31 18:50:28'),(74,'f972d73a-bce4-47fe-8e68-7c39f597df4e','2022-06-01 18:50:28','2022-05-31 18:50:28','2022-05-31 18:50:28'),(75,'a00f3964-eabb-437d-b244-4c6b6148deaf','2022-06-01 18:50:28','2022-05-31 18:50:28','2022-05-31 18:50:28'),(76,'adee15cb-b048-4974-a6dd-ecdb3b3ec164','2022-06-01 18:50:28','2022-05-31 18:50:28','2022-05-31 18:50:28'),(77,'c4fa5927-a924-4562-808e-2f9f94f619d8','2022-06-01 18:51:42','2022-05-31 18:51:42','2022-05-31 18:51:42'),(78,'27bae5a6-912d-4626-9acf-bdbb07c5a105','2022-06-01 18:53:57','2022-05-31 18:53:57','2022-05-31 18:53:57'),(79,'3d74989e-7104-4ee6-9f7b-e1d573a04ab2','2022-06-01 18:55:02','2022-05-31 18:55:02','2022-05-31 18:55:02'),(80,'39da274f-2d95-4961-9559-a5ba856de0b9','2022-06-01 18:56:23','2022-05-31 18:56:23','2022-05-31 18:56:23'),(81,'2e0b253d-4cec-44c6-9af8-12b428d17b27','2022-06-01 18:57:09','2022-05-31 18:57:09','2022-05-31 18:57:09'),(82,'28289e02-29bf-4786-bfcc-f64e7adbb36d','2022-06-01 18:58:13','2022-05-31 18:58:13','2022-05-31 18:58:13'),(83,'167ec668-fc77-40d1-8544-b729828a6188','2022-06-01 18:59:18','2022-05-31 18:59:18','2022-05-31 18:59:18'),(84,'6d081ddc-223e-4c5b-a7b2-85e07534ba4f','2022-06-01 19:05:54','2022-05-31 19:05:54','2022-05-31 19:05:54'),(85,'622d23ed-0912-4b24-8fd2-8e3bfad57c2c','2022-06-01 19:10:03','2022-05-31 19:10:03','2022-05-31 19:10:03'),(86,'27bf91a6-0f6c-40aa-9ffb-66a3a713cd30','2022-06-01 19:22:53','2022-05-31 19:22:53','2022-05-31 19:22:53'),(87,'1f75a492-2873-4b32-8b53-7fde0ecfc1df','2022-06-01 19:23:39','2022-05-31 19:23:39','2022-05-31 19:23:39'),(88,'8a712121-d23e-444f-b8b7-57649c3ea134','2022-06-01 19:24:08','2022-05-31 19:24:08','2022-05-31 19:24:08'),(89,'fbd58f97-d16f-47eb-b374-22035ed56d80','2022-06-01 19:24:35','2022-05-31 19:24:35','2022-05-31 19:24:35'),(90,'8504bae8-03d9-4a76-9df6-b8353178bc6d','2022-06-01 19:25:10','2022-05-31 19:25:10','2022-05-31 19:25:10'),(91,'f1ce28fd-dac9-4340-bee1-478e172f5b51','2022-06-01 19:26:14','2022-05-31 19:26:14','2022-05-31 19:26:14'),(92,'d4a9242c-9e28-410a-b37e-b576b358664c','2022-06-01 19:27:51','2022-05-31 19:27:51','2022-05-31 19:27:51'),(93,'7e04cc4c-d057-4323-a567-902081e3ccaa','2022-06-01 20:11:30','2022-05-31 20:11:30','2022-05-31 20:11:30'),(94,'49026db9-4549-484f-b266-fc3a415b81e3','2022-06-01 20:23:11','2022-05-31 20:23:11','2022-05-31 20:23:11'),(95,'bba8f8dc-3702-49db-a43d-1830d7200c67','2022-06-01 20:23:55','2022-05-31 20:23:55','2022-05-31 20:23:55'),(96,'afd96159-1637-4847-9238-b4517ddd42e1','2022-06-01 20:25:04','2022-05-31 20:25:04','2022-05-31 20:25:04'),(97,'1274b29e-f198-4585-b3ae-f38f1cc61ef0','2022-06-01 20:25:53','2022-05-31 20:25:53','2022-05-31 20:25:53'),(98,'f3299541-1873-4d5f-adc7-3aa02a382af8','2022-06-01 20:34:35','2022-05-31 20:34:35','2022-05-31 20:34:35'),(99,'f1cb941d-9259-45b6-a19c-8cbf29bebc57','2022-06-01 20:36:53','2022-05-31 20:36:53','2022-05-31 20:36:53'),(100,'c4ea2817-2410-4424-abc0-39d74e992bb0','2022-06-01 20:38:02','2022-05-31 20:38:02','2022-05-31 20:38:02'),(101,'ab0e8349-4542-460f-b8bc-f5aecfdeb29d','2022-06-01 20:42:47','2022-05-31 20:42:47','2022-05-31 20:42:47'),(102,'ac00ad8f-6e1c-4d03-bffc-b5724cd32aa9','2022-06-01 20:44:17','2022-05-31 20:44:17','2022-05-31 20:44:17'),(103,'b8c56fb1-42dc-4128-b8ef-782a10853748','2022-06-01 20:45:02','2022-05-31 20:45:02','2022-05-31 20:45:02'),(104,'cdce9687-4019-408e-ab1c-851c09e05d9b','2022-06-01 20:49:12','2022-05-31 20:49:12','2022-05-31 20:49:12'),(105,'ded1b41a-a4c3-465a-b52d-3a5a1840770b','2022-06-01 21:01:41','2022-05-31 21:01:41','2022-05-31 21:01:41'),(106,'56ba5bc7-a88e-4f3f-906c-a860b46d0a02','2022-06-01 21:02:23','2022-05-31 21:02:23','2022-05-31 21:02:23'),(107,'0f94ba7d-9560-43de-8f4b-c6e8c7b57e34','2022-06-01 21:02:58','2022-05-31 21:02:58','2022-05-31 21:02:58'),(108,'b148d859-23d1-4cc0-8ddf-26d251479d17','2022-06-01 21:06:51','2022-05-31 21:06:51','2022-05-31 21:06:51'),(109,'9046e682-94fc-497a-af5d-d9c0a6c39a19','2022-06-01 21:11:20','2022-05-31 21:11:20','2022-05-31 21:11:20'),(110,'291f8a6b-6a55-4c10-89f9-176fb4841068','2022-06-01 21:11:56','2022-05-31 21:11:56','2022-05-31 21:11:56'),(111,'149386b9-4ef6-4b26-aca7-3d51ce9a2322','2022-06-01 21:12:46','2022-05-31 21:12:46','2022-05-31 21:12:46'),(112,'01be7021-8b8c-4d5f-9f7e-d057efab53b6','2022-06-01 21:42:52','2022-05-31 21:42:52','2022-05-31 21:42:52'),(113,'826ee562-d80e-49e0-b72e-4a29db71d28b','2022-06-01 21:45:58','2022-05-31 21:45:58','2022-05-31 21:45:58'),(114,'edb5546c-d873-474f-a094-3d9ee933d73f','2022-06-01 21:46:29','2022-05-31 21:46:29','2022-05-31 21:46:29'),(115,'dee89af5-2d33-48b9-ae69-438dce123fc5','2022-06-01 21:47:30','2022-05-31 21:47:30','2022-05-31 21:47:30'),(116,'805a2ec3-e9b1-4529-ad62-84283d1eb28a','2022-06-01 21:48:07','2022-05-31 21:48:07','2022-05-31 21:48:07'),(117,'2eee3e17-c641-4f6c-99d9-912082e56f88','2022-06-01 21:49:27','2022-05-31 21:49:27','2022-05-31 21:49:27'),(118,'fcb0f38b-1ebd-49cb-912b-6c1c93c835da','2022-06-01 21:50:06','2022-05-31 21:50:06','2022-05-31 21:50:06'),(119,'7bc4dcfe-64cc-46d3-8d14-ab2c000c0e4b','2022-06-01 21:51:37','2022-05-31 21:51:37','2022-05-31 21:51:37'),(120,'e3115b70-2be8-4993-b3cc-85a1d5ef1772','2022-06-01 21:53:26','2022-05-31 21:53:26','2022-05-31 21:53:26'),(121,'d2ec2e8f-aacc-4cc8-a378-9adc9463d2bd','2022-06-01 21:57:28','2022-05-31 21:57:28','2022-05-31 21:57:28'),(122,'2c75e9a4-68be-4d3c-9cd7-2dad0c874d26','2022-06-01 22:00:05','2022-05-31 22:00:05','2022-05-31 22:00:05'),(123,'0dcbfb6b-2dd2-4c95-8be7-2b86f312e242','2022-06-01 22:00:58','2022-05-31 22:00:58','2022-05-31 22:00:58'),(124,'da8fe98a-618c-422f-bed4-7decde09be27','2022-06-01 22:18:08','2022-05-31 22:18:08','2022-05-31 22:18:08'),(125,'3ceab1cf-758b-4810-b370-f0b7821f0b0b','2022-06-01 22:23:24','2022-05-31 22:23:24','2022-05-31 22:23:24');
/*!40000 ALTER TABLE `refreshTokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin','2022-05-16 15:06:14','2022-05-16 15:06:14'),(2,'votant','2022-05-16 15:06:14','2022-05-16 15:06:14'),(3,'candidat','2022-05-16 15:06:14','2022-05-16 15:06:14'),(4,'organisateurdevote','2022-05-16 15:06:14','2022-05-16 15:06:14'),(5,'user','2022-05-16 15:06:14','2022-05-16 15:06:14');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessiondevotes`
--

DROP TABLE IF EXISTS `sessiondevotes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessiondevotes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `libelle` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_debut_election` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_fin_election` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `procedure_electoral` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_debut_publicite` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_fin_publicite` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_debut_session` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_fin_session` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `reference` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessiondevotes`
--

LOCK TABLES `sessiondevotes` WRITE;
/*!40000 ALTER TABLE `sessiondevotes` DISABLE KEYS */;
INSERT INTO `sessiondevotes` VALUES (1,'kaho','Invalid date','Invalid date','kaho',NULL,NULL,NULL,NULL,NULL,'2022-05-18 10:37:52','2022-05-18 15:05:11'),(2,'de','Invalid date','Invalid date','de','Invalid date','Invalid date','Invalid date','Invalid date','0','2022-05-18 10:38:23','2022-05-18 10:38:23'),(3,'knjnk','Invalid date','Invalid date','knknh','Invalid date','Invalid date','Invalid date','Invalid date','0','2022-05-18 11:14:48','2022-05-18 11:14:48'),(4,'Session 1','Invalid date','Invalid date','Procedure','Invalid date','Invalid date','Invalid date','Invalid date','9722','2022-05-18 11:16:03','2022-05-18 11:16:03'),(5,'sdf','Invalid date','Invalid date','sdf','Invalid date','Invalid date','Invalid date','Invalid date','sdf3140','2022-05-18 11:18:57','2022-05-18 11:18:57'),(6,'joumanji','Invalid date','Invalid date','njiwla nog3ed','Invalid date','Invalid date','Invalid date','Invalid date','joumanji8105','2022-05-18 11:22:01','2022-05-18 11:22:01'),(7,'helloWorld','Invalid date','Invalid date','helloWorld','Invalid date','Invalid date','Invalid date','Invalid date','he193','2022-05-18 11:22:56','2022-05-18 11:22:56');
/*!40000 ALTER TABLE `sessiondevotes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `roleId` int NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`roleId`,`userId`),
  KEY `userId` (`userId`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES ('2022-05-17 16:44:29','2022-05-17 16:44:29',1,5),('2022-05-17 16:57:52','2022-05-17 16:57:52',2,7),('2022-05-17 16:55:09','2022-05-17 16:55:09',3,6),('2022-05-28 12:24:02','2022-05-28 12:24:02',3,26),('2022-05-28 12:25:03','2022-05-28 12:25:03',3,27),('2022-05-28 12:31:40','2022-05-28 12:31:40',3,31),('2022-05-28 12:32:42','2022-05-28 12:32:42',3,32),('2022-05-28 12:34:15','2022-05-28 12:34:15',3,33),('2022-05-28 12:35:07','2022-05-28 12:35:07',3,34),('2022-05-28 12:45:15','2022-05-28 12:45:15',3,36),('2022-05-28 12:47:44','2022-05-28 12:47:44',3,37),('2022-05-28 12:47:44','2022-05-28 12:47:44',3,38),('2022-05-17 16:59:32','2022-05-17 16:59:32',4,8),('2022-05-28 12:30:14','2022-05-28 12:30:14',4,30),('2022-05-28 12:43:11','2022-05-28 12:43:11',4,35),('2022-05-31 16:49:35','2022-05-31 16:49:35',5,39);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `prenom` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `civil` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_naissance` date DEFAULT NULL,
  `cin` int DEFAULT NULL,
  `tel` int DEFAULT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `gouvernorat` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `delegation` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `adresse` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `code_postal` int DEFAULT NULL,
  `login` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `password` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `profil` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `permission` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `avatar` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `couverture` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `date_upload` date DEFAULT NULL,
  `token_id` int DEFAULT NULL,
  `token_strd` int DEFAULT NULL,
  `date_ins` date DEFAULT NULL,
  `wallet_adress` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  `etat` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'admin','admin',NULL,NULL,7880869,NULL,'admin@voti.bc',NULL,NULL,NULL,NULL,'admin','$2a$08$582JiOKMbll15ePTbWq6s.13Sar/9cjyt3SJRO9aVuT6salYHLUPC','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:44:29','2022-05-17 16:44:29',NULL),(6,'Samya','Selmi',NULL,NULL,7865785,NULL,'candidat@voti.bc',NULL,NULL,NULL,NULL,'candidat','$2a$08$xdoeiXifJb33rWS6ds8zOe0b3TjW5fJ.b0ckXIpqKA87CawPCsh1S','2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:55:09','2022-05-17 16:55:09',NULL),(7,'Mouhamed','Wertani',NULL,NULL,NULL,NULL,'votant@voti.bc',NULL,NULL,NULL,NULL,'votant','$2a$08$XOAWyU0BF/dxq3AJ6opYSebV9FhaK1EMxNmiuep0iwlpG/bUX74uK','3',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:57:52','2022-05-17 16:57:52',NULL),(8,'Najet','Sdiri',NULL,NULL,NULL,NULL,'organisateurdevote@voti.bc',NULL,NULL,NULL,NULL,'organisateurdevote','$2a$08$ewpIKeylwmcXw6uYQZ7WvuzWhXz9E4/c0rFFtHIhQmS0oJn8ihVOi','4',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-17 16:59:32','2022-05-17 16:59:32',NULL),(26,'qscqsc','qscqsc',NULL,NULL,NULL,NULL,'qscqsc@qscqs.qsc',NULL,NULL,NULL,NULL,'qscqscqsscqsscqssc','$2a$08$nxJFpDFSJipgSOJt4P4dsOudVoGi.Y5vQwhRb/hCUbhpkonFs3DGK',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:24:02','2022-05-28 12:24:02',NULL),(27,'cxcbxcvb','xcvbxcv',NULL,NULL,NULL,NULL,'xcvvbcxbv@xcvb.cvb',NULL,NULL,NULL,NULL,'xcvbxcvbxc','$2a$08$4QCCoq4Pw3YQC/UtJqjIE.2.CsKRa4CRlMWcNbgqwqS9VbMumzyC6',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:25:03','2022-05-28 12:25:03',NULL),(28,'sfghfsghdfgggghhd','jdgjdg',NULL,NULL,NULL,NULL,'dghjdghj@dfgh.fgh',NULL,NULL,NULL,NULL,'sdfsdfgsdfg','$2a$08$IPH5bkVwioJANzuqhw8CCOwOWuqlFJHMqv1Ui5ZN9KhI2R9MdpqQW',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:28:23','2022-05-28 12:28:23',NULL),(29,'sfghfsghdfgggghhd','jdgjdg',NULL,NULL,NULL,NULL,'dghjdghj@dfgh.fg',NULL,NULL,NULL,NULL,'wxcwxc','$2a$08$p64.1s51qkZqKUswiE2wKObXLiTeKjl/rv7JLamgmvL69S2hcOc5y',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:28:55','2022-05-28 12:28:55',NULL),(30,'xcvbxgbhfgdh','dfghdfgh',NULL,NULL,NULL,NULL,'dfghhfdgh@dfghh.gt',NULL,NULL,NULL,NULL,'sfdgdfggdfg','$2a$08$E4xXvKcBZTBSX6NTwAh9Ne/ZNjr7XIGPpPL.I3CGNNNT4P7nEjspi',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:30:14','2022-05-28 12:30:14',NULL),(31,'qcqs','qscsqc',NULL,NULL,NULL,NULL,'qscqsc@qsc.qsc',NULL,NULL,NULL,NULL,'qsscqsc','$2a$08$agxrF1FLM2QHvy9BBJMHQuuVlJk1RgZO.RsudnWBM9R41jCLXHI8W',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:31:40','2022-05-28 12:31:40',NULL),(32,'sqcsdc','sdcsdc',NULL,NULL,NULL,NULL,'sdcsdc@sdc.sc',NULL,NULL,NULL,NULL,'sddcsdcsdc','$2a$08$3X6DrWsSjdKXJkY/7Fg7MegN1L/Jn2d60VH3U.Rsdds1IywdORitW',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:32:42','2022-05-28 12:32:42',NULL),(33,'wxcwcwxxc','wxcwxcwxc',NULL,NULL,NULL,NULL,'wxxcwxxcwxxc@wxxccwx.wx',NULL,NULL,NULL,NULL,'wxccwxc','$2a$08$9B5nVKzbH2S8QgPX0cm35.B7MSZN.3EQQidY6CCBRytxuXum.ikEK',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:34:15','2022-05-28 12:34:15',NULL),(34,'svsdvsddvv','sdvsdvsdvsddvsddv',NULL,NULL,NULL,NULL,'sdvsddvvsddv@sdvsdvv.sd',NULL,NULL,NULL,NULL,'sddvsddvvsddvvsddv','$2a$08$cLYygiwCSOSVd7RMBisPO.4qqMeX5m8NAFsdXjyec30xRyWHGASDu',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:35:07','2022-05-28 12:35:07',NULL),(35,'Raed','Weslati',NULL,NULL,NULL,NULL,'dfghhfgdh@dfgh.gh',NULL,NULL,NULL,NULL,'sfghsfghsfgg','$2a$08$UQQkpkchlOX0mkzK5RyoeOOTNWQBF.AupLT8oYj8h.a0WMS2XergS',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:43:11','2022-05-28 12:43:11',NULL),(36,'Majd','Selmi',NULL,NULL,NULL,NULL,'dfghhfgdergh@dfgh.gh',NULL,NULL,NULL,NULL,'sfghergsfghsfgg','$2a$08$35/ivmBZPtmV/ZnH9HzTm.U4iQZa9gGqqG1iLNSr/OunJFc1X27iO',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:45:15','2022-05-28 12:45:15',NULL),(37,'Aziz','Hidri',NULL,NULL,NULL,NULL,'fghjfghj@fghj.fg',NULL,NULL,NULL,NULL,'dfghdfghdfgh@dfgh.gh','$2a$08$.OggPK1MXmkeQs7KSWbYkuRTChWRGYbf6RLW9oyYLv2mtKMZPxXsm',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:47:44','2022-05-28 12:47:44',NULL),(38,'Mouhamed','Hacheni',NULL,NULL,NULL,NULL,'fghjfghj@fghj.fg',NULL,NULL,NULL,NULL,'dfghdfghdfgh@dfgh.gh','$2a$08$i0/lAdtTn0ullNDEQ6uSru31uio3eKEwxShc93/QqneQUGME0WiDa',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-28 12:47:44','2022-05-28 12:47:44',NULL),(39,NULL,NULL,NULL,NULL,NULL,NULL,'Ajd@gmail.con',NULL,NULL,NULL,NULL,'Majd','$2a$08$w9ePBuhzLvTP.hDmnHddnOOjH6AKlbeYQGcPxjWdz62L0eI9jVBlO',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2022-05-31 16:49:35','2022-05-31 16:49:35',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votants`
--

DROP TABLE IF EXISTS `votants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votants` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `prenom` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tel` int DEFAULT NULL,
  `adresse` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votants`
--

LOCK TABLES `votants` WRITE;
/*!40000 ALTER TABLE `votants` DISABLE KEYS */;
/*!40000 ALTER TABLE `votants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votes`
--

DROP TABLE IF EXISTS `votes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `iduser` int DEFAULT NULL,
  `idcandidature` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votes`
--

LOCK TABLES `votes` WRITE;
/*!40000 ALTER TABLE `votes` DISABLE KEYS */;
INSERT INTO `votes` VALUES (1,NULL,'2022-05-31 15:48:02','2022-05-31 15:48:02',3,4),(7,NULL,'2022-05-31 21:13:43','2022-05-31 21:13:43',5,4),(8,NULL,'2022-05-31 22:03:52','2022-05-31 22:03:52',39,1);
/*!40000 ALTER TABLE `votes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-31 23:52:39
