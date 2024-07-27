"use client";

import React from "react";
import { usePathname } from 'next/navigation';
import SearchBar from "./SearchBar";
import './HeaderStyles.css'; // Adjust the path if necessary

const Header: React.FC = () => {
  const currentPath = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">
          <a href="/" className="hover:underline">
            <span className="font-extrabold">Gita</span> Suputra
          </a>
        </div>
        <nav className="flex space-x-10">
          {['/blog', '/portfolio', '/about', '/contact'].map((path) => (
            <a 
              key={path} 
              href={path} 
              className={`relative text-gray-600 ${
                currentPath === path ? 'line-through' : 'hover:line-through'
              }`}
            >
              {path.replace('/', '')}
            </a>
          ))}
        </nav>
        <div className="text-gray-600">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
