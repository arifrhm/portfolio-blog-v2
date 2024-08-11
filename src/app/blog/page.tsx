'use client';
import { BlogSection } from '@/components/BlogSection';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';

const BlogPage = () => {
  return (
      <div className="App">
        <Header />
        <div className="content bg-gray-900">
          <BlogSection />
        </div>
        <Footer />
      </div>
  );
};

export default BlogPage;
