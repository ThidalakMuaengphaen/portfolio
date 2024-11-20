'use client';

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // ใช้ Icon Hamburger

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-primaryBlue p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-2xl font-bold ml-8">noeynoey</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <a
              href="#experience"
              className="text-white hover:bg-blue-100 p-3 rounded-lg active:text-blue-600"
            >
              Awards & work experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-white hover:bg-blue-100 p-3 rounded-lg active:text-blue-600"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="text-white hover:bg-blue-100 p-3 rounded-lg active:text-blue-600"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white hover:bg-blue-100 p-3 rounded-lg active:text-blue-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="bg-blue-600 text-white space-y-4 py-6 px-6 md:hidden absolute top-16 left-0 w-full shadow-md">
          <li>
            <a
              href="#experience"
              className="block text-lg hover:bg-blue-700 p-2 rounded"
              onClick={toggleMenu}
            >
              Awards & work experience
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="block text-lg hover:bg-blue-700 p-2 rounded"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#education"
              className="block text-lg hover:bg-blue-700 p-2 rounded"
              onClick={toggleMenu}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-lg hover:bg-blue-700 p-2 rounded"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
