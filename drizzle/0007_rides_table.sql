-- GPS Ride Tracking table
CREATE TABLE IF NOT EXISTS `rides` (
  `id` int AUTO_INCREMENT PRIMARY KEY,
  `userId` int NOT NULL,
  `horseId` int,
  `name` varchar(200) NOT NULL,
  `startTime` timestamp NOT NULL,
  `endTime` timestamp NULL,
  `duration` int NOT NULL,
  `distance` int NOT NULL,
  `avgSpeed` int NOT NULL DEFAULT 0,
  `maxSpeed` int NOT NULL DEFAULT 0,
  `routeData` text,
  `notes` text,
  `createdAt` timestamp NOT NULL DEFAULT (now())
);
