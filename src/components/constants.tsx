import React from 'react';
import { Product, Location, Testimonial, Feature } from './types';
import { Coffee, Smile, Home, Heart } from 'lucide-react';

export const MENU_ITEMS: Product[] = [
    // Coffee
    { id: 101, name: "Cold Brew", price: 6.75, category: 'coffee', isNew: true, image: "https://images.unsplash.com/photo-1549652127-2e5e59e86a7a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMGJyZXd8ZW58MHx8MHx8fDA%3D" },
    { id: 102, name: "Macchiato", price: 6.10, category: 'coffee', isNew: true,image:"https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFjY2hpYXRvfGVufDB8fDB8fHww" },
    { id: 103, name: "Espresso", price: 4.25, category: 'coffee',image:"https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXNwcmVzc298ZW58MHx8MHx8fDA%3D" },
    { id: 104, name: "Black Coffee", price: 4.90, category: 'coffee',image:"https://images.unsplash.com/photo-1621267860478-dbdd589372db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBjb2ZmZWV8ZW58MHx8MHx8fDA%3D" },
    { id: 105, name: "Cappuccino", price: 5.25, category: 'coffee',image:"https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },


    // Cold Drinks
    { id: 201, name: "Virgin Mojito", price: 6.20, category: 'cold-drinks', isNew: true,image:"https://images.unsplash.com/photo-1634496064950-02f043806b09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlyZ2luJTIwbW9qaXRvfGVufDB8fDB8fHww" },
    { id: 202, name: "Iced Latte", price: 4.45, category: 'cold-drinks',image:"https://images.unsplash.com/photo-1669102786020-f389c3219020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMGxhdHRlcnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 203, name: "Iced Americano", price: 3.95, category: 'cold-drinks',image:"https://images.unsplash.com/photo-1581996323441-538096e854b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMGFtZXJpY2Fub3xlbnwwfHwwfHx8MA%3D%3D" },
    { id: 204, name: "Iced Mocha", price: 5.75, category: 'cold-drinks',image:"https://images.unsplash.com/photo-1592663527359-cf6642f54cff?q=80&w=719&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 205, name: "Iced Tea", price: 4.35, category: 'cold-drinks',image:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 206, name: "Bubble Tea", price: 6.75, category: 'cold-drinks',image:"https://images.unsplash.com/photo-1572932759882-bb34c848d1b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnViYmxlJTIwdGVhfGVufDB8fDB8fHww" },

    // Bakery
    { id: 301, name: "Brownie", price: 2.15, category: 'bakery', isNew: true, image: "https://images.unsplash.com/photo-1636743715220-d8f8dd900b87?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 302, name: "Macaroon", price: 2.60, category: 'bakery', image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=600" },
    { id: 303, name: "Donut", price: 1.40, category: 'bakery', image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 304, name: "Muffin", price: 1.80, category: 'bakery', image: "https://images.unsplash.com/photo-1557925923-6982bd9650ff?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1558401391-7899b4bd5bbf?auto=format&fit=crop&q=80&w=600" },
    { id: 305, name: "Biscotti", price: 1.50, category: 'bakery', image: "https://images.unsplash.com/photo-1685397166789-3218852ac2ce?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
];

export const POPULAR_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Bubble Tea",
    price: 6.75,
    category: 'cold-drinks',
    image: "https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?auto=format&fit=crop&q=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YnViYmxlJTIwdGVhfGVufDB8fDB8fHww&w=800",
  },
  {
    id: 2,
    name: "Iced Latte",
    price: 4.45,
    category: 'cold-drinks',
    image: "https://images.unsplash.com/photo-1669102786020-f389c3219020?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMGxhdHRlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 3,
    name: "Iced Tea",
    price: 4.35,
    category: 'cold-drinks',
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aWNlZCUyMHRlYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 4,
    name: "Cappuccino",
    price: 5.25,
    category: 'coffee',
    image: "https://images.unsplash.com/photo-1557006021-b85faa2bc5e2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const LOCATIONS: Location[] = [
  {
    id: 1,
    name: "Brooklyn",
    address: "123 Bedford Ave, Brooklyn, NY 11211",
    hours: "Open daily: 7AM - 7PM"
  },
  {
    id: 2,
    name: "Manhattan",
    address: "456 Spring St, New York, NY 10012",
    hours: "Open daily: 7AM - 8PM"
  },
  {
    id: 3,
    name: "Queens",
    address: "789 Broadway, Queens, NY 11106",
    hours: "Open daily: 7AM - 6PM"
  },
  {
    id: 4,
    name: "Queens",
    address: "134-16 36th Road, Flushing, NY 11354",
    hours: "Open daily: 8AM - 6PM"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote: "Brewhaus has spoiled other coffee shops for me – in the best way. Great espresso, fresh pastries, and a team that makes you feel like a regular from day one.",
    author: "Patrick M.",
    role: "Espresso lover",
    image: "https://plus.unsplash.com/premium_photo-1723478478468-284b62233e75?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMGRyaW5raW5nJTIwY29mZmVlfGVufDB8fDB8fHww"
  },
  {
    id: 2,
    quote: "I stop by every morning before work, and it's the best part of my day. The iced latte is my go-to, but I've honestly never had a bad drink here.",
    author: "Jordan T.",
    role: "Iced latte addict",
    image: "https://images.unsplash.com/photo-1517263904808-5dc91e3e704e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    quote: "Always a warm, welcoming vibe — perfect for a quick coffee or a quiet read. The banana bread? Totally addictive.",
    author: "Sofia R.",
    role: "Coffee fan",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800"
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Great Coffee, Tasty Sips",
    icon: <Coffee className="w-8 h-8 text-cream" strokeWidth={1.5} />,
  },
  {
    id: 2,
    title: "Warm, Cozy Atmosphere",
    icon: <Heart className="w-8 h-8 text-cream" strokeWidth={1.5} />,
  },
  {
    id: 3,
    title: "Speedy Service with a Smile",
    icon: <Smile className="w-8 h-8 text-cream" strokeWidth={1.5} />,
  },
  {
    id: 4,
    title: "Local & Sustainable",
    icon: <Home className="w-8 h-8 text-cream" strokeWidth={1.5} />,
  },
];