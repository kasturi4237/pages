// src/components/Extension/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full h-[100px] flex justify-center items-center px-5 md:px-10 xl:px-[40px] bg-white z-[1] shadow-[0px_1px_3px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]">
      <div className="flex flex-row justify-between items-center w-full max-w-[1728px] h-[84px] gap-6 md:gap-10 xl:gap-[40px]">

        {/* Logo */}
        <div className="flex flex-col justify-center items-start w-auto xl:w-[364px] h-[84px]">
          <div className="text-[24px] md:text-[28px] xl:text-[32px] leading-[52px] font-extrabold text-[#A10091] font-['Manrope']">
            JobHunt
          </div>
        </div>

        {/* Nav Links */}
        <nav className="hidden lg:flex flex-wrap justify-center items-center gap-4 md:gap-6 xl:gap-[40px] text-[16px] md:text-[18px] font-['DM_Sans'] tracking-[0.5px]">
          <Link to="/" className="px-[12px] py-[8px] font-medium text-[#AA1299]">
            Find a Job
          </Link>
          <Link to="/recruiters" className="px-[12px] py-[8px] font-medium text-[#993D6F]">
            Find Recruiters
          </Link>
          <Link to="/cv-builder" className="px-[12px] py-[8px] font-medium text-[#1B1C1E]">
            CV Builder
          </Link>
          <Link to="/job-tracker" className="px-[12px] py-[8px] font-medium text-[#1B1C1E]">
            Job Tracker
          </Link>
          <Link to="/extension" className="px-[12px] py-[8px] font-medium text-[#1B1C1E]">
            Extension
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-row justify-end items-center gap-2 md:gap-4">
          <button className="px-[16px] md:px-[24px] py-[10px] md:py-[14px] h-[48px] md:h-[56px] border-[2px] border-[#1B1C1C] rounded bg-white text-[#1B1C1C] text-[16px] md:text-[18px] font-['DM_Sans'] font-medium tracking-[0.5px]">
            Login
          </button>
          <button className="px-[16px] md:px-[24px] py-[10px] md:py-[14px] h-[48px] md:h-[56px] border-[2px] border-[#1B1C1C] rounded bg-[#1B1C1C] text-white text-[16px] md:text-[18px] font-['DM_Sans'] font-medium tracking-[0.5px]">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
