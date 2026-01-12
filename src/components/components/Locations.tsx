import React from 'react';
import { LOCATIONS } from '@/components/constants';
import { MapPin } from 'lucide-react';

export const Locations: React.FC = () => {
  return (
    <section className="bg-forest text-cream py-24" id="locations">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif mb-4">Nearby Cafés</h2>
        <p className="text-cream/70">Find a Brewhaus nearby and stop in for your favorite drink.</p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
            {LOCATIONS.map((loc) => (
                <div key={loc.id} className="bg-cream text-forest p-8 rounded-[2rem] flex justify-between items-center group cursor-pointer hover:bg-white transition-colors">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-forest/60 mb-1">{loc.name}</p>
                        <h3 className="text-xl font-serif font-bold mb-2 w-2/3">{loc.address.split(',')[0]}</h3>
                        <p className="text-forest/60">{loc.address.split(',').slice(1).join(', ')}</p>
                        <p className="text-sm mt-4 font-medium">{loc.hours}</p>
                    </div>
                    <button className="bg-forest text-cream px-6 py-2 rounded-full text-sm font-medium hover:bg-forest-light transition-colors whitespace-nowrap">
                        Get Directions
                    </button>
                </div>
            ))}
        </div>

        {/* Stylized Map Component */}
        <div className="w-full h-[500px] bg-[#e8e4d9] rounded-[3rem] overflow-hidden relative border-4 border-cream/10">
            {/* Abstract Map Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 100 Q 300 150 600 50 T 1200 300" fill="none" stroke="#233d2c" strokeWidth="2" />
                <path d="M50 0 Q 150 300 50 600" fill="none" stroke="#233d2c" strokeWidth="2" />
                <path d="M400 0 L 300 600" fill="none" stroke="#233d2c" strokeWidth="3" />
                <path d="M800 600 L 900 0" fill="none" stroke="#233d2c" strokeWidth="3" />
                <path d="M0 400 Q 400 300 1200 500" fill="none" stroke="#233d2c" strokeWidth="2" />
                
                 {/* Land masses (Abstract blobs) */}
                <path d="M600 300 Q 700 200 800 350 T 700 500 T 500 450 Z" fill="#233d2c" fillOpacity="0.1" />
                <path d="M100 100 Q 200 50 300 150 T 150 250 Z" fill="#233d2c" fillOpacity="0.1" />
            </svg>

            {/* Pins */}
            <div className="absolute top-[30%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
                <div className="bg-forest text-cream p-3 rounded-full shadow-xl">
                    <MapPin size={32} fill="currentColor" />
                </div>
            </div>
            <div className="absolute top-[60%] left-[45%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{animationDelay: '0.2s'}}>
                <div className="bg-forest text-cream p-3 rounded-full shadow-xl">
                    <MapPin size={32} fill="currentColor" />
                </div>
            </div>
            <div className="absolute top-[40%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{animationDelay: '0.5s'}}>
                <div className="bg-forest text-cream p-3 rounded-full shadow-xl">
                    <MapPin size={32} fill="currentColor" />
                </div>
            </div>
             <div className="absolute top-[75%] left-[80%] transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{animationDelay: '0.7s'}}>
                <div className="bg-forest text-cream p-3 rounded-full shadow-xl">
                    <MapPin size={32} fill="currentColor" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};