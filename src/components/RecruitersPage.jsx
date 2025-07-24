import React from 'react';
import { FiSearch, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function RecruitersPage() {
  const navigate = useNavigate();

  const handleSearch = () => {
    // You can pass query params here too, if needed
    navigate('/find-recruiters');
  };


  return (
    <div className="flex flex-col items-center w-full max-w-[1728px] min-h-screen h-auto xl:h-[7566px] px-5 md:px-10 xl:px-[40px] pt-[140px] gap-[40px] mx-auto bg-white text-[#1B1C1C] font-['Manrope'] z-0">
      {/* Navbar */}
 <header className="absolute top-0 left-0 w-full h-[100px] flex justify-center items-center px-5 md:px-10 xl:px-[40px] bg-white z-[1] shadow-[0px_1px_3px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]">
  <div className="flex flex-row justify-between items-center w-full max-w-[1728px] h-[84px] gap-6 md:gap-10 xl:gap-[40px]">

    {/* Logo */}
    <div className="flex flex-col justify-center items-start w-auto xl:w-[364px] h-[84px]">
      <div className="text-[24px] md:text-[28px] xl:text-[32px] leading-[52px] font-extrabold text-[#A10091] font-['Manrope']">
        JobHunt
      </div>
    </div>

    {/* Nav Links */}
    <nav className="hidden lg:flex flex-w justify-center items-center gap-4 md:gap-6 xl:gap-[40px] text-[16px] md:text-[18px] font-['DM_Sans'] tracking-[0.5px]">
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

      {/* Main Background Box */}
      <main className="flex flex-col justify-center items-center py-[104px] isolate mx-auto w-[1648px] h-[859px] bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5] rounded-[20px]">

        {/* Title */}
        <div className="text-center max-w-4xl">
  <h1 className="text-[56px] md:text-[72px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-black to-black/50 leading-tight">
    Find the Recruiters of your Dream Company
  </h1>
  <p className="mt-4 text-[20px] md:text-[24px] text-[#1B1C1E] font-medium leading-relaxed">
    Connect directly with trusted recruiters from top global companies and fast-track your career.
  </p>
</div>


        {/* Search Bar */}
        <div className="mt-10 w-full max-w-[1200px] h-[72px] rounded-full bg-white flex items-center px-6 shadow-md gap-6">
          {/* Company */}
          <div className="flex items-center gap-3 w-full max-w-[284px]">
            <FiSearch size={24} className="text-gray-600" />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>

          <div className="h-8 w-[2px] bg-gray-300 rounded-full" />

          {/* Role */}
          <div className="flex items-center gap-3 w-full max-w-[284px]">
            <FiBriefcase size={24} className="text-gray-600" />
            <input
              type="text"
              placeholder="Role"
              className="w-full outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>

          <div className="h-8 w-[2px] bg-gray-300 rounded-full" />

          {/* Location */}
          <div className="flex items-center gap-3 w-full max-w-[284px]">
            <FiMapPin size={24} className="text-gray-600" />
            <input
              type="text"
              placeholder="Location"
              className="w-full outline-none text-gray-700 placeholder:text-gray-500"
            />
          </div>

          {/* Button */}
          <button onClick={handleSearch}  className="ml-auto bg-black text-white font-medium px-6 py-3 rounded-full hover:bg-gray-900 transition-all">
            Search
          </button>
        </div>

        
      </main>
    </div>
  );
}
