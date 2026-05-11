'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
            TechCore
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#services" className="text-gray-700 hover:text-blue-600 transition">
              Services
            </Link>
            <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">
              Features
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
          </div>

          <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="#services" className="block text-gray-700 hover:text-blue-600">
              Services
            </Link>
            <Link href="#features" className="block text-gray-700 hover:text-blue-600">
              Features
            </Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
