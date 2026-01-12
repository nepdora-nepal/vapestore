import React from 'react';
import { Hero } from './Hero';
import { Marquee } from './Marquee';
import { MenuCategories } from './MenuCategories';
import { FeaturedMenu } from './FeaturedMenu';
import { Values } from './Values';
import { Testimonials } from './Testimonials';
import { OrderOnline } from './OrderOnline';

export const Home: React.FC = () => {
  return (
    <>
        <Hero />
        <Marquee />
        <MenuCategories />
        <FeaturedMenu />
        <Values />
        <Testimonials />
        <OrderOnline />
    </>
  );
};