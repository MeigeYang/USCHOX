'use client'

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

async function getMembers() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    try {
      const res = await fetch(`${apiUrl}/api/members`, { cache: 'no-store' });
      if (!res.ok) {
        console.error(`API responded with status ${res.status}: ${res.statusText}`);
        const text = await res.text();
        console.error('Response body:', text);
        throw new Error(`Failed to fetch members: ${res.status} ${res.statusText}`);
      }
      return res.json();
    } catch (error) {
      console.error('Error fetching members:', error);
      throw error;
    }
  }
export default function MembersPage() {
  const [scrollY, setScrollY] = useState(0);
  const [members, setMembers] = useState([]);
  
  const opacity = Math.max(0, Math.min(1, 1 - scrollY / 500));
 

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    
    getMembers().then(setMembers).catch(console.error);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
     <div 
        className="fixed inset-0 bg-members bg-cover bg-center bg-fixed"
        style={{ opacity, zIndex: -2 }}
      />
      <div className="min-h-[200vh] relative">
        <div className="h-screen flex flex-col items-center justify-start pt-[55vh]">
          <div className="-mt-20">
            <h1 className="text-[85px] text-center leading-none mb-2 text-white tracking-widest" style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
              <span className="inline-block mx-1">MEET OUR MEMBERS</span>
            </h1>
          </div>
        </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Members</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {members.map((member) => (
          <Link href={`/members/${member.slug}`} key={member.slug} className="block">
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <Image
                src={member.img_url || '/default-avatar.png'}
                alt={member.name}
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center">{member.name}</h2>
              <p className="text-center text-gray-600">{member['Chinese Name']}</p>
              <p className="text-center text-gray-500">{member.Major}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </div>

    </>
  );
}