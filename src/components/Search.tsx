// SearchBar.tsx
import React from 'react';

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = 'Type to search' }) => {
  return (
    <input
      type="text"
      className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
      placeholder={placeholder}
    />
  );
};

const Search = () => {
  return (
    <div className="text-gray-600 flex items-center">
      <button className="focus:outline-none mr-2">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
          ></path>
        </svg>
      </button>
      <SearchBar />
    </div>
  );
};

export default Search;
