import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

let db: any = null;

export async function getDB() {
    if (db) return db;
    
    db = await open({
        filename: 'database.sqlite',
        driver: sqlite3.Database
    });

    // Ensure likes table exists
    await db.exec(`
        CREATE TABLE IF NOT EXISTS likes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            creature_id TEXT NOT NULL,
            client_ip TEXT NOT NULL,
            created_at TEXT NOT NULL,
            UNIQUE(creature_id, client_ip)
        )
    `);

    return db;
}

export async function closeDB() {
    if (db) {
        await db.close();
        db = null;
    }
} 