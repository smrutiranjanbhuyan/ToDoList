import React from 'react';

export default function Navbar() {
  return (
    <nav className="bg-purple-600 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <a href="/" className="flex items-center space-x-2">
              <svg className="w-8 h-8 text-white dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 7l10 5 10-5" />
              </svg>
              <span className="text-lg font-semibold text-white dark:text-white">iDo</span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="block md:hidden p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            aria-label="Open main menu"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <a href="/" className="text-lg font-medium text-white dark:text-white hover:text-gray-100">Home</a>
            <a href="/about" className="text-lg font-medium text-white dark:text-white hover:text-gray-100">About</a>
           
          </div>
        </div>
      </div>
    </nav>
  );
}
