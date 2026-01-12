import React from 'react';
import Link from 'next/link';
import { Coffee } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="bg-forest text-cream pt-40  overflow-hidden relative min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-4 text-center z-10 relative">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 leading-[0.9]">
          Life Begins<br />
          <span className="text-white">After Coffee</span>
        </h1>
        <p className="text-lg md:text-xl text-cream/80 max-w-xl mx-auto mb-10 font-light">
          Because great coffee is the start of something even greater.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 relative z-20">
          <Link href="/menu" className="bg-cream text-forest px-8 py-3 rounded-full font-medium hover:bg-white transition-colors">
            Explore Menu
          </Link>
          <Link href="#locations" className="border border-cream/30 text-cream px-8 py-3 rounded-full font-medium hover:bg-cream/10 transition-colors">
            Our Locations
          </Link>
        </div>

        {/* CSS Cups Visualization */}
        <div className="relative w-full max-w-6xl mx-auto flex items-end justify-center gap-4 md:gap-16 h-[320px] md:h-[450px] perspective-1000">
             
             {/* Left Cup - Black Coffee */}
            <div className="relative z-10 transform translate-y-6 md:translate-y-8 hover:z-30 transition-all duration-300 group">
                <div className="transform -rotate-6 md:-rotate-12 origin-bottom-right group-hover:-translate-y-4 transition-transform duration-500">
                    <Cup label="Black Coffee" />
                </div>
            </div>

             {/* Center Cup - Espresso */}
             <div className="relative z-20 pb-4 md:pb-8 hover:z-30 transition-all duration-300 group">
                <div className="transform scale-105 md:scale-110 group-hover:-translate-y-4 transition-transform duration-500">
                    <Cup label="Espresso" isCenter />
                </div>
            </div>

            {/* Right Cup - Cold Brew */}
            <div className="relative z-10 transform translate-y-6 md:translate-y-8 hover:z-30 transition-all duration-300 group">
                <div className="transform rotate-6 md:rotate-12 origin-bottom-left group-hover:-translate-y-4 transition-transform duration-500">
                    <Cup label="Cold Brew" />
                </div>
            </div>

        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-forest to-transparent opacity-50 z-20 pointer-events-none"></div>
      </div>
      
      {/* Background grain or texture simulation */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`}}></div>
    </section>
  );
};

const Cup = ({ label = "" }: { label: string, isCenter?: boolean }) => {
    return (
        <div className={`relative w-36 h-52 md:w-56 md:h-[21rem] shrink-0`}>
            {/* Lid Top (Perspective) */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[115%] h-12 bg-[#1a2f21] rounded-[50%] z-20 shadow-2xl border-t border-white/5">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[85%] rounded-[50%] border-t border-white/10 bg-[#233d2c]">
                     {/* Sip hole details */}
                     <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-4 h-2 bg-black/30 rounded-full"></div>
                </div>
            </div>
            {/* Lid Rim Side */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[112%] h-8 bg-[#233d2c] rounded-[4px] z-10 shadow-lg"></div>

            {/* Cup Body */}
            <div 
                className="absolute inset-0 bg-[#f5f2e8] overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]"
                style={{
                    clipPath: 'polygon(0 0, 100% 0, 82% 100%, 18% 100%)',
                    background: 'linear-gradient(90deg, #d6d3c9 0%, #f5f2e8 25%, #f5f2e8 50%, #f5f2e8 75%, #d6d3c9 100%)'
                }}
            >
                {/* Ribs Texture */}
                <div className="absolute inset-0 opacity-40 mix-blend-multiply" 
                    style={{
                        backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 15px, rgba(0,0,0,0.05) 15px, rgba(0,0,0,0.05) 16px)'
                    }}
                ></div>
                
                {/* 3D Roundness Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>

                {/* Vertical Label Strip */}
                <div className="absolute top-0 bottom-[15%] left-1/2 -translate-x-1/2 w-12 md:w-16 bg-[#233d2c] shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex flex-col items-center justify-end pb-4">
                    
                    {/* Text Container */}
                    <div className="flex-1 flex items-center justify-center pb-2">
                        <span 
                            className="text-[#f5f2e8] font-serif font-bold tracking-widest text-[10px] md:text-sm uppercase whitespace-nowrap opacity-90" 
                            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                        >
                            {label}
                        </span>
                    </div>

                    {/* Logo Icon */}
                    <div className="w-8 h-8 rounded-full border border-[#f5f2e8]/30 flex items-center justify-center mb-2 bg-[#233d2c]">
                        <Coffee size={14} className="text-[#f5f2e8]" strokeWidth={2.5} />
                    </div>
                </div>
            </div>
        </div>
    )
}