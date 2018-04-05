-- MySQL dump 10.13  Distrib 5.7.19, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: luxrepairDB
-- ------------------------------------------------------
-- Server version	5.7.19

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Administrador`
--

DROP TABLE IF EXISTS `Administrador`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Administrador` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_Administrador` FOREIGN KEY (`id`) REFERENCES `Empleado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Administrador`
--

LOCK TABLES `Administrador` WRITE;
/*!40000 ALTER TABLE `Administrador` DISABLE KEYS */;
INSERT INTO `Administrador` VALUES (2),(9);
/*!40000 ALTER TABLE `Administrador` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Cliente`
--

DROP TABLE IF EXISTS `Cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Cliente` (
  `id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_Cliente` FOREIGN KEY (`id`) REFERENCES `Usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Cliente`
--

LOCK TABLES `Cliente` WRITE;
/*!40000 ALTER TABLE `Cliente` DISABLE KEYS */;
INSERT INTO `Cliente` VALUES (1,'2018-02-19 21:54:48','2018-02-19 21:54:48'),(4,'2018-02-21 21:24:08','2018-02-21 21:24:08'),(6,'2018-02-21 21:26:06','2018-02-21 21:26:06'),(7,'2018-02-21 21:30:35','2018-02-21 21:30:35'),(11,'2018-02-27 15:22:18','2018-02-27 15:22:18'),(16,'2018-03-10 00:45:50','2018-03-10 00:45:50'),(19,'2018-03-10 04:47:35','2018-03-10 04:47:35');
/*!40000 ALTER TABLE `Cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Empleado`
--

DROP TABLE IF EXISTS `Empleado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Empleado` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `FechaNacimiento` datetime DEFAULT NULL,
  `Sexo` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_Empleado` FOREIGN KEY (`id`) REFERENCES `Usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Empleado`
--

LOCK TABLES `Empleado` WRITE;
/*!40000 ALTER TABLE `Empleado` DISABLE KEYS */;
INSERT INTO `Empleado` VALUES (2,'2017-01-01 00:00:00','Masculino','2018-02-19 22:34:55','2018-02-19 22:47:10'),(3,'1990-01-11 00:00:00','Masculino','2018-02-21 20:42:57','2018-02-21 22:45:49'),(5,NULL,NULL,'2018-02-21 21:25:00','2018-02-21 21:25:00'),(8,NULL,NULL,'2018-02-21 21:32:40','2018-02-21 21:32:40'),(9,'2018-02-28 00:00:00','Otro','2018-02-27 12:32:55','2018-03-01 22:36:54'),(10,NULL,NULL,'2018-02-27 12:33:26','2018-02-27 12:33:26'),(12,NULL,NULL,'2018-03-01 22:23:28','2018-03-01 22:23:28'),(13,NULL,NULL,'2018-03-01 22:24:37','2018-03-01 22:24:37'),(14,'1988-07-02 00:00:00','Masculino','2018-03-01 22:30:13','2018-03-01 22:51:42'),(15,NULL,NULL,'2018-03-01 22:31:52','2018-03-01 22:31:52'),(17,'1997-01-12 00:00:00','Masculino','2018-03-10 01:09:54','2018-03-10 18:02:35'),(18,'1994-06-08 00:00:00','Masculino','2018-03-10 01:14:15','2018-03-10 01:27:09');
/*!40000 ALTER TABLE `Empleado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Gerente`
--

DROP TABLE IF EXISTS `Gerente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Gerente` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  CONSTRAINT `id_Gerente` FOREIGN KEY (`id`) REFERENCES `Empleado` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Gerente`
--

LOCK TABLES `Gerente` WRITE;
/*!40000 ALTER TABLE `Gerente` DISABLE KEYS */;
INSERT INTO `Gerente` VALUES (3),(10),(17),(18);
/*!40000 ALTER TABLE `Gerente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Marca`
--

DROP TABLE IF EXISTS `Marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1000 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Marca`
--

LOCK TABLES `Marca` WRITE;
/*!40000 ALTER TABLE `Marca` DISABLE KEYS */;
INSERT INTO `Marca` VALUES (1,'Alfa Romeo'),(2,'Aston Martin'),(3,'Audi'),(4,'Chery'),(5,'Chevrolet'),(6,'Dodge'),(7,'Ferrari'),(8,'Ford'),(9,'Honda'),(10,'Lamborghini'),(11,'Lexus'),(12,'Mazda'),(13,'Mercedez Benz'),(14,'Mitsubishi'),(15,'Nissan'),(16,'Toyota'),(17,'Volvo'),(999,'Otros');
/*!40000 ALTER TABLE `Marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mecanico`
--

DROP TABLE IF EXISTS `Mecanico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mecanico` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mecanico`
--

LOCK TABLES `Mecanico` WRITE;
/*!40000 ALTER TABLE `Mecanico` DISABLE KEYS */;
INSERT INTO `Mecanico` VALUES (5),(8),(14);
/*!40000 ALTER TABLE `Mecanico` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Modelo`
--

DROP TABLE IF EXISTS `Modelo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Modelo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Marca` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_Marca` (`Marca`),
  CONSTRAINT `fk_Marca` FOREIGN KEY (`Marca`) REFERENCES `Marca` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Modelo`
--

LOCK TABLES `Modelo` WRITE;
/*!40000 ALTER TABLE `Modelo` DISABLE KEYS */;
INSERT INTO `Modelo` VALUES (1,'488',7),(2,'458 Spider',7),(3,'4Runner',16),(4,'Accord',9),(5,'Aventador',10),(6,'Aveo',5),(7,'C-Class',13),(8,'Camaro',5),(9,'Challenger',6),(10,'Charger',6),(11,'Civic',9),(12,'Durango',6),(13,'E-Class',13),(14,'Eclipse Cross',14),(15,'Explorer',8),(16,'F150',8),(17,'FJ Cruiser',16),(18,'Gran Tiger',4),(19,'Guilia',1),(20,'HS',11),(21,'Huracán',10),(22,'IS',11),(23,'J50',7),(24,'LS',11),(25,'Mazda3',12),(26,'Mazda6',12),(27,'Montero',14),(28,'Murano',15),(29,'Mustang',8),(30,'MX-5',12),(31,'Orinoco',4),(32,'Outlander',14),(33,'Pathfinder',15),(34,'R8',3),(35,'Rapide S',2),(36,'Ridgeline',9),(37,'RS 6',3),(38,'S-Class',13),(39,'S90',17),(40,'Sequoia',16),(41,'Silverado',5),(42,'Stelvio Quadrifoglio',1),(43,'Stelvio TI',1),(44,'Tiggo',4),(45,'Titan',15),(46,'TTS',3),(47,'Urus',10),(48,'V40 Cross Country',17),(49,'Vanquish',2),(50,'Vulcan',2),(51,'XC90',17);
/*!40000 ALTER TABLE `Modelo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orden`
--

DROP TABLE IF EXISTS `Orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orden` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Vehiculo` int(11) NOT NULL,
  `Estado` varchar(255) NOT NULL DEFAULT 'Sin Cita',
  `Servicio` varchar(255) NOT NULL DEFAULT 'Sin Servicio',
  `Detalle` text NOT NULL,
  `Evaluacion` text NOT NULL,
  `FechaSolicitud` datetime NOT NULL,
  `FechaAdmision` datetime DEFAULT NULL,
  `FechaFinalizacion` datetime DEFAULT NULL,
  `Activa` tinyint(1) NOT NULL DEFAULT '1',
  `Mecanico` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orden`
--

LOCK TABLES `Orden` WRITE;
/*!40000 ALTER TABLE `Orden` DISABLE KEYS */;
INSERT INTO `Orden` VALUES (1,2,'Listo','Carrocería','Me cayo un poste de luz encima.','Por Evaluar','2018-03-10 02:39:49','2018-03-24 04:00:00','2018-03-12 04:45:53',0,14),(2,4,'Evaluado','Carrocería','Me estrelle contra un arbol.',' Lateral Izquierda: Rayón no muy profundo desde la puerta del conductor hasta el faro trasero.\n','2018-03-10 02:40:03','2018-03-17 04:00:00',NULL,1,5),(3,8,'Listo','Alineación','Alineación rutinaria anual.','Por Evaluar','2018-03-10 04:49:32','2018-03-24 04:00:00','2018-03-12 23:53:36',0,8),(4,9,'Reparado','Cambio de Aceite','Cambio de aceite rutinario.','Por Evaluar','2018-03-10 21:49:57','2018-03-31 00:00:00',NULL,1,8),(5,10,'Reparado','Alineación','Alineacion rutinaria anual.','Por Evaluar','2018-03-10 21:50:12','2018-03-25 00:00:00',NULL,1,8),(6,11,'Evaluado','Carrocería','Me estrelle contra un poste de luz.',' Lateral Izquierda: Tiene una rayadura profunda.\n','2018-03-10 21:50:26','2018-03-14 04:00:00',NULL,1,NULL),(7,12,'En Espera','Otro','Necesito reponerle las pastillas de los frenos.','Por Evaluar','2018-03-10 21:51:37','2018-03-31 00:00:00',NULL,1,8),(8,13,'En Espera','Carrocería','Arreglar abolladuras en el parachoque trasero.','Por Evaluar','2018-03-10 21:54:48','2018-03-25 00:00:00',NULL,1,8),(9,14,'En Espera','Alineación','Alineacion rutinaria mensual.','Por Evaluar','2018-03-10 21:55:02','2018-03-25 00:00:00',NULL,1,14),(10,15,'En Espera','Cambio de Aceite','Cambio de aceite semestral.','Por Evaluar','2018-03-10 21:55:25','2018-03-31 00:00:00',NULL,1,8),(11,1,'Evaluado','Carrocería','Me estrellé contra un poste de luz.',' Delantera: Abolladura del lado del conductor.\n','2018-03-11 23:04:38','2018-03-17 04:00:00',NULL,1,NULL),(12,3,'En Espera','Carrocería','Me cayó un árbol encima.','Por Evaluar','2018-03-11 23:06:31','2018-03-17 04:00:00',NULL,0,NULL),(13,16,'En Espera','Cambio de Aceite','Cambio de aceite rutinario mensual.','Por Evaluar','2018-03-11 23:09:27',NULL,NULL,1,NULL),(14,17,'En Espera','Carrocería','Me estrellé contra un árbol.','Por Evaluar','2018-03-11 23:11:40',NULL,NULL,1,8);
/*!40000 ALTER TABLE `Orden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Orden-tiene-Repuesto`
--

DROP TABLE IF EXISTS `Orden-tiene-Repuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Orden-tiene-Repuesto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Orden` int(11) NOT NULL,
  `Repuesto` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Orden-tiene-Repuesto`
--

LOCK TABLES `Orden-tiene-Repuesto` WRITE;
/*!40000 ALTER TABLE `Orden-tiene-Repuesto` DISABLE KEYS */;
INSERT INTO `Orden-tiene-Repuesto` VALUES (1,4,2),(2,4,4);
/*!40000 ALTER TABLE `Orden-tiene-Repuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Repuesto`
--

DROP TABLE IF EXISTS `Repuesto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Repuesto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Descripcion` varchar(255) NOT NULL,
  `Detalle` text NOT NULL,
  `Cantidad` int(11) NOT NULL,
  `Tipo` varchar(255) NOT NULL,
  `Disponibilidad` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Repuesto`
--

LOCK TABLES `Repuesto` WRITE;
/*!40000 ALTER TABLE `Repuesto` DISABLE KEYS */;
INSERT INTO `Repuesto` VALUES (1,'Rin','Rin 16\'','En perfecto estado.',15,'Generico',1),(2,'Aceite','Aceite Sintético','En perfecto estado.',12,'Generico',1),(3,'Electronicos','Radio Panasonic','En estado aceptable.',5,'Generico',1),(4,'Caucho','Pirelli 16\'','Cauchos de tracción avanzada.',15,'Generico',1),(5,'Carroceria','Parachoque Trasero Chevrolet Camaro','En perfecto estado.',5,'Original',1),(6,'Carroceria','Faro Delantero Derecho Toyota Corolla','En estado aceptable.',5,'Original',1);
/*!40000 ALTER TABLE `Repuesto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Servicio`
--

DROP TABLE IF EXISTS `Servicio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Servicio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Descripcion` varchar(1500) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Servicio`
--

LOCK TABLES `Servicio` WRITE;
/*!40000 ALTER TABLE `Servicio` DISABLE KEYS */;
/*!40000 ALTER TABLE `Servicio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Usuario`
--

DROP TABLE IF EXISTS `Usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Snombre` varchar(255) DEFAULT NULL,
  `Apellido` varchar(255) NOT NULL,
  `Cedula` int(11) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Cedula` (`Cedula`),
  UNIQUE KEY `Usuario_Cedula_unique` (`Cedula`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuario`
--

LOCK TABLES `Usuario` WRITE;
/*!40000 ALTER TABLE `Usuario` DISABLE KEYS */;
INSERT INTO `Usuario` VALUES (1,'Phil',NULL,'Collins',21889067,'luisgraterol97@gmail.com','philcollins','$2a$10$RZMdPRTeNPto5AyQcL2SOuHq56aY9GkK.yKX8EZS9kyGKrLhhCcEq'),(2,'Stephen',NULL,'Curry',16332675,'luisgraterol97@gmail.com','stephcurry','$2a$10$6LAH5LFluNVT0NkuELr/f.AOyHj5CzlPkcL9fvcUD6Yxel4AolkwK'),(3,'Roger',NULL,'Federer',18665442,'luisgraterol97@gmail.com','rogerfederer','$2a$10$NDlSKRMdL00JZkZPgvzQWuxGRYmBT9HGikQ3SQH6o1cp97hB0PX1q'),(4,'Kobe',NULL,'Bryant',12446778,'luisgraterol97@gmail.com','kobebryant','$2a$10$SKfV8nwhZ8llT2naTRk32ujmLTQNNyVNr6ZS6Y8UdCsXWVXr61mQG'),(5,'Russel',NULL,'Wilson',16990442,'luisgraterol97@gmail.com','dangeruss','$2a$10$dmX2B82lN/BOdfJCCgvd6Ot98lBLgrUXTtXPZ9WFCcncpFCj/eqO2'),(6,'Rafael','','Nadal',19003221,'luisgraterol97@gmail.com','rafaelnadal','$2a$10$gJrjgVEMSwQcPiZH3IYa7usFjRwwiI9eshyb5xHagfOSZ1UNe0GTG'),(7,'Antonio',NULL,'Brown',12447889,'luisgraterol97@gmail.com','antoniobrown','$2a$10$fIxcvEYKiChMXwaypfMHB.UEjGfia5w1nAqrJOTh1kTUGJKB0Bq4q'),(8,'Kyrie',NULL,'Irving',14667443,'luisgraterol97@gmail.com','kyrie','$2a$10$55jUBIDh.yIJ72bm0K8vcOwOuxWoNSWWzmz/du6A2uUxrKz6UlPE6'),(9,'Luciano','Alberto','Pinedo',26254161,'luisgraterol97@gmail.com','chanopinedo','$2a$10$4uMNpKeSiKqSusmmmRSs/e/lsxg0PJ3NlcU1TEHYtWaR6wR/gUAhC'),(10,'Christian',NULL,'Guillen',11332678,'luisgraterol97@gmail.com','cguillen','$2a$10$TErQLco8E/raUZDogBww7ujxJW9Zs5QcYHe6VzTv9xTfE3JY.WubG'),(11,'Germano',NULL,'Rojas',32176291,'luisgraterol97@gmail.com','grojas','$2a$10$BV1F4PGFZcLB3dvX6FD91ugRTCOLpyOg9i3fNtHm307XtK/2/QGeG'),(12,'Giannis',NULL,'Antetokounmpo',16778363,'luisgraterol97@gmail.com','anteto','$2a$10$n5N5kQszpKsMkJhLY/wBzuKnn0J5d1/EVhWqUjxvm0bw0btY2ePR2'),(13,'DeAaron',NULL,'Fox',17882933,'luisgraterol97@gmail.com','deaaron','$2a$10$OX4LJ//jVh0Hoio95bIRbuoopE01jD01RisqVnn.XRVJP3MBm2ODK'),(14,'Lebron',NULL,'James',14536272,'luisgraterol97@gmail.com','lebronjames','$2a$10$y44fn27ZhrFJ6hMv4USAb.1OcpZvJXpjeqZJL0LJ.Qh/pupQFEvPy'),(15,'Novak',NULL,'Djokovic',16777321,'luisgraterol97@gmail.com','nole','$2a$10$nutiNrp8eTzkhRG8nvu4I.ipO6UST9LlF8x2cwAk93Csok2/mMB1m'),(16,'Jimmy',NULL,'Hendrix',12445782,'luisgraterol97@gmail.com','jhendrix','$2a$10$EwNp0N3yFHrvNwS0hWFHxeg9NaRs9d016kxRS3UOFnknoxufJbaRi'),(17,'Luis','Alejandro','Graterol',25234383,'luisgraterol97@gmail.com','luisgraterol','$2a$10$F3smKbxhdCcnHLT3rDeMtuqYzs56cfUp3cpROeRs1qUOfe.AaX8Rq'),(18,'Santiago',NULL,'Lossada',24325661,'luisgraterol97@gmail.com','slossada','$2a$10$QYi/ncnHWt6oIbFUKykcXOWkzhawTE9CfnGzTYa4DdDNTEz4IdX5q'),(19,'Barack',NULL,'Obama',12556728,'luisgraterol97@gmail.com','bobama','$2a$10$BsSZ6QCOfMAjpFfe19rfD.g8gu50SqXjTIGJCchj8d46QOyUQr6um');
/*!40000 ALTER TABLE `Usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Vehiculo`
--

DROP TABLE IF EXISTS `Vehiculo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Vehiculo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Cliente` int(11) NOT NULL,
  `Serial` varchar(255) NOT NULL,
  `Marca` int(11) NOT NULL,
  `Modelo` int(11) NOT NULL,
  `Placa` varchar(255) NOT NULL,
  `Color` varchar(255) NOT NULL,
  `esAutomatico` tinyint(1) NOT NULL DEFAULT '1',
  `esUnicoDueno` tinyint(1) NOT NULL DEFAULT '1',
  `Ano` int(11) NOT NULL,
  `NroPuertas` int(11) NOT NULL DEFAULT '5',
  `Activo` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `Serial` (`Serial`),
  UNIQUE KEY `Vehiculo_Serial_unique` (`Serial`),
  KEY `Marca` (`Marca`),
  KEY `Modelo` (`Modelo`),
  CONSTRAINT `Marca` FOREIGN KEY (`Marca`) REFERENCES `Marca` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Modelo` FOREIGN KEY (`Modelo`) REFERENCES `Modelo` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Vehiculo`
--

LOCK TABLES `Vehiculo` WRITE;
/*!40000 ALTER TABLE `Vehiculo` DISABLE KEYS */;
INSERT INTO `Vehiculo` VALUES (1,1,'4455667789',10,5,'AC54FG','Amarillo',0,1,2016,3,1),(2,1,'223388765',8,29,'NP442AL','Rojo',1,1,2017,3,1),(3,1,'224455674',16,3,'DF44GA','Gris',1,1,2017,5,1),(4,1,'2263738364',5,8,'AA2233','Azul',0,1,2014,5,1),(5,11,'334262816282',8,29,'AA3321D','Gris',1,1,2017,3,1),(6,1,'65353621712',8,15,'GH223UI','Azul',0,1,2014,5,0),(7,1,'891762394613',8,15,'DD211DW','Verde',0,1,2016,5,0),(8,19,'83261891318',7,16,'AA212EQ','Rojo',0,1,2016,3,1),(9,7,'98237019837',10,5,'AA332CD','Negro',0,1,2018,3,1),(10,7,'398173971932',8,29,'FF554CS','Rojo',0,1,2015,5,1),(11,7,'394173917031',5,8,'FQ290VX','Amarillo',1,0,2010,3,1),(12,7,'938217097193',12,26,'DT442CS','Azul',0,0,2008,5,1),(13,16,'0981723928',14,27,'FF212DS','Plata',1,1,2015,5,1),(14,16,'803198273193',3,7,'DQ224VF','Negro',0,1,2010,3,1),(15,16,'932874091723',7,16,'RT759LM','Azul',0,1,2010,3,1),(16,4,'387169416931',5,8,'DE221VF','Negro',0,1,2018,3,1),(17,4,'987236911982',7,16,'DF336BF','Rojo',0,1,2016,3,1);
/*!40000 ALTER TABLE `Vehiculo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-03-12 23:03:41
