'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 border-b border-white/10 transition-all duration-300 ${
      scrolled ? 'bg-bg-dark/[0.98] shadow-[0_4px_20px_rgba(0,0,0,0.3)]' : 'bg-bg-dark/90 backdrop-blur-[20px]'
    }`}>
      <div className="max-w-[1200px] mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-extrabold text-primary flex items-center gap-2">
          <i className="fas fa-cloud text-[1.8rem]"></i>
          Cloudswag Technologies
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link href="#services" className="text-text-secondary hover:text-primary transition-colors font-medium relative group">
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="#features" className="text-text-secondary hover:text-primary transition-colors font-medium relative group">
            Features
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/case-studies" className="text-text-secondary hover:text-primary transition-colors font-medium relative group">
            Case Studies
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-text-secondary hover:text-primary transition-colors font-medium relative group">
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors font-medium relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        <Link href="/contact" className="hidden md:block gradient-primary text-white px-6 py-2.5 rounded-full font-semibold hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)] transition-all duration-300">
          Get Started
        </Link>

        <button 
          className="md:hidden text-text-primary text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-bg-dark border-b border-white/10 px-8 py-4 flex flex-col gap-4">
          <Link href="#services" className="text-text-secondary hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="#features" className="text-text-secondary hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Features</Link>
          <Link href="/case-studies" className="text-text-secondary hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Case Studies</Link>
          <Link href="/about" className="text-text-secondary hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
