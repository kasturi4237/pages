import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/", outerWidth: "80px", innerWidth: "60px" },
    { name: "Jobs", path: "/jobs", outerWidth: "90px", innerWidth: "70px" },
    { name: "Companies", path: "/companies", outerWidth: "120px", innerWidth: "100px" },
    { name: "About", path: "/about", outerWidth: "90px", innerWidth: "70px" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 max-w-[1728px]">
      <div className="flex items-center justify-between max-w-[1728px] mx-auto px-4 sm:px-6 lg:px-10 h-[70px] xl:h-[100px]">
        
        {/* Logo */}
        <div className="flex items-center w-[150px] md:w-[200px]">
          <svg width="134" height="25" viewBox="0 0 134 25" fill="none">
            {/* your logo path */}
          </svg>
        </div>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex gap-6 lg:gap-8 xl:gap-10">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="px-3 py-2 font-medium text-[16px] lg:text-[18px] text-gray-700 hover:text-[#B75589]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Icons */}
        <div className="hidden md:flex items-center gap-4">
          {/* Notification Icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C13.1 2 14 2.9 14 4V5C17.3 5.6 20 8.6 20 12V17L22 19V20H2V19L4 17V12C4 8.6 6.7 5.6 10 5V4C10 2.9 10.9 2 12 2Z" fill="#47464C"/>
          </svg>
          {/* Dropdown Icon */}
          <svg width="24" height="24" fill="none" stroke="#47464C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9L12 15L18 9" />
          </svg>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 border-2 border-[#B75589] rounded"
        >
          <svg width="20" height="16" fill="none" stroke="#B75589" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 py-4 bg-white shadow-md">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="block px-3 py-2 font-medium text-gray-700 hover:text-[#B75589]"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
