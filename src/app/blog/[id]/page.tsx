'use client';
import BlockNoteSinglePostView from '@/components/BlockNoteSinglePostView';
import { Footer } from '@/components/Footer';
import Header from '@/components/Header';
import { ThemeProvider } from '@/components/ThemeContext';

export default function BlogPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="App">
      <Header />
      <div className="content">
        <ThemeProvider>
          <BlockNoteSinglePostView id={id} />
        </ThemeProvider>
      </div>
      <Footer />
    </div>
  );
}
