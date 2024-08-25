import db from '../lib/db.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function testDatabase() {
  try {
    let members;
    if (process.env.VERCEL) {
      // Vercel Postgres
      const result = await db`SELECT * FROM members LIMIT 5`;
      members = result;
    } else {
      // SQLite
      members = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM members LIMIT 5', (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });
    }

    console.log('Successfully connected to the database');
    console.log('First 5 members:');
    console.log(JSON.stringify(members, null, 2));

    // Test a specific member query
    const testSlug = 'sean-zhao'; // Replace with a slug you know exists
    let specificMember;
    if (process.env.VERCEL) {
      const result = await db`SELECT * FROM members WHERE slug = ${testSlug}`;
      specificMember = result[0];
    } else {
      specificMember = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM members WHERE slug = ?', [testSlug], (err, row) => {
          if (err) reject(err);
          else resolve(row);
        });
      });
    }

    console.log(`Member with slug '${testSlug}':`);
    console.log(JSON.stringify(specificMember, null, 2));

  } catch (error) {
    console.error('Error testing database:', error);
  } finally {
    if (!process.env.VERCEL) {
      db.close();
    }
  }
}

testDatabase();