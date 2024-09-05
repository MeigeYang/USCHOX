import { sql } from '@vercel/postgres';
import sqlite3 from 'sqlite3';

let db;

//initialize the databsase
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

export async function getMemberSlugs() {
  if (process.env.VERCEL) {
    const result = await db`SELECT slug FROM members ORDER BY name`;
    return result.rows.map(row => row.slug);
  } else {
    return new Promise((resolve, reject) => {
      db.all('SELECT slug FROM members ORDER BY name', (err, rows) => {
        if (err) reject(err);
        else resolve(rows.map(row => row.slug));
      });
    });
  }
}

// ... existing imports and setup ...

async function getMembers() {
  const classOrder = ['founding', 'Alpha', 'Beta', 'Gamma', 'Delta'];
  
  if (process.env.VERCEL) {
    const result = await db`
      SELECT *, 
      CASE 
        WHEN class = 'founding' THEN 0
        WHEN class = 'Alpha' THEN 1
        WHEN class = 'Beta' THEN 2
        WHEN class = 'Gamma' THEN 3
        WHEN class = 'Delta' THEN 4
        ELSE 5
      END as class_order
      FROM members 
      ORDER BY class_order, name
    `;
    return result.rows;
  } else {
    return new Promise((resolve, reject) => {
      db.all(`
        SELECT *, 
        CASE 
          WHEN class = 'founding' THEN 0
          WHEN class = 'Alpha' THEN 1
          WHEN class = 'Beta' THEN 2
          WHEN class = 'Gamma' THEN 3
          WHEN class = 'Delta' THEN 4
          ELSE 5
        END as class_order
        FROM members 
        ORDER BY class_order, name
      `, (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  }
}



export default db;