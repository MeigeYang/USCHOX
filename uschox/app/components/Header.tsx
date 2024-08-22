'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'MEMBERS', href: '/members' },
    { name: 'RESOURCES', href: '/resources' },
    { name: 'BROTHERHOOD', href: '/brotherhood' },
    { name: 'RECRUITMENT', href: '/recruitment' },
  ];

  return (
    <header className="py-4 relative">
         <div 
        className="absolute inset-x-0 top-0 bg-gradient-to-b from-[rgba(26,17,12,0.8)] via-[rgba(31,23,18,0.5)] to-transparent pointer-events-none" 
        style={{ height: '80%', zIndex: -1 }}
      ></div>
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="w-auto h-[60px]" />
          </Link>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}

                href={item.href}
                className="text-white px-3 py-2 text-[16px] font-caslon font-light"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu button */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-[25px] font-caslon font-normal"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        
      )}
      
    </header>
  );
};

export default Header;