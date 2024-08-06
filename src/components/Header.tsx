"use client";

import React, { useState } from "react";
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from "./SearchBar";
import './HeaderStyles.css'; // Adjust the path if necessary

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header fixed top-0 left-0 w-full bg-white border-b border-gray-200 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">
          <a href="/" className="hover:underline">
            <span className="font-extrabold">Gita</span> Suputra
          </a>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`lg:flex space-x-10 ${isOpen ? 'block' : 'hidden'} lg:block`}>
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
        <div className={`text-gray-600 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          <SearchBar />
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {['/blog', '/portfolio', '/about', '/contact'].map((path) => (
              <a 
                key={path} 
                href={path} 
                className={`text-gray-600 ${currentPath === path ? 'line-through' : 'hover:line-through'}`}
              >
                {path.replace('/', '')}
              </a>
            ))}
            <div className="text-gray-600">
              <SearchBar />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
