import React from 'react';
import { Coffee } from 'lucide-react';

export const MenuCategories: React.FC = () => {
  return (
    <section className="bg-cream py-24 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-forest mb-16">
          Find and Get<br />
          <span className="text-forest">What You Love</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            
            {/* Coffee */}
            <CategoryItem title="Coffee">
                <div className="transform scale-90 translate-y-4">
                     <CoffeeCupCSS />
                </div>
            </CategoryItem>

            {/* Cold Drinks */}
            <CategoryItem title="Cold Drinks">
                <div className="transform scale-90 translate-y-4">
                    <ColdDrinkCSS />
                </div>
            </CategoryItem>

            {/* Bakery */}
            <CategoryItem title="Bakery">
                <div className="transform scale-90 translate-y-2">
                    <BakeryBagCSS />
                </div>
            </CategoryItem>
        </div>
      </div>
    </section>
  );
};

const CategoryItem = ({ title, children }: React.PropsWithChildren<{ title: string }>) => (
    <div className="flex flex-col items-center gap-6 group cursor-pointer">
        <div className="w-64 h-64 rounded-full bg-forest relative flex items-center justify-center overflow-hidden shadow-2xl transition-transform duration-300 group-hover:scale-105 border-4 border-forest">
            {/* Background spotlight effect inside the circle */}
             <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
            {children}
        </div>
        <h3 className="text-2xl font-serif text-forest font-bold tracking-wide">{title}</h3>
    </div>
);

/* --- CSS Illustration Components --- */

const CoffeeCupCSS = () => (
    <div className="relative w-32 h-48">
        {/* Lid */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[110%] h-10 bg-[#1a2f21] rounded-[50%] z-20 shadow-lg border-t border-white/10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] rounded-[50%] bg-[#233d2c] border-t border-white/5"></div>
        </div>
        
        {/* Cup Body */}
        <div 
            className="absolute inset-0 bg-[#f5f2e8] overflow-hidden"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 82% 100%, 18% 100%)',
                background: 'linear-gradient(90deg, #d6d3c9 0%, #f5f2e8 20%, #f5f2e8 50%, #f5f2e8 80%, #d6d3c9 100%)'
            }}
        >
            {/* Ribs */}
             <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
                style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(0,0,0,0.05) 10px, rgba(0,0,0,0.05) 11px)' }}>
            </div>
             {/* Shadow Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

             {/* Label */}
             <div className="absolute top-0 bottom-[20%] left-1/2 -translate-x-1/2 w-10 bg-[#233d2c] shadow-lg flex flex-col items-center justify-end pb-3">
                 <div className="flex-1 flex items-center justify-center">
                    <span className="text-[#f5f2e8] text-[8px] font-serif font-bold tracking-widest uppercase opacity-80" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        Black Coffee
                    </span>
                 </div>
                 <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center bg-[#233d2c]">
                     <Coffee size={10} className="text-white" />
                 </div>
             </div>
        </div>
    </div>
);

const ColdDrinkCSS = () => (
    <div className="relative w-32 h-44">
        {/* Straw */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-20 bg-white rotate-3 z-0 shadow-sm"></div>

        {/* Lid */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-[110%] h-4 bg-white/90 backdrop-blur-sm rounded-sm z-20 shadow-sm border border-white/50"></div>

        {/* Cup Body */}
        <div 
            className="absolute inset-0 bg-white"
            style={{
                clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)',
                background: 'linear-gradient(90deg, #e6e6e6 0%, #ffffff 20%, #ffffff 50%, #ffffff 80%, #e6e6e6 100%)'
            }}
        >
             {/* Shadow Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10"></div>

            {/* Green Band/Logo Area */}
            <div className="absolute top-[20%] left-0 right-0 h-24 bg-[#1a2f21] flex flex-col items-center justify-center shadow-inner">
                 <div className="w-10 h-10 rounded-full bg-[#f5f2e8] flex items-center justify-center mb-1">
                     <Coffee size={16} className="text-[#1a2f21]" />
                 </div>
                 <div className="text-center">
                    <span className="text-[6px] text-[#f5f2e8]/60 uppercase tracking-widest block">Cold Drinks</span>
                    <span className="text-[#f5f2e8] font-serif font-bold text-sm">Virgin Mojito</span>
                 </div>
            </div>
        </div>
    </div>
);

const BakeryBagCSS = () => (
    <div className="relative w-32 h-40 group">
        {/* Main Bag Body */}
        <div className="absolute inset-0 bg-[#cbb08a] rounded-sm shadow-xl overflow-hidden">
             {/* Texture */}
             <div className="absolute inset-0 opacity-20" style={{filter: 'contrast(120%) noise(10%)'}}></div>
             
             {/* Fold Line Shadow */}
             <div className="absolute top-10 left-0 right-0 h-1 bg-black/10"></div>
             
             {/* Text Content on Bag */}
             <div className="absolute top-20 left-0 right-0 text-center">
                 <p className="font-serif text-[#5d4037] font-bold leading-tight text-sm opacity-80">
                    Baked Fresh,<br/>Loved Always
                 </p>
                 <div className="mt-4 flex justify-center opacity-60">
                     {/* Illustration of food */}
                     <svg width="40" height="20" viewBox="0 0 40 20" fill="#5d4037">
                         <path d="M5 15 Q 10 5 15 15 T 25 15 T 35 15" stroke="#5d4037" strokeWidth="2" fill="none"/>
                         <path d="M2 18 L 38 18" stroke="#5d4037" strokeWidth="1" />
                     </svg>
                 </div>
             </div>
        </div>

        {/* Folded Top */}
        <div className="absolute top-0 left-0 right-0 h-10 bg-[#bfa27c] z-10 shadow-md" style={{clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)'}}></div>
        
        {/* Sticker */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-10 h-12 bg-[#233d2c] z-20 shadow-md flex flex-col items-center justify-center">
             <div className="w-6 h-6 rounded-full border border-[#f5f2e8]/30 flex items-center justify-center">
                <Coffee size={10} className="text-[#f5f2e8]" />
            </div>
            <span className="text-[4px] text-white uppercase mt-1 tracking-wider">Brownies</span>
        </div>
    </div>
);