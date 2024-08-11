// src/app/page.tsx
'use client';
import { AboutMeSection } from '@/components/AboutMeSection';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import '@/app/globals.css';
import Image from 'next/image';


const HomePage = () => (
    <div className="App bg-gray-900">
      <Header />
      <AboutMeSection />
      <Footer />
    </div>
);

export default HomePage;
