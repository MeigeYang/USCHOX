'use client'

import { useEffect, useState } from 'react';
import NextImage from 'next/image';


export default function RecruitmentPage() {
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
        className="fixed inset-0 bg-recruitment bg-cover bg-center bg-fixed"
        style={{ opacity, zIndex: -2 }}
      />
      <div className="min-h-[200vh] relative">
      <div className="h-screen flex flex-col items-center justify-start pt-[48vh]">
          <div className="-mt-20">
          <h1 className="text-[90px] text-center leading-none mb-2 text-white tracking-widest" style={{ fontFamily: '"adobe-caslon-pro", serif', fontWeight: 300, fontStyle: 'normal' }}>
              <span className="inline-block mx-4">RECRUITMENT</span>
              
            </h1>
            
           
          </div>
        </div>


       
       
       
        
      </div>
    </>
  );
}