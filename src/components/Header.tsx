import React from 'react';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="DocTrue Logo" className="h-8" />
      </div>
      <nav className="flex space-x-6">
        <a href="#" className="text-gray-600">About Us</a>
        <a href="#" className="text-gray-600">How It Works</a>
        <a href="#" className="text-gray-600">Features</a>
        <a href="#" className="text-gray-600">Clinics</a>
        <a href="#" className="text-gray-600">Product</a>
        <a href="#" className="text-gray-600">Testimonial</a>
        <a href="#" className="text-gray-600">Pricing</a>
      </nav>
      <div>
        <button className="rounded-full border-gradient border-gradient-blue text-blue-600 border-2 px-4 py-2 mr-4 border-transparent text-transparent bg-clip-text font-semibold"><span>Contact Us</span></button>
        <button className="rounded-full px-4 py-2  bg-gradient-to-r from-[#0F38BD] to-[#2ECEF2] text-white font-semibold">Book A Demo</button>
      </div>
    </header>
  );
};

export default Header;
