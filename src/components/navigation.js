import React from 'react';

const Navigation = () => {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-center">
        <a href="#about" className="text-gray-300 hover:text-white px-4">
          About Me
        </a>
        <a href="#portfolio" className="text-gray-300 hover:text-white px-4">
          Portfolio
        </a>
        <a href="#contact" className="text-gray-300 hover:text-white px-4">
          Contact
        </a>
        <a href="#resume" className="text-gray-300 hover:text-white px-4">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
