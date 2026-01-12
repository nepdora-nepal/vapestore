'use client';

import React from 'react';
import { Coffee, Phone, Mail, Instagram, Facebook, X } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-forest text-cream pt-24 pb-8 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-20 lg:mb-12">
            
            {/* Brand & Contact */}
            <div className="space-y-8 max-w-sm">
                {/* Logo Icon */}
                <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center text-forest mb-6 shadow-lg">
                     <Coffee size={24} fill="currentColor" strokeWidth={0} />
                </div>
                
                <h2 className="text-3xl font-serif font-bold leading-tight">
                    Life Begins<br />
                    After Coffee
                </h2>

                <div className="space-y-3 pt-4">
                    <div className="flex items-center gap-3 text-sm font-medium opacity-90 hover:opacity-100 transition-opacity cursor-pointer group">
                        <Phone size={16} className="group-hover:text-accent-green transition-colors" />
                        <span>+1 (212) 555-0198</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium opacity-90 hover:opacity-100 transition-opacity cursor-pointer group">
                        <Mail size={16} className="group-hover:text-accent-green transition-colors" />
                        <span>hello@bhaus.com</span>
                    </div>
                </div>
            </div>

            {/* Navigation Columns */}
            <div className="flex flex-wrap gap-16 lg:gap-32 w-full lg:w-auto">
                
                {/* Main */}
                <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-6 font-sans">Main</h3>
                    <ul className="space-y-4 font-serif font-bold text-lg">
                        <li><a href="#menu" className="hover:text-accent-green transition-colors">Menu</a></li>
                        <li><a href="#locations" className="hover:text-accent-green transition-colors">Locations</a></li>
                        <li><a href="#about" className="hover:text-accent-green transition-colors">About Us</a></li>
                        <li><a href="#news" className="hover:text-accent-green transition-colors">News</a></li>
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-6 font-sans">Categories</h3>
                    <ul className="space-y-4 font-serif font-bold text-lg">
                        <li><a href="#" className="hover:text-accent-green transition-colors">Coffee</a></li>
                        <li><a href="#" className="hover:text-accent-green transition-colors">Cold Drinks</a></li>
                        <li><a href="#" className="hover:text-accent-green transition-colors">Bakery</a></li>
                    </ul>
                </div>

                 {/* Follow Us */}
                <div>
                    <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-6 font-sans">Follow Us</h3>
                    <div className="flex gap-4">
                        <SocialLink icon={<Instagram size={20} />} href="#" />
                        <SocialLink icon={<Facebook size={20} fill="currentColor" strokeWidth={0} />} href="#" />
                        <SocialLink icon={<X size={20} />} href="#" />
                    </div>
                </div>

            </div>
        </div>

        {/* Big Typography */}
        <div className="w-full text-center relative z-10">
            <h1 className="text-[15.5vw] leading-[0.8] font-serif font-bold text-cream tracking-tight select-none pointer-events-none">
                Brewhaus
            </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest opacity-40 pt-8 font-sans">
            <p>2025 © Brewhaus</p>
            <p className="cursor-pointer hover:opacity-100 transition-opacity">Licenses</p>
        </div>

      </div>
    </footer>
  );
};

const SocialLink = ({ icon, href }: { icon: React.ReactNode, href: string }) => (
    <a 
        href={href} 
        className="w-10 h-10 bg-cream rounded-full flex items-center justify-center text-forest hover:bg-forest-light hover:text-cream hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);