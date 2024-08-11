import Image from "next/image";
import React, { useEffect, useState } from 'react';
import BlogGrid, { transformData } from '@/components/BlogGrid';

interface Item {
  key: string;
  imageUrl: string;
  title: string;
  date: string;
  readTime: string;
  description: string;
}

export function BlogSection() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const transformedData = await transformData(data);
        setItems(transformedData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 flex flex-col px-5 py-12 bg-gray-900">
      <div className="container mx-auto box-title mb-8 flex items-center space-x-2">
        <h1 className="text-3xl font-bold text-white">Blog</h1>
        <div className="shrink-0 w-0.5 bg-zinc-400" style={{ height: '76px' }}></div>
        <h2 className="flex-auto self-stretch my-auto text-lg text-gray-300">Posts about data science, AI, ML and other.</h2>
      </div>
      <div className="container mx-auto">
        {loading && <p className="text-gray-300">Loading...</p>}
        {error && <p className="text-red-400">Error: {error}</p>}
        <BlogGrid items={items} />
      </div>
    </div>
  );
}
