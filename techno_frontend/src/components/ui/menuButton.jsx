"use client"
import React, { useState } from 'react';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      {/* Menu button */}
      <button
        className="fixed top-4 right-4 z-50 bg-gray-800 text-white rounded-full p-2"
        onClick={toggleMenu}
      >
        Menu
      </button>

      {/* Menu block */}
      {menuOpen && (
        <div
          className="fixed top-0 right-0 bottom-0 left-0 bg-gray-900 bg-opacity-75 z-40 flex items-center justify-end"
          onClick={closeMenu}
        >
          <div className="bg-white w-64 h-full shadow-lg p-4">
            {/* Close button */}
            <button
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
              onClick={closeMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Tabs */}
            <div className="mt-8">
              <ul>
                <li className="py-2">Tab 1</li>
                <li className="py-2">Tab 2</li>
                <li className="py-2">Tab 3</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
