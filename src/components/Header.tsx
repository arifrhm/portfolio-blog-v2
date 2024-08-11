"use client";

import React from "react";
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const currentPath = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 border-b border-gray-700 py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold text-white">
          <a href="/" className="hover:underline">
            <span className="font-extrabold">Gita</span> Suputra
          </a>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-50 focus:outline-none ml-4">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`lg:flex space-x-10 ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {['/blog', '/portfolio', '/about', '/contact'].map((path) => (
            <a 
              key={path} 
              href={path} 
              className={`relative text-gray-50 ${
                currentPath === path ? 'line-through' : 'hover:line-through'
              }`}
            >
              {path.replace('/', '')}
            </a>
          ))}
        </nav>
        <div className={`hidden lg:flex items-center space-x-4 text-gray-50`}>
          <SearchBar />
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {['/blog', '/portfolio', '/about', '/contact'].map((path) => (
              <a 
                key={path} 
                href={path} 
                className={`text-gray-50 ${currentPath === path ? 'line-through' : 'hover:line-through'}`}
              >
                {path.replace('/', '')}
              </a>
            ))}
            <div className="text-gray-50">
              <SearchBar />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
