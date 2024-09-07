import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/">Your Logo</Link>
        </div>
        <ul className="flex space-x-4">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/services" className="text-white hover:text-gray-300">Services</Link></li>
          <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
          <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
        <div className="space-x-2">
          <Link to="/signin" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Sign In</Link>
          <Link to="/signup" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;