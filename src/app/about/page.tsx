import AboutDetailSection from '@/components/AboutDetailSection';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { Publication } from '@/components/Publication';
import React from 'react';

const BlogPage = () => (
  <div className="App">
    <Header />
    <AboutDetailSection />
    <Publication />
    <Footer />
  </div>
);

export default BlogPage;

