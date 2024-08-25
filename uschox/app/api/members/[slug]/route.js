import { NextResponse } from 'next/server';
import db from '../../../../lib/db';

export async function GET(request, { params }) {
  const slug = params.slug;

  try {
    let member;
    if (process.env.VERCEL) {
      const result = await db`SELECT * FROM members WHERE slug = ${slug}`;
      member = result[0];
    } else {
      member = await new Promise((resolve, reject) => {
        db.get('SELECT * FROM members WHERE slug = ?', [slug], (err, row) => {
          if (err) reject(err);
          else resolve(row);
        });
      });
    }

    if (member) {
      return NextResponse.json(member);
    } else {
      return new NextResponse(JSON.stringify({ error: 'Member not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  } catch (error) {
    console.error('Error fetching member:', error);
    return new NextResponse(JSON.stringify({ error: 'Failed to fetch member' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}