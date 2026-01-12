"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MENU_ITEMS } from '@/components/constants';
import { Coffee, ShoppingBag } from 'lucide-react';
import { Marquee } from './Marquee';

export const Menu: React.FC = () => {
    const [activeSection, setActiveSection] = useState('coffee');

    // Scroll to section function
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-100px 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = ['coffee', 'cold-drinks', 'bakery'];
        
        sections.forEach(id => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

  return (
    <div className="bg-cream min-h-screen pt-[88px] md:pt-0"> 


        {/* Menu Hero */}   
        <section className="bg-forest text-cream pt-32 pb-24 text-center relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                <h1 className="text-6xl md:text-8xl font-serif mb-4">Menu</h1>
                <p className="text-cream/70 max-w-lg mx-auto mb-10">
                    Local go-to&apos;s everyone loves — handpicked and always fresh.
                </p>

                <div className="flex gap-4 justify-center">
                    <button className="bg-cream text-forest px-8 py-3 rounded-full text-sm font-bold hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-lg">
                        Our Locations
                    </button>
                    <button className="border border-cream/30 text-cream px-8 py-3 rounded-full text-sm font-bold hover:bg-cream/10 transition-all hover:scale-105 active:scale-95">
                        About Us
                    </button>
                </div>
            </div>
        </section>

        {/* Marquee Section */}
        <section>
            <Marquee />
        </section>

        {/* Menu Content */}
        <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row gap-8 lg:gap-16">
            
            {/* Sidebar Navigation */}
            <aside className="hidden md:block w-48 shrink-0">
                <div className="sticky top-32 flex flex-col gap-6">
                    <button 
                        onClick={() => scrollToSection('coffee')} 
                        className={`group flex items-center gap-4 transition-all ${activeSection === 'coffee' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-4 ring-forest/5 ${activeSection === 'coffee' ? 'bg-forest text-cream' : 'bg-forest/90 text-cream'}`}>
                            <Coffee size={24} strokeWidth={1.5} />
                        </div>
                        <span className={`font-serif font-bold text-forest text-lg ${activeSection === 'coffee' ? 'translate-x-1' : ''} transition-transform`}>Coffee</span>
                    </button>

                    <button 
                        onClick={() => scrollToSection('cold-drinks')} 
                        className={`group flex items-center gap-4 transition-all ${activeSection === 'cold-drinks' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-4 ring-forest/5 ${activeSection === 'cold-drinks' ? 'bg-forest text-cream' : 'bg-forest/90 text-cream'}`}>
                             <div className={`w-6 h-6 rounded-full flex items-center justify-center ${activeSection === 'cold-drinks' ? 'bg-cream' : 'bg-cream/90'}`}>
                                 <Coffee size={14} className="text-forest" />
                            </div>
                        </div>
                        <span className={`font-serif font-bold text-forest text-lg ${activeSection === 'cold-drinks' ? 'translate-x-1' : ''} transition-transform`}>Cold Drinks</span>
                    </button>

                    <button 
                        onClick={() => scrollToSection('bakery')} 
                        className={`group flex items-center gap-4 transition-all ${activeSection === 'bakery' ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                    >
                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ring-4 ring-forest/5 ${activeSection === 'bakery' ? 'bg-forest text-cream' : 'bg-forest/90 text-cream'}`}>
                            <ShoppingBag size={24} strokeWidth={1.5} />
                        </div>
                        <span className={`font-serif font-bold text-forest text-lg ${activeSection === 'bakery' ? 'translate-x-1' : ''} transition-transform`}>Bakery</span>
                    </button>
                </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1 space-y-32">
                
                {/* Coffee Section */}
                <section id="coffee" className="scroll-mt-32">
                    <div className="flex justify-between items-center mb-10 border-t border-forest/10 pt-10">
                        <h2 className="text-5xl font-serif text-forest font-bold">Coffee</h2>
                        <span className="text-sm font-medium text-forest/40 uppercase tracking-widest font-sans">9 Items</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {MENU_ITEMS.filter(item => item.category === 'coffee').map(item => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>

                {/* Cold Drinks Section */}
                <section id="cold-drinks" className="scroll-mt-32">
                    <div className="flex justify-between items-center mb-10 border-t border-forest/10 pt-10">
                        <h2 className="text-5xl font-serif text-forest font-bold">Cold Drinks</h2>
                         <span className="text-sm font-medium text-forest/40 uppercase tracking-widest font-sans">6 Items</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {MENU_ITEMS.filter(item => item.category === 'cold-drinks').map(item => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>

                {/* Bakery Section */}
                <section id="bakery" className="scroll-mt-32">
                    <div className="flex justify-between items-center mb-10 border-t border-forest/10 pt-10">
                        <h2 className="text-5xl font-serif text-forest font-bold">Bakery</h2>
                         <span className="text-sm font-medium text-forest/40 uppercase tracking-widest font-sans">5 Items</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {MENU_ITEMS.filter(item => item.category === 'bakery').map(item => (
                            <MenuCard key={item.id} item={item} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    </div>
  );
};

const MenuCard: React.FC<{ item: typeof MENU_ITEMS[0] }> = ({ item }) => {
    return (
        <div className="group cursor-pointer">
            <div className="bg-[#1a2f21] rounded-[2.5rem] aspect-square relative flex items-center justify-center overflow-hidden transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-[0_20px_40px_rgba(26,47,33,0.25)]">
                {/* Image / Content Container */}
                <div className="w-full h-full relative flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                    {item.image ? (
                        <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                            <Image 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover" 
                                fill
                                sizes="(max-width: 768px) 100vw, 300px"
                            />
                            {/* Subtle Overlay */}
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>
                    ) : (
                        <div className="p-8">
                            {item.category === 'coffee' && <div className="transform scale-110"><HotCupCSS /></div>}
                            {item.category === 'cold-drinks' && <div className="transform scale-110"><ColdCupCSS /></div>}
                            {item.category === 'bakery' && <ShoppingBag className="w-20 h-20 text-cream/10" strokeWidth={1} />}
                        </div>
                    )}
                </div>

                {/* New Badge */}
                {item.isNew && (
                    <div className="absolute top-6 left-6 z-30 bg-cream text-forest text-[10px] font-bold uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md border border-forest/10">
                        New
                    </div>
                )}
            </div>

            <div className="flex flex-col items-center mt-6 text-center px-1">
                <h3 className="text-xl font-serif font-bold text-forest leading-tight transition-colors group-hover:text-forest-light">{item.name}</h3>
                <span className="text-lg font-medium text-forest/70 font-serif mt-1">${item.price.toFixed(2)}</span>
            </div>
        </div>
    )
}

/* Reusing CSS Cup components but adapting for the menu card context */
const HotCupCSS = () => (
    <div className="relative w-36 h-48">
        {/* Lid Top */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[112%] h-8 bg-[#1a2f21] rounded-[50%] z-20 shadow-xl border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[85%] rounded-[50%] bg-[#233d2c] border-t border-white/10"></div>
        </div>
        {/* Lid Rim */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[110%] h-6 bg-[#233d2c] rounded-[4px] z-10 shadow-md"></div>
        
        {/* Cup Body */}
        <div 
            className="absolute inset-0 bg-cream overflow-hidden shadow-2xl"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 82% 100%, 18% 100%)',
                background: 'linear-gradient(90deg, #e6e2d6 0%, #f5f2e8 20%, #f5f2e8 50%, #f5f2e8 80%, #e6e2d6 100%)'
            }}
        >
             <div className="absolute inset-0 opacity-40 mix-blend-multiply" 
                style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(0,0,0,0.05) 12px, rgba(0,0,0,0.05) 13px)' }}>
            </div>
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>

             <div className="absolute top-0 bottom-[15%] left-1/2 -translate-x-1/2 w-12 bg-[#233d2c] shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex flex-col items-center justify-end pb-4">
                 <div className="w-8 h-8 rounded-full border border-cream/20 flex items-center justify-center bg-[#233d2c]">
                     <Coffee size={14} className="text-cream" strokeWidth={2.5} />
                 </div>
             </div>
        </div>
    </div>
);

const ColdCupCSS = () => (
    <div className="relative w-36 h-52">
        {/* Straw */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-3.5 h-24 bg-cream rounded-t-sm shadow-sm z-0"></div>
        {/* Lid */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[110%] h-6 bg-cream/90 backdrop-blur-sm rounded-md z-20 shadow-sm border-b border-white/20"></div>

        {/* Cup Body */}
        <div 
            className="absolute inset-0 bg-cream"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                background: 'linear-gradient(90deg, #e6e2d6 0%, #f5f2e8 25%, #f5f2e8 50%, #f5f2e8 75%, #e6e2d6 100%)'
            }}
        >
             <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>

            <div className="absolute top-[25%] left-0 right-0 h-24 bg-[#1a2f21] flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
                 <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center mb-1.5 shadow-md">
                     <Coffee size={16} className="text-forest" strokeWidth={2.5} />
                 </div>
                 <div className="text-center w-full px-1">
                    <span className="text-[6px] text-cream/50 uppercase tracking-[0.3em] block font-bold">Cold Brew</span>
                 </div>
            </div>
        </div>
    </div>
);