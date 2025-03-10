"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa'; // Shoppingcart icon
import { HiMenuAlt3 } from 'react-icons/hi'; // Hamburger icon
import { HiX } from 'react-icons/hi'; // Close icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu open/close
  };

  const closeMenu = () => {
    setIsMenuOpen(false); // Close the menu
  };

  return (
    <header className="bg-[#e46e00] text-white py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-2xl font-bold">Timeless Luxe</h1>

      {/* Desktop Navbar */}
      <nav className="hidden md:flex gap-10 text-white font-bold">
        <Link href="/" onClick={closeMenu} className='hover:text-[#8daac7]'>Home</Link>
        <Link href="/about" onClick={closeMenu} className='hover:text-[#8daac7]'>About</Link>
        <Link href="/watches" onClick={closeMenu} className='hover:text-[#8daac7]'>Watches</Link>
        <Link href="/contact" onClick={closeMenu} className='hover:text-[#8daac7]'>Contact</Link>
        <FaShoppingCart className="text-white text-xl" />
      </nav>

      {/* Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center">
        <HiMenuAlt3
          className="text-white text-3xl cursor-pointer"
          onClick={toggleMenu} // Toggle menu on click
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-0 left-0 w-full h-full bg-[#e46e00] p-5 md:hidden z-20`}
      >
        {/* Close Button */}
        <div className="flex justify-end">
          <HiX
            className="text-white text-3xl cursor-pointer"
            onClick={toggleMenu} // Close menu when clicked
          />
        </div>

        <nav className="flex flex-row items-center gap-3 text-white font-bold">
          <Link href="/" onClick={closeMenu} className='hover:text-[#8daac7]'>Home</Link>
          <Link href="/about" onClick={closeMenu} className='hover:text-[#8daac7]'>About</Link>
          <Link href="/watches" onClick={closeMenu} className='hover:text-[#8daac7]'>Watches</Link>
          <Link href="/contact" onClick={closeMenu} className='hover:text-[#8daac7]'>Contact</Link>
          <FaShoppingCart className="text-white text-xl" />
        </nav>
      </div>
    </header>
  );
};

export default Header;