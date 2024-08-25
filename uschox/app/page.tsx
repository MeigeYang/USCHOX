'use client'

import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import HomeContent from './components/home-content/HomeContent'

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [hasScrolledPastInitialView, setHasScrolledPastInitialView] = useState(false);

  useEffect(() => {
    // Scroll to top on page load/refresh
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setHasScrolledPastInitialView(currentScrollY > window.innerHeight * 0.5);
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
      <div className="h-screen flex flex-col items-center justify-start pt-[44vh]">
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

       {/* Home Content */}
        {hasScrolledPastInitialView && <HomeContent />}

       
       
       
        
      </div>
    </>
  );
}