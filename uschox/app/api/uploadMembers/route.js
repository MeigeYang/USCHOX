import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

export async function POST(request) {
  const { name, email, photo_url } = await request.json();

  try {
    if (process.env.VERCEL) {
      // Vercel Postgres
      const result = await db`
        INSERT INTO members (name, email, photo_url)
        VALUES (${name}, ${email}, ${photo_url})
        RETURNING id
      `;
      return NextResponse.json({ id: result[0].id }, { status: 200 });
    } else {
      // SQLite
      return new Promise((resolve) => {
        db.run(
          'INSERT INTO members (name, email, photo_url) VALUES (?, ?, ?)',
          [name, email, photo_url],
          function (err) {
            if (err) {
              return resolve(NextResponse.json({ error: err.message }, { status: 500 }));
            }
            return resolve(NextResponse.json({ id: this.lastID }, { status: 200 }));
          }
        );
      });
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// You can add other HTTP methods here if needed
export async function GET() {
  return NextResponse.json({ message: "GET method not implemented" }, { status: 405 });
}

// Example of handling other methods
export async function PUT() {
  return NextResponse.json({ message: "PUT method not implemented" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ message: "DELETE method not implemented" }, { status: 405 });
}