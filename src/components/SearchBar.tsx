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
      <button className="focus:outline-none mr-2" onClick={handleClick}>
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
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-md p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Search</h2>
              <button type="button" onClick={handleCloseModal}>
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
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            {/* Search input form */}
            <input
              type="text"
              className="w-80 mx-auto rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500 mt-4"
              placeholder="Enter your search term"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 focus:outline-none hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;

