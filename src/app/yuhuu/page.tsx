'use client';
import BlockNoteSinglePostView from '@/components/BlockNoteSinglePostView';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const BlogPage = () => (
  <div className="App">
    <Header />
    <BlockNoteSinglePostView />

    <Footer />
  </div>
);

export default BlogPage;

