"use client"
import React, { useState } from 'react';

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="flex items-center">
      <button className="focus:outline-none mr-2 rounded-full" onClick={handleClick}>
        <SearchIcon className="w-6 h-6" />
        <span className="sr-only">Open search</span>
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-md flex justify-center items-center">
          <div className="bg-white rounded-md p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Search</h2>
              <button type="button" onClick={handleCloseModal} className="rounded-full">
                <CloseIcon className="w-6 h-6" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="flex items-center w-full max-w-4xl mx-auto px-4 md:px-0">
              <div className="flex-1">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full py-2 text-base bg-transparent border-none focus:ring-0"
                />
              </div>
              <button className="rounded-full">
                <SearchIcon className="w-6 h-6" />
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default SearchBar;


