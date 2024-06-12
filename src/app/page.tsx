import { AboutMeSection } from '@/components/AboutMeSection';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Publication } from '@/components/Publication';
import React from 'react';

const HomePage = () => (
  <div className="App">
    <Header />
    <AboutMeSection />
    <Publication />
    <Footer />
  </div>
);

export default HomePage;

