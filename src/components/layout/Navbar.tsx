'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isMenuPage = pathname === '/menu';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // On the menu page, we might want the navbar to always be visible or styled differently?
  // For now, keeping the consistent behavior but allowing it to overlay properly.

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-[100] flex justify-center w-full px-4 pointer-events-none">
        <nav 
            className={`
                px-8 py-4 rounded-full flex items-center justify-between md:justify-center gap-4 md:gap-16 
                w-full md:w-auto max-w-4xl transition-all duration-500 ease-in-out pointer-events-auto
                ${isScrolled || isMenuPage
                    ? 'bg-forest/90 backdrop-blur-md shadow-2xl border border-white/10' 
                    : 'bg-transparent shadow-none border border-transparent'}
                text-cream
            `}
        >
            
            {/* Desktop Left Links */}
            <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
                <Link href="/menu" className={`hover:text-white transition-colors ${pathname === '/menu' ? 'text-white font-bold' : ''}`}>Menu</Link>
                <Link href="/#locations" className="hover:text-white transition-colors">Locations</Link>
            </div>

            {/* Center Logo */}
            <Link href="/" className={`w-12 h-12 rounded-full flex items-center justify-center text-forest shrink-0 shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer ${isScrolled || isMenuPage ? 'bg-cream' : 'bg-cream/90 backdrop-blur-sm'}`}>
                <Coffee size={24} fill="currentColor" strokeWidth={0} />
            </Link>

            {/* Desktop Right Links */}
             <div className="hidden md:flex items-center gap-10 font-medium text-sm tracking-wide">
                <Link href="/#about" className="hover:text-white transition-colors">About Us</Link>
                <Link href="/#news" className="hover:text-white transition-colors">News</Link>
            </div>

             {/* Mobile Toggle */}
             <button
                className="md:hidden text-cream ml-auto"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
      </div>

       {/* Mobile Menu Dropdown */}
       {isMobileMenuOpen && (
            <div className="fixed inset-0 z-[110] bg-forest flex flex-col items-center justify-center gap-8 text-cream animate-in fade-in zoom-in duration-200">
                <button className="absolute top-8 right-8 p-2 bg-cream/10 rounded-full hover:bg-cream/20 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} />
                </button>
                <div className="flex flex-col items-center gap-8 text-2xl font-serif">
                    <Link href="/menu" className="hover:text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
                    <Link href="/#locations" className="hover:text-white/70" onClick={() => setIsMobileMenuOpen(false)}>Locations</Link>
                    <Link href="/#about" className="hover:text-white/70" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                    <Link href="/#news" className="hover:text-white/70" onClick={() => setIsMobileMenuOpen(false)}>News</Link>
                </div>
            </div>
        )}
    </>
  );
};