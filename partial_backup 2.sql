-- MySQL dump 10.13  Distrib 9.3.0, for macos15.2 (arm64)
--
-- Host: localhost    Database: herethon_db
-- ------------------------------------------------------
-- Server version	8.2.0

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
-- Table structure for table `policyList_policy`
--

DROP TABLE IF EXISTS `policyList_policy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `policyList_policy` (
  `policy_id` int NOT NULL AUTO_INCREMENT,
  `policy_name` varchar(100) NOT NULL,
  `department` varchar(100) DEFAULT NULL,
  `age_group` varchar(20) NOT NULL,
  `like_count` int NOT NULL,
  `scrap_count` int NOT NULL,
  `review_count` int NOT NULL,
  PRIMARY KEY (`policy_id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `policyList_policy`
--

LOCK TABLES `policyList_policy` WRITE;
/*!40000 ALTER TABLE `policyList_policy` DISABLE KEYS */;
INSERT INTO `policyList_policy` VALUES (1,'청년 월세 지원','국토부','대학생·청년',0,0,0),(2,'청소년 교통비 지원','교육청','청소년',0,0,0),(3,'육아 지원금','보건복지부','영유아',0,0,0),(4,'중장년 재취업 지원','고용노동부','중장년',0,0,0),(5,'노인 치매 치료 지원','보건복지부','노인',0,0,0),(6,'전 국민 건강검진','보건복지부','전연령',0,0,0),(7,'청년 창업 지원금','중소벤처기업부','대학생·청년',0,0,0),(8,'무상 급식 지원','교육부','청소년',0,0,0),(9,'신혼부부 주택자금','국토부','대학생·청년',0,0,0),(10,'어린이 예방접종','질병관리청','영유아',0,0,0),(11,'디지털 시민학교','과학기술정보통신부','전연령',112,40,0),(12,'AI 면접 체험존 설치','고용노동부','전연령',87,22,0),(13,'유아 스마트 장난감 대여 서비스','보건복지부','영유아',56,15,0),(14,'아기 식단 분석 AI 앱 지원','질병관리청','영유아',42,10,0),(15,'메타버스 진로 체험관 운영','교육부','청소년',73,19,0),(16,'청소년 코딩 챌린지','과학기술정보통신부','청소년',91,24,0),(17,'학생 정신건강 1:1 챗봇 상담','교육부','청소년',65,18,0),(18,'청년 창업 하우스 지원','중소벤처기업부','대학생·청년',99,32,0),(19,'청년 디지털 포트폴리오 제작 지원','고용노동부','대학생·청년',78,21,0),(20,'블록체인 기반 자격증 통합앱','행정안전부','대학생·청년',83,29,0),(21,'중장년 커리어 전환 아카데미','고용노동부','중장년',68,17,0),(22,'디지털 격차 해소 교육 지원','과학기술정보통신부','중장년',59,14,0),(23,'온라인 이모티콘 제작 교실','문화체육관광부','중장년',45,11,0),(24,'노인 디지털 생활 보조기기 렌탈','보건복지부','노인',53,13,0),(25,'치매 예방 VR 체험실 운영','보건복지부','노인',66,16,0),(26,'노년층 1인방송 크리에이터 지원','과학기술정보통신부','노인',70,20,0),(27,'친환경 챌린지 리워드 플랫폼','환경부','전연령',94,30,0),(28,'디지털 우체통 – 세대 간 편지 교환 서비스','행정안전부','전연령',88,26,0),(29,'국민 공모 정책제안 해커톤','국무총리실','전연령',100,33,0);
/*!40000 ALTER TABLE `policyList_policy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_review`
--

DROP TABLE IF EXISTS `review_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_review` (
  `review_id` int NOT NULL AUTO_INCREMENT,
  `content` longtext NOT NULL,
  `created_at` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  PRIMARY KEY (`review_id`),
  KEY `review_review_user_id_ff798828_fk_auth_user_id` (`user_id`),
  CONSTRAINT `review_review_user_id_ff798828_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_review`
--

LOCK TABLES `review_review` WRITE;
/*!40000 ALTER TABLE `review_review` DISABLE KEYS */;
INSERT INTO `review_review` VALUES (1,'서비스도 친절하고 혜택도 많아서 정말 만족했어요.','2025-07-08 13:14:16.296755',1,'정말 만족스러웠어요!'),(2,'상세한 설명 덕분에 어려움 없이 신청할 수 있었어요.','2025-07-08 13:14:16.300956',1,'친절한 안내 감사합니다'),(3,'필요한 도움을 잘 받을 수 있어 감사했습니다.','2025-07-08 13:14:16.302083',1,'복지 혜택 잘 받았습니다'),(4,'처음엔 반신반의했지만 이용해보니 정말 좋았어요.','2025-07-08 13:14:16.302853',1,'기대 이상이었어요'),(5,'문서 준비도 간단하고 접근성이 좋아요.','2025-07-08 13:14:16.303661',1,'절차가 간단해서 좋았어요'),(6,'진행 속도가 빨라서 스트레스가 없었어요.','2025-07-08 13:14:16.304346',1,'생각보다 빨리 처리됐어요'),(7,'전화 상담도 잘 되어 마음이 놓였어요.','2025-07-08 13:14:16.305019',1,'처음엔 걱정했는데 잘 끝났어요'),(8,'정말 필요한 사람들에게 더 많이 알려졌으면 좋겠어요.','2025-07-08 13:14:16.305771',1,'주변에도 추천하고 싶어요'),(10,'후기가 좋았아요!','2025-07-09 00:54:44.071153',1,'후기'),(11,'후기후기','2025-07-10 08:31:05.947737',1,'안녕하세요! 후기 써봅니다');
/*!40000 ALTER TABLE `review_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review_like`
--

DROP TABLE IF EXISTS `review_like`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review_like` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `created_at` datetime(6) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`like_id`),
  KEY `review_like_user_id_03a799be_fk_login_user_user_id` (`user_id`),
  CONSTRAINT `review_like_user_id_03a799be_fk_login_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `login_user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review_like`
--

LOCK TABLES `review_like` WRITE;
/*!40000 ALTER TABLE `review_like` DISABLE KEYS */;
/*!40000 ALTER TABLE `review_like` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-10 23:42:00
