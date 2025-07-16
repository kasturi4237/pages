import React from 'react';
import { FiSearch, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
export default function RecruitersPage() {
  const navigate = useNavigate();

  const handleSearch = () => {
    // You can pass query params here too, if needed
    navigate('/find-recruiters');
  };


  return (
    <div className="min-h-screen bg-white relative isolate">
      {/* Navbar */}
<header className="fixed top-0 left-0 w-full bg-white shadow-[0px_1px_3px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)] z-50 px-10 py-4">
  <div className="max-w-[1440px] mx-auto flex justify-between items-center">
    <div className="flex items-center gap-6">
      <h1 className="text-[32px] font-extrabold text-[#A10091] leading-[52px]">JobHunt</h1>
      <nav className="flex gap-6">
        <a href="#" className="text-[18px] font-medium text-[#1B1C1E] hover:text-[#AA1299]">Find a Job</a>
        <a href="#" className="text-[18px] font-medium text-[#1B1C1E] hover:text-[#AA1299]">Find Recruiters</a>
        <a href="#" className="text-[18px] font-medium text-[#1B1C1E] hover:text-[#AA1299]">CV Builder</a>
        <a href="#" className="text-[18px] font-medium text-[#1B1C1E] hover:text-[#AA1299]">Job Tracker</a>
        <a href="#" className="text-[18px] font-medium text-[#1B1C1E] hover:text-[#AA1299]">Extension</a>
      </nav>
    </div>
    <div className="flex gap-4 items-center">
      <button className="px-6 py-3 border-2 border-[#1B1C1C] text-[#1B1C1C] text-[18px] font-medium rounded">Login</button>
      <button className="px-6 py-3 bg-[#1B1C1C] text-white text-[18px] font-medium border-2 border-[#1B1C1C] rounded">Get Started</button>
    </div>
  </div>
</header>

      {/* Main Background Box */}
      <main className="pt-40 pb-20 px-6 flex flex-col items-center bg-gradient-to-br from-pink-100 to-pink-300 rounded-2xl mx-auto max-w-[1648px] shadow-md min-h-[850px]">

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
