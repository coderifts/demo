// Active-user report.
// NOTE: this still SELECTs legacy_id, which migration 0002 drops — a breaking change.
export function activeUserRows(db) {
  return db.query("SELECT id, email, legacy_id FROM users WHERE active = true");
}
