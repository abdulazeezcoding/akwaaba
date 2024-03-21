import React from 'react';
import GhanaFlag from "../assets/images/ghana-flag.svg";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
         <div className="flex space-x-4">
          <img src={GhanaFlag} class="h-8" alt="Ghana Flag" />
          <a href="/" className="text-white font-bold text-xl">Akwaaba</a>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="www.facebook.com" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="www.facebook.com" className="text-white hover:text-gray-300">Destinations</a></li>
            <li><a href="www.facebook.com" className="text-white hover:text-gray-300">Tours</a></li>
            <li><a href="www.facebook.com" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="www.facebook.com" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
    </nav>
    );
}
