'use client'

import { useEffect, useState } from 'react';
import NextImage from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, Math.min(1, 1 - scrollY / 500));

  return (
    <>
      <div 
        className="fixed inset-0 bg-founders bg-cover bg-center bg-fixed"
        style={{ opacity, zIndex: -2 }}
      />
      <div className="min-h-[200vh] relative">
      <div className="h-screen flex flex-col items-center justify-start pt-[44vh]"> {/* Adjusted to 40vh */}
          <div className="-mt-20">
            <h1 className="text-[90px] text-center leading-none mb-2 text-white tracking-widest" style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
              <span className="inline-block mx-4">ETA</span>
              <span className="inline-block mx-4">OMEGA</span>
              <span className="inline-block mx-4">CHI</span>
            </h1>
            <p className="text-[22px] text-center text-white tracking-wider"
               style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
              First and the only East Asian professional fraternity
            </p>
          </div>
        </div>

       {/* Who We Are Section */}
       <div className="min-h-screen flex flex-col items-center justify-center p-8">
          <h2 className="text-[60px] mb-8 text-[#1A110C] pt-[30vh]"
              style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
            Who We Are
          </h2>
          <div className="max-w-4xl w-full">
            <NextImage
              src="/whower.png" // Replace with your actual image path
              alt="Who We Are"
              width={1200}
              height={800}
              layout="responsive"
              className="mb-8"
            />
            <p className="text-[18px] text-[#1A110C] text-center"
               style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 400, fontStyle: 'normal' }}>
              Here you can add a description about who you are. This text can be as long as you need it to be,
              explaining the mission, values, and history of Eta Omega Chi.
            </p>
          </div>
        </div>
       
        
      </div>
    </>
  );
}