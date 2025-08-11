import React from 'react';
import { FiSearch, FiBriefcase, FiMapPin } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function RecruitersPage() {
  const navigate = useNavigate();

  const handleSearch = () => {
    //  pass query params here
    navigate('/find-recruiters');
  };


  return (
    <div className="flex flex-col items-center w-full max-w-[1728px] min-h-screen h-auto xl:h-[1117px] gap-[10px] mx-auto bg-white text-[#1B1C1C] font-['Manrope'] isolation-isolate z-0">
      <div className="flex flex-col justify-between items-center px-[40px] pt-[100px] pb-0 gap-[40px] w-[1728px] h-[1117px] flex-grow z-0">

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
      <main
  className="flex flex-col justify-center items-center py-[104px] mx-auto w-[1648px] h-[859px] rounded-[20px] isolation-isolate z-0"
  style={{
    background: 'linear-gradient(115.58deg, #FFD8E7 10.88%, #FF7AE5 89.12%)',
  }}
>

        {/* Background Pattern Lines */}
    <img
      src="src/assets/hero-pattern.svg"
      alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-[-1]"
     />


        {/* Title */}
        
        <div className="flex flex-col justify-center items-center p-0 gap-[80px] w-[1648px] h-[564px] self-stretch flex-grow-0 z-[1]">
          <div className="flex flex-col items-center p-0 w-[1648px] h-[276px] self-stretch flex-grow-0">
         <h1
          className="w-[912px] h-[192px] text-center font-['Manrope'] font-bold text-[88px] leading-[96px] tracking-[-0.25px] flex-grow-0"
          style={{
          background: 'linear-gradient(180deg, #1B1C1C 0%, rgba(27, 28, 28, 0.75) 80%, rgba(27, 28, 28, 0.35) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
         }}
        >
         Find the Recruiters of your Dream Company
         </h1>

          {/* SPACER */}
          <div className="w-[1648px] h-[8px] self-stretch flex-grow-0" />

        <p className="w-[820px] h-[76px] text-center font-['Manrope'] font-medium text-[24px] leading-[38px] text-[#47464C] flex-grow-0">
         Connect directly with trusted recruiters from top global companies and fast-track your career.
         </p>

          </div></div>


        {/* Search Bar */}
        <div className="flex flex-row justify-center items-center px-[24px] py-[8px] gap-[48px] w-[1200px] h-[72px] bg-white rounded-full shadow-[0px_1px_3px_rgba(0,0,0,0.3),_0px_4px_8px_3px_rgba(0,0,0,0.15)]">
          {/* Company */}
          <div className="flex flex-row items-center gap-4 w-[920px] h-[56px]">
            <div className="flex flex-row items-center gap-2 w-[284px] h-8 flex-grow order-0">
  {/* Icon */}
  <div className="flex justify-center items-center w-8 h-8 flex-grow-0 order-0 relative">
    {/* tabler-icon-search (32x32px SVG with border inside) */}
    
    <div className="w-8 h-8 flex items-center justify-center relative">
      <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 28.5L20 20.5M4 13.8333C4 15.059 4.24141 16.2727 4.71046 17.405C5.1795 18.5374 5.86699 19.5663 6.73367 20.433C7.60035 21.2997 8.62925 21.9872 9.76162 22.4562C10.894 22.9253 12.1077 23.1667 13.3333 23.1667C14.559 23.1667 15.7727 22.9253 16.905 22.4562C18.0374 21.9872 19.0663 21.2997 19.933 20.433C20.7997 19.5663 21.4872 18.5374 21.9562 17.405C22.4253 16.2727 22.6667 15.059 22.6667 13.8333C22.6667 12.6077 22.4253 11.394 21.9562 10.2616C21.4872 9.12925 20.7997 8.10035 19.933 7.23367C19.0663 6.36699 18.0374 5.6795 16.905 5.21046C15.7727 4.74141 14.559 4.5 13.3333 4.5C12.1077 4.5 10.894 4.74141 9.76162 5.21046C8.62925 5.6795 7.60035 6.36699 6.73367 7.23367C5.86699 8.10035 5.1795 9.12925 4.71046 10.2616C4.24141 11.394 4 12.6077 4 13.8333Z" stroke="#47464C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

     
    </div>
  </div>

  {/* Company Name */}
  <div className="w-[138px] h-7 text-[#47464C] text-[18px] leading-[28px] text-center font-dmSans font-light tracking-[0.5px] flex items-center justify-center">
    Company Name
  </div>
</div>

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
    </div>
  );
}
