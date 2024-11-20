'use client';

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-primaryBlue p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold ml-8">noeynoey</h1>
        <ul className="flex space-x-6">
          <li><a href="#experience" className="text-gray-700 hover:bg-blue-100 p-3 rounded-lg active:text-blue-600">Awards & work experience</a></li>
          <li><a href="#skills" className="text-gray-700 hover:bg-blue-100 p-3 rounded-lg  active:text-blue-600">Skills</a></li>
          <li><a href="#education" className="text-gray-700 hover:bg-blue-100 p-3 rounded-lg  active:text-blue-600">Education</a></li>
          <li><a href="#contact" className="text-gray-700 mr-6 hover:bg-blue-100 p-3 rounded-lg  active:text-blue-600">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
