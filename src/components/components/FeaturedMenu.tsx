import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { POPULAR_PRODUCTS } from '@/components/constants';
import { Coffee } from 'lucide-react';

export const FeaturedMenu: React.FC = () => {
  return (
    <section className="bg-cream py-20" id="menu">
      <div className="container mx-auto px-4 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-serif text-forest mb-4">Loved by Locals</h2>
        <p className="text-forest/70 max-w-lg mx-auto">
          Local go-to&apos;s everyone loves — handpicked and always fresh.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {POPULAR_PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image Card */}
              <div className="bg-forest rounded-[2.5rem] aspect-[4/5] relative flex items-center justify-center overflow-hidden shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(26,47,33,0.25)]">
                {/* Image / Content Container */}
                <div className="w-full h-full relative flex items-center justify-center transition-all duration-700 group-hover:scale-105">
                  {product.image ? (
                    <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover" 
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                      {/* Subtle Overlay */}
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-700"></div>
                    </div>
                  ) : (
                    <div className="transform scale-90 translate-y-6 transition-transform duration-500 group-hover:scale-95 group-hover:translate-y-4">
                      {product.name === 'Cappuccino' ? (
                        <HotCupCSS name={product.name} />
                      ) : (
                        <ColdCupCSS name={product.name} />
                      )}
                    </div>
                  )}
                </div>
                
                {/* Subtle Surface Highlight for non-image items */}
                {!product.image && (
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50 pointer-events-none"></div>
                )}
              </div>

              {/* Product Info */}
              <div className="flex justify-between items-end mt-5 px-2">
                <h3 className="text-xl font-serif font-bold text-forest tracking-tight">{product.name}</h3>
                <span className="text-lg font-bold text-forest/60 font-serif">${product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
            <Link href="/menu" className="inline-block bg-forest text-cream px-10 py-4 rounded-full font-medium hover:bg-forest-light transition-colors shadow-lg hover:shadow-xl text-sm tracking-wide">
                Explore Menu
            </Link>
        </div>
      </div>
    </section>
  );
};

/* --- CSS 3D Components for this section --- */

const ColdCupCSS = ({ name }: { name: string }) => (
    <div className="relative w-40 h-60">
        {/* Straw */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-4 h-24 bg-[#f5f2e8] rounded-t-sm shadow-sm z-0"></div>

        {/* Lid */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[110%] h-6 bg-[#f5f2e8]/90 backdrop-blur-sm rounded-md z-20 shadow-sm border-b border-white/20"></div>

        {/* Cup Body */}
        <div 
            className="absolute inset-0 bg-[#f5f2e8]"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                background: 'linear-gradient(90deg, #e6e2d6 0%, #f5f2e8 25%, #f5f2e8 50%, #f5f2e8 75%, #e6e2d6 100%)'
            }}
        >
             {/* 3D Shading */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>

            {/* Dark Green Brand Band */}
            <div className="absolute top-[25%] left-0 right-0 h-28 bg-[#1a2f21] flex flex-col items-center justify-center shadow-[inset_0_2px_10px_rgba(0,0,0,0.3)]">
                 {/* Logo */}
                 <div className="w-10 h-10 rounded-full bg-[#f5f2e8] flex items-center justify-center mb-2 shadow-md">
                     <Coffee size={18} className="text-[#1a2f21]" strokeWidth={2.5} />
                 </div>
                 
                 {/* Text Content */}
                 <div className="text-center w-full px-2">
                    <span className="text-[6px] text-[#f5f2e8]/60 uppercase tracking-[0.2em] block mb-1">Cold Drinks</span>
                    <span className="text-[#f5f2e8] font-serif font-bold text-sm md:text-base leading-none block drop-shadow-md">{name}</span>
                 </div>
            </div>
        </div>
    </div>
);

const HotCupCSS = ({ name }: { name: string }) => (
    <div className="relative w-40 h-56">
        {/* Lid Top */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[112%] h-10 bg-[#1a2f21] rounded-[50%] z-20 shadow-xl border-t border-white/5">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[85%] rounded-[50%] bg-[#233d2c] border-t border-white/10"></div>
        </div>
        {/* Lid Rim */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[110%] h-6 bg-[#233d2c] rounded-[4px] z-10 shadow-md"></div>
        
        {/* Cup Body */}
        <div 
            className="absolute inset-0 bg-[#f5f2e8] overflow-hidden shadow-2xl"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 82% 100%, 18% 100%)',
                background: 'linear-gradient(90deg, #d6d3c9 0%, #f5f2e8 20%, #f5f2e8 50%, #f5f2e8 80%, #d6d3c9 100%)'
            }}
        >
            {/* Ribs Texture */}
             <div className="absolute inset-0 opacity-40 mix-blend-multiply" 
                style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 12px, rgba(0,0,0,0.05) 12px, rgba(0,0,0,0.05) 13px)' }}>
            </div>
             {/* Roundness Shadow */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20 pointer-events-none"></div>

             {/* Vertical Label */}
             <div className="absolute top-0 bottom-[15%] left-1/2 -translate-x-1/2 w-12 bg-[#233d2c] shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex flex-col items-center justify-end pb-3">
                 <div className="flex-1 flex items-center justify-center pb-1">
                    <span className="text-[#f5f2e8] text-[9px] font-serif font-bold tracking-widest uppercase opacity-90 whitespace-nowrap" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        {name}
                    </span>
                 </div>
                 <div className="w-8 h-8 rounded-full border border-[#f5f2e8]/30 flex items-center justify-center bg-[#233d2c]">
                     <Coffee size={14} className="text-[#f5f2e8]" strokeWidth={2.5} />
                 </div>
             </div>
        </div>
    </div>
);