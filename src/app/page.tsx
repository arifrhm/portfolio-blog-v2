// src/pages/index.tsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to Gita's Website</h1>
        <p className="text-lg mb-4">
          This is a demo site to showcase Gita's work. You can find various sections
          such as blog posts, portfolio, photos, and more.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Blog</h2>
            <p>
              Read the latest blog posts about web development, technology, and more.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
            <p>
              Check out the portfolio showcasing various projects and accomplishments.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Photo</h2>
            <p>
              Browse through a collection of photographs captured by Andrew.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">About</h2>
            <p>
              Learn more about Andrew Kurochkin, his background, and his interests.
            </p>
          </div>
          <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-2xl font-bold mb-2">Contact</h2>
            <p>
              Get in touch with Andrew for collaborations, inquiries, or just to say hello.
            </p>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
