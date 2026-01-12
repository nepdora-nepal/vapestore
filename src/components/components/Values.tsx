import React from 'react';
import Image from 'next/image';
import { FEATURES } from '@/components/constants';

export const Values: React.FC = () => {
  return (
    <section className="bg-cream py-24" id="about">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text & Features */}
        <div className="max-w-xl">
          <h2 className="text-5xl lg:text-7xl font-serif text-forest mb-6 leading-[0.9] tracking-tight">
            Good Vibes.<br />
            Great Coffee.
          </h2>
          <p className="text-forest/80 text-lg mb-12 leading-relaxed font-light">
            At Brewhaus, we serve great coffee and fresh pastries with care and passion, creating a warm, cozy space that feels like home.
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {FEATURES.map((feature) => (
                <div key={feature.id} className="flex flex-col items-center text-center gap-4 group cursor-default">
                    <div className="w-16 h-16 bg-forest rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                         {React.isValidElement(feature.icon) ? React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8 text-cream" }) : feature.icon}
                    </div>
                    <h4 className="text-forest font-serif font-bold text-lg leading-tight w-3/4">{feature.title}</h4>
                </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image Collage */}
        <div className="flex gap-4 h-[600px] w-full">
            {/* Tall Image (Barista/Moka Pot) */}
            <div className="w-1/2 h-full rounded-[2.5rem] overflow-hidden relative shadow-2xl">
                <Image 
                    src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    alt="Barista brewing coffee"
                    fill
                    sizes="(max-width: 1024px) 50vw, 400px"
                 />
                 {/* Dark overlay for contrast if needed, or keeping it clean */}
            </div>
            
            {/* Stacked Images (Interior & Matcha) */}
            <div className="w-1/2 flex flex-col gap-4 h-full">
                {/* Top Right: Interior */}
                <div className="h-1/2 w-full rounded-[2.5rem] overflow-hidden shadow-xl relative">
                    <Image 
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        alt="Cafe interior"
                        fill
                        sizes="(max-width: 1024px) 50vw, 400px"
                    />
                </div>
                {/* Bottom Right: Matcha/Latte */}
                <div className="h-1/2 w-full rounded-[2.5rem] overflow-hidden shadow-xl relative">
                    <Image 
                        src="https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF0Y2hhJTIwbGF0dGV8ZW58MHx8MHx8fDA%3D" 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        alt="Matcha Latte"
                        fill
                        sizes="(max-width: 1024px) 50vw, 400px"
                    />
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};