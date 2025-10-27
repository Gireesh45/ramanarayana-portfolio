import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          <span className="text-blue-600">R</span>amanarayana
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Home
          </a>
          <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            About
          </a>
          <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Skills
          </a>
          <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col items-center py-4 space-y-3">
            <li><a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
