-- Migration 0005: Ensure siteSettings table is correct
-- Creates the table if missing, adds missing columns/indexes idempotently.

-- Ensure the table exists with the full correct structure
CREATE TABLE IF NOT EXISTS `siteSettings` (
  `id`        INT          NOT NULL AUTO_INCREMENT,
  `key`       VARCHAR(100) NOT NULL,
  `value`     TEXT,
  `updatedAt` TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `siteSettings_key_unique` (`key`)
);

-- Add updatedAt column if it was somehow created without it
ALTER TABLE `siteSettings`
  ADD COLUMN IF NOT EXISTS `updatedAt` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- Add the unique key on `key` column if it doesn't already exist
-- Uses a conditional approach: DROP IF EXISTS + ADD to ensure idempotency
-- (Safe because ON DUPLICATE KEY UPDATE requires this unique index)
ALTER TABLE `siteSettings`
  ADD UNIQUE IF NOT EXISTS `siteSettings_key_unique` (`key`);
