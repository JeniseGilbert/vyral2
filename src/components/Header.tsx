import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <nav className="flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold">VYRAL</h1>
        <ul className="flex gap-6">
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-rose-500' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'text-rose-500' : ''}>About</NavLink></li>
          <li><NavLink to="/services" className={({ isActive }) => isActive ? 'text-rose-500' : ''}>Services</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? 'text-rose-500' : ''}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;