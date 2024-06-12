import React from "react";
// import Search from "./Search";
import SearchBar from "./SearchBar";

const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-lg font-bold">
          <a href="/" className="hover:underline">
            <span className="font-extrabold">Andrew</span> Kurochkin
          </a>
        </div>
        <nav className="flex space-x-6">
          <a href="/blog" className="text-gray-600 hover:line-through">blog</a>
          <a href="/portfolio" className="text-gray-600 hover:line-through">portfolio</a>
          <a href="/photo" className="text-gray-600 hover:line-through">photo</a>
          <a href="/about" className="text-gray-600 hover:line-through">about</a>
          <a href="/contact" className="text-gray-600 hover:line-through">contact</a>
        </nav>
        <div className="text-gray-600">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;

