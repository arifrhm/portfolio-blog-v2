// src/app/page.tsx
'use client';
import { AboutMeSection } from '@/components/AboutMeSection';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import '@/app/globals.css';

const HomePage = () => (
    <div className="App">
      <Header />
      <AboutMeSection />
      <Footer />
    </div>
);

export default HomePage;
