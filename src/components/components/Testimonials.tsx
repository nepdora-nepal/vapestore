import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/components/constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-cream py-24">
        <div className="container mx-auto px-4 text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-serif text-forest leading-[0.95]">
            What People<br />Love About Us
            </h2>
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Row 1, Col 1: Text - Patrick */}
                <TestimonialCard testimonial={TESTIMONIALS[0]} />

                {/* Row 1, Col 2: Image - Iced Coffee */}
                <ImageCard 
                    src="https://plus.unsplash.com/premium_photo-1723478478468-284b62233e75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMGRyaW5raW5nJTIwY29mZmVlfGVufDB8fDB8fHww" 
                    alt="Iced Latte Pour" 
                />

                {/* Row 1, Col 3: Text - Sofia */}
                <TestimonialCard testimonial={TESTIMONIALS[2]} />

                {/* Row 2, Col 1: Image - Pouring Milk */}
                <ImageCard 
                    src="https://images.unsplash.com/photo-1536914561643-9e3a7a8d063d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGRyaW5raW5nJTIwY29mZmVlfGVufDB8fDB8fHww" 
                    alt="Barista Pouring" 
                />

                {/* Row 2, Col 2: Text - Jordan */}
                <TestimonialCard testimonial={TESTIMONIALS[1]} />

                {/* Row 2, Col 3: Image - Latte Art */}
                <ImageCard 
                    src="https://images.unsplash.com/photo-1608585269273-5cacd36870f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlb3BsZSUyMGRyaW5raW5nJTIwY29mZmVlfGVufDB8fDB8fHww" 
                    alt="Latte Art" 
                />
            </div>
        </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) => (
    <div className="bg-[#f0ebd8] p-10 rounded-[2rem] flex flex-col justify-between min-h-[340px] group transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
         <span className="text-6xl font-serif text-forest/90 leading-none h-8 block">“</span>
         <p className="text-xl font-serif text-forest leading-relaxed my-6 font-medium tracking-tight">
             {testimonial.quote}
         </p>
         <div className="mt-auto">
             <p className="text-sm text-forest/70 font-medium">
                 {testimonial.author} – <span className="font-normal opacity-80">{testimonial.role}</span>
             </p>
         </div>
    </div>
);

const ImageCard = ({ src, alt }: { src: string, alt: string }) => (
    <div className="rounded-[2rem] overflow-hidden min-h-[340px] h-full relative group shadow-sm">
        <Image 
            src={src} 
            alt={alt} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-forest/5 group-hover:bg-transparent transition-colors duration-300"></div>
    </div>
);