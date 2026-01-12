import React from 'react';
import { Leaf, Globe, Share2, Crown, Smile, Zap, Camera } from 'lucide-react';

const ITEMS = [
    { icon: Leaf, text: "Local Roasts" },
    { icon: Globe, text: "Global Flavor" },
    { icon: Share2, text: "Friendly Baristas" },
    { icon: Crown, text: "Great Coffee" },
    { icon: Smile, text: "Fast Service" },
    { icon: Zap, text: "Cozy Space" },
    { icon: Camera, text: "Handcrafted Drinks" },
];

export const Marquee: React.FC = () => {
  return (
    <div className="bg-[#fcf8e3] py-6 border-y border-forest/10 overflow-hidden flex select-none relative z-30">
      <div className="flex animate-marquee-infinite min-w-full shrink-0 items-center">
        {ITEMS.map((item, index) => (
            <div key={`a-${index}`} className="flex items-center gap-3 px-8 md:px-12">
                <item.icon size={22} className="text-forest/80" strokeWidth={1.5} />
                <span className="text-forest font-serif font-bold text-lg tracking-wide whitespace-nowrap">{item.text}</span>
            </div>
        ))}
      </div>
      <div className="flex animate-marquee-infinite min-w-full shrink-0 items-center">
        {ITEMS.map((item, index) => (
            <div key={`b-${index}`} className="flex items-center gap-3 px-8 md:px-12">
                <item.icon size={22} className="text-forest/80" strokeWidth={1.5} />
                <span className="text-forest font-serif font-bold text-lg tracking-wide whitespace-nowrap">{item.text}</span>
            </div>
        ))}
      </div>
    </div>
  );
};