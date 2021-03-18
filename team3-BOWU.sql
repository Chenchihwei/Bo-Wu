-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: team3
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `advanced`
--

DROP TABLE IF EXISTS `advanced`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `advanced` (
  `advanced_id` int NOT NULL AUTO_INCREMENT,
  `member_id` int NOT NULL COMMENT '高級展間會員ID',
  `advance_img_path` varchar(100) DEFAULT NULL COMMENT '''高級展間封面圖片路徑''',
  PRIMARY KEY (`advanced_id`),
  KEY `member_id3_idx` (`member_id`),
  CONSTRAINT `member_id5` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advanced`
--

LOCK TABLES `advanced` WRITE;
/*!40000 ALTER TABLE `advanced` DISABLE KEYS */;
INSERT INTO `advanced` VALUES (1,1,'./assets/img/menu_exhibits.png'),(2,2,'./assets/img/exh_7.jpg'),(3,3,'./assets/img/exh_10.jpg'),(4,4,'./assets/img/exh_12.jpg'),(5,5,'./assets/img/exh_2.jpg'),(6,6,'./assets/img/exh_1.jpg'),(7,7,'./assets/img/menu_about.png');
/*!40000 ALTER TABLE `advanced` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `background`
--

DROP TABLE IF EXISTS `background`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `background` (
  `background_id` int NOT NULL AUTO_INCREMENT,
  `bg_img_path` varchar(45) NOT NULL,
  `bg_category` int NOT NULL,
  PRIMARY KEY (`background_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `background`
--

LOCK TABLES `background` WRITE;
/*!40000 ALTER TABLE `background` DISABLE KEYS */;
INSERT INTO `background` VALUES (1,'1',1);
/*!40000 ALTER TABLE `background` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidding_list`
--

DROP TABLE IF EXISTS `bidding_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidding_list` (
  `bidding_id` int NOT NULL AUTO_INCREMENT,
  `work_id` int NOT NULL COMMENT '競標的展品ID',
  `member_id` int NOT NULL COMMENT '競標品作者ID',
  `bidding_time` datetime NOT NULL COMMENT '競標時間',
  `start_price` int NOT NULL COMMENT '起始價格',
  `now_price` int NOT NULL COMMENT '目前價格',
  `bidding_verify` int NOT NULL COMMENT '競標品審核',
  `bidding_exhibition` int NOT NULL COMMENT '競標品是否上架',
  `member_id_win` int DEFAULT NULL COMMENT '得標者ID',
  PRIMARY KEY (`bidding_id`),
  KEY `memberid71_idx` (`member_id`),
  KEY `workid7_idx` (`work_id`),
  CONSTRAINT `memberid71` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `workid7` FOREIGN KEY (`work_id`) REFERENCES `work` (`work_id`)
) ENGINE=InnoDB AUTO_INCREMENT=317194158 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidding_list`
--

LOCK TABLES `bidding_list` WRITE;
/*!40000 ALTER TABLE `bidding_list` DISABLE KEYS */;
INSERT INTO `bidding_list` VALUES (1,1,1,'2020-10-10 00:00:00',200,100,1,2,3),(2,2,1,'2021-01-10 00:00:00',200,100,3,2,4),(3,3,1,'2021-01-11 00:00:00',200,100,3,2,NULL),(4,7,3,'2021-01-12 00:00:00',100,100,3,2,NULL),(5,8,4,'2021-01-13 10:00:00',200,200,3,2,NULL),(6,9,5,'2021-01-14 00:00:00',100,100,3,2,NULL),(7,1,1,'2021-01-14 00:00:00',100,100,3,2,NULL),(8,5,1,'2021-01-14 00:00:00',100,100,3,2,NULL),(9,6,1,'2021-01-14 00:00:00',100,100,3,2,NULL),(10,4,1,'2021-01-14 00:00:00',100,100,3,2,NULL),(317194157,1,1,'2021-03-17 00:00:00',100,100,3,2,NULL);
/*!40000 ALTER TABLE `bidding_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidding_message`
--

DROP TABLE IF EXISTS `bidding_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidding_message` (
  `bidding_message_id` int NOT NULL AUTO_INCREMENT,
  `work_id` int NOT NULL COMMENT '競標品ID',
  `member_id` int NOT NULL COMMENT '留言者ID',
  `bidding_messages` varchar(250) NOT NULL COMMENT '留言內容',
  `message_time` datetime NOT NULL COMMENT '留言時間',
  `message_show` int NOT NULL,
  PRIMARY KEY (`bidding_message_id`),
  KEY `work_id51_idx` (`work_id`),
  KEY `member_id51_idx` (`member_id`),
  CONSTRAINT `member_id6` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `work_id6` FOREIGN KEY (`work_id`) REFERENCES `bidding_list` (`work_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidding_message`
--

LOCK TABLES `bidding_message` WRITE;
/*!40000 ALTER TABLE `bidding_message` DISABLE KEYS */;
INSERT INTO `bidding_message` VALUES (1,1,1,'asdasd','2020-10-10 00:00:00',1),(2,1,1,'qweqweqwe','2020-10-10 00:00:01',1),(3,1,2,'sadasdasd','2020-10-10 00:00:02',1),(4,1,2,'zxczxczx','2020-10-10 00:00:03',1),(5,2,3,'asdasdasd','2020-10-10 00:00:00',1),(6,2,3,'qewqeqwe','2020-10-10 00:00:01',1),(7,2,1,'zxczxc','2020-10-10 00:00:02',2);
/*!40000 ALTER TABLE `bidding_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bidding_price`
--

DROP TABLE IF EXISTS `bidding_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bidding_price` (
  `bidding_price_id` int NOT NULL AUTO_INCREMENT,
  `work_id` int NOT NULL COMMENT '競標品ID',
  `member_id` int NOT NULL COMMENT '競標者ID',
  `bidding_price` int NOT NULL COMMENT '競標價格',
  `bidding_time` time DEFAULT NULL COMMENT '競標時間',
  PRIMARY KEY (`bidding_price_id`),
  KEY `work_id71_idx` (`work_id`),
  KEY `member_id71_idx` (`member_id`),
  CONSTRAINT `member_id71` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `work_id71` FOREIGN KEY (`work_id`) REFERENCES `bidding_list` (`work_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bidding_price`
--

LOCK TABLES `bidding_price` WRITE;
/*!40000 ALTER TABLE `bidding_price` DISABLE KEYS */;
INSERT INTO `bidding_price` VALUES (1,1,2,100,'05:00:00'),(2,1,3,100,'05:10:00');
/*!40000 ALTER TABLE `bidding_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collection`
--

DROP TABLE IF EXISTS `collection`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collection` (
  `collection_id` int NOT NULL AUTO_INCREMENT,
  `work_id` int NOT NULL,
  `collection_subject` int NOT NULL,
  PRIMARY KEY (`collection_id`),
  KEY `work_id_idx` (`work_id`),
  CONSTRAINT `work_id` FOREIGN KEY (`work_id`) REFERENCES `work` (`work_id`)
) ENGINE=InnoDB AUTO_INCREMENT=305072853 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collection`
--

LOCK TABLES `collection` WRITE;
/*!40000 ALTER TABLE `collection` DISABLE KEYS */;
INSERT INTO `collection` VALUES (1,12,1),(2,13,1),(3,14,1),(4,15,1),(5,16,1),(6,17,1),(7,18,1),(8,19,1),(20,20,1),(21,21,2),(22,22,2),(23,23,2),(24,24,2),(25,25,2),(26,26,2),(27,27,2),(28,28,2),(29,29,2),(30,30,3),(31,31,3),(32,32,3),(33,33,3),(34,34,3),(35,35,3),(36,36,3),(37,37,3),(38,38,3),(39,39,4),(40,40,4),(41,41,4),(42,42,4),(43,43,4),(44,44,4),(45,45,4),(46,46,4),(47,47,4);
/*!40000 ALTER TABLE `collection` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `like_list`
--

DROP TABLE IF EXISTS `like_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `like_list` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `work_id` int NOT NULL COMMENT '展品ID',
  `member_id` int NOT NULL COMMENT '按讚者ID',
  `like` int NOT NULL COMMENT '是否按讚',
  PRIMARY KEY (`like_id`),
  KEY `work_id2_idx` (`work_id`),
  KEY `member_id2_idx` (`member_id`),
  CONSTRAINT `member_id2` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `work_id2` FOREIGN KEY (`work_id`) REFERENCES `work` (`work_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1616052212 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `like_list`
--

LOCK TABLES `like_list` WRITE;
/*!40000 ALTER TABLE `like_list` DISABLE KEYS */;
INSERT INTO `like_list` VALUES (1,1,1,1),(314214524,1,1615751960,2),(314214706,11,1615751960,1),(315103323,5,1615751960,2),(316085420,6,1,1),(1615872020,9,8,2),(1615880849,1,1615874093,1),(1615985123,102,1615751960,2),(1615985338,101,1615751960,2),(1615985365,2,1615751960,1),(1615985368,3,1615751960,2),(1615985615,103,1615751960,2),(1615985629,104,1615751960,2),(1615985642,106,1615751960,1),(1615985727,105,1615751960,2),(1615985737,108,1615751960,2),(1616052211,4,1615751960,1);
/*!40000 ALTER TABLE `like_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Manger_member`
--

DROP TABLE IF EXISTS `Manger_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Manger_member` (
  `member_id` int NOT NULL AUTO_INCREMENT COMMENT '管理者編號',
  `Name` varchar(45) NOT NULL COMMENT '''姓名''',
  `Account` varchar(45) NOT NULL COMMENT '''帳號''',
  `Password` varchar(45) NOT NULL COMMENT '''密碼''',
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Manger_member`
--

LOCK TABLES `Manger_member` WRITE;
/*!40000 ALTER TABLE `Manger_member` DISABLE KEYS */;
INSERT INTO `Manger_member` VALUES (1,'henry','henry','123');
/*!40000 ALTER TABLE `Manger_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `member_id` int NOT NULL COMMENT '會員編號',
  `name` varchar(45) NOT NULL COMMENT '''會員姓名''',
  `en_name` varchar(45) DEFAULT NULL COMMENT '''英文姓名''',
  `account` varchar(45) NOT NULL COMMENT '''帳號''',
  `password` varchar(45) NOT NULL COMMENT '''密碼''',
  `email` varchar(45) NOT NULL COMMENT '''信箱''',
  `level` int NOT NULL COMMENT '會員等級',
  `blacklist` int NOT NULL COMMENT '黑名單',
  `introduction` varchar(255) DEFAULT NULL COMMENT '''自介''',
  `join_date` datetime NOT NULL COMMENT '加入日期',
  `bidding_giveup` int DEFAULT NULL COMMENT '棄標次數',
  `member_img` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES (0,'master',NULL,'abc1','123456','abc1',1,1,'我是master1','2020-10-10 00:00:00',NULL,NULL),(1,'立揚',NULL,'lloyd83238@gmail.com','123456','lloyd83238@gmail.com',1,1,'藝術家企圖透過這件作品表達一種身處聲音風景的想像。在環境中，每個對話、每個聲音都有其獨特的頻率，在人與人對話或人與自然環境互動的同時也被這些獨特的頻率穿透，因此藝術家創造了一種可以讓身體接收穿越的視聽感受。','2020-10-10 00:00:00',0,'./assets/img/liyang2.jpg'),(2,'卡肉',NULL,'fubycena@gmail.com','1234561','fubycena@gmail.com',1,1,'楊氏物流業務員、林斯文之妹妹、李文章之前女友、劉加堯之情婦、心機沉重、為情不擇手段','2020-10-10 00:00:00',0,'./assets/img/liyang.jpg'),(3,'曾思思',NULL,'fubycena@gmail.com','1234562','fubycena@gmail.com',1,1,'樂家房仲經理、楊氏物流前業務部經理、楊成皓之妻、李正雄、張春華之女兒、楊美玲之繼女兼侄媳婦','2020-10-10 00:00:00',NULL,'./assets/img/men/men1.jpg'),(4,'李文章',NULL,'fubycena@gmail.com','1234563','fubycena@gmail.com',1,1,'文章事務所建築師、劉加純之夫、李鳴亮之父親、楊清源之外孫、黃秀盆之孫女婿、李正雄、楊美鈴之兒子、劉世昌、陳秋鴻之女婿','2020-10-10 00:00:00',NULL,'./assets/img/men/men2.jpg'),(5,'李文真',NULL,'fubycena@gmail.com','1234564','fubycena@gmail.com',1,1,'楊氏集團董事長兼楊氏物流總經理、劉加堯之妻、劉依彤之母親、楊清源之外孫女、黃秀盆之孫媳婦、李正雄、楊美鈴之女兒','2020-10-10 00:00:00',NULL,'./assets/img/men/men3.jpg'),(6,'朱鴻森',NULL,'fubycena@gmail.com','1234565','fubycena@gmail.com',1,1,'《名畫大發現─清明上河圖》是國立臺北藝術大學於2004年執行國科會之「文化內容創意加值應用」的計畫內容之一，主題選用《清院本清明上河圖》，針對畫中內容，規劃二十個「互動式主題」，設計成2D、3D動畫或影片等數位影像。透過互動式觸控與影像融接技術，當觀者靠近投射桌並觸摸畫中的標的物，系統將會把所對應的「互動式主題」點之數位影像呈現出來，並輔以深入淺出的文字說明。','2020-10-10 00:00:00',NULL,'./assets/img/men/men4.jpg'),(7,'蔡豐安',NULL,'fubycena@gmail.com','1234566','fubycena@gmail.com',1,1,'作品中的黑色區塊是曾偉豪從一些對話和自然環境錄音擷取下來的頻率圖，當這些圖樣翻轉成垂直時，非常像樹的樣子，所以藝術家希望透過這樣的視覺形式和身體接觸的互動聲音，讓觀眾感受到被聲音穿透的感覺，就像進入一個由話語聲音所構成的森林風景。','2020-10-10 00:00:00',NULL,'./assets/img/men/men5.jpg'),(8,'張誌家',NULL,'fubycena@gmail.com','1234567','fubycena@gmail.com',1,1,'作品中的黑色區塊是曾偉豪從一些對話和自然環境錄音擷取下來的頻率圖，當這些圖樣翻轉成垂直時，非常像樹的樣子，所以藝術家希望透過這樣的視覺形式和身體接觸的互動聲音，讓觀眾感受到被聲音穿透的感覺，就像進入一個由話語聲音所構成的森林風景。','2020-10-10 00:00:00',NULL,'./assets/img/men/men6.jpg'),(9,'曹錦輝',NULL,'fubycena@gmail.com','1234568','fubycena@gmail.com',2,1,'以細長藤條描繪臺灣山脈的造型，並在造型中加入座椅機能，與行人和觀光客產生互動行為，整體以通透的外觀作為設計考量。','2020-10-10 00:00:00',NULL,'./assets/img/men/men7.jpg'),(10,'陳致遠',NULL,'fubycena@gmail.com','1234569','fubycena@gmail.com',2,1,'藝術家企圖透過這件作品表達一種身處聲音風景的想像。在環境中，每個對話、每個聲音都有其獨特的頻率，在人與人對話或人與自然環境互動的同時也被這些獨特的頻率穿透，因此藝術家創造了一種可以讓身體接收穿越的視聽感受。','2020-10-10 00:00:00',NULL,'./assets/img/men/men1.jpg'),(11,'雨刷',NULL,'fubycena@gmail.com','1234560','fubycena@gmail.com',2,1,'作品中的黑色區塊是曾偉豪從一些對話和自然環境錄音擷取下來的頻率圖，當這些圖樣翻轉成垂直時，非常像樹的樣子，所以藝術家希望透過這樣的視覺形式和身體接觸的互動聲音，讓觀眾感受到被聲音穿透的感覺，就像進入一個由話語聲音所構成的森','2020-10-10 00:00:00',NULL,'./assets/img/men/men1.jpg'),(1615751960,'henry chen','henry chen','fubycena@gmail.com','100364316375905830695','fubycena@gmail.com',2,1,'光波傳遞能量並轉換儲存於稻米中，再經過收割而儲存於穀倉中，代表著傳遞>轉換> 儲存>再傳遞(循環)，除了表示人與自然的關係，也體現了城鎮的興起與稻米的循環。','2021-03-15 03:59:20',0,'https://lh4.googleusercontent.com/-MVV0vOT1CUo/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnuCijV0jgtJhma6NbfmbsCyT8jSg/s96-c/photo.jpg'),(1615753631,'劉家堯','陳松輝','henry4968@yahoo.com.tw','123456','henry4968@yahoo.com.tw',2,1,'雕塑〈水的呢喃〉造型描述農田中水與沃泥律動交織的美麗畫面，水的波動中帶有濃濃的兒時記憶與鄉情。','2021-03-15 04:27:11',0,'./assets/img/men/men1.jpg'),(1615754101,'陳松輝','陳松輝','henry6987@gmail.com','123456','henry6987@gmail.com',2,1,'以特色的老火車頭詮釋老鎮的文化傳承及在地鐵道特色，火車頭上製作或坐或臥的孩童，彷彿置身在書香的氛圍，讓富岡漫溢爛漫的特色。','2021-03-15 04:35:01',0,'./assets/img/men/men1.jpg'),(1615754362,'鄭孟涵','鄭孟涵','yim51974@cuoly.com','onj463','yim51974@cuoly.com',2,1,'以卡漫飛俠的造型，詮釋出警察在執行任務時的迅速確實及效率，不時奔馳在大街小巷，象徵不持辛勞且為民服務的精神。','2021-03-15 04:39:22',0,'./assets/img/men/men1.jpg'),(1615754387,'吳偉傑','吳偉傑','lky65584@eoopy.com','itj953','lky65584@eoopy.com',2,1,'此件作品的出發點來自呂宅二、三樓的圓頂造型。透過想像建構體不可見的另一面，創造出一個新的、神秘的空間，期望觀者在觀看時可以套入自己的「回憶色彩」，與創作者共同體驗被具象化的歷史，賦予其一個新的記憶經驗。仿佛 當今的數位社會，抽離的「建體」被重新構成為「建模」，最後被再現。','2021-03-15 04:39:47',0,'./assets/img/men/men1.jpg'),(1615754428,'金雅晴','金雅晴','hfv40881@eoopy.com','orr954','hfv40881@eoopy.com',2,1,'以細長藤條描繪臺灣山脈的造型，並在造型中加入座椅機能，與行人和觀光客產生互動行為，整體以通透的外觀作為設計考量。','2021-03-15 04:40:28',0,'./assets/img/men/men1.jpg'),(1615836367,'倪雅婷','倪雅婷','qdp65183@cuoly.com','uee356','qdp65183@cuoly.com',2,1,'以童年火車經驗為出發，坐火車時會看著鐵軌交錯、風景越來越遠，幻想著開往的遠方，速度使視覺產生天馬行空的想像，仿佛沒有盡頭，製造出童年夢幻的共感經驗。','2021-03-16 03:26:07',0,'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4206686352683197&height=200&width=200&ext=1618428365&hash=AeRL4grZNa5601q4GSM'),(1615874093,'周筱婷','周筱婷','lxs43029@cuoly.com','iwu345','lxs43029@cuoly.com',2,1,'對火車鐵道的印象，二、三十歲的青年北漂工作或是南下回家鄉的辛勞，途中經過的城市、自然景色和流逝的時間。背牆製作出各式造型，表達火車穿越的景象，最後以傳統花窗收尾，以抽象表達從古到今鐵路所穿越的時間，乘載著每一代人生活。','2021-03-16 13:54:53',0,'./assets/img/men/men1.jpg'),(1615880965,'趙育德','趙育德','nuu91535@cuoly.com','ie2445','nuu91535@cuoly.com',2,1,'藝術家企圖透過這件作品表達一種身處聲音風景的想像。在環境中，每個對話、每個聲音都有其獨特的頻率，在人與人對話或人與自然環境互動的同時也被這些獨特的頻率穿透，因此藝術家創造了一種可以讓身體接收穿越的視聽感受。','2021-03-16 15:49:25',0,'./assets/img/men/men1.jpg'),(1615882352,'林雅芳','林雅芳','kal67141@eoopy.com','mn9g9d','kal67141@eoopy.com',2,1,'作品中的黑色區塊是曾偉豪從一些對話和自然環境錄音擷取下來的頻率圖，當這些圖樣翻轉成垂直時，非常像樹的樣子，所以藝術家希望透過這樣的視覺形式和身體接觸的互動聲音，讓觀眾感受到被聲音穿透的感覺，就像進入一個由話語聲音所構成的森林風景。','2021-03-16 16:12:32',0,'./assets/img/men/men1.jpg'),(1615882373,'陳怡婷','陳怡婷','mwr25506@zwoho.com','4k43jf','mwr25506@zwoho.com',2,1,'在《維摩詰經》中的〈不思議品〉提及：「須彌納芥子，芥子納須彌」——在芥子這般微小的果實之中，也能將須彌山上所有的生命包容其中。直觀地來說，桌上放置的容器正代表了一個微小有限的空間範圍，在容器可裝盛的範圍內，投射了許多有機體似的動態影像，這些充滿數位風格的影像正象徵了杯盤中須彌世界裡的無數生命。','2021-03-16 16:12:53',0,'./assets/img/men/men1.jpg'),(1615882557,'林正偉','林正偉','uxbykze@niwghx.com','8gd9dg','uxbykzericiyyqzbac@niwghx.com',2,1,'藝術家的前一個作品《流自慢》將城市漂流之意象透過時間切片的方式，以同心圓之紋理拼貼影像時間，陳述一段恍惚的時空觀感。而《流自慢 Ⅱ》將概念推向更單純的時間觀看，再現一段城市裡被忽略的時間，一處荒廢的天台景色，纏繞於天線的帆布所經歷之時間消磨。','2021-03-16 16:15:57',0,'./assets/img/men/men1.jpg'),(1615882638,'張潔愛','張潔愛','ocsasnetl@yahoo.com','j123jo','ocsasnetl@yahoo.com',2,1,'《聲點》是由數百個喇叭所構成的作品，每個喇叭經由晶片運算而產生不同的音頻，有如數百個頻道的聲響在空間中迴盪，透過數百如點的發聲體，大量高速、亂數控制的聲音點之流射，使欣賞者進入超驗的意識流動狀態。','2021-03-16 16:17:18',0,'./assets/img/men/men1.jpg'),(1615882714,'謝淑真','謝淑真','indeshagr@yahoo.com','23c4ss','indeshagr@yahoo.com',2,1,'本作品構想起源於太極拳的招式，當中結合了三種動作感測訊號的偵測（壓力、心跳、動作加速），將太極拳中手部及腰部的「sustain」，即「緩緩流動」的動作精神，用電腦加以解析，並結合視覺性的畫面輔助後，與運動器材業者合作開發此智慧型運動器材，引導民眾達到正確有效的健身與復健效果。','2021-03-16 16:18:34',0,'./assets/img/men/men1.jpg'),(1615882765,'陳姿玉','陳姿玉','ohnugwajy@gm.scu.edu.tw','asdasd','ohnugwajy@gm.scu.edu.tw',2,1,'本作品以薩德侯爵所著《索多瑪120天》為靈感發想來源，它並非再現書中故事或場景，而是以虛構的事件為敘事框架，重啟對當代性的思考；它包含視覺裝置作品與新媒體科技動態演出，兩個部分的主題相互呼應疊加，形成一個對文明困境與死亡昇華的大型跨域創作。','2021-03-16 16:19:25',0,'./assets/img/men/men1.jpg'),(1615882803,'林建汝','林建汝','ofyohhohdo@yahoo.com','nf9923','ofyohhohdo@yahoo.com',2,1,'《索多瑪之夜》的動態演出以一個少年謀殺事件為主軸，共切分五個片段：「物的宇宙」、「殺人狂」、「憂鬱」、「解剖學」與「幽靈」。','2021-03-16 16:20:03',0,'./assets/img/men/men1.jpg'),(1615882889,'蔡志聖','蔡志聖','estancuck@yahoo.com','87g8ff','estancuck@yahoo.com',2,1,'作品透過數位自動控制，將當代精神上的分裂、騷亂與生存的曖昧情境轉化為聲光影像、機械運動、體感偵測和鐳射光互動等元素的調度，呈現高度的象徵與隱喻。視覺裝置的部分，則以「憂鬱/少年」為主軸，展場中央矗立一座巨大絨毛漂浮裝置，另有環繞牆面四周的平面作品，以偽百科全書的方式開展，不同單字對應的拼貼圖像，與動態演出在主題上相互呼應。','2021-03-16 16:21:29',0,'./assets/img/men/men1.jpg'),(1615882909,'楊初航','楊初航','ofloblepd@yahoo.com','24kx2s','ofloblepd@yahoo.com',2,1,'作者在一次登高近距拍攝臺北101高樓的夜色時，從照片中發現該構圖類似於梵谷的作品《星空》。因此以該照片為背景投射在畫布上，透過程式的運算，使觀者以手在畫布前揮動時，即能產生如《星空》的窩流筆觸效果。','2021-03-16 16:21:49',0,'./assets/img/men/men1.jpg'),(1615882929,'別修恆','別修恆','itdihlub@yahoo.com','49x0g0','itdihlub@yahoo.com',2,1,'作品之創作題材取自中國古典小說《鏡花緣》，此書描述百花仙子謫入凡間的故事。作品主要以虛擬實境的技術，創造出3D虛幻的空間，使作品如鏡中花，水中月，看似有，卻是無，近在眼前卻又觸碰不著，呈現出鏡花水月虛無縹緲的意境。','2021-03-16 16:22:09',0,'./assets/img/men/men1.jpg'),(1615882979,'劉淑忠','劉淑忠','agdahsil@yahoo.com.tw','krr321','agdahsil@yahoo.com.tw',2,1,'科技與數位創作的追尋與開發，不自覺受制，或是有意識地不被制約，經驗著無數的擺盪，試圖在這當中謀求平衡。新的媒材、技術的探索，從反覆使用中去熟悉，卻也容易迷失其中。如同作品生成中包含的自我生命脈絡、普世價值觀、社會氛圍與環境，那些隱隱約約卻又關鍵的影響分子，是能夠主動察覺、選擇、甚至拒絕，又或是被動地接收與仿效，衍生出一種儀式般的制約。','2021-03-16 16:22:59',0,'./assets/img/men/men1.jpg'),(1615882993,'林欣怡','林欣怡','ehtitkasr@gmail.com','ddd543','ehtitkasr@gmail.com',2,1,'在石頭刻上文字是古人保存記憶的方式之一。石頭承載紀錄的責任，亦被賦予傳達訊息的任務。藝術家企圖將城市聲音地圖化與觸覺化儲存，將她於臺北各區蒐集聲音，重新混合，並記錄下錄音的地點，以寫實的聲音軌跡「速寫」城市的音景。','2021-03-16 16:23:13',0,'./assets/img/men/men1.jpg'),(1615883231,'周淑玲','周淑玲','ewcel@yahoo.com.tw','j1j234','ewcel@yahoo.com.tw',2,1,'《名畫大發現─清明上河圖》是國立臺北藝術大學於2004年執行國科會之「文化內容創意加值應用」的計畫內容之一，主題選用《清院本清明上河圖》，針對畫中內容，規劃二十個「互動式主題」，設計成2D、3D動畫或影片等數位影像。透過互動式觸控與影像融接技術，當觀者靠近投射桌並觸摸畫中的標的物，系統將會把所對應的「互動式主題」點之數位影像呈現出來，並輔以深入淺出的文字說明。','2021-03-16 16:27:11',0,'./assets/img/men/men1.jpg'),(1615883400,'林昕福','林昕福','awpuhtern@yahoo.com.tw','h68f0g','awpuhtern@yahoo.com.tw',2,1,'作品構想主要來自藝術家所居住的城市，把周遭生活環境的影像轉換成向量動畫，並將之投影在水霧上面，用線條、點和影像重新定義充滿霧的空間。現下流行的3D 電影是利用兩眼視差構成立體幻象的原理，《築霧》則是轉換 2D 動畫，創造裸視 3D 並且可觸摸的實像，打破現實與虛幻的界線。','2021-03-16 16:30:00',0,'./assets/img/men/men1.jpg'),(1615883481,'黃博鈞','黃博鈞','etwasha@yahoo.com.tw','jjeiee','etwasha@yahoo.com.tw',2,1,'一件巧妙運用自然風力產生動能的動態雕塑，外觀以簡約的金屬造型形塑白鷺鷥優雅的線條，利用三連陂的自然風力翩翩起舞，動作猶如白鷺鷥佇立水中優雅漫步低頭覓食與身後大型公共藝術作品<粼粼波光 翩翩白影>遙相呼應。','2021-03-16 16:31:21',0,'./assets/img/men/men1.jpg'),(1615885436,'魏百雨','魏百雨','atlorgil@yahoo.com','jj12jj','atlorgil@yahoo.com',2,1,'「千塘之鄉」美名是桃園聚落文化景觀，宛如散落⼀地的⽔晶，在⼤地上閃閃發光，以色彩繽紛茂盛的⽔上花園，搖曳⽣姿在⽔光花影之中，為桃園帶來⽣命的能量。','2021-03-16 17:03:56',0,'./assets/img/men/men1.jpg'),(1616002351,'陳松輝','陳松輝','henry4968@yahoo.com.tw','4206686352683197','henry4968@yahoo.com.tw',2,1,'作品構想主要來自藝術家所居住的城市，把周遭生活環境的影像轉換成向量動畫，並將之投影在水霧上面，用線條、點和影像重新定義充滿霧的空間。現下流行的3D 電影是利用兩眼視差構成立體幻象的原理，《築霧》則是轉換 2D 動畫，創造裸視 3D 並且可觸摸的實像，打破現實與虛幻的界線。','2021-03-18 01:32:31',0,'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=4206686352683197&height=200&width=200&ext=1618594350&hash=AeQdqmp0UX3lbRM5ltU');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `postcard`
--

DROP TABLE IF EXISTS `postcard`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `postcard` (
  `postcard_id` int NOT NULL AUTO_INCREMENT COMMENT '明信片素材id',
  `postcard_name` varchar(45) NOT NULL COMMENT '''素材名稱''',
  `postcard_img_path` varchar(100) NOT NULL COMMENT '''圖片路徑''',
  `postcard_exhibition` int NOT NULL COMMENT '是否上架',
  `postcard_category` int NOT NULL COMMENT '素材種類',
  PRIMARY KEY (`postcard_id`)
) ENGINE=InnoDB AUTO_INCREMENT=314113120 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `postcard`
--

LOCK TABLES `postcard` WRITE;
/*!40000 ALTER TABLE `postcard` DISABLE KEYS */;
INSERT INTO `postcard` VALUES (1,'a','./assets/img/postcard/oce_bg_1.jpg',1,1),(2,'b','./assets/img/postcard/oce_bg_2.jpg',1,1),(3,'c','./assets/img/postcard/oce_bg_3.jpg',1,1),(4,'d','./assets/img/postcard/oce_bg_4.jpg',1,1),(5,'e','./assets/img/postcard/uni_bg_1.jpg',1,1),(6,'f','./assets/img/postcard/uni_bg_2.jpg',1,1),(7,'g','./assets/img/postcard/4.png',1,2),(8,'h','./assets/img/postcard/exh_1.png',1,2),(9,'i','./assets/img/postcard/exh_2.png',1,2),(10,'j','./assets/img/postcard/exh_9.png',1,2),(11,'k','./assets/img/postcard/exh_14.png',1,2),(12,'l','./assets/img/postcard/exh_17.png',1,2),(13,'m','./assets/img/postcard/0446e4ac9bdce1ec2c89fc0661a748e5.jpg',2,2),(314090651,'0446e4ac9bdce1ec2c89fc0661a748e5.jpg','./assets/img/postcard/0446e4ac9bdce1ec2c89fc0661a748e5.jpg',2,2),(314112804,'small3.jpg','./assets/img/postcard/small3.jpg',2,1),(314113119,'2.jpg','./assets/img/postcard/2.jpg',2,1);
/*!40000 ALTER TABLE `postcard` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subscripition`
--

DROP TABLE IF EXISTS `subscripition`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subscripition` (
  `subscripition_id` int NOT NULL AUTO_INCREMENT,
  `fans_id` int NOT NULL COMMENT '訂閱者ID',
  `subscribed_id` int NOT NULL COMMENT '被訂閱者ID',
  PRIMARY KEY (`subscripition_id`),
  KEY `member_id4_idx` (`fans_id`),
  KEY `member_id8_idx` (`subscribed_id`),
  CONSTRAINT `member_id4` FOREIGN KEY (`fans_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `member_id8` FOREIGN KEY (`subscribed_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615880857 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subscripition`
--

LOCK TABLES `subscripition` WRITE;
/*!40000 ALTER TABLE `subscripition` DISABLE KEYS */;
INSERT INTO `subscripition` VALUES (1,1615753631,1),(2,1615754101,1),(3,1615836367,1),(1615880856,1615874093,1);
/*!40000 ALTER TABLE `subscripition` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work`
--

DROP TABLE IF EXISTS `work`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work` (
  `work_id` int NOT NULL COMMENT '作品ID',
  `work_name` varchar(45) NOT NULL COMMENT '''作品名稱''',
  `member_id` int NOT NULL COMMENT '會員ID',
  `work_introduce` varchar(1000) DEFAULT NULL COMMENT '''作品簡介''',
  `img_path` varchar(100) NOT NULL COMMENT '''圖片路徑''',
  `work_score` int DEFAULT NULL COMMENT '作品評分',
  `like_num` int DEFAULT NULL COMMENT '按讚數',
  `exhibition` int NOT NULL COMMENT '上架',
  `verify` int NOT NULL COMMENT '''審核',
  `visitors` int DEFAULT NULL COMMENT '瀏覽人數',
  `exhibition_time` int DEFAULT NULL COMMENT '上架時間',
  PRIMARY KEY (`work_id`),
  KEY `member_id_idx` (`member_id`),
  CONSTRAINT `member_id` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work`
--

LOCK TABLES `work` WRITE;
/*!40000 ALTER TABLE `work` DISABLE KEYS */;
INSERT INTO `work` VALUES (1,'Imaginary Construction',1,'The concept of the exhibition “Imaginary Construction” is to present inspirational works that show a divergent thinking process.','./assets/img/exh_5.jpg',1,0,1,1,1,0),(2,'Wood into Thirds',1,'The brand objective of “Wood into Thirds” is based on two simple design paradigms “Simplicity in design and practicality in products.”','./assets/img/ocean/462fd61d28fb4b227b21439ded1100d5.jpg',1,212,1,1,33,1),(3,'Light in Orchids',1,'“Orchids House” is the place for promoting orchids and combing orchids with different materials in a creative way.','./assets/img/ocean/8d0b80e68e803d920c93b8ba92e442d7.jpg',1,133,1,1,34,1),(4,'Floating Stone',1,'The design strategy is to represent the contemporary spirit by incorporating traditional materials in Taiwanese buildings.','./assets/img/forest/9ac750b0224a2df9392e5d30f3385e1b.jpg',1,232,1,1,35,1),(5,'Tainan Tour',1,'Moving within the city is a unique way for designers to find inspiration. Tainan is the hometown of the designer; the appearance of every single street is not only visible in the mind but also private and exclusive memories.','./assets/img/underground/plantFossil01.jpg',1,123,1,1,41,1),(6,'Intuition & Options',1,'Adapting the classic shape of the candle holder,Zippoholder is a clever twist that takes the iconic petrol lighters one step further. The quintessence of the design is to alter an ever burning Zippo from a lighter into a candle/torch in a clicking instant.','./assets/img/forest/5cfbc2dbf42f6f7d886e01f71af9ce7f.jpg',1,146,1,1,40,1),(7,'CreATE',1,'Designers just like chefs in the','./assets/img/exh_11.jpg',1,124,1,1,39,1),(8,'Your trash, My treasure',1,'Your trash, My treasure.','./assets/img/exh_12.jpg',1,0,2,3,8,1),(9,'土星',5,'土星是太陽系八大行星中的第六個行星，是個擁有美麗的\"環\"的行星。 土星是一顆十分特別的行星，擁有令人讚嘆不已的土星環，而土星本體的外表，則像是一個木紋球。由於土星大部分由氣體組成，加上高速的旋轉，外觀上是一顆扁平行星。其赤道半徑以及兩極之間的距離相差10%，是類木行星中最 \"扁\" 的一顆。','./assets/img/universe/i9003_181217_110_rev.adapt_.1190.1.jpg',1,14,1,1,4,1),(10,'海中橋',2,'艷陽照映在波光粼粼的海水上，搭配陽光的角度，不僅可以看見清澈的海水與水下不常見的風光，橋樑也會因光線的關係彷彿在發光。這處建在海邊的橋梁，漲潮時宛如水上孤島，獨自待在廣闊的海面上，讓人有一種遺世獨立的飄渺之感。','./assets/img/ocean/ben-young-contemporary-glass-sculptures-4.jpg',1,2,2,3,0,1),(11,'盆中花',3,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/c29b92ad839293fcdba8b92673b65a47.jpg',1,27,1,1,2,1),(12,'環狀星雲',0,'星雲是宇宙塵、氫氣、氦氣、和其他電漿體聚集的星際雲。原本是天文學上通用的名詞，泛指任何天文上的擴散天體，包括在銀河系之外的星系（一些過去的用法依然留存著，例如仙女座星系依然使用愛德溫·哈伯發現它是星系之前的名稱，被稱為仙女座星雲）。星雲通常也是恆星形成的區域，例如鷹星雲，這個星雲刻畫出NASA最著名的影像，即創生之柱。在這個區域形成的氣體、塵埃和其他材料擠在一起，聚集了巨大的質量，這吸引了更多的質量，最後大到足以形成恆星。據了解，剩餘的材料還可以形成行星和行星系的其它天體。','./assets/img/universe/0446e4ac9bdce1ec2c89fc0661a748e5.jpg',NULL,1,1,1,18,NULL),(13,'月球',0,'月球，是地球唯一的天然衛星，並且是太陽系中第五大的衛星。月球的直徑是地球的四分之一。月球是太陽系內密度第二高的衛星，僅次於埃歐，它的自轉與公轉同步（潮汐鎖定），因此始終以同一面朝向著地球；正面標記著黑暗的火山熔岩海，中間夾雜著明亮和古老地殼的高地和突出的隕石坑。','./assets/img/universe/nationalgeographic_131777.adapt_.885.1.jpg',NULL,2,1,1,15,NULL),(14,'無垠',0,'浩瀚的宇宙究竟是有限還是無限呢？至今仍無結論。不過，若假設宇宙的範圍有限，也不能假設宇宙的的外觀就在也不是宇宙了。所以，不論宇宙是有限還是無限，宇宙是沒有邊緣的。選定一個方向往前直走，也不可能走出宇宙之外；非宇宙的空間並不存在。如果宇宙的範圍是無限的，那麼宇宙沒有邊緣就是當然的；然而，如果屬於有限卻沒有邊緣，就很難想像了。我們無法推想這種空間，但是地球表面確實是有限的，並且我們可以一直前進而不碰到邊緣，只是會回到原來的出發點而已。如果在平面上及有限的空間之內，當然一定有邊緣。這些差別只在於表面是彎曲或平直而已。空間也是如此，可見有限但沒有邊緣的空間是不可能的。','./assets/img/universe/small1.jpg',NULL,3,1,1,21,NULL),(15,'銀河',0,'銀河實際上是由無數顆星星組成的，這些星星共同組成一個巨大的銀河系，而我們太陽系也不過是銀河系邊緣的一個小小的星系罷了。我們跟銀河系所有其他的天體一道，圍繞著銀河系的核心而運動著。','./assets/img/universe/small2.jpg',NULL,4,1,1,22,NULL),(16,'土星',0,'土星是太陽系八大行星中的第六個行星，是個擁有美麗的\"環\"的行星。 土星是一顆十分特別的行星，擁有令人讚嘆不已的土星環，而土星本體的外表，則像是一個木紋球。由於土星大部分由氣體組成，加上高速的旋轉，外觀上是一顆扁平行星。其赤道半徑以及兩極之間的距離相差10%，是類木行星中最 \"扁\" 的一顆。','./assets/img/universe/i9003_181217_110_rev.adapt_.1190.1.jpg',NULL,5,1,1,20,NULL),(17,'貓眼星雲',0,'貓眼星雲是位於天龍座的一個行星狀星雲。它是已知的星雲中結構最複雜的之一，哈勃太空望遠鏡的高解析度觀測圖像揭示出其中獨特的扭結、噴柱、氣泡以及纖維狀的弧形結構。它的中心是一顆明亮、熾熱的恆星，約1000年前這顆恆星失去了它的外層結構，從而產生了貓眼星雲。現代研究引出了數個關於貓眼星雲的謎團。它的複雜結構有可能部分地是由一對中心聯星拋射的物質造成的，但迄今尚未有直接證據表明其中心恆星擁有伴星。此外，通過兩種方法測量的化學物質豐度的結果出現重大差異，其原因目前仍不能肯定。哈勃望遠鏡的觀測揭示出在「貓眼」的周圍有幾個由中心恆星在遠古時代拋射出的球形外殼構成的昏暗的光環，這些拋射的確切機制現在尚不明確。','./assets/img/universe/6db64bba20f4b2be76c275c9ec0ca39a.jpg',NULL,6,1,1,1,NULL),(18,'生命初始',0,'地球誕生時（後期重轟炸期後）的面貌和現在有巨大不同，包圍在地球外表的水汽雖已凝結成液態性的水-海洋，但溫度還是很高，那時具有活動力的火山遍布地表，不時噴出火山灰和岩漿，大氣很稀薄，氫、一氧化碳等各種氣體於空中形成一朵朵的捲雲，氧氣很少，因無充足的大氣層掩蔽，整個地球曝露在強烈的紫外線之下，與海洋的物質作用。此時雲端的電離子不斷引起風暴，而交加的雷電不時侵襲陸地。','./assets/img/universe/small3.jpg',NULL,7,1,1,1,NULL),(19,'流星',0,'你看過流星嗎？有人說，天上的每一顆星星都代表一個賢人，每當有流星飛過，就表示這世上將有賢人要誕生。也有人說一閃即逝的流星充滿著希望，當流星劃過天空，只要在流星還未消逝前對它許願，願望就會實現。相較於流星的浪漫傳說，隕石顯得更為神秘。許多原住民文化裡頭把隕石事件當作天神的力量，神人可以召喚火惡魔到地球來懲罰任何違反神聖規定的人；也有人說隕石降落的時候，恰巧都會有偉人辭世。','./assets/img/universe/8ab7ac823a014ea1b9583c75e14a4828.jpg',NULL,8,1,1,1,NULL),(20,'麗陽',0,'麗陽又稱桃莉羊又稱劉麗陽','./assets/img/universe/e2026058526bd1c93fdf2572f4f40575.jpg',NULL,0,1,1,0,NULL),(21,'發光回家路',0,'屹立在島嶼邊緣，坐鎮在海洋與陸地的交接處，或神秘、或孤獨地靜靜守望著海岸線，黑夜降臨，一道刺眼且突兀的亮光，撕破暗暝帶來的漆黑與幽暗，這一道光，是警示、是指引，更是溫暖的投射。對於生活在陸地上的我們，燈塔不過就是地標與景點，但對於漂泊海洋的討海人們，燈塔代表著回家的方向。','./assets/img/ocean/new-glass-concrete-sculptures-ben-young-13.jpg',NULL,0,1,1,0,NULL),(22,'海豚',0,'1871年的一天，帆船〈布里尼爾號〉行經新西蘭科克海峽，因天氣突變，困於死亡之峽整整一天，眼看就要遭受滅頂之災，突然，他眼晴一亮，一條銀灰色的大海豚從驚濤中躍起，並不時回首盼望，仿佛在說：「請放心，朋友，我知道怎樣沖出迷途，擺脫死神。」船長像在夜航中看見燈塔，想也不想就下令緊隨海豚前進。大海豚七拐八轉，終於把〈布里尼爾號〉領出了恐怖之地。從此，奇跡出現了，這只銀灰色的海豚始終徘徊在海峽附近，年復一年地為過往船隻領航。每逢有船來到，它總是躍出水面，搖搖尾鰭表示歡迎，然後繞暗礁、躲湍流，使船隻擺脫危難，船員們親切地稱它為「傑克」。1912年，傑克結束了40年如一日的義務領航員生涯，悄然逝去。當地人懷著依戀之情，潛水夫找到它的遺體，並在上面覆蓋著國旗，隨後為它舉行了葬禮，以後又為它精雕了銅像。','./assets/img/ocean/450807ccf774cfa6f18a7fe16219d176.jpg',NULL,0,1,1,0,NULL),(23,'海中橋',0,'艷陽照映在波光粼粼的海水上，搭配陽光的角度，不僅可以看見清澈的海水與水下不常見的風光，橋樑也會因光線的關係彷彿在發光。這處建在海邊的橋梁，漲潮時宛如水上孤島，獨自待在廣闊的海面上，讓人有一種遺世獨立的飄渺之感。','./assets/img/ocean/ben-young-contemporary-glass-sculptures-4.jpg',NULL,0,1,1,0,NULL),(24,'海火山',0,'洋中脊構造是板塊構造的一部分，在洋中脊形成的玄武岩洋殼逐漸變冷變重，發生俯衝作用，俯衝到地函的洋殼發生變質作用進一步密度變大，拖曳整個洋殼向地函運動並使得洋中脊被動擴張，洋中脊擴張後，下面的軟流圈地函被動上涌發生減壓熔融，形成新的玄武質洋殼。也正因為如此，正斷層作用產生了裂谷，也出現了平行斷層。離大洋中脊愈遠的岩石愈年老，而大洋中脊中央則是最年輕的新生地殼。另一方面，由於軟流圈內的岩漿對流背離，再加上各部份的對流速度不一，因而形成轉換斷層，雖然朝著同一方向擴展（脊推機制），但移動方向卻不相同，而這些轉換斷層會出現剪切作用。最有名的中洋脊是大西洋中脊，冰島則是大西洋中洋脊露出海面的一部分，因此被認為是觀察中洋脊構造最方便的區域。','./assets/img/ocean/new-glass-concrete-sculptures-ben-young-23.jpg',NULL,0,1,1,0,NULL),(25,'水母',0,'全世界的海洋中有超過兩百種的水母，牠們分布於全球各地的水域裡，無論是熱帶的水域﹑溫帶的水域﹑淺水區﹑約百米深的海洋，甚至是淡水區都有牠們的蹤影。','./assets/img/ocean/a6dd8562c17518aeeb5ea81902bb1762.jpg',NULL,0,1,1,0,NULL),(26,'No Man Is An Island',0,'No man is an island entire of itself; every man is a piece of the continent, a part of the main; if a clod be washed away by the sea, Europe is the less, as well as if a promontory were, as well as any manor of thy friends or of thine own were; any man\'s death diminishes me, because I am involved in mankind. And therefore never send to know for whom the bell tolls; it tolls for thee.','./assets/img/ocean/new-glass-concrete-sculptures-ben-young-15.jpg',NULL,0,1,1,0,NULL),(27,'Song of the Sea',0,'Timeless sea breezes,sea-wind of the night:you come for no one;if someone should wake,he must be prepared how to survive you.Timeless sea breezes,that for aeons have blown ancient rocks, you are purest space coming from afar…Oh, how a fruit-bearing fig tree feels your coming high up in the moonlight.','./assets/img/ocean/462fd61d28fb4b227b21439ded1100d5.jpg',NULL,0,1,1,0,NULL),(28,'The Ocean',0,'The Ocean has its silent caves, Deep, quiet, and alone; Though there be fury on the waves, Beneath them there is none. The awful spirits of the deep Hold their communion there; And there are those for whom we weep, The young, the bright, the fair.Calmly the wearied seamen rest Beneath their own blue sea. The ocean solitudes are blest, For there is purity. The earth has guilt, the earth has care, Unquiet are its graves; But peaceful sleep is ever there, Beneath the dark blue waves.','./assets/img/ocean/1d0f11a7bdbd518db65be03aaf08f0ba.jpg',NULL,0,1,1,0,NULL),(29,'波濤',0,'波浪、波濤是發生在各種水體（海水上的又叫海浪）表面上的表面波，即沿著水與空氣界面間傳行的一種波動，屬於重力波的一種類型。當風吹起時，風所帶來的壓力及摩擦力對海洋表面的平衡態產生擾動，一些能量自風轉移到水上。水能夠自風得到能量是因為兩者間的摩擦力，使得表面粒子以橢圓式運動移動著，這種橢圓式運動是縱波（往覆運動）與橫波（上下運動）所合成。波浪的波動有隨機性；因為海面的風速、風向隨時隨地變化，所以波浪通常是雜亂無章的，其波高、波長和周期都為隨機量。','./assets/img/ocean/8d0b80e68e803d920c93b8ba92e442d7.jpg',NULL,0,1,1,0,NULL),(30,'在林中',0,'在森林裡活動15分鐘，血壓及壓力荷爾蒙濃度能下降，還能鎮靜前額葉，紓緩交感神經失調，放鬆程度比在都市中健走高出兩倍。','./assets/img/forest/e0bc0e6d881450043f5a097965f6712d.jpg',NULL,0,1,1,0,NULL),(31,'Night\'s Watch',0,'Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night\'s Watch, for this night and all the nights to come.','./assets/img/forest/d4023d0957e0ca269e49e4251bd37ca0.jpg',NULL,0,1,1,0,NULL),(32,'盆中花',0,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/c29b92ad839293fcdba8b92673b65a47.jpg',NULL,0,1,1,0,NULL),(33,'盆中花之二',0,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/5cfbc2dbf42f6f7d886e01f71af9ce7f.jpg',NULL,0,1,1,0,NULL),(34,'菜',0,'白蘿蔔有「平民人參」的稱號。有句俗話說「冬吃蘿蔔夏吃薑，不用醫生開藥方」，意思是食用當季食材像是冬天的蘿蔔、夏天的薑，來進行食療甚至可以不需要看醫生吃藥。白蘿蔔營養價值很高，富含多種維生素、營養素如木質素、芥子油等成分，有防病、防癌的功效。','./assets/img/forest/2c56eb306595e31efeb4623c830b570c.jpg',NULL,0,1,1,0,NULL),(35,'森之冥想之三',0,'劉巧玲 作','./assets/img/forest/劉巧玲_森之冥想之三.PNG',NULL,0,1,1,0,NULL),(36,'和平鴿',0,'亞當夏娃被逐出伊甸園，而此後，該隱誅弟揭開了人類互相殘殺的序幕，人世間充滿著強暴、仇恨和嫉妒。上帝不滿人類的種種罪惡，憤怒萬分，決定用洪水毀滅這個已經敗壞的世界，大雨下了40晝夜，遍地汪洋，只留下挪亞方舟里的人和生靈。洪水之後，諾亞從方舟上放出一隻鴿子，讓它探測外面的消息，上帝讓鴿子銜回橄欖枝，已示洪水退盡，平安來到了。從此，人們就用鴿子和橄欖枝來象徵和平。','./assets/img/forest/64884b2074435fb7ddc96d52bb8812e7.jpg',NULL,0,1,1,0,NULL),(37,'盆中花之三',0,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/8d887d3a04f55f2f78cd6e445da6fd0d.jpg',NULL,0,1,1,0,NULL),(38,'鳥兒',0,'鳥類，自古常被視為精靈使者，在台灣不論是山鳥或水鳥，留鳥或候鳥種類的多樣性，都令國際視為是賞鳥的天堂。','./assets/img/forest/9ac750b0224a2df9392e5d30f3385e1b.jpg',NULL,0,1,1,0,NULL),(39,'菊石',0,'菊石的英文名為Ammonite，此語源自古埃及諸神之一的阿蒙神（Ammon）。據說祂頭上長有如公羊般盤旋的角，而菊石盤捲的外殼形狀正與其神似而得名，在古埃及與希臘的神廟建築中，都還看得到類似的裝飾石雕。','./assets/img/underground/fossil01.jpg',NULL,0,1,1,0,NULL),(40,'古蕨',0,'古蕨喜生長於潮濕的土壤中，如氾濫平原或河濱等地[1]，為古生代早期森林冠層植被的重要組成物種。維吉尼亞理工學院暨州立大學生物學和地質科學教授史蒂芬·謝克勒（Stephen Scheckler）曾說：「在古蕨出現在地球上後，他們很快地成為地球上的主要樹種之一，幾乎所有可居住的陸地區域都能發現此類植物。」','./assets/img/underground/plantFossil01.jpg',NULL,0,1,1,0,NULL),(41,'紫水晶',0,'相傳酒神巴克斯因與月亮女神戴安娜 發生爭執而滿心憤怒，派兇狠的老虎前去報復，卻意外遇上去參見戴安娜的少女阿梅希斯特（Amethyst），戴安娜為避免少女死于虎爪，將她變成潔淨無暇的水晶。酒神看見少女化為透明的水晶，覺得自己非常可恥，因此將自己身上的葡萄酒倒在純淨的水晶上，提醒自己不再犯錯，而水晶也成為葡萄酒的紫色水晶。','./assets/img/underground/Amethyst.jpg',NULL,0,1,1,0,NULL),(42,'巨齒鯊',0,'巨齒鯊只是從牙齒化石及一些脊椎化石中推斷出來的生物。與其他現代鯊魚相似，牠的骨骼是軟骨而非硬骨，形成骨骼化石紀錄的缺乏。但是，巨齒鯊約過百的大型堅硬琺瑯質牙齒則保存了很久。這些牙齒與大白鯊的牙齒相似，且約為21公分長（斜邊長度）。最近研究指牠是大白鯊的近親。[1]這個近親論說卻不斷被受質疑，認為牙齒的類似是因趨同演化的緣故。無論如何，從牙齒來看，這種生物在史前一定是體型巨大的獵食者。','./assets/img/underground/megalodon.jpg',NULL,0,1,1,0,NULL),(43,'紅寶石',0,'紅寶石的英文是 Ruby，從拉丁文「Ruber」而來，意思就是紅色。紅寶石被尊稱為「寶石之王」，有著生命來源、熱情似火與美好愛情的意義，另外還象徵了永恆與堅貞。紅寶石顏色相當豔紅，曾讓古人以為是一種永不熄滅的火。','./assets/img/underground/rubystone.jpg',NULL,0,1,1,0,NULL),(44,'劍齒虎',0,'劍齒虎是指多種不同的物種，主要是分類在貓科下的劍齒虎亞科、鬣齒獸科及獵貓科，且包括後獸下綱的兩個科，生存於新生代始新世至更新世晚期（42 百萬年前 - 11,000 年前以及生存於)古生代二疊紀晚期的麗齒獸亞目，各自演化出軍刀的上犬齒。牠們的上犬齒最長可達20厘米，縱然口合起來，其犬齒仍然清晰可見。劍齒虎的身形一般都較現今的貓科強壯和龐大，彷彿像熊一般，最有名的劍齒虎為斯劍虎。','./assets/img/underground/e7269f483bf5be55aedb45d8dd3a3b5b.jpg',NULL,0,1,1,0,NULL),(45,'小古蕨',0,'古蕨喜生長於潮濕的土壤中，如氾濫平原或河濱等地[1]，為古生代早期森林冠層植被的重要組成物種。維吉尼亞理工學院暨州立大學生物學和地質科學教授史蒂芬·謝克勒（Stephen Scheckler）曾說：「在古蕨出現在地球上後，他們很快地成為地球上的主要樹種之一，幾乎所有可居住的陸地區域都能發現此類植物。」','./assets/img/underground/plantFossil02.jpg',NULL,0,1,1,0,NULL),(46,'T-Rex',0,'Tyrannosaurus rex was one of the most ferocious predators to ever walk the Earth. With a massive body, sharp teeth, and jaws so powerful they could crush a car, this famous carnivore dominated the forested river valleys in western North America during the late Cretaceous period, 68 million years ago.','./assets/img/underground/fossil03.jpg',NULL,0,1,1,0,NULL),(47,'Alligator',0,'American alligators live in the wild in the southeastern United States. You\'re most likely to spot them in Florida and Louisiana, where they live in rivers, lakes, ponds, swamps, bayous, and marshes. These reptiles are kind of clumsy on land, but they\'re built for life in the water. Great swimmers, they are equipped with webbed feet and strong tails that propel them through the water.','./assets/img/underground/alligator.jpg',NULL,0,1,1,0,NULL),(101,'Alligator',2,'American alligators live in the wild in the southeastern United States. You\'re most likely to spot them in Florida and Louisiana, where they live in rivers, lakes, ponds, swamps, bayous, and marshes. These reptiles are kind of clumsy on land, but they\'re built for life in the water. Great swimmers, they are equipped with webbed feet and strong tails that propel them through the water.','./assets/img/underground/alligator.jpg',NULL,0,1,1,4,NULL),(102,'T-Rex',2,'Tyrannosaurus rex was one of the most ferocious predators to ever walk the Earth. With a massive body, sharp teeth, and jaws so powerful they could crush a car, this famous carnivore dominated the forested river valleys in western North America during the late Cretaceous period, 68 million years ago.','./assets/img/underground/fossil03.jpg',NULL,4,1,1,7,NULL),(103,'小古蕨',2,'古蕨喜生長於潮濕的土壤中，如氾濫平原或河濱等地[1]，為古生代早期森林冠層植被的重要組成物種。維吉尼亞理工學院暨州立大學生物學和地質科學教授史蒂芬·謝克勒（Stephen Scheckler）曾說：「在古蕨出現在地球上後，他們很快地成為地球上的主要樹種之一，幾乎所有可居住的陸地區域都能發現此類植物。」','./assets/img/underground/plantFossil02.jpg',NULL,5,1,1,8,NULL),(104,'劍齒虎',2,'劍齒虎是指多種不同的物種，主要是分類在貓科下的劍齒虎亞科、鬣齒獸科及獵貓科，且包括後獸下綱的兩個科，生存於新生代始新世至更新世晚期（42 百萬年前 - 11,000 年前以及生存於)古生代二疊紀晚期的麗齒獸亞目，各自演化出軍刀的上犬齒。牠們的上犬齒最長可達20厘米，縱然口合起來，其犬齒仍然清晰可見。劍齒虎的身形一般都較現今的貓科強壯和龐大，彷彿像熊一般，最有名的劍齒虎為斯劍虎。','./assets/img/underground/e7269f483bf5be55aedb45d8dd3a3b5b.jpg',NULL,6,1,1,9,NULL),(105,'紅寶石',3,'紅寶石的英文是 Ruby，從拉丁文「Ruber」而來，意思就是紅色。紅寶石被尊稱為「寶石之王」，有著生命來源、熱情似火與美好愛情的意義，另外還象徵了永恆與堅貞。紅寶石顏色相當豔紅，曾讓古人以為是一種永不熄滅的火。','./assets/img/underground/rubystone.jpg',NULL,7,1,1,3,NULL),(106,'巨齒鯊',3,'巨齒鯊只是從牙齒化石及一些脊椎化石中推斷出來的生物。與其他現代鯊魚相似，牠的骨骼是軟骨而非硬骨，形成骨骼化石紀錄的缺乏。但是，巨齒鯊約過百的大型堅硬琺瑯質牙齒則保存了很久。這些牙齒與大白鯊的牙齒相似，且約為21公分長（斜邊長度）。最近研究指牠是大白鯊的近親。[1]這個近親論說卻不斷被受質疑，認為牙齒的類似是因趨同演化的緣故。無論如何，從牙齒來看，這種生物在史前一定是體型巨大的獵食者。','./assets/img/underground/megalodon.jpg',NULL,7,1,1,5,NULL),(107,'紫水晶',3,'相傳酒神巴克斯因與月亮女神戴安娜 發生爭執而滿心憤怒，派兇狠的老虎前去報復，卻意外遇上去參見戴安娜的少女阿梅希斯特（Amethyst），戴安娜為避免少女死于虎爪，將她變成潔淨無暇的水晶。酒神看見少女化為透明的水晶，覺得自己非常可恥，因此將自己身上的葡萄酒倒在純淨的水晶上，提醒自己不再犯錯，而水晶也成為葡萄酒的紫色水晶。','./assets/img/underground/Amethyst.jpg',NULL,7,1,1,8,NULL),(108,'古蕨',3,'古蕨喜生長於潮濕的土壤中，如氾濫平原或河濱等地[1]，為古生代早期森林冠層植被的重要組成物種。維吉尼亞理工學院暨州立大學生物學和地質科學教授史蒂芬·謝克勒（Stephen Scheckler）曾說：「在古蕨出現在地球上後，他們很快地成為地球上的主要樹種之一，幾乎所有可居住的陸地區域都能發現此類植物。」','./assets/img/underground/plantFossil01.jpg',NULL,7,1,1,9,NULL),(109,'菊石',4,'菊石的英文名為Ammonite，此語源自古埃及諸神之一的阿蒙神（Ammon）。據說祂頭上長有如公羊般盤旋的角，而菊石盤捲的外殼形狀正與其神似而得名，在古埃及與希臘的神廟建築中，都還看得到類似的裝飾石雕。','./assets/img/underground/fossil01.jpg',NULL,7,1,1,10,NULL),(110,'鳥兒',4,'鳥類，自古常被視為精靈使者，在台灣不論是山鳥或水鳥，留鳥或候鳥種類的多樣性，都令國際視為是賞鳥的天堂。','./assets/img/forest/9ac750b0224a2df9392e5d30f3385e1b.jpg',NULL,7,1,1,1,NULL),(111,'盆中花之三',4,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/8d887d3a04f55f2f78cd6e445da6fd0d.jpg',NULL,7,1,1,2,NULL),(112,'和平鴿',4,'亞當夏娃被逐出伊甸園，而此後，該隱誅弟揭開了人類互相殘殺的序幕，人世間充滿著強暴、仇恨和嫉妒。上帝不滿人類的種種罪惡，憤怒萬分，決定用洪水毀滅這個已經敗壞的世界，大雨下了40晝夜，遍地汪洋，只留下挪亞方舟里的人和生靈。洪水之後，諾亞從方舟上放出一隻鴿子，讓它探測外面的消息，上帝讓鴿子銜回橄欖枝，已示洪水退盡，平安來到了。從此，人們就用鴿子和橄欖枝來象徵和平。','./assets/img/forest/64884b2074435fb7ddc96d52bb8812e7.jpg',NULL,7,1,1,16,NULL),(113,'森之冥想之三',5,'劉巧玲 作','./assets/img/forest/劉巧玲_森之冥想之三.PNG',NULL,8,1,1,6,NULL),(114,'菜',5,'白蘿蔔有「平民人參」的稱號。有句俗話說「冬吃蘿蔔夏吃薑，不用醫生開藥方」，意思是食用當季食材像是冬天的蘿蔔、夏天的薑，來進行食療甚至可以不需要看醫生吃藥。白蘿蔔營養價值很高，富含多種維生素、營養素如木質素、芥子油等成分，有防病、防癌的功效。','./assets/img/forest/2c56eb306595e31efeb4623c830b570c.jpg',NULL,8,1,1,5,NULL),(115,'盆中花之二',5,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/5cfbc2dbf42f6f7d886e01f71af9ce7f.jpg',NULL,8,1,1,0,NULL),(116,'盆中花',5,'Night gathers, and now my watch begins. It shall not end until my death. I shall take no wife, hold no lands, father no children. I shall wear no crowns and win no glory. I shall live and die at my post. I am the sword in the darkness. I am the watcher on the walls. I am the fire that burns against the cold, the light that brings the dawn, the horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night\'s Watch, for this night and all the nights to come.','./assets/img/forest/c29b92ad839293fcdba8b92673b65a47.jpg',NULL,8,1,1,0,NULL),(117,'Night\'s Watch',6,'在歲月的長河裡，每個人都有過眼雲煙，每個人都如一花一草，每個人都有自己的世界。看淡一切事物心不為所動，心情心境才會超凡脫俗，才會淡然處之。。逆境的時候與花草凝眸，與葉木比擬，同樣的世界同樣的生命，微笑面對，安然處之。','./assets/img/forest/d4023d0957e0ca269e49e4251bd37ca0.jpg',NULL,9,1,1,0,NULL),(118,'在林中',6,'在森林裡活動15分鐘，血壓及壓力荷爾蒙濃度能下降，還能鎮靜前額葉，紓緩交感神經失調，放鬆程度比在都市中健走高出兩倍。','./assets/img/forest/e0bc0e6d881450043f5a097965f6712d.jpg',NULL,8,1,1,0,NULL),(119,'波濤',6,'波浪、波濤是發生在各種水體（海水上的又叫海浪）表面上的表面波，即沿著水與空氣界面間傳行的一種波動，屬於重力波的一種類型。當風吹起時，風所帶來的壓力及摩擦力對海洋表面的平衡態產生擾動，一些能量自風轉移到水上。水能夠自風得到能量是因為兩者間的摩擦力，使得表面粒子以橢圓式運動移動著，這種橢圓式運動是縱波（往覆運動）與橫波（上下運動）所合成。波浪的波動有隨機性；因為海面的風速、風向隨時隨地變化，所以波浪通常是雜亂無章的，其波高、波長和周期都為隨機量。','./assets/img/ocean/8d0b80e68e803d920c93b8ba92e442d7.jpg',NULL,2,1,1,0,NULL),(120,'The Ocean',6,'The Ocean has its silent caves,','./assets/img/ocean/1d0f11a7bdbd518db65be03aaf08f0ba.jpg',NULL,1,1,1,0,NULL),(121,'Alligator',7,'American alligators live in the wild in the southeastern United States. You\'re most likely to spot them in Florida and Louisiana, where they live in rivers, lakes, ponds, swamps, bayous, and marshes. These reptiles are kind of clumsy on land, but they\'re built for life in the water. Great swimmers, they are equipped with webbed feet and strong tails that propel them through the water.','./assets/img/underground/alligator.jpg',NULL,133,1,1,0,NULL),(122,'水母',7,'全世界的海洋中有超過兩百種的水母，牠們分布於全球各地的水域裡，無論是熱帶的水域﹑溫帶的水域﹑淺水區﹑約百米深的海洋，甚至是淡水區都有牠們的蹤影。','./assets/img/ocean/a6dd8562c17518aeeb5ea81902bb1762.jpg',NULL,122,1,1,0,NULL),(123,'生命初始',7,'地球誕生時（後期重轟炸期後）的面貌和現在有巨大不同，包圍在地球外表的水汽雖已凝結成液態性的水-海洋，但溫度還是很高，那時具有活動力的火山遍布地表，不時噴出火山灰和岩漿，大氣很稀薄，氫、一氧化碳等各種氣體於空中形成一朵朵的捲雲，氧氣很少，因無充足的大氣層掩蔽，整個地球曝露在強烈的紫外線之下，與海洋的物質作用。此時雲端的電離子不斷引起風暴，而交加的雷電不時侵襲陸地。','./assets/img/universe/small3.jpg',NULL,100,1,1,0,NULL),(124,'No Man Is An Island',7,'No man is an island entire of itself; every man is a piece of the continent, a part of the main; if a clod be washed away by the sea, Europe is the less, as well as if a promontory were, as well as any manor of thy friends or of thine own were; any man\'s death diminishes me, because I am involved in mankind. And therefore never send to know for whom the bell tolls; it tolls for thee.','./assets/img/ocean/new-glass-concrete-sculptures-ben-young-15.jpg',NULL,111,1,1,0,NULL);
/*!40000 ALTER TABLE `work` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `work_message`
--

DROP TABLE IF EXISTS `work_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `work_message` (
  `message_id` int NOT NULL AUTO_INCREMENT,
  `work_id` int NOT NULL COMMENT '展品ID',
  `message_text` varchar(255) NOT NULL COMMENT '''留言內容''',
  `member_id` int NOT NULL COMMENT '留言者ID',
  `message_time` datetime NOT NULL COMMENT '留言時間',
  `message_port` int NOT NULL COMMENT '檢舉留言',
  `message_show` int NOT NULL,
  PRIMARY KEY (`message_id`),
  KEY `work_id1_idx` (`work_id`),
  KEY `member_id1_idx` (`member_id`),
  CONSTRAINT `member_id1` FOREIGN KEY (`member_id`) REFERENCES `member` (`member_id`),
  CONSTRAINT `work_id1` FOREIGN KEY (`work_id`) REFERENCES `work` (`work_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1615880799 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `work_message`
--

LOCK TABLES `work_message` WRITE;
/*!40000 ALTER TABLE `work_message` DISABLE KEYS */;
INSERT INTO `work_message` VALUES (1,1,'作者好帥',1,'2020-10-10 00:00:00',1,1),(2,1,'這個作品我喜歡!',2,'2020-10-11 00:00:00',1,1),(3,1,'照騙喔!',3,'2020-10-12 00:00:00',2,1),(4,1,'好想要這個作品喔!',4,'2020-10-13 00:00:00',2,2),(5,1,'謝謝你們哦!',1,'2020-10-14 00:00:00',1,1),(6,2,'讚喔!',2,'2020-10-10 00:00:00',1,1),(7,2,'立揚帥喔!',3,'2020-10-11 00:00:00',1,1),(8,2,'加油立揚!',4,'2020-10-12 00:00:00',2,1),(9,2,'OK!這我喜歡!',1,'2020-10-13 00:00:00',2,1),(10,3,'藝術品很棒喔',1,'2020-10-10 00:00:00',1,1),(11,4,'跟我的東西很像喔!',1,'2020-10-10 00:00:00',1,1),(12,5,'你好我是立揚!',1,'2020-10-10 00:00:00',1,1),(13,6,'加油!',1,'2020-10-10 00:00:00',1,1),(14,10,'加油!你可以變得跟我一樣!',1,'2020-10-10 00:00:00',1,1),(15,10,'讚喔!',2,'2020-10-13 00:00:00',1,1),(16,9,'加油!',2,'2020-10-13 00:00:00',1,1),(17,10,'加油!你可以變得跟我一樣!',2,'2020-10-13 00:00:00',1,1),(18,11,'讚喔!',2,'2020-10-13 00:00:00',1,1),(19,101,'讚喔!',3,'2020-10-13 00:00:00',1,1),(20,102,'加油!',3,'2020-10-12 00:00:00',1,1),(21,103,'加油!你可以變得跟我一樣!',3,'2020-10-12 00:00:00',1,1),(22,104,'讚喔!',3,'2020-10-12 00:00:00',1,1),(23,105,'加油!你可以變得跟我一樣!',4,'2020-10-14 00:00:00',1,1),(24,106,'讚喔!',4,'2020-10-14 00:00:00',1,1),(25,107,'好想要這個作品喔!',4,'2020-10-14 00:00:00',1,1),(26,108,'好醜喔',4,'2020-10-14 00:00:00',2,1),(27,109,'加油!你可以變得跟我一樣!',5,'2021-03-16 15:46:38',1,1),(28,110,'讚喔!',5,'2021-03-16 15:46:38',1,1),(29,111,'好想要這個作品喔!',5,'2021-03-16 15:46:38',1,1),(30,112,'作者好帥',5,'2021-03-16 15:46:39',1,1),(31,113,'加油!你可以變得跟我一樣!',6,'2021-03-16 15:46:40',1,1),(32,114,'讚喔!',6,'2021-03-16 15:46:41',1,1),(33,115,'好想要這個作品喔!',6,'2021-03-16 15:46:42',1,1),(34,116,'作者好帥',6,'2021-03-16 15:46:42',1,1),(35,117,'加油!你可以變得跟我一樣!',7,'2021-03-16 15:46:43',1,1),(36,118,'讚喔!',7,'2021-03-16 15:46:44',1,1),(37,119,'好想要這個作品喔!',7,'2021-03-16 15:46:45',1,1),(38,120,'作者好帥',7,'2021-03-16 15:46:46',1,1),(39,121,'加油!你可以變得跟我一樣!',8,'2021-03-16 15:46:47',1,1),(40,122,'讚喔!',8,'2021-03-16 15:46:48',1,1),(41,123,'好想要這個作品喔!',8,'2021-03-16 15:46:49',1,1),(42,124,'作者好帥',8,'2021-03-16 15:46:50',1,1),(43,101,'加油!你可以變得跟我一樣!',9,'2021-03-16 15:46:51',1,1),(44,102,'讚喔!',9,'2021-03-16 15:46:52',1,1),(45,103,'好想要這個作品喔!',9,'2021-03-16 15:46:53',1,1),(46,104,'作者好帥',9,'2021-03-16 15:46:54',1,1),(47,105,'加油!你可以變得跟我一樣!',10,'2021-03-16 15:46:55',1,1),(48,106,'讚喔!',10,'2021-03-16 15:46:56',1,1),(49,107,'好想要這個作品喔!',10,'2021-03-16 15:46:57',1,1),(50,108,'作者好帥',10,'2021-03-16 15:46:58',1,1),(1615872023,9,'這作品我超愛!',8,'2021-03-16 13:20:23',1,1),(1615880798,1,'讚喔!',1615874093,'2021-03-16 15:46:38',1,1);
/*!40000 ALTER TABLE `work_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'team3'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-03-18 15:30:13
