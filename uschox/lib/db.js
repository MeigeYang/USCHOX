import { sql } from '@vercel/postgres';
import sqlite3 from 'sqlite3';

let db;

if (process.env.VERCEL) {
  console.log('Initializing Vercel Postgres connection');
  db = sql;
} else {
  console.log('Initializing SQLite connection');
  db = new sqlite3.Database('./mydb.sqlite', (err) => {
    if (err) {
      console.error('Error opening SQLite database:', err);
    } else {
      console.log('SQLite database opened successfully');
    }
  });
}

export default db;