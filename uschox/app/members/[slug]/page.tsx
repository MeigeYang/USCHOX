import Image from 'next/image';
import Link from 'next/link';
import { headers } from 'next/headers';

async function getMember(slug: string) {
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http';
  const host = headers().get('host') || 'localhost:3000';
  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/members/${slug}`, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      const text = await res.text();
      console.error('Response body:', text);
      throw new Error('Failed to fetch member');
    }
    return res.json();
  } catch (error) {
    console.error('Error fetching member:', error);
    throw error;
  }
}

export default async function MemberPage({ params }: { params: { slug: string } })  {
  const member = await getMember(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/members" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Members</Link>
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image
              src={member.img_url || '/default-avatar.png'}
              alt={member.name}
              width={300}
              height={300}
              className="h-48 w-full object-cover md:w-48"
            />
          </div>
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-900">{member.name}</h1>
            <p className="text-gray-600">{member['Chinese Name']}</p>
            <p className="mt-2 text-gray-500">{member.Major} - Class of {member['Graduation Year']}</p>
          </div>
        </div>
        <div className="px-8 py-4 bg-gray-50">
          <h2 className="text-xl font-semibold mb-4">About {member.name.split(' ')[0]}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InfoItem label="Hometown" value={member.Hometown} />
            <InfoItem label="Email" value={member.Email} />
            <InfoItem label="Instagram" value={member.Instagram} />
            <InfoItem label="Favorite Food" value={member['Favorite Food']} />
            <InfoItem label="Favorite Song(s)" value={member['Favorite Song(s)']} />
            <InfoItem label="MBTI" value={member.MBTI} />
            <InfoItem label="Class" value={member.Class} />
          </div>
          <div className="mt-4">
            <h3 className="font-semibold">Fun Fact</h3>
            <p>{member['Fun Fact']}</p>
          </div>
          {member.intro && (
            <div className="mt-4">
              <h3 className="font-semibold">Introduction</h3>
              <p>{member.intro}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function InfoItem({ label, value }) {
  if (!value) return null;
  return (
    <div>
      <span className="font-semibold">{label}:</span> {value}
    </div>
  );
}