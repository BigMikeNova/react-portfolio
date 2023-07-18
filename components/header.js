import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-300 hover:text-white">About Me</a>
          <a href="#portfolio" className="text-gray-300 hover:text-white">Portfolio</a>
          <a href="#contact" className="text-gray-300 hover:text-white">Contact</a>
          <a href="#resume" className="text-gray-300 hover:text-white">Resume</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
