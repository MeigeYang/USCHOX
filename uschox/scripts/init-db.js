import db from '../lib/db.js';
import fs from 'fs/promises';
import path from 'path';

async function initDb() {
  const createTable = `
    CREATE TABLE IF NOT EXISTS members (
      id INTEGER PRIMARY KEY ${process.env.VERCEL ? 'GENERATED ALWAYS AS IDENTITY' : 'AUTOINCREMENT'},
      name TEXT NOT NULL,
      "Chinese Name" TEXT,
      Gender TEXT,
      slug TEXT UNIQUE NOT NULL,
      "Date of Birth" TEXT,
      Email TEXT,
      Instagram TEXT,
      Hometown TEXT,
      "Graduation Year" INTEGER,
      Major TEXT,
      MBTI TEXT,
      "Favorite Food" TEXT,
      "Favorite Song(s)" TEXT,
      "Fun Fact" TEXT,
      Class TEXT,
      img_url TEXT,
      linkedin TEXT,
      intro TEXT
    )
  `;

  if (process.env.VERCEL) {
    await db.query(createTable);
  } else {
    await new Promise((resolve, reject) => {
      db.run(createTable, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  // Read JSON data
  const jsonData = await fs.readFile(path.join(process.cwd(), 'data', 'members-database.json'), 'utf8');
  const { members } = JSON.parse(jsonData);

  // Insert data
  for (const [slug, member] of Object.entries(members)) {
    const columns = Object.keys(member).map(key => `"${key}"`).join(', ');
    const placeholders = Object.keys(member).map(() => '?').join(', ');
    const values = Object.values(member);

    if (process.env.VERCEL) {
      await db.query(`
        INSERT INTO members (${columns})
        VALUES (${placeholders})
        ON CONFLICT (slug) DO NOTHING
      `, values);
    } else {
      await new Promise((resolve, reject) => {
        db.run(`
          INSERT OR IGNORE INTO members (${columns})
          VALUES (${placeholders})
        `, values, (err) => {
          if (err) reject(err);
          else resolve();
        });
      });
    }
  }

  console.log('Database initialized with member data');
}

initDb().catch(console.error);