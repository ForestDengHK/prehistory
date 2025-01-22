CREATE TABLE IF NOT EXISTS likes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    creature_id TEXT NOT NULL,
    client_ip TEXT NOT NULL,
    created_at TEXT NOT NULL,
    UNIQUE(creature_id, client_ip)
); 