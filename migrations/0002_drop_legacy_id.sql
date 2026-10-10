-- Migration 0002: drop the deprecated users.legacy_id column.
ALTER TABLE users DROP COLUMN legacy_id;
