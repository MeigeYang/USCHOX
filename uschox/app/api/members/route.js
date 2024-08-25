import { NextResponse } from 'next/server';
import db from '../../../lib/db';

export async function GET() {
  console.log('API route called');

  try {
    console.log('Checking database connection');
    if (process.env.VERCEL) {
      console.log('Using Vercel Postgres');
      await db`SELECT 1+1 AS result`;
    } else {
      console.log('Using SQLite');
      await new Promise((resolve, reject) => {
        db.get('SELECT 1+1 AS result', (err, row) => {
          if (err) reject(err);
          else resolve(row);
        });
      });
    }
    console.log('Database connection successful');

    let members;
    console.log('Fetching members');
    if (process.env.VERCEL) {
      const result = await db`SELECT * FROM members ORDER BY name`;
      members = result.rows;
    } else {
      members = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM members ORDER BY name', (err, rows) => {
          if (err) reject(err);
          else resolve(rows);
        });
      });
    }
    console.log('Members fetched:', members);

    return NextResponse.json(members);
  } catch (error) {
    console.error('Detailed error in API route:', error);
    return NextResponse.json({ error: 'Failed to fetch members', details: error.toString() }, { status: 500 });
  }
}