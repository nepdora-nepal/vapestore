import React from 'react';
import { Marquee } from './Marquee';
import { Sparkles, Link } from 'lucide-react';

export const OrderOnline: React.FC = () => {
  return (
    <section className="bg-cream pt-32 pb-0">
        <div className="container mx-auto px-4 text-center mb-32">
            {/* Top Icon: Clapping Hands / Celebration style */}
            <div className="flex justify-center mb-6 text-forest opacity-80">
                 <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                    {/* Adding 'motion' lines to simulate the clap/celebration in the image */}
                    <path d="M8 2v2" />
                    <path d="M12 2v2" />
                    <path d="M16 4l-1 2" />
                 </svg>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-forest mb-6 font-bold tracking-tight">Order Online</h2>
            <p className="text-forest/70 text-lg tracking-wide">Get your favorites delivered fast.</p>

            <div className="flex justify-center gap-4 mt-12">
                {/* Button 1: Brand Text */}
                <button className="w-20 h-16 bg-forest rounded-2xl flex items-center justify-center text-cream hover:bg-forest-light transition-all hover:-translate-y-1 shadow-lg group">
                    <span className="font-bold tracking-widest text-[10px] group-hover:scale-110 transition-transform uppercase font-sans">IPSUM</span>
                </button>
                
                {/* Button 2: Link */}
                <button className="w-20 h-16 bg-forest rounded-2xl flex items-center justify-center text-cream hover:bg-forest-light transition-all hover:-translate-y-1 shadow-lg group">
                    <Link size={24} className="group-hover:scale-110 transition-transform" />
                </button>
                
                {/* Button 3: Sparkles */}
                <button className="w-20 h-16 bg-forest rounded-2xl flex items-center justify-center text-cream hover:bg-forest-light transition-all hover:-translate-y-1 shadow-lg group">
                     <Sparkles size={24} className="group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </div>
        
        {/* Reuse Marquee at the bottom */}
        <Marquee />
    </section>
  );
};