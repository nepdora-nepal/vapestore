import React from 'react';

export interface Product {
  id: number;
  name: string;
  price: number;
  image?: string;
  category: 'coffee' | 'cold-drinks' | 'bakery';
  isNew?: boolean;
}

export interface Location {
  id: number;
  name: string;
  address: string;
  hours: string;
}

export interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image?: string;
}

export interface Feature {
  id: number;
  title: string;
  icon: React.ReactNode;
}