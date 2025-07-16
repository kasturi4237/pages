// Complete homepage matching the provided layout and Figma CSS
import React from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const jobCategories = [
    'UI/UX Design', 'Sales', 'Development', 'Analytics',
    'Digital Media Specialist', 'Project Management',
    'Data Operator', 'Others'
  ];

  
  

  const companies = [
    {
      name: 'Google',
      desc: 'Google LLC is an American multinational corporation and technology company focusing on online advertising, search engine technology, and AI.'
    },
    {
      name: 'Amazon',
      desc: 'Amazon.com, Inc. is a multinational tech company focused on e-commerce, cloud computing, and AI.'
    },
    {
      name: 'Adobe',
      desc: 'Adobe Inc. offers tools from design to video/audio editing, app dev, layout, and animation software.'
    }
  ];


      

  return (
   <div className="flex flex-col items-center w-full max-w-[1728px] min-h-screen h-auto xl:h-[7566px] px-5 md:px-10 xl:px-[40px] pt-[140px] gap-[40px] mx-auto bg-white text-[#1B1C1C] font-['Manrope'] z-0">

      {/* Header */}
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



      {/* Hero Section */}
     <section className="relative flex flex-col items-center  justify-center px-4 sm:px-6 lg:px-0 py-[104px] w-full max-w-[1648px] min-h-[772px] bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5] rounded-[20px] overflow-hidden isolate">
    {/* Background Pattern Lines */}
    {/* <div className="absolute inset-0 z-0 pointer-events-none">
  {[
    { top: 57.92, height: 596.69 },
    { top: 0, height: 410.05 },
    { top: 56.05, height: 576.59 },
    { top: 54.19, height: 556.56 },
    { top: 52.32, height: 536.62 },
    { top: 50.45, height: 516.75 },
    { top: 48.58, height: 503.78 },
    { top: 46.71, height: 492.17 },
    { top: 44.84, height: 480.71 },
    { top: 42.98, height: 469.4 },
    { top: 41.11, height: 458.27 },
    { top: 39.24, height: 447.33 },
    { top: 37.37, height: 436.6 },
    { top: 35.5, height: 426.09 },
    { top: 33.63, height: 415.84 },
    { top: 31.77, height: 405.86 },
    { top: 29.9, height: 396.18 },
    { top: 28.03, height: 386.84 },
    { top: 26.16, height: 377.87 },
    { top: 24.29, height: 374.3 },
    { top: 22.42, height: 375.44 },
    { top: 20.55, height: 376.76 },
    { top: 18.68, height: 378.28 },
    { top: 16.82, height: 380.02 },
    { top: 14.95, height: 382.01 },
    { top: 13.08, height: 384.28 },
    { top: 11.21, height: 386.84 },
    { top: 9.34, height: 389.72 },
    { top: 7.47, height: 392.96 },
    { top: 5.61, height: 396.59 },
    { top: 3.74, height: 400.63 },
    { top: 1.87, height: 405.11 },
  ].map(({ top, height }, i) => (
    <div
      key={i}
      className="absolute w-[1732px] border-t border-white"
      style={{
        top: `${top}px`,
        height: `${height}px`,
        left: `calc(50% - 1732px / 2 - 42px)`,
      }}
    />
  ))}
     </div> */}



  {/* Hero Content */}
  <div
  className="relative z-10 flex flex-col justify-center items-center gap-[40px] 
             w-full max-w-[1648px] h-[564px] 
             px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0
             text-center mx-auto"
>
     <div className="flex flex-col items-center w-full max-w-[1648px] h-[276px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0">
  {/* Heading */}
  <h1
    className="text-[40px] sm:text-[64px] lg:text-[88px] leading-[48px] sm:leading-[72px] lg:leading-[96px] 
               font-extrabold text-center tracking-[-0.25px]
               bg-gradient-to-b from-[#1B1C1C] via-[#1B1C1C]/75 to-transparent 
               text-transparent bg-clip-text max-w-[800px]"
  >
    Your Launchpad to Career Success
  </h1>

  {/* Spacer */}
  <div className="h-2" /> {/* 8px gap */}

  {/* Subheading */}
  <p
    className="text-[#47464C] text-[18px] sm:text-[20px] lg:text-[24px] 
               leading-[28px] sm:leading-[32px] lg:leading-[38px] 
               font-medium text-center max-w-[820px]"
  >
    Discover the right opportunities, match with top companies, and take control of your career all in one place.
  </p>
</div>




    {/* Search Bar */}
    <div className="w-full max-w-[1200px] flex flex-col lg:flex-row items-center justify-between gap-4 px-6 py-2 bg-white rounded-full shadow-lg">
      <div className="flex items-center gap-2 w-full lg:w-[443px]">
        <FiSearch className="text-[#47464C] w-6 h-6" />
        <input
          type="text"
          placeholder="Search by job title, keyword or company"
          className="w-full text-[16px] sm:text-[18px] leading-[28px] placeholder-[#47464C] text-[#47464C] font-['DM_Sans'] font-light tracking-wide outline-none"
        />
      </div>

      <div className="hidden lg:block w-[2px] h-[32px] bg-[#C8C5CD] rounded-full" />

      <div className="flex items-center gap-2 w-full lg:w-[443px]">
        <FiMapPin className="text-[#47464C] w-6 h-6" />
        <input
          type="text"
          placeholder="Enter city, state, zip or remote"
          className="w-full text-[16px] sm:text-[18px] leading-[28px] placeholder-[#47464C] text-[#47464C] font-['DM_Sans'] font-light tracking-wide outline-none"
        />
      </div>

      <button className="w-full lg:w-auto bg-[#1B1C1C] text-white text-[18px] font-medium font-['DM_Sans'] px-6 py-3 rounded-full border-2 border-[#1B1C1C]">
        Search
      </button>
    </div>

    {/* Categories */}
   <div className="mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center max-w-[1040px] px-4">
  {jobCategories.map((category, i) => (
    <button
      key={i}
      className="flex items-center gap-2 px-6 py-3 text-[16px] sm:text-[18px] font-medium font-['DM_Sans'] border-2 border-[#1B1C1C] rounded-full text-[#1B1C1C] bg-white hover:bg-[#1B1C1C] hover:text-white transition-all"
    >
      {i === 0 && (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M8.2002 13.2C9.21789 10.505 10.9443 8.13474 13.1973 6.33944C15.4502 4.54414 18.146 3.3904 21.0002 3C20.6098 5.85418 19.4557 8.55002 17.6604 10.8029C15.8651 13.0559 13.4948 14.7823 10.7998 15.8M10.6001 9C12.5433 9.89687 14.1032 11.4568 15.0001 13.4M3 21V17C3 16.2089 3.2346 15.4355 3.67412 14.7777C4.11365 14.1199 4.73836 13.6072 5.46927 13.3045C6.20017 13.0017 7.00444 12.9225 7.78036 13.0769C8.55629 13.2312 9.26902 13.6122 9.82843 14.1716C10.3878 14.731 10.7688 15.4437 10.9231 16.2196C11.0775 16.9956 10.9983 17.7998 10.6955 18.5307C10.3928 19.2616 9.88008 19.8864 9.22228 20.3259C8.56448 20.7654 7.79113 21 7 21H3Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {i === 1 && (
        <svg className="w-[18px] h-[20px]" viewBox="0 0 18 20" fill="none">
          <path
            d="M6 9V4C6 3.20435 6.31607 2.44129 6.87868 1.87868C7.44129 1.31607 8.20435 1 9 1C9.79565 1 10.5587 1.31607 11.1213 1.87868C11.6839 2.44129 12 3.20435 12 4V9M3.33081 6H14.6698C14.9582 5.99997 15.2431 6.06229 15.5052 6.1827C15.7672 6.30311 16.0001 6.47876 16.1879 6.6976C16.3756 6.91645 16.5139 7.17331 16.5931 7.45059C16.6723 7.72786 16.6906 8.01898 16.6468 8.304L15.3918 16.456C15.2829 17.1644 14.9239 17.8105 14.3798 18.2771C13.8357 18.7438 13.1426 19.0002 12.4258 19H5.57381C4.8572 19 4.16429 18.7434 3.62043 18.2768C3.07658 17.8102 2.71773 17.1643 2.60881 16.456L1.35381 8.304C1.30997 8.01898 1.32829 7.72786 1.40751 7.45059C1.48673 7.17331 1.62497 6.91645 1.81275 6.6976C2.00054 6.47876 2.23342 6.30311 2.49545 6.1827C2.75747 6.06229 3.04244 5.99997 3.33081 6Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {i === 2 && (
        <svg className="w-[20px] h-[18px]" viewBox="0 0 20 18" fill="none">
          <path
            d="M5 17H15M7 13V17M13 13V17M1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H18C18.2652 1 18.5196 1.10536 18.7071 1.29289C18.8946 1.48043 19 1.73478 19 2V12C19 12.2652 18.8946 12.5196 18.7071 12.7071C18.5196 12.8946 18.2652 13 18 13H2C1.73478 13 1.48043 12.8946 1.29289 12.7071C1.10536 12.5196 1 12.2652 1 12V2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {i === 3 && (
        <svg className="w-[20px] h-[20px]" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 5C5 5.53043 4.78929 6.03914 4.41421 6.41421C4.03914 6.78929 3.53043 7 3 7C2.46957 7 1.96086 6.78929 1.58579 6.41421C1.21071 6.03914 1 5.53043 1 5C1 4.46957 1.21071 3.96086 1.58579 3.58579C1.96086 3.21071 2.46957 3 3 3C3.53043 3 4.03914 3.21071 4.41421 3.58579C4.78929 3.96086 5 4.46957 5 5ZM5 5L13 4M13 4C13 4.79565 13.3161 5.55871 13.8787 6.12132C14.4413 6.68393 15.2044 7 16 7C16.7956 7 17.5587 6.68393 18.1213 6.12132C18.6839 5.55871 19 4.79565 19 4C19 3.20435 18.6839 2.44129 18.1213 1.87868C17.5587 1.31607 16.7956 1 16 1C15.2044 1 14.4413 1.31607 13.8787 1.87868C13.3161 2.44129 13 3.20435 13 4ZM7 15L12 13.5M4.5 6.5L12.31 11.87M12 13C12 13.5304 12.2107 14.0391 12.5858 14.4142C12.9609 14.7893 13.4696 15 14 15C14.5304 15 15.0391 14.7893 15.4142 14.4142C15.7893 14.0391 16 13.5304 16 13C16 12.4696 15.7893 11.9609 15.4142 11.5858C15.0391 11.2107 14.5304 11 14 11C13.4696 11 12.9609 11.2107 12.5858 11.5858C12.2107 11.9609 12 12.4696 12 13ZM1 16C1 16.7956 1.31607 17.5587 1.87868 18.1213C2.44129 18.6839 3.20435 19 4 19C4.79565 19 5.55871 18.6839 6.12132 18.1213C6.68393 17.5587 7 16.7956 7 16C7 15.2044 6.68393 14.4413 6.12132 13.8787C5.55871 13.3161 4.79565 13 4 13C3.20435 13 2.44129 13.3161 1.87868 13.8787C1.31607 14.4413 1 15.2044 1 16Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      { i === 4 && (
  <svg className="w-[14px] h-[20px]" viewBox="0 0 14 20" fill="none">
    <path d="M6 2H8M7 15V15.01M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H11C11.5304 1 12.0391 1.21071 12.4142 1.58579C12.7893 1.96086 13 2.46957 13 3V17C13 17.5304 12.7893 18.0391 12.4142 18.4142C12.0391 18.7893 11.5304 19 11 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

{ i === 5 && (
  <svg className="w-[17px] h-[20px]" viewBox="0 0 17 20" fill="none">
    <path d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9M10 17L12 19L16 15M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

{ i === 6 && (
  <svg className="w-[18px] h-[21px]" viewBox="0 0 18 21" fill="none">
    <path d="M1 12V9C1 6.87827 1.84285 4.84344 3.34315 3.34315C4.84344 1.84285 6.87827 1 9 1C11.1217 1 13.1566 1.84285 14.6569 3.34315C16.1571 4.84344 17 6.87827 17 9V12M1 12C1 11.4696 1.21071 10.9609 1.58579 10.5858C1.96086 10.2107 2.46957 10 3 10H4C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12V15C6 15.5304 5.78929 16.0391 5.41421 16.4142C5.03914 16.7893 4.53043 17 4 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V12ZM17 12C17 11.4696 16.7893 10.9609 16.4142 10.5858C16.0391 10.2107 15.5304 10 15 10H14C13.4696 10 12.9609 10.2107 12.5858 10.5858C12.2107 10.9609 12 11.4696 12 12V15C12 15.5304 12.2107 16.0391 12.5858 16.4142C12.9609 16.7893 13.4696 17 14 17H15M17 12V15C17 15.5304 16.7893 16.0391 16.4142 16.4142C16.0391 16.7893 15.5304 17 15 17M15 17C15 18.657 12.314 20 9 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)}

        {/* {i === 7 && (
      <svg className="w-[4px] h-[18px]" viewBox="0 0 4 18" fill="none">
        <path d="M1 9C1 9.26522 1.10536 9.51957 1.29289 9.70711C1.48043 9.89464 1.73478 10 2 10C2.26522 10 2.51957 9.89464 2.70711 9.70711C2.89464 9.51957 3 9.26522 3 9C3 8.73478 2.89464 8.48043 2.70711 8.29289C2.51957 8.10536 2.26522 8 2 8C1.73478 8 1.48043 8.10536 1.29289 8.29289C1.10536 8.48043 1 8.73478 1 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 16C1 16.2652 1.10536 16.5196 1.29289 16.7071C1.48043 16.8946 1.73478 17 2 17C2.26522 17 2.51957 16.8946 2.70711 16.7071C2.89464 16.5196 3 16.2652 3 16C3 15.7348 2.89464 15.4804 2.70711 15.2929C2.51957 15.1054 2.26522 15 2 15C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 2C1 2.26522 1.10536 2.51957 1.29289 2.70711C1.48043 2.89464 1.73478 3 2 3C2.26522 3 2.51957 2.89464 2.70711 2.70711C2.89464 2.51957 3 2.26522 3 2C3 1.73478 2.89464 1.48043 2.70711 1.29289C2.51957 1.10536 2.26522 1 2 1C1.73478 1 1.48043 1.10536 1.29289 1.29289C1.10536 1.48043 1 1.73478 1 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )} */}

      {category}
    </button>
  ))}
</div>
  </div>
</section>




    {/*WHY US */}
<section className="w-full py-20 px-10 flex flex-col items-center bg-[#FFF6FA] text-center">
  
  
  <div className="flex flex-row gap-[40px] mt-20 w-full max-w-[1648px] justify-between">
    {/* Block 1 */}
    <div className="flex flex-col items-center w-[440px] h-[252px]">
      <div className="relative w-[91px] h-[40px] mb-4">
  {/* % symbol */}
  <div className="absolute left-[54px] top-[-12px] w-[37px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
    %
  </div>

  {/* Stack for first digit (0) */}
  <div className="absolute top-[-12px] left-[0px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
    {[0,1,2,3,4,5,6,7,8,9].map((num) => (
      <div
        key={`digit-1-${num}`}
        className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
      >
        {num}
      </div>
    ))}
  </div>

  {/* Stack for second digit (0) */}
  <div className="absolute top-[-12px] left-[27px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
    {[0,1,2,3,4,5,6,7,8,9].map((num) => (
      <div
        key={`digit-2-${num}`}
        className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
      >
        {num}
      </div>
    ))}
  </div>
</div>

      <h3 className="w-[440.67px] h-[52px] text-[32px] leading-[52px] font-bold text-center text-[#180323] font-['Manrope']">
  Swift & Seamless
</h3>

      <p className="w-[440.67px] h-[152px] text-[24px] leading-[38px] font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope']">
  Experience a streamlined process from application to offer. Save time and reduce stress with our smart matching engine.
</p>

    </div>

    {/* Divider */}
    <div className="w-[3px] h-[252px] bg-[rgba(24,3,35,0.15)] rounded-full" />

    {/* Block 2 */}
    <div className="flex flex-col items-center w-[440px] h-[252px]">
      <div className="relative w-[91px] h-[40px] mb-4">
  {/* % symbol */}
  <div className="absolute left-[54px] top-[-12px] w-[37px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
    %
  </div>

  {/* Stack for first digit (0) */}
  <div className="absolute top-[-12px] left-[0px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
    {[0,1,2,3,4,5,6,7,8,9].map((num) => (
      <div
        key={`digit-1-${num}`}
        className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
      >
        {num}
      </div>
    ))}
  </div>

  {/* Stack for second digit (0) */}
  <div className="absolute top-[-12px] left-[27px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
    {[0,1,2,3,4,5,6,7,8,9].map((num) => (
      <div
        key={`digit-2-${num}`}
        className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
      >
        {num}
      </div>
    ))}
  </div>
</div>

      <h3 className="w-[440.67px] h-[52px] text-[32px] leading-[52px] font-bold text-center text-[#180323] font-['Manrope']">
  Tailored Opportunities
</h3>

      <p className="w-[440.67px] h-[114px] text-[24px] leading-[38px] font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope']">
  Get job suggestions that align with your skills, preferences, and goals so you never miss the perfect role.
</p>

    </div>

    {/* Divider */}
    <div className="w-[3px] h-[252px] bg-[rgba(24,3,35,0.15)] rounded-full" />

    {/* Block 3 */}
    <div className="flex flex-col items-center w-[440px] h-[252px]">
      <div className="relative w-[91px] h-[40px] mb-4">
  {/* % symbol */}
  <div className="absolute left-[54px] top-[-12px] w-[37px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
    %
  </div>

  {/* Stack for first digit (0) */}
  <div className="absolute top-[-12px] left-[0px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
    {[0,1,2,3,4,5,6,7,8,9].map((num) => (
      <div
        key={`digit-1-${num}`}
        className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
      >
        {num}
      </div>
    ))}
  </div>

  {/* Stack for second digit (0) */}
  <div className="absolute top-[-12px] left-[27px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
    {[0,1,2,3,4,5,6,7,8,9].map((num) => (
      <div
        key={`digit-2-${num}`}
        className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
      >
        {num}
      </div>
    ))}
  </div>
</div>

      <h3 className="w-[440.67px] h-[52px] text-[32px] leading-[52px] font-bold text-center text-[#180323] font-['Manrope']">
  Diverse Job Selections
</h3>

      <p className="w-[440.67px] h-[114px] text-[24px] leading-[38px] font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope']">
  Explore a wide range of roles across top industries, catering to every experience level and interest area.
</p>


    </div>
  </div>
</section>








          
    {/* Features Section */}
<section className="flex flex-col items-center w-[1728px] h-[3830px] pt-[80px] bg-white">

  <h3 className="w-[1728px] h-[38px] text-[24px] leading-[38px] font-bold text-[#AA1299] text-center font-[Manrope]">
  HOW ARE WE BETTER
</h3>

  
<div className="w-[100px] h-[8px]" />
  <h2 className="w-[880px] h-[180px] font-[Manrope] font-bold text-[56px] leading-[90px] tracking-[-0.25px] text-[#1B1C1C] text-center">
  How We Help Elevate Your Career
</h2>

  <div className="flex flex-col items-start gap-[256px] w-[1252px] h-[3524px] isolate">
    {/* FRAME  467*/}
  <div className="flex justify-center items-center gap-[64px] w-full max-w-[1252px] h-[500px] relative z-[4]">
  {/* Left Image Box */}
  <div className="w-[500px] h-[500px]  rounded-xl relative">
    
   <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M500 382.4H0V382.65H500V382.4Z" fill="#EBEBEB"/>
<path d="M85.58 391.92H52.46V392.17H85.58V391.92Z" fill="#EBEBEB"/>
<path d="M225 392.05H171.14V392.3H225V392.05Z" fill="#EBEBEB"/>
<path d="M124.96 397.08H105.77V397.33H124.96V397.08Z" fill="#EBEBEB"/>
<path d="M446 396.96H426.77V397.21H446V396.96Z" fill="#EBEBEB"/>
<path d="M417.86 396.96H387.57V397.21H417.86V396.96Z" fill="#EBEBEB"/>
<path d="M370.89 395.31H328.33V395.56H370.89V395.31Z" fill="#EBEBEB"/>
<path d="M237 337.8H43.91C42.3973 337.797 40.9475 337.195 39.8788 336.124C38.8102 335.053 38.21 333.603 38.21 332.09V60.66C38.2231 59.156 38.8292 57.718 39.8964 56.6582C40.9637 55.5985 42.4059 55.0026 43.91 55H237C238.514 55 239.967 55.6016 241.038 56.6724C242.108 57.7433 242.71 59.1956 242.71 60.71V332.09C242.71 333.604 242.108 335.057 241.038 336.128C239.967 337.198 238.514 337.8 237 337.8ZM43.91 55.2C42.4636 55.2026 41.0774 55.7791 40.0556 56.8027C39.0338 57.8264 38.46 59.2136 38.46 60.66V332.09C38.46 333.536 39.0338 334.924 40.0556 335.947C41.0774 336.971 42.4636 337.547 43.91 337.55H237C238.447 337.547 239.834 336.971 240.858 335.948C241.881 334.924 242.457 333.537 242.46 332.09V60.66C242.457 59.2127 241.881 57.8255 240.858 56.8021C239.834 55.7787 238.447 55.2026 237 55.2H43.91Z" fill="#EBEBEB"/>
<path d="M453.31 337.8H260.21C258.696 337.797 257.246 337.195 256.175 336.125C255.105 335.054 254.503 333.604 254.5 332.09V60.66C254.516 59.1551 255.124 57.7171 256.193 56.6576C257.262 55.5981 258.705 55.0025 260.21 55H453.31C454.812 55.0052 456.252 55.6022 457.317 56.6617C458.382 57.7212 458.987 59.1578 459 60.66V332.09C459 333.601 458.401 335.05 457.335 336.121C456.268 337.191 454.821 337.795 453.31 337.8ZM260.21 55.2C258.763 55.2026 257.375 55.7787 256.352 56.8021C255.329 57.8255 254.753 59.2127 254.75 60.66V332.09C254.753 333.537 255.329 334.924 256.352 335.948C257.375 336.971 258.763 337.547 260.21 337.55H453.31C454.757 337.547 456.145 336.971 457.168 335.948C458.191 334.924 458.767 333.537 458.77 332.09V60.66C458.767 59.2127 458.191 57.8255 457.168 56.8021C456.145 55.7787 454.757 55.2026 453.31 55.2H260.21Z" fill="#EBEBEB"/>
<path d="M302.22 382.4H330.54V241.5H302.22V382.4Z" fill="#E6E6E6"/>
<path d="M307.59 382.4H302.21V367.1H313.23L307.59 382.4Z" fill="#F0F0F0"/>
<path d="M408.06 382.4H436.38V241.5H408.06V382.4Z" fill="#E6E6E6"/>
<path d="M302.22 373.01H412.76V241.5H302.22V373.01Z" fill="#F0F0F0"/>
<path d="M306.39 328.31V353.88H355.68V328.31H306.39Z" fill="#E6E6E6"/>
<path d="M359.29 328.31V353.88H408.58V328.31H359.29Z" fill="#E6E6E6"/>
<path d="M379.06 332.59H388.81C390.907 332.591 392.981 332.165 394.907 331.336C396.833 330.507 398.57 329.294 400.01 327.77H367.86C369.3 329.294 371.037 330.507 372.963 331.336C374.889 332.165 376.963 332.591 379.06 332.59Z" fill="#F0F0F0"/>
<path d="M325.66 332.59H335.41C337.507 332.591 339.581 332.165 341.507 331.336C343.433 330.507 345.17 329.294 346.61 327.77H314.46C315.9 329.294 317.637 330.507 319.563 331.336C321.488 332.165 323.563 332.591 325.66 332.59Z" fill="#F0F0F0"/>
<path d="M306.38 288.56V314.13H355.67V288.56H306.38Z" fill="#E6E6E6"/>
<path d="M359.29 288.57V314.14H408.58V288.57H359.29Z" fill="#E6E6E6"/>
<path d="M379.06 292.84H388.81C390.906 292.836 392.979 292.404 394.903 291.572C396.827 290.74 398.561 289.525 400 288H367.86C369.3 289.526 371.036 290.742 372.961 291.574C374.887 292.406 376.962 292.837 379.06 292.84Z" fill="#F0F0F0"/>
<path d="M325.66 292.84H335.41C337.506 292.841 339.579 292.415 341.505 291.588C343.431 290.761 345.168 289.55 346.61 288.03H314.46C315.902 289.55 317.639 290.761 319.565 291.588C321.49 292.415 323.564 292.841 325.66 292.84Z" fill="#F0F0F0"/>
<path d="M306.39 248.82V274.39H355.68V248.82H306.39Z" fill="#E6E6E6"/>
<path d="M359.29 248.82V274.39H408.58V248.82H359.29Z" fill="#E6E6E6"/>
<path d="M379.06 253.1H388.81C390.907 253.101 392.981 252.675 394.907 251.846C396.833 251.017 398.57 249.804 400.01 248.28H367.86C369.3 249.804 371.037 251.017 372.963 251.846C374.889 252.675 376.963 253.101 379.06 253.1Z" fill="#F0F0F0"/>
<path d="M325.66 253.1H335.41C337.507 253.101 339.581 252.675 341.507 251.846C343.433 251.017 345.17 249.804 346.61 248.28H314.46C315.9 249.804 317.637 251.017 319.563 251.846C321.488 252.675 323.563 253.101 325.66 253.1Z" fill="#F0F0F0"/>
<path d="M407.38 382.4H412.76V367.1H401.74L407.38 382.4Z" fill="#F0F0F0"/>
<path d="M412.04 144.77L416.37 156.61H412.04L385.47 144.77H412.04Z" fill="#F5F5F5"/>
<path d="M416.37 144.77V156.61L389.81 144.77H416.37Z" fill="#E6E6E6"/>
<path d="M307.87 144.77L312.2 156.61H307.87L281.31 144.77H307.87Z" fill="#F5F5F5"/>
<path d="M312.2 144.77V156.61L285.64 144.77H312.2Z" fill="#E6E6E6"/>
<path d="M435.87 136.31H406.98V145.32H435.87V136.31Z" fill="#E6E6E6"/>
<path d="M263.35 145.33L406.98 145.33V136.32L263.35 136.32V145.33Z" fill="#F5F5F5"/>
<path d="M377.81 105C377.81 105 378.1 136.32 388.91 136.32C399.72 136.32 400 105 400 105H377.81Z" fill="#F0F0F0"/>
<path d="M310.78 126.1C310.78 126.1 311.54 136.31 340.62 136.31C369.7 136.31 370.46 126.1 370.46 126.1H310.78Z" fill="#F0F0F0"/>
<path d="M224.36 382.4H226.29L231.82 355.15L232.82 350.37L238.82 320.67H262L274.53 382.4H276.47L263.7 319.54C263.658 319.325 263.542 319.131 263.372 318.992C263.202 318.853 262.989 318.778 262.77 318.78H238.05C237.832 318.779 237.62 318.854 237.452 318.993C237.284 319.132 237.17 319.326 237.13 319.54L231.83 345.62L230.83 350.39L224.36 382.4Z" fill="#F0F0F0"/>
<path d="M187.23 382.4H189.16L201.7 320.67H224.82L230.82 350.39L231.82 355.15L237.36 382.4H239.29L232.79 350.4L231.79 345.65L226.49 319.57C226.438 319.36 226.32 319.172 226.152 319.035C225.984 318.898 225.776 318.819 225.56 318.81H200.93C200.711 318.808 200.498 318.883 200.328 319.022C200.158 319.161 200.042 319.355 200 319.57L187.23 382.4Z" fill="#F0F0F0"/>
<path d="M265.46 311.58H198.19C196.647 311.583 195.168 312.197 194.078 313.288C192.987 314.378 192.373 315.857 192.37 317.4V317.6C192.37 318.165 192.594 318.707 192.994 319.106C193.393 319.506 193.935 319.73 194.5 319.73H269.15C269.715 319.73 270.257 319.506 270.656 319.106C271.056 318.707 271.28 318.165 271.28 317.6V317.4C271.277 315.857 270.663 314.378 269.572 313.288C268.482 312.197 267.003 311.583 265.46 311.58Z" fill="#F0F0F0"/>
<path d="M156.85 382.4H158.78L164.31 355.15L165.31 350.37L171.31 320.67H194.43L207 382.4H208.94L196.17 319.54C196.128 319.325 196.012 319.131 195.842 318.992C195.672 318.853 195.459 318.778 195.24 318.78H170.54C170.322 318.779 170.11 318.854 169.942 318.993C169.774 319.132 169.66 319.326 169.62 319.54L164.32 345.62L163.32 350.39L156.85 382.4Z" fill="#F0F0F0"/>
<path d="M119.72 382.4H121.66L134.19 320.67H157.32L163.32 350.39L164.32 355.15L169.86 382.4H171.79L165.29 350.4L164.29 345.65L159 319.54C158.948 319.33 158.829 319.142 158.662 319.005C158.494 318.868 158.286 318.789 158.07 318.78H133.42C133.201 318.778 132.988 318.853 132.818 318.992C132.648 319.131 132.532 319.325 132.49 319.54L119.72 382.4Z" fill="#F0F0F0"/>
<path d="M198 311.58H130.68C129.137 311.583 127.658 312.197 126.568 313.288C125.477 314.378 124.863 315.857 124.86 317.4V317.6C124.86 318.165 125.084 318.707 125.484 319.106C125.883 319.506 126.425 319.73 126.99 319.73H201.65C201.929 319.73 202.206 319.675 202.464 319.568C202.721 319.46 202.956 319.303 203.153 319.105C203.35 318.908 203.506 318.673 203.611 318.414C203.717 318.156 203.771 317.879 203.77 317.6V317.4C203.767 315.866 203.16 314.395 202.08 313.305C201 312.216 199.534 311.596 198 311.58Z" fill="#F0F0F0"/>
<path d="M84.33 232.6H180.98L180.98 77.77H84.33L84.33 232.6Z" fill="#E6E6E6"/>
<path d="M78.02 232.6H178.03L178.03 77.77H78.02L78.02 232.6Z" fill="#F0F0F0"/>
<path d="M84.33 244.33H180.98V232.59H84.33V244.33Z" fill="#E6E6E6"/>
<path d="M67.5 244.33H167.51V232.59H67.5V244.33Z" fill="#F0F0F0"/>
<path d="M169.18 223.76V86.61H86.85L86.85 223.76H169.18Z" fill="#FAFAFA"/>
<path d="M169.89 223.75L140.93 86.61H116.43L145.39 223.75H169.89Z" fill="white"/>
<path d="M163.22 207.37C163.387 207.37 163.547 207.304 163.665 207.185C163.784 207.067 163.85 206.907 163.85 206.74V92.36C163.85 92.1929 163.784 92.0326 163.665 91.9145C163.547 91.7963 163.387 91.73 163.22 91.73C163.053 91.73 162.893 91.7963 162.774 91.9145C162.656 92.0326 162.59 92.1929 162.59 92.36V206.74C162.59 206.907 162.656 207.067 162.774 207.185C162.893 207.304 163.053 207.37 163.22 207.37Z" fill="#F0F0F0"/>
<path d="M140.13 223.75L111.17 86.61H101.62L130.57 223.75H140.13Z" fill="white"/>
<path d="M87.98 223.76L87.98 86.61H86.86L86.86 223.76H87.98Z" fill="#E6E6E6"/>
<path opacity="0.6" d="M75.92 93.4H172.57L173.39 90.04H76.74L75.92 93.4Z" fill="#F0F0F0"/>
<path opacity="0.6" d="M75.92 101.21H172.57L173.39 97.86H76.74L75.92 101.21Z" fill="#F0F0F0"/>
<path opacity="0.6" d="M75.92 109.03H172.57L173.39 105.67H76.74L75.92 109.03Z" fill="#F0F0F0"/>
<path opacity="0.6" d="M75.92 116.84H172.57L173.39 113.49H76.74L75.92 116.84Z" fill="#F0F0F0"/>
<path opacity="0.6" d="M75.92 124.66H172.57L173.39 121.31H76.74L75.92 124.66Z" fill="#F0F0F0"/>
<path opacity="0.6" d="M75.92 132.48H172.57L173.39 129.12H76.74L75.92 132.48Z" fill="#F0F0F0"/>
<path d="M250 427.56C357.082 427.56 443.89 422.492 443.89 416.24C443.89 409.988 357.082 404.92 250 404.92C142.917 404.92 56.11 409.988 56.11 416.24C56.11 422.492 142.917 427.56 250 427.56Z" fill="#F5F5F5"/>
<path d="M243.12 262.73H182.03C181.168 262.73 180.47 263.428 180.47 264.29V289.77C180.47 290.632 181.168 291.33 182.03 291.33H243.12C243.982 291.33 244.68 290.632 244.68 289.77V264.29C244.68 263.428 243.982 262.73 243.12 262.73Z" fill="#7E57C2"/>
<path opacity="0.6" d="M243.12 262.73H182.03C181.168 262.73 180.47 263.428 180.47 264.29V289.77C180.47 290.632 181.168 291.33 182.03 291.33H243.12C243.982 291.33 244.68 290.632 244.68 289.77V264.29C244.68 263.428 243.982 262.73 243.12 262.73Z" fill="white"/>
<path opacity="0.1" d="M243.11 262.73H182C181.586 262.73 181.189 262.894 180.897 263.187C180.604 263.479 180.44 263.876 180.44 264.29V272.46L212.24 278.72C212.435 278.76 212.635 278.76 212.83 278.72L244.64 272.46V264.29C244.64 263.881 244.48 263.489 244.194 263.197C243.908 262.906 243.518 262.738 243.11 262.73Z" fill="black"/>
<path d="M244.45 252.27H225.79V249.14C225.787 247.847 225.272 246.607 224.358 245.692C223.443 244.778 222.203 244.263 220.91 244.26H204.24C202.947 244.263 201.707 244.778 200.792 245.692C199.878 246.607 199.363 247.847 199.36 249.14V252.27H180.71C180.302 252.27 179.91 252.432 179.621 252.721C179.332 253.01 179.17 253.402 179.17 253.81V269.22C179.172 269.576 179.296 269.92 179.522 270.195C179.748 270.47 180.061 270.659 180.41 270.73L212.28 277C212.476 277.03 212.675 277.03 212.87 277L244.74 270.73C245.09 270.659 245.404 270.471 245.632 270.196C245.859 269.921 245.986 269.577 245.99 269.22V253.81C245.99 253.402 245.828 253.01 245.539 252.721C245.25 252.432 244.858 252.27 244.45 252.27ZM203.07 249.14C203.073 248.83 203.196 248.532 203.415 248.312C203.634 248.092 203.93 247.965 204.24 247.96H220.91C221.22 247.965 221.517 248.092 221.735 248.312C221.954 248.532 222.077 248.83 222.08 249.14V252.27H203.08L203.07 249.14Z" fill="#7E57C2"/>
<path opacity="0.6" d="M244.45 252.27H225.79V249.14C225.787 247.847 225.272 246.607 224.358 245.692C223.443 244.778 222.203 244.263 220.91 244.26H204.24C202.947 244.263 201.707 244.778 200.792 245.692C199.878 246.607 199.363 247.847 199.36 249.14V252.27H180.71C180.302 252.27 179.91 252.432 179.621 252.721C179.332 253.01 179.17 253.402 179.17 253.81V269.22C179.172 269.576 179.296 269.92 179.522 270.195C179.748 270.47 180.061 270.659 180.41 270.73L212.28 277C212.476 277.03 212.675 277.03 212.87 277L244.74 270.73C245.09 270.659 245.404 270.471 245.632 270.196C245.859 269.921 245.986 269.577 245.99 269.22V253.81C245.99 253.402 245.828 253.01 245.539 252.721C245.25 252.432 244.858 252.27 244.45 252.27ZM203.07 249.14C203.073 248.83 203.196 248.532 203.415 248.312C203.634 248.092 203.93 247.965 204.24 247.96H220.91C221.22 247.965 221.517 248.092 221.735 248.312C221.954 248.532 222.077 248.83 222.08 249.14V252.27H203.08L203.07 249.14Z" fill="white"/>
<path d="M215.87 272.79H209.29C208.473 272.79 207.81 273.453 207.81 274.27V278.43C207.81 279.247 208.473 279.91 209.29 279.91H215.87C216.687 279.91 217.35 279.247 217.35 278.43V274.27C217.35 273.453 216.687 272.79 215.87 272.79Z" fill="#7E57C2"/>
<path opacity="0.3" d="M215.87 272.79H209.29C208.473 272.79 207.81 273.453 207.81 274.27V278.43C207.81 279.247 208.473 279.91 209.29 279.91H215.87C216.687 279.91 217.35 279.247 217.35 278.43V274.27C217.35 273.453 216.687 272.79 215.87 272.79Z" fill="white"/>
<path d="M243.12 78.77H182.03C181.168 78.77 180.47 79.4685 180.47 80.33V105.81C180.47 106.672 181.168 107.37 182.03 107.37H243.12C243.982 107.37 244.68 106.672 244.68 105.81V80.33C244.68 79.4685 243.982 78.77 243.12 78.77Z" fill="#7E57C2"/>
<path opacity="0.6" d="M243.12 78.77H182.03C181.168 78.77 180.47 79.4685 180.47 80.33V105.81C180.47 106.672 181.168 107.37 182.03 107.37H243.12C243.982 107.37 244.68 106.672 244.68 105.81V80.33C244.68 79.4685 243.982 78.77 243.12 78.77Z" fill="white"/>
<path opacity="0.1" d="M243.11 78.77H182C181.586 78.77 181.189 78.9344 180.897 79.2269C180.604 79.5195 180.44 79.9163 180.44 80.33V88.5L212.24 94.76C212.435 94.7999 212.635 94.7999 212.83 94.76L244.64 88.5V80.33C244.64 79.9214 244.48 79.5291 244.194 79.2374C243.908 78.9457 243.518 78.7779 243.11 78.77Z" fill="black"/>
<path d="M244.45 68.31H225.79V65.18C225.787 63.8866 225.272 62.6469 224.358 61.7323C223.443 60.8177 222.203 60.3027 220.91 60.3H204.24C202.947 60.3027 201.707 60.8177 200.792 61.7323C199.878 62.6469 199.363 63.8866 199.36 65.18V68.31H180.71C180.302 68.31 179.91 68.4723 179.621 68.7611C179.332 69.0499 179.17 69.4416 179.17 69.85V85.2601C179.17 85.6163 179.294 85.9615 179.52 86.2369C179.746 86.5122 180.061 86.7006 180.41 86.77L212.28 93C212.475 93.0399 212.675 93.0399 212.87 93L244.74 86.7301C245.086 86.6644 245.399 86.4831 245.628 86.216C245.857 85.9488 245.988 85.6117 246 85.2601V69.85C246 69.647 245.96 69.4459 245.882 69.2584C245.804 69.0709 245.69 68.9007 245.545 68.7576C245.401 68.6144 245.23 68.5012 245.042 68.4244C244.854 68.3476 244.653 68.3087 244.45 68.31ZM203.07 65.18C203.07 64.8688 203.193 64.5702 203.412 64.3492C203.631 64.1282 203.929 64.0027 204.24 64H220.91C221.22 64.0027 221.516 64.1268 221.734 64.3456C221.953 64.5645 222.077 64.8606 222.08 65.17V68.3001H203.08L203.07 65.18Z" fill="#7E57C2"/>
<path opacity="0.6" d="M244.45 68.31H225.79V65.18C225.787 63.8866 225.272 62.6469 224.358 61.7323C223.443 60.8177 222.203 60.3027 220.91 60.3H204.24C202.947 60.3027 201.707 60.8177 200.792 61.7323C199.878 62.6469 199.363 63.8866 199.36 65.18V68.31H180.71C180.302 68.31 179.91 68.4723 179.621 68.7611C179.332 69.0499 179.17 69.4416 179.17 69.85V85.2601C179.17 85.6163 179.294 85.9615 179.52 86.2369C179.746 86.5122 180.061 86.7006 180.41 86.77L212.28 93C212.475 93.0399 212.675 93.0399 212.87 93L244.74 86.7301C245.086 86.6644 245.399 86.4831 245.628 86.216C245.857 85.9488 245.988 85.6117 246 85.2601V69.85C246 69.647 245.96 69.4459 245.882 69.2584C245.804 69.0709 245.69 68.9007 245.545 68.7576C245.401 68.6144 245.23 68.5012 245.042 68.4244C244.854 68.3476 244.653 68.3087 244.45 68.31ZM203.07 65.18C203.07 64.8688 203.193 64.5702 203.412 64.3492C203.631 64.1282 203.929 64.0027 204.24 64H220.91C221.22 64.0027 221.516 64.1268 221.734 64.3456C221.953 64.5645 222.077 64.8606 222.08 65.17V68.3001H203.08L203.07 65.18Z" fill="white"/>
<path d="M215.87 88.84H209.29C208.473 88.84 207.81 89.5026 207.81 90.32V94.48C207.81 95.2974 208.473 95.96 209.29 95.96H215.87C216.687 95.96 217.35 95.2974 217.35 94.48V90.32C217.35 89.5026 216.687 88.84 215.87 88.84Z" fill="#7E57C2"/>
<path opacity="0.3" d="M215.87 88.84H209.29C208.473 88.84 207.81 89.5026 207.81 90.32V94.48C207.81 95.2974 208.473 95.96 209.29 95.96H215.87C216.687 95.96 217.35 95.2974 217.35 94.48V90.32C217.35 89.5026 216.687 88.84 215.87 88.84Z" fill="white"/>
<path d="M147.96 262.73H86.8701C86.0085 262.73 85.3101 263.428 85.3101 264.29V289.77C85.3101 290.632 86.0085 291.33 86.8701 291.33H147.96C148.822 291.33 149.52 290.632 149.52 289.77V264.29C149.52 263.428 148.822 262.73 147.96 262.73Z" fill="#7E57C2"/>
<path opacity="0.6" d="M147.96 262.73H86.8701C86.0085 262.73 85.3101 263.428 85.3101 264.29V289.77C85.3101 290.632 86.0085 291.33 86.8701 291.33H147.96C148.822 291.33 149.52 290.632 149.52 289.77V264.29C149.52 263.428 148.822 262.73 147.96 262.73Z" fill="white"/>
<path opacity="0.1" d="M148 262.73H86.8701C86.4563 262.73 86.0595 262.894 85.767 263.187C85.4744 263.479 85.3101 263.876 85.3101 264.29V272.46L117.11 278.72C117.308 278.76 117.512 278.76 117.71 278.72L149.52 272.46V264.29C149.52 263.883 149.361 263.492 149.077 263.201C148.793 262.909 148.407 262.74 148 262.73Z" fill="black"/>
<path d="M149.28 252.27H130.62V249.14C130.617 247.847 130.102 246.607 129.188 245.692C128.273 244.778 127.033 244.263 125.74 244.26H109.08C107.787 244.263 106.547 244.778 105.632 245.692C104.718 246.607 104.203 247.847 104.2 249.14V252.27H85.54C85.1316 252.27 84.7399 252.432 84.4511 252.721C84.1623 253.01 84 253.402 84 253.81V269.22C84.002 269.576 84.1263 269.92 84.3521 270.195C84.5779 270.47 84.8914 270.659 85.24 270.73L117.11 277C117.309 277.03 117.511 277.03 117.71 277L149.58 270.73C149.929 270.659 150.242 270.47 150.468 270.195C150.694 269.92 150.818 269.576 150.82 269.22V253.81C150.82 253.402 150.658 253.01 150.369 252.721C150.08 252.432 149.688 252.27 149.28 252.27ZM107.9 249.14C107.905 248.829 108.031 248.532 108.251 248.311C108.471 248.091 108.769 247.965 109.08 247.96H125.74C126.051 247.965 126.349 248.091 126.569 248.311C126.789 248.532 126.915 248.829 126.92 249.14V252.27H107.92L107.9 249.14Z" fill="#7E57C2"/>
<path opacity="0.6" d="M149.28 252.27H130.62V249.14C130.617 247.847 130.102 246.607 129.188 245.692C128.273 244.778 127.033 244.263 125.74 244.26H109.08C107.787 244.263 106.547 244.778 105.632 245.692C104.718 246.607 104.203 247.847 104.2 249.14V252.27H85.54C85.1316 252.27 84.7399 252.432 84.4511 252.721C84.1623 253.01 84 253.402 84 253.81V269.22C84.002 269.576 84.1263 269.92 84.3521 270.195C84.5779 270.47 84.8914 270.659 85.24 270.73L117.11 277C117.309 277.03 117.511 277.03 117.71 277L149.58 270.73C149.929 270.659 150.242 270.47 150.468 270.195C150.694 269.92 150.818 269.576 150.82 269.22V253.81C150.82 253.402 150.658 253.01 150.369 252.721C150.08 252.432 149.688 252.27 149.28 252.27ZM107.9 249.14C107.905 248.829 108.031 248.532 108.251 248.311C108.471 248.091 108.769 247.965 109.08 247.96H125.74C126.051 247.965 126.349 248.091 126.569 248.311C126.789 248.532 126.915 248.829 126.92 249.14V252.27H107.92L107.9 249.14Z" fill="white"/>
<path d="M120.7 272.79H114.12C113.303 272.79 112.64 273.453 112.64 274.27V278.43C112.64 279.247 113.303 279.91 114.12 279.91H120.7C121.517 279.91 122.18 279.247 122.18 278.43V274.27C122.18 273.453 121.517 272.79 120.7 272.79Z" fill="#7E57C2"/>
<path opacity="0.3" d="M120.7 272.79H114.12C113.303 272.79 112.64 273.453 112.64 274.27V278.43C112.64 279.247 113.303 279.91 114.12 279.91H120.7C121.517 279.91 122.18 279.247 122.18 278.43V274.27C122.18 273.453 121.517 272.79 120.7 272.79Z" fill="white"/>
<path d="M147.96 78.77H86.8701C86.0085 78.77 85.3101 79.4685 85.3101 80.33V105.81C85.3101 106.672 86.0085 107.37 86.8701 107.37H147.96C148.822 107.37 149.52 106.672 149.52 105.81V80.33C149.52 79.4685 148.822 78.77 147.96 78.77Z" fill="#7E57C2"/>
<path opacity="0.6" d="M147.96 78.77H86.8701C86.0085 78.77 85.3101 79.4685 85.3101 80.33V105.81C85.3101 106.672 86.0085 107.37 86.8701 107.37H147.96C148.822 107.37 149.52 106.672 149.52 105.81V80.33C149.52 79.4685 148.822 78.77 147.96 78.77Z" fill="white"/>
<path opacity="0.1" d="M148 78.77H86.8701C86.4563 78.77 86.0595 78.9344 85.767 79.2269C85.4744 79.5195 85.3101 79.9163 85.3101 80.33V88.5L117.11 94.76C117.308 94.8002 117.512 94.8002 117.71 94.76L149.52 88.5V80.33C149.52 79.9231 149.361 79.5323 149.077 79.2408C148.793 78.9494 148.407 78.7805 148 78.77Z" fill="black"/>
<path d="M149.28 68.31H130.62V65.18C130.617 63.8866 130.102 62.6469 129.188 61.7323C128.273 60.8177 127.033 60.3027 125.74 60.3H109.08C107.787 60.3027 106.547 60.8177 105.632 61.7323C104.718 62.6469 104.203 63.8866 104.2 65.18V68.31H85.54C85.1316 68.31 84.7399 68.4723 84.4511 68.7611C84.1623 69.0499 84 69.4416 84 69.85V85.2601C84.0001 85.6163 84.1238 85.9615 84.3499 86.2369C84.576 86.5122 84.8905 86.7006 85.24 86.77L117.11 93C117.308 93.0402 117.512 93.0402 117.71 93L149.58 86.7301C149.929 86.6606 150.244 86.4722 150.47 86.1969C150.696 85.9215 150.82 85.5763 150.82 85.2201V69.85C150.82 69.4416 150.658 69.0499 150.369 68.7611C150.08 68.4723 149.688 68.31 149.28 68.31ZM107.9 65.18C107.903 64.8679 108.028 64.5693 108.249 64.3486C108.469 64.1278 108.768 64.0027 109.08 64H125.74C126.05 64.0026 126.348 64.1264 126.568 64.345C126.788 64.5636 126.915 64.8596 126.92 65.17V68.3001H107.92L107.9 65.18Z" fill="#7E57C2"/>
<path opacity="0.6" d="M149.28 68.31H130.62V65.18C130.617 63.8866 130.102 62.6469 129.188 61.7323C128.273 60.8177 127.033 60.3027 125.74 60.3H109.08C107.787 60.3027 106.547 60.8177 105.632 61.7323C104.718 62.6469 104.203 63.8866 104.2 65.18V68.31H85.54C85.1316 68.31 84.7399 68.4723 84.4511 68.7611C84.1623 69.0499 84 69.4416 84 69.85V85.2601C84.0001 85.6163 84.1238 85.9615 84.3499 86.2369C84.576 86.5122 84.8905 86.7006 85.24 86.77L117.11 93C117.308 93.0402 117.512 93.0402 117.71 93L149.58 86.7301C149.929 86.6606 150.244 86.4722 150.47 86.1969C150.696 85.9215 150.82 85.5763 150.82 85.2201V69.85C150.82 69.4416 150.658 69.0499 150.369 68.7611C150.08 68.4723 149.688 68.31 149.28 68.31ZM107.9 65.18C107.903 64.8679 108.028 64.5693 108.249 64.3486C108.469 64.1278 108.768 64.0027 109.08 64H125.74C126.05 64.0026 126.348 64.1264 126.568 64.345C126.788 64.5636 126.915 64.8596 126.92 65.17V68.3001H107.92L107.9 65.18Z" fill="white"/>
<path d="M120.7 88.84H114.12C113.303 88.84 112.64 89.5026 112.64 90.32V94.48C112.64 95.2974 113.303 95.96 114.12 95.96H120.7C121.517 95.96 122.18 95.2974 122.18 94.48V90.32C122.18 89.5026 121.517 88.84 120.7 88.84Z" fill="#7E57C2"/>
<path opacity="0.3" d="M120.7 88.84H114.12C113.303 88.84 112.64 89.5026 112.64 90.32V94.48C112.64 95.2974 113.303 95.96 114.12 95.96H120.7C121.517 95.96 122.18 95.2974 122.18 94.48V90.32C122.18 89.5026 121.517 88.84 120.7 88.84Z" fill="white"/>
<path d="M140 199.35H86.87C86.4537 199.35 86.0543 199.185 85.7599 198.89C85.4655 198.596 85.3 198.196 85.3 197.78V172.31C85.3016 172.1 85.3458 171.892 85.43 171.7C85.4707 171.61 85.5175 171.523 85.57 171.44C85.6257 171.354 85.693 171.277 85.77 171.21C86.0613 170.917 86.4569 170.752 86.87 170.75H137.16C136.742 174.24 136.605 177.758 136.75 181.27C136.75 181.84 136.75 182.41 136.84 182.97C136.91 184.02 136.99 185.08 137.11 186.13C137.625 190.623 138.593 195.052 140 199.35Z" fill="#7E57C2"/>
<path opacity="0.6" d="M140 199.35H86.87C86.4537 199.35 86.0543 199.185 85.7599 198.89C85.4655 198.596 85.3 198.196 85.3 197.78V172.31C85.3016 172.1 85.3458 171.892 85.43 171.7C85.4707 171.61 85.5175 171.523 85.57 171.44C85.6257 171.354 85.693 171.277 85.77 171.21C86.0613 170.917 86.4569 170.752 86.87 170.75H137.16C136.742 174.24 136.605 177.758 136.75 181.27C136.75 181.84 136.75 182.41 136.84 182.97C136.91 184.02 136.99 185.08 137.11 186.13C137.625 190.623 138.593 195.052 140 199.35Z" fill="white"/>
<path opacity="0.1" d="M137.16 170.75C136.742 174.24 136.605 177.758 136.75 181.27C136.75 181.84 136.75 182.41 136.84 182.97L122.18 185.85L117.7 186.73C117.507 186.78 117.304 186.78 117.11 186.73L112.64 185.86L85.3101 180.48V172.3C85.3132 172.094 85.3539 171.891 85.4301 171.7C85.4707 171.61 85.5175 171.523 85.5701 171.44C85.6257 171.354 85.693 171.277 85.7701 171.21C86.0614 170.917 86.457 170.752 86.8701 170.75H137.16Z" fill="black"/>
<path d="M139.25 160.29H130.63V157.16C130.625 155.866 130.108 154.626 129.191 153.712C128.275 152.797 127.034 152.283 125.74 152.28H109.08C107.786 152.28 106.544 152.794 105.629 153.709C104.714 154.625 104.2 155.866 104.2 157.16V160.29H85.54C85.3378 160.29 85.1375 160.33 84.9507 160.407C84.7638 160.485 84.5941 160.598 84.4511 160.741C84.3081 160.884 84.1946 161.054 84.1172 161.241C84.0398 161.428 84 161.628 84 161.83V177.23C84.0002 177.589 84.1249 177.937 84.3528 178.214C84.5808 178.491 84.8979 178.681 85.25 178.75H85.31L112.64 184.14L117.11 185.01C117.305 185.05 117.505 185.05 117.7 185.01L122.18 184.13L136.75 181.26C136.605 177.748 136.742 174.23 137.16 170.74C137.575 167.206 138.274 163.712 139.25 160.29ZM107.9 157.16C107.905 156.85 108.032 156.554 108.252 156.335C108.472 156.116 108.77 155.993 109.08 155.99H125.74C126.049 155.993 126.346 156.117 126.564 156.336C126.783 156.554 126.907 156.851 126.91 157.16V160.29H107.91L107.9 157.16Z" fill="#7E57C2"/>
<path opacity="0.6" d="M139.25 160.29H130.63V157.16C130.625 155.866 130.108 154.626 129.191 153.712C128.275 152.797 127.034 152.283 125.74 152.28H109.08C107.786 152.28 106.544 152.794 105.629 153.709C104.714 154.625 104.2 155.866 104.2 157.16V160.29H85.54C85.3378 160.29 85.1375 160.33 84.9507 160.407C84.7638 160.485 84.5941 160.598 84.4511 160.741C84.3081 160.884 84.1946 161.054 84.1172 161.241C84.0398 161.428 84 161.628 84 161.83V177.23C84.0002 177.589 84.1249 177.937 84.3528 178.214C84.5808 178.491 84.8979 178.681 85.25 178.75H85.31L112.64 184.14L117.11 185.01C117.305 185.05 117.505 185.05 117.7 185.01L122.18 184.13L136.75 181.26C136.605 177.748 136.742 174.23 137.16 170.74C137.575 167.206 138.274 163.712 139.25 160.29ZM107.9 157.16C107.905 156.85 108.032 156.554 108.252 156.335C108.472 156.116 108.77 155.993 109.08 155.99H125.74C126.049 155.993 126.346 156.117 126.564 156.336C126.783 156.554 126.907 156.851 126.91 157.16V160.29H107.91L107.9 157.16Z" fill="white"/>
<path d="M120.7 180.81H114.12C113.303 180.81 112.64 181.473 112.64 182.29V186.45C112.64 187.267 113.303 187.93 114.12 187.93H120.7C121.517 187.93 122.18 187.267 122.18 186.45V182.29C122.18 181.473 121.517 180.81 120.7 180.81Z" fill="#7E57C2"/>
<path opacity="0.3" d="M120.7 180.81H114.12C113.303 180.81 112.64 181.473 112.64 182.29V186.45C112.64 187.267 113.303 187.93 114.12 187.93H120.7C121.517 187.93 122.18 187.267 122.18 186.45V182.29C122.18 181.473 121.517 180.81 120.7 180.81Z" fill="white"/>
<path d="M277.19 291.32H338.28C339.142 291.32 339.84 290.622 339.84 289.76V264.28C339.84 263.418 339.142 262.72 338.28 262.72H277.19C276.328 262.72 275.63 263.418 275.63 264.28V289.76C275.63 290.622 276.328 291.32 277.19 291.32Z" fill="#7E57C2"/>
<path opacity="0.6" d="M277.19 291.32H338.28C339.142 291.32 339.84 290.622 339.84 289.76V264.28C339.84 263.418 339.142 262.72 338.28 262.72H277.19C276.328 262.72 275.63 263.418 275.63 264.28V289.76C275.63 290.622 276.328 291.32 277.19 291.32Z" fill="white"/>
<path opacity="0.1" d="M277.2 262.73H338.28C338.694 262.73 339.09 262.894 339.383 263.187C339.676 263.479 339.84 263.876 339.84 264.29V272.46L308 278.72C307.805 278.76 307.605 278.76 307.41 278.72L275.6 272.46V264.29C275.6 264.082 275.642 263.876 275.722 263.684C275.803 263.492 275.922 263.318 276.071 263.173C276.22 263.027 276.397 262.913 276.591 262.837C276.785 262.761 276.992 262.725 277.2 262.73Z" fill="black"/>
<path d="M275.87 252.27H294.53V249.14C294.533 247.847 295.048 246.607 295.962 245.692C296.877 244.778 298.117 244.263 299.41 244.26H316.08C317.373 244.263 318.613 244.778 319.528 245.692C320.442 246.607 320.957 247.847 320.96 249.14V252.27H339.61C339.812 252.27 340.013 252.31 340.199 252.387C340.386 252.465 340.556 252.578 340.699 252.721C340.842 252.864 340.955 253.034 341.033 253.221C341.11 253.408 341.15 253.608 341.15 253.81V269.22C341.148 269.576 341.024 269.92 340.798 270.195C340.572 270.47 340.259 270.659 339.91 270.73L308 277C307.801 277.03 307.599 277.03 307.4 277L275.53 270.73C275.181 270.659 274.868 270.47 274.642 270.195C274.416 269.92 274.292 269.576 274.29 269.22V253.81C274.29 253.604 274.331 253.401 274.411 253.211C274.491 253.022 274.608 252.85 274.755 252.707C274.902 252.563 275.077 252.451 275.268 252.376C275.46 252.301 275.664 252.265 275.87 252.27ZM317.25 249.14C317.247 248.83 317.124 248.532 316.905 248.312C316.687 248.092 316.39 247.965 316.08 247.96H299.41C299.099 247.965 298.802 248.091 298.581 248.311C298.361 248.532 298.235 248.829 298.23 249.14V252.27H317.23L317.25 249.14Z" fill="#7E57C2"/>
<path opacity="0.6" d="M275.87 252.27H294.53V249.14C294.533 247.847 295.048 246.607 295.962 245.692C296.877 244.778 298.117 244.263 299.41 244.26H316.08C317.373 244.263 318.613 244.778 319.528 245.692C320.442 246.607 320.957 247.847 320.96 249.14V252.27H339.61C339.812 252.27 340.013 252.31 340.199 252.387C340.386 252.465 340.556 252.578 340.699 252.721C340.842 252.864 340.955 253.034 341.033 253.221C341.11 253.408 341.15 253.608 341.15 253.81V269.22C341.148 269.576 341.024 269.92 340.798 270.195C340.572 270.47 340.259 270.659 339.91 270.73L308 277C307.801 277.03 307.599 277.03 307.4 277L275.53 270.73C275.181 270.659 274.868 270.47 274.642 270.195C274.416 269.92 274.292 269.576 274.29 269.22V253.81C274.29 253.604 274.331 253.401 274.411 253.211C274.491 253.022 274.608 252.85 274.755 252.707C274.902 252.563 275.077 252.451 275.268 252.376C275.46 252.301 275.664 252.265 275.87 252.27ZM317.25 249.14C317.247 248.83 317.124 248.532 316.905 248.312C316.687 248.092 316.39 247.965 316.08 247.96H299.41C299.099 247.965 298.802 248.091 298.581 248.311C298.361 248.532 298.235 248.829 298.23 249.14V252.27H317.23L317.25 249.14Z" fill="white"/>
<path d="M304.45 279.91H311.03C311.847 279.91 312.51 279.247 312.51 278.43V274.27C312.51 273.453 311.847 272.79 311.03 272.79H304.45C303.633 272.79 302.97 273.453 302.97 274.27V278.43C302.97 279.247 303.633 279.91 304.45 279.91Z" fill="#7E57C2"/>
<path opacity="0.3" d="M304.45 279.91H311.03C311.847 279.91 312.51 279.247 312.51 278.43V274.27C312.51 273.453 311.847 272.79 311.03 272.79H304.45C303.633 272.79 302.97 273.453 302.97 274.27V278.43C302.97 279.247 303.633 279.91 304.45 279.91Z" fill="white"/>
<path d="M277.19 107.36L338.28 107.36C339.142 107.36 339.84 106.662 339.84 105.8V80.32C339.84 79.4584 339.142 78.76 338.28 78.76H277.19C276.328 78.76 275.63 79.4584 275.63 80.32V105.8C275.63 106.662 276.328 107.36 277.19 107.36Z" fill="#7E57C2"/>
<path opacity="0.6" d="M277.19 107.36L338.28 107.36C339.142 107.36 339.84 106.662 339.84 105.8V80.32C339.84 79.4584 339.142 78.76 338.28 78.76H277.19C276.328 78.76 275.63 79.4584 275.63 80.32V105.8C275.63 106.662 276.328 107.36 277.19 107.36Z" fill="white"/>
<path opacity="0.1" d="M277.2 78.77H338.28C338.694 78.77 339.091 78.9344 339.383 79.2269C339.676 79.5195 339.84 79.9163 339.84 80.33V88.5L308 94.76C307.805 94.7999 307.605 94.7999 307.41 94.76L275.64 88.5V80.33C275.64 79.9163 275.804 79.5195 276.097 79.2269C276.389 78.9344 276.786 78.77 277.2 78.77Z" fill="black"/>
<path d="M275.87 68.31H294.53V65.18C294.533 63.8866 295.048 62.6469 295.962 61.7323C296.877 60.8177 298.117 60.3027 299.41 60.3H316.08C316.724 60.2961 317.362 60.4193 317.958 60.6627C318.554 60.906 319.097 61.2647 319.554 61.7181C320.011 62.1715 320.374 62.7107 320.622 63.3048C320.87 63.8989 320.999 64.5362 321 65.18V68.31H339.65C340.058 68.31 340.45 68.4723 340.739 68.7611C341.028 69.0499 341.19 69.4416 341.19 69.85V85.26C341.19 85.6163 341.066 85.9615 340.84 86.2369C340.614 86.5122 340.299 86.7006 339.95 86.77L308 93C307.802 93.0402 307.598 93.0402 307.4 93L275.53 86.73C275.181 86.6606 274.866 86.4722 274.64 86.1968C274.414 85.9215 274.29 85.5763 274.29 85.22V69.85C274.29 69.6444 274.331 69.4408 274.411 69.2513C274.491 69.0618 274.608 68.8902 274.755 68.7467C274.902 68.6031 275.077 68.4906 275.268 68.4156C275.46 68.3406 275.664 68.3047 275.87 68.31ZM317.25 65.18C317.25 64.8688 317.127 64.5702 316.908 64.3491C316.689 64.1281 316.391 64.0027 316.08 64H299.41C299.1 64.0026 298.802 64.1264 298.582 64.345C298.362 64.5635 298.235 64.8596 298.23 65.17V68.3H317.23L317.25 65.18Z" fill="#7E57C2"/>
<path opacity="0.6" d="M275.87 68.31H294.53V65.18C294.533 63.8866 295.048 62.6469 295.962 61.7323C296.877 60.8177 298.117 60.3027 299.41 60.3H316.08C316.724 60.2961 317.362 60.4193 317.958 60.6627C318.554 60.906 319.097 61.2647 319.554 61.7181C320.011 62.1715 320.374 62.7107 320.622 63.3048C320.87 63.8989 320.999 64.5362 321 65.18V68.31H339.65C340.058 68.31 340.45 68.4723 340.739 68.7611C341.028 69.0499 341.19 69.4416 341.19 69.85V85.26C341.19 85.6163 341.066 85.9615 340.84 86.2369C340.614 86.5122 340.299 86.7006 339.95 86.77L308 93C307.802 93.0402 307.598 93.0402 307.4 93L275.53 86.73C275.181 86.6606 274.866 86.4722 274.64 86.1968C274.414 85.9215 274.29 85.5763 274.29 85.22V69.85C274.29 69.6444 274.331 69.4408 274.411 69.2513C274.491 69.0618 274.608 68.8902 274.755 68.7467C274.902 68.6031 275.077 68.4906 275.268 68.4156C275.46 68.3406 275.664 68.3047 275.87 68.31ZM317.25 65.18C317.25 64.8688 317.127 64.5702 316.908 64.3491C316.689 64.1281 316.391 64.0027 316.08 64H299.41C299.1 64.0026 298.802 64.1264 298.582 64.345C298.362 64.5635 298.235 64.8596 298.23 65.17V68.3H317.23L317.25 65.18Z" fill="white"/>
<path d="M304.45 95.9501H311.03C311.847 95.9501 312.51 95.2875 312.51 94.4701V90.3101C312.51 89.4927 311.847 88.8301 311.03 88.8301H304.45C303.633 88.8301 302.97 89.4927 302.97 90.3101V94.4701C302.97 95.2875 303.633 95.9501 304.45 95.9501Z" fill="#7E57C2"/>
<path opacity="0.3" d="M304.45 95.9501H311.03C311.847 95.9501 312.51 95.2875 312.51 94.4701V90.3101C312.51 89.4927 311.847 88.8301 311.03 88.8301H304.45C303.633 88.8301 302.97 89.4927 302.97 90.3101V94.4701C302.97 95.2875 303.633 95.9501 304.45 95.9501Z" fill="white"/>
<path d="M285.19 199.35H338.29C338.705 199.347 339.101 199.181 339.394 198.887C339.686 198.592 339.85 198.195 339.85 197.78V172.31C339.848 172.1 339.804 171.892 339.72 171.7C339.683 171.608 339.636 171.521 339.58 171.44C339.524 171.354 339.457 171.277 339.38 171.21C339.236 171.064 339.065 170.948 338.876 170.869C338.687 170.79 338.485 170.75 338.28 170.75H288C288.418 174.24 288.555 177.758 288.41 181.27C288.41 181.84 288.41 182.41 288.32 182.97C288.26 184.02 288.17 185.08 288.05 186.13C287.545 190.622 286.587 195.051 285.19 199.35Z" fill="#7E57C2"/>
<path opacity="0.6" d="M285.19 199.35H338.29C338.705 199.347 339.101 199.181 339.394 198.887C339.686 198.592 339.85 198.195 339.85 197.78V172.31C339.848 172.1 339.804 171.892 339.72 171.7C339.683 171.608 339.636 171.521 339.58 171.44C339.524 171.354 339.457 171.277 339.38 171.21C339.236 171.064 339.065 170.948 338.876 170.869C338.687 170.79 338.485 170.75 338.28 170.75H288C288.418 174.24 288.555 177.758 288.41 181.27C288.41 181.84 288.41 182.41 288.32 182.97C288.26 184.02 288.17 185.08 288.05 186.13C287.545 190.622 286.587 195.051 285.19 199.35Z" fill="white"/>
<path opacity="0.1" d="M288 170.75C288.418 174.24 288.555 177.758 288.41 181.27C288.41 181.84 288.41 182.41 288.32 182.97L303 185.85L307.48 186.73C307.674 186.78 307.877 186.78 308.07 186.73L312.54 185.86L339.87 180.48V172.3C339.867 172.094 339.826 171.891 339.75 171.7C339.713 171.608 339.666 171.521 339.61 171.44C339.554 171.354 339.487 171.277 339.41 171.21C339.266 171.064 339.095 170.948 338.906 170.869C338.717 170.79 338.515 170.75 338.31 170.75H288Z" fill="black"/>
<path d="M285.9 160.29H294.53V157.16C294.533 155.867 295.048 154.627 295.962 153.712C296.877 152.798 298.117 152.283 299.41 152.28H316.07C317.365 152.28 318.607 152.794 319.524 153.709C320.441 154.624 320.957 155.865 320.96 157.16V160.29H339.61C340.018 160.29 340.41 160.452 340.699 160.741C340.988 161.03 341.15 161.422 341.15 161.83V177.23C341.15 177.588 341.027 177.934 340.801 178.211C340.575 178.488 340.26 178.679 339.91 178.75H339.84L312.51 184.14L308 185C307.805 185.04 307.605 185.04 307.41 185L302.93 184.12L288.36 181.25C288.644 174.162 287.8 167.074 285.86 160.25L285.9 160.29ZM317.25 157.16C317.245 156.85 317.118 156.554 316.898 156.335C316.678 156.116 316.38 155.993 316.07 155.99H299.41C299.101 155.993 298.804 156.117 298.586 156.336C298.367 156.554 298.243 156.851 298.24 157.16V160.29H317.24L317.25 157.16Z" fill="#7E57C2"/>
<path opacity="0.6" d="M285.9 160.29H294.53V157.16C294.533 155.867 295.048 154.627 295.962 153.712C296.877 152.798 298.117 152.283 299.41 152.28H316.07C317.365 152.28 318.607 152.794 319.524 153.709C320.441 154.624 320.957 155.865 320.96 157.16V160.29H339.61C340.018 160.29 340.41 160.452 340.699 160.741C340.988 161.03 341.15 161.422 341.15 161.83V177.23C341.15 177.588 341.027 177.934 340.801 178.211C340.575 178.488 340.26 178.679 339.91 178.75H339.84L312.51 184.14L308 185C307.805 185.04 307.605 185.04 307.41 185L302.93 184.12L288.36 181.25C288.644 174.162 287.8 167.074 285.86 160.25L285.9 160.29ZM317.25 157.16C317.245 156.85 317.118 156.554 316.898 156.335C316.678 156.116 316.38 155.993 316.07 155.99H299.41C299.101 155.993 298.804 156.117 298.586 156.336C298.367 156.554 298.243 156.851 298.24 157.16V160.29H317.24L317.25 157.16Z" fill="white"/>
<path d="M304.45 187.94H311.03C311.847 187.94 312.51 187.277 312.51 186.46V182.3C312.51 181.483 311.847 180.82 311.03 180.82H304.45C303.633 180.82 302.97 181.483 302.97 182.3V186.46C302.97 187.277 303.633 187.94 304.45 187.94Z" fill="#7E57C2"/>
<path opacity="0.3" d="M304.45 187.94H311.03C311.847 187.94 312.51 187.277 312.51 186.46V182.3C312.51 181.483 311.847 180.82 311.03 180.82H304.45C303.633 180.82 302.97 181.483 302.97 182.3V186.46C302.97 187.277 303.633 187.94 304.45 187.94Z" fill="white"/>
<path d="M259.7 164.54H171.92C170.683 164.54 169.68 165.543 169.68 166.78V203.39C169.68 204.627 170.683 205.63 171.92 205.63H259.7C260.937 205.63 261.94 204.627 261.94 203.39V166.78C261.94 165.543 260.937 164.54 259.7 164.54Z" fill="#7E57C2"/>
<path d="M227.78 158H203.83C202.014 157.997 200.273 157.275 198.989 155.991C197.705 154.707 196.983 152.966 196.98 151.15V145C196.983 143.184 197.705 141.443 198.989 140.159C200.273 138.875 202.014 138.153 203.83 138.15H227.78C229.597 138.15 231.339 138.872 232.624 140.156C233.908 141.441 234.63 143.183 234.63 145V151.12C234.634 152.022 234.46 152.916 234.117 153.751C233.775 154.585 233.271 155.344 232.634 155.983C231.998 156.622 231.241 157.13 230.408 157.476C229.575 157.822 228.682 158 227.78 158ZM203.83 143.18C203.348 143.185 202.887 143.378 202.545 143.718C202.203 144.058 202.008 144.518 202 145V151.12C202 151.611 202.195 152.081 202.542 152.428C202.889 152.775 203.359 152.97 203.85 152.97H227.8C228.291 152.97 228.761 152.775 229.108 152.428C229.455 152.081 229.65 151.611 229.65 151.12V145C229.65 144.509 229.455 144.039 229.108 143.692C228.761 143.345 228.291 143.15 227.8 143.15L203.83 143.18Z" fill="#7E57C2"/>
<path opacity="0.2" d="M259.69 164.54H171.93C171.635 164.539 171.343 164.596 171.07 164.708C170.797 164.82 170.549 164.984 170.34 165.193C170.13 165.401 169.965 165.648 169.851 165.921C169.738 166.193 169.68 166.485 169.68 166.78V178.53L215.38 187.53C215.66 187.591 215.95 187.591 216.23 187.53L261.94 178.53V166.78C261.94 166.485 261.882 166.193 261.768 165.921C261.655 165.648 261.489 165.401 261.28 165.193C261.071 164.984 260.823 164.82 260.55 164.708C260.277 164.596 259.985 164.539 259.69 164.54Z" fill="black"/>
<path d="M262 176L216.21 185C215.926 185.05 215.634 185.05 215.35 185L169.56 176C169.057 175.901 168.604 175.63 168.277 175.235C167.951 174.839 167.772 174.343 167.77 173.83V151.73C167.77 151.44 167.827 151.152 167.938 150.884C168.049 150.616 168.212 150.373 168.417 150.167C168.623 149.962 168.866 149.799 169.134 149.688C169.402 149.577 169.69 149.52 169.98 149.52H261.6C261.89 149.52 262.178 149.577 262.446 149.688C262.714 149.799 262.958 149.962 263.163 150.167C263.368 150.373 263.531 150.616 263.642 150.884C263.753 151.152 263.81 151.44 263.81 151.73V173.87C263.8 174.379 263.614 174.869 263.285 175.258C262.955 175.646 262.501 175.908 262 176Z" fill="#7E57C2"/>
<path d="M220.55 179.01H211.08C209.909 179.01 208.96 179.959 208.96 181.13V187.12C208.96 188.291 209.909 189.24 211.08 189.24H220.55C221.721 189.24 222.67 188.291 222.67 187.12V181.13C222.67 179.959 221.721 179.01 220.55 179.01Z" fill="#7E57C2"/>
<path opacity="0.4" d="M220.55 179.01H211.08C209.909 179.01 208.96 179.959 208.96 181.13V187.12C208.96 188.291 209.909 189.24 211.08 189.24H220.55C221.721 189.24 222.67 188.291 222.67 187.12V181.13C222.67 179.959 221.721 179.01 220.55 179.01Z" fill="black"/>
<path d="M380.9 187.21C382.05 189.58 382.9 191.82 383.9 194.16C384.9 196.5 385.63 198.83 386.41 201.22C387.991 206.066 389.159 211.037 389.9 216.08C390 216.71 390.05 217.39 390.12 218.08L390.22 219.08C390.22 219.26 390.22 219.39 390.22 219.6V220.25C390.254 221.766 390.123 223.282 389.83 224.77C389.334 227.356 388.629 229.898 387.72 232.37C386.012 237.069 383.884 241.604 381.36 245.92L376.28 243.77C377.41 239.21 378.55 234.56 379.41 230.07C379.831 227.919 380.128 225.745 380.3 223.56C380.359 222.667 380.339 221.77 380.24 220.88L380.13 220.25L379.99 219.45C379.88 218.92 379.81 218.39 379.68 217.85C378.683 213.436 377.394 209.093 375.82 204.85C375.06 202.68 374.22 200.52 373.38 198.35C372.54 196.18 371.61 194 370.75 192L380.9 187.21Z" fill="#7F3E3B"/>
<path d="M376.5 242.44L372.6 246.24L381.11 250.24C381.11 250.24 383.17 246.64 381.75 243.38L376.5 242.44Z" fill="#7F3E3B"/>
<path d="M369.46 251.91L376.64 254.85L381.11 250.2L372.6 246.24L369.46 251.91Z" fill="#7F3E3B"/>
<path opacity="0.2" d="M223.81 247.81C237.961 246.225 251.323 240.48 262.209 231.301C273.095 222.123 281.014 209.922 284.967 196.243C288.919 182.564 288.727 168.02 284.414 154.449C280.101 140.879 271.862 128.893 260.737 120.005C249.613 111.118 236.103 105.728 221.915 104.518C207.728 103.308 193.5 106.331 181.031 113.207C168.562 120.082 158.411 130.5 151.863 143.144C145.314 155.787 142.661 170.089 144.24 184.24C145.289 193.64 148.179 202.74 152.746 211.023C157.312 219.305 163.466 226.606 170.855 232.51C178.244 238.413 186.724 242.803 195.81 245.428C204.897 248.053 214.411 248.863 223.81 247.81Z" fill="#7E57C2"/>
<path opacity="0.1" d="M171.42 119.54L280.92 207C281.39 206 281.83 205 282.26 204C285.004 197.471 286.757 190.568 287.46 183.52L192.88 108C185.118 110.588 177.859 114.492 171.42 119.54Z" fill="white"/>
<path opacity="0.1" d="M146.16 157.87L249.1 240.12C258.881 235.019 267.359 227.738 273.88 218.84L161.46 129C154.215 137.324 148.98 147.201 146.16 157.87Z" fill="white"/>
<path d="M393.17 257.12C393.039 255.3 392.443 253.544 391.44 252.02C390.711 250.899 389.692 249.997 388.49 249.41L381.66 246.06C377.12 243.81 372.55 241.62 367.98 239.43C363.41 237.24 358.81 235.09 354.23 232.92C349.65 230.75 345.03 228.64 340.4 226.57C331.16 222.383 321.86 218.31 312.5 214.35C307.82 212.35 303.13 210.43 298.4 208.55C297.019 208.006 295.896 206.958 295.26 205.617C294.623 204.277 294.519 202.744 294.97 201.33C301.301 181.368 299.86 159.752 290.933 140.807C282.007 121.863 266.255 106.989 246.83 99.1635C227.406 91.3377 205.742 91.1372 186.176 98.6023C166.61 106.067 150.585 120.647 141.31 139.423C132.034 158.199 130.193 179.785 136.154 199.861C142.115 219.936 155.438 237.02 173.457 247.691C191.476 258.362 212.861 261.834 233.33 257.412C253.8 252.989 271.844 240.998 283.85 223.84C284.7 222.62 285.982 221.769 287.435 221.459C288.889 221.149 290.406 221.403 291.68 222.17C296.053 224.77 300.447 227.327 304.86 229.84C313.68 234.867 322.567 239.767 331.52 244.54C335.99 246.96 340.52 249.29 344.97 251.66C349.42 254.03 353.97 256.34 358.5 258.66C363.03 260.98 367.5 263.25 372.09 265.49L378.9 268.87C380.097 269.472 381.435 269.734 382.77 269.63C384.587 269.501 386.341 268.905 387.86 267.9C389.672 266.787 391.132 265.184 392.072 263.277C393.011 261.369 393.392 259.235 393.17 257.12ZM186.8 235C175.175 229.264 165.512 220.209 159.034 208.981C152.555 197.753 149.552 184.855 150.404 171.92C151.255 158.985 155.924 146.593 163.818 136.311C171.713 126.029 182.48 118.32 194.756 114.157C207.033 109.994 220.268 109.566 232.789 112.926C245.309 116.285 256.551 123.282 265.095 133.032C273.638 142.782 279.098 154.846 280.785 167.699C282.472 180.552 280.309 193.616 274.57 205.24C270.761 212.957 265.47 219.849 258.998 225.521C252.525 231.194 244.999 235.536 236.849 238.299C228.699 241.063 220.084 242.194 211.496 241.628C202.909 241.061 194.517 238.809 186.8 235Z" fill="#7E57C2"/>
<path d="M343.19 156.3C343.19 156.89 342.88 157.37 342.49 157.37C342.1 157.37 341.79 156.89 341.79 156.3C341.79 155.71 342.1 155.22 342.49 155.22C342.88 155.22 343.19 155.7 343.19 156.3Z" fill="#263238"/>
<path d="M342.93 157.37C342.227 159.181 341.278 160.887 340.11 162.44C340.515 162.729 340.977 162.927 341.466 163.018C341.955 163.11 342.458 163.093 342.94 162.97L342.93 157.37Z" fill="#630F0F"/>
<path d="M345.29 153C345.363 152.998 345.433 152.973 345.491 152.93C345.549 152.886 345.592 152.825 345.614 152.756C345.636 152.687 345.636 152.612 345.614 152.543C345.591 152.474 345.548 152.414 345.49 152.37C345.048 152.039 344.534 151.817 343.99 151.723C343.446 151.629 342.887 151.666 342.36 151.83C342.313 151.843 342.269 151.865 342.231 151.896C342.193 151.927 342.162 151.966 342.14 152.01C342.118 152.053 342.105 152.101 342.103 152.15C342.1 152.199 342.108 152.248 342.125 152.293C342.143 152.339 342.17 152.38 342.205 152.415C342.239 152.45 342.281 152.477 342.326 152.494C342.372 152.512 342.421 152.52 342.47 152.517C342.519 152.515 342.566 152.502 342.61 152.48C343.03 152.355 343.473 152.331 343.904 152.409C344.335 152.487 344.741 152.666 345.09 152.93C345.146 152.976 345.217 153.001 345.29 153Z" fill="#263238"/>
<path d="M363.42 160.76C362.36 166.14 361.31 175.99 365.07 179.57C365.07 179.57 363.6 185.02 353.62 185.02C342.62 185.02 348.37 179.57 348.37 179.57C354.37 178.14 354.21 173.69 353.16 169.57L363.42 160.76Z" fill="#7F3E3B"/>
<path d="M367 176.2C367.83 176.47 366.75 181.41 366.75 181.41C366.75 181.41 365.38 184.86 348.36 183.66C347.05 183.56 347.55 178.82 348.8 178.13C352.83 175.93 364.32 175.32 367 176.2Z" fill="#263238"/>
<path d="M401.57 382.81C402.49 382.72 403.83 381.03 404.21 380.41C404.227 380.383 404.236 380.352 404.236 380.32C404.236 380.288 404.227 380.257 404.21 380.23C404.194 380.2 404.169 380.177 404.138 380.162C404.107 380.148 404.073 380.144 404.04 380.15C403.94 380.15 401.52 380.61 400.93 381.55C400.868 381.649 400.827 381.759 400.81 381.875C400.792 381.99 400.799 382.108 400.83 382.22C400.96 382.66 401.21 382.78 401.41 382.81H401.57ZM403.68 380.58C403.03 381.48 401.96 382.53 401.45 382.46C401.4 382.46 401.25 382.46 401.16 382.12C401.14 382.055 401.136 381.986 401.146 381.918C401.156 381.851 401.182 381.787 401.22 381.73C401.909 381.114 402.765 380.714 403.68 380.58Z" fill="#7E57C2"/>
<path d="M403.58 380.58C403.759 380.565 403.936 380.535 404.11 380.49C404.14 380.481 404.166 380.464 404.187 380.441C404.208 380.418 404.223 380.39 404.23 380.36C404.236 380.329 404.233 380.297 404.223 380.267C404.212 380.237 404.194 380.211 404.17 380.19C404.11 380.13 402.49 378.75 401.39 378.86C401.258 378.869 401.129 378.905 401.012 378.967C400.894 379.029 400.792 379.115 400.71 379.22C400.616 379.311 400.557 379.432 400.544 379.562C400.531 379.692 400.565 379.823 400.64 379.93C401 380.5 402.58 380.68 403.58 380.58ZM403.66 380.23C402.66 380.35 401.2 380.15 400.92 379.74C400.92 379.74 400.84 379.61 400.98 379.43C401.036 379.364 401.105 379.31 401.182 379.27C401.259 379.231 401.344 379.207 401.43 379.2C402.259 379.315 403.035 379.673 403.66 380.23Z" fill="#7E57C2"/>
<path d="M332.82 409.11C333.578 409.107 334.334 409.04 335.08 408.91C335.114 408.901 335.144 408.883 335.169 408.859C335.193 408.834 335.211 408.803 335.22 408.77C335.226 408.734 335.221 408.698 335.205 408.665C335.188 408.633 335.162 408.607 335.13 408.59C335.02 408.52 332.46 407.06 331.23 407.39C331 407.449 330.802 407.596 330.68 407.8C330.602 407.911 330.56 408.044 330.56 408.18C330.56 408.316 330.602 408.449 330.68 408.56C331 409 331.88 409.11 332.82 409.11ZM334.52 408.65C333.15 408.84 331.29 408.83 330.95 408.36C330.9 408.3 330.86 408.19 330.95 407.97C330.987 407.908 331.036 407.855 331.094 407.814C331.153 407.772 331.22 407.744 331.29 407.73C332.08 407.52 333.62 408.19 334.52 408.65Z" fill="#7E57C2"/>
<path d="M335 408.91C335.036 408.92 335.074 408.92 335.11 408.91C335.133 408.89 335.151 408.866 335.163 408.838C335.176 408.81 335.181 408.78 335.18 408.75C335.18 408.67 334.97 406.69 334.04 405.92C333.902 405.805 333.743 405.719 333.571 405.668C333.399 405.616 333.218 405.6 333.04 405.62C332.56 405.67 332.43 405.91 332.39 406.11C332.26 406.94 334.02 408.53 334.9 408.93L335 408.91ZM333.21 405.91C333.433 405.917 333.648 405.997 333.82 406.14C334.375 406.774 334.724 407.563 334.82 408.4C333.91 407.86 332.72 406.61 332.82 406.11C332.82 406.11 332.82 405.95 333.16 405.92L333.21 405.91Z" fill="#7E57C2"/>
<path d="M343.12 408.74H335.78L335.04 391.72H342.39L343.12 408.74Z" fill="#7F3E3B"/>
<path d="M410.63 375.03L404.9 379.62L390.32 369.5L396.06 364.91L410.63 375.03Z" fill="#7F3E3B"/>
<path d="M403.85 379.33L409.71 373.52C409.815 373.419 409.951 373.356 410.096 373.341C410.241 373.327 410.387 373.362 410.51 373.44L416.14 377.06C416.277 377.148 416.391 377.266 416.475 377.406C416.559 377.545 416.61 377.701 416.625 377.863C416.639 378.025 416.617 378.188 416.559 378.34C416.501 378.492 416.409 378.629 416.29 378.74C414.21 380.74 413.1 381.6 410.52 384.15C408.94 385.73 405.07 390.43 402.88 392.6C400.69 394.77 398.25 392.89 398.96 391.8C402.11 386.94 403.18 382.93 403.32 380.49C403.35 380.052 403.538 379.639 403.85 379.33Z" fill="#263238"/>
<path d="M335.82 407.89H343.82C343.965 407.889 344.106 407.939 344.219 408.03C344.332 408.121 344.41 408.248 344.44 408.39L345.89 414.92C345.927 415.077 345.927 415.24 345.891 415.397C345.855 415.554 345.783 415.701 345.682 415.826C345.581 415.952 345.453 416.052 345.307 416.12C345.161 416.189 345.001 416.223 344.84 416.22C341.94 416.22 337.76 416.01 334.12 416.01C329.87 416.01 326.2 416.24 321.21 416.24C318.21 416.24 317.36 413.19 318.62 412.91C324.37 411.66 329.06 411.52 334.02 408.46C334.555 408.106 335.179 407.909 335.82 407.89Z" fill="#263238"/>
<path d="M379.55 181.77C385.92 184.77 388.55 205.33 388.55 205.33L373.9 211.08C371.626 205.513 369.784 199.779 368.39 193.93C366.34 184.65 373 178.65 379.55 181.77Z" fill="#7E57C2"/>
<path opacity="0.3" d="M379.55 181.77C385.92 184.77 388.55 205.33 388.55 205.33L373.9 211.08C371.626 205.513 369.784 199.779 368.39 193.93C366.34 184.65 373 178.65 379.55 181.77Z" fill="white"/>
<path opacity="0.2" d="M370.06 187.8C369.561 187.558 369.038 187.367 368.5 187.23C367.916 189.423 367.895 191.727 368.44 193.93C369.828 199.78 371.667 205.514 373.94 211.08L378.77 209.19C377.88 203.82 375.15 190.24 370.06 187.8Z" fill="black"/>
<path d="M337.07 181.61C337.07 181.61 329.25 190.44 336.63 245.11H375.93C376.2 239.11 372.41 209.65 378.23 181.23C373.884 180.394 369.488 179.84 365.07 179.57C359.508 179.25 353.932 179.25 348.37 179.57C344.556 179.954 340.778 180.636 337.07 181.61Z" fill="#7E57C2"/>
<path opacity="0.3" d="M337.07 181.61C337.07 181.61 329.25 190.44 336.63 245.11H375.93C376.2 239.11 372.41 209.65 378.23 181.23C373.884 180.394 369.488 179.84 365.07 179.57C359.508 179.25 353.932 179.25 348.37 179.57C344.556 179.954 340.778 180.636 337.07 181.61Z" fill="white"/>
<path opacity="0.2" d="M345 193.33C343.22 187.99 338.94 186.28 334.58 189.45C333.7 194.63 333.08 202.98 333.79 216.22L341.46 216.15C341.46 216.15 347.63 201.28 345 193.33Z" fill="black"/>
<path d="M343.56 191.14C343.24 193.82 342.8 196.25 342.31 198.78C341.82 201.31 341.25 203.78 340.6 206.27C339.317 211.359 337.569 216.32 335.38 221.09C334.81 222.32 334.15 223.53 333.45 224.74C333.09 225.35 332.73 225.96 332.32 226.56C331.788 227.394 331.161 228.162 330.45 228.85C329.07 230.13 327.434 231.101 325.65 231.7C324.201 232.208 322.703 232.56 321.18 232.75C318.462 233.087 315.715 233.121 312.99 232.85C311.657 232.743 310.357 232.573 309.09 232.34C307.79 232.11 306.56 231.87 305.22 231.52L305.87 226.04C310.434 225.848 314.966 225.178 319.39 224.04C320.29 223.774 321.163 223.426 322 223C322.549 222.748 323.03 222.367 323.4 221.89C323.32 221.96 324.05 220.75 324.48 219.89C324.91 219.03 325.39 217.89 325.8 216.89C326.64 214.83 327.36 212.65 328.02 210.42C328.68 208.19 329.26 205.92 329.8 203.62C330.34 201.32 330.8 199 331.3 196.62C331.8 194.24 332.16 191.88 332.52 189.67L343.56 191.14Z" fill="#7F3E3B"/>
<path d="M346.89 187C348.96 193.71 340.56 213.71 340.56 213.71L322.87 209.26C323.953 202.938 325.775 196.766 328.3 190.87C334 178.39 344.4 178.91 346.89 187Z" fill="#7E57C2"/>
<path opacity="0.3" d="M346.89 187C348.96 193.71 340.56 213.71 340.56 213.71L322.87 209.26C323.953 202.938 325.775 196.766 328.3 190.87C334 178.39 344.4 178.91 346.89 187Z" fill="white"/>
<path d="M306.12 226.07L297.8 225.86L301.8 234.51C301.8 234.51 305.18 234.96 307.96 230.39L310.89 226.9L307.52 226.22C307.059 226.13 306.59 226.08 306.12 226.07Z" fill="#7F3E3B"/>
<path d="M292.55 227.47L297.32 234.64L301.81 234.51L297.8 225.86L292.55 227.47Z" fill="#7F3E3B"/>
<path opacity="0.2" d="M335.05 391.73L335.42 400.5H342.77L342.39 391.73H335.05Z" fill="black"/>
<path opacity="0.2" d="M396.06 364.91L390.32 369.5L397.84 374.72L403.58 370.13L396.06 364.91Z" fill="black"/>
<path d="M363 155C362.56 162.28 362.68 166.56 359 170.3C353.48 175.92 344.49 172.6 342.75 165.3C341.18 158.76 342.17 147.96 349.29 145.05C350.86 144.401 352.57 144.164 354.258 144.364C355.945 144.564 357.553 145.193 358.928 146.191C360.303 147.188 361.399 148.522 362.112 150.064C362.825 151.607 363.131 153.306 363 155Z" fill="#7F3E3B"/>
<path d="M368.88 148.24C368.88 148.24 372.71 149.38 371.51 153.75C369.7 160.39 365.44 168.03 359.94 168.51C353.09 169.12 350 162.05 349.1 154.74C345 151.93 341.96 149.3 342.94 146.38C344.44 141.88 349.88 138 358.54 139C367.2 140 371.51 145.6 368.88 148.24Z" fill="#263238"/>
<path d="M353.27 156.24C353.137 158.046 352.413 159.757 351.21 161.11C349.61 162.87 347.93 161.77 347.65 159.63C347.4 157.69 347.92 154.44 349.88 153.47C351.84 152.5 353.4 154.06 353.27 156.24Z" fill="#7F3E3B"/>
<path d="M350.57 245.11C350.57 245.11 348.09 294.63 352.92 315.61C360.57 348.83 394.2 375.45 394.2 375.45L405 366.8C405 366.8 377.33 346.21 374.84 318.55C372.61 293.71 375.91 265.18 375.91 245.11H350.57Z" fill="#7E57C2"/>
<path opacity="0.2" d="M350.57 245.11C350.57 245.11 348.09 294.63 352.92 315.61C360.57 348.83 394.2 375.45 394.2 375.45L405 366.8C405 366.8 377.33 346.21 374.84 318.55C372.61 293.71 375.91 265.18 375.91 245.11H350.57Z" fill="black"/>
<path opacity="0.2" d="M354.26 259.78C353.26 257.85 351.31 263.6 349.95 270.98C349.95 281.16 350.13 292.74 351.02 302.55C357.81 290 356.37 263.78 354.26 259.78Z" fill="black"/>
<path d="M389.3 373.32L393.4 376.5L405.87 366.39L402.13 363L389.3 373.32Z" fill="#2C6BDB"/>
<path opacity="0.4" d="M389.3 373.32L393.4 376.5L405.87 366.39L402.13 363L389.3 373.32Z" fill="#FAFAFA"/>
<path d="M336.63 245.11C336.63 245.11 325.57 292.01 324.79 314.41C323.92 339.54 332.68 398.8 332.68 398.8H345.13C345.13 398.8 346.66 339.08 347.22 316.19C347.82 291.24 362.46 245.11 362.46 245.11H336.63Z" fill="#7E57C2"/>
<path opacity="0.2" d="M336.63 245.11C336.63 245.11 325.57 292.01 324.79 314.41C323.92 339.54 332.68 398.8 332.68 398.8H345.13C345.13 398.8 346.66 339.08 347.22 316.19C347.82 291.24 362.46 245.11 362.46 245.11H336.63Z" fill="black"/>
<path d="M330.29 393.84C330.23 393.84 330.99 399.01 330.99 399.01H346.13L346.54 394.4L330.29 393.84Z" fill="#2C6BDB"/>
<path opacity="0.4" d="M330.29 393.84C330.23 393.84 330.99 399.01 330.99 399.01H346.13L346.54 394.4L330.29 393.84Z" fill="#FAFAFA"/>
</svg>
 </div>

  {/* Right Text Box - Frame 466 */}
  <div className="flex flex-col justify-center items-start py-[40px] gap-[8px] w-[688px] h-[312px]">
  {/* Icon Wrapper */}
  <div className="flex justify-center items-center w-[80px] h-[80px]">
    {/* Circular Border (Icon placeholder) */}
       
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7704 23.12L24.0204 37.2834M42.7104 55.98L56.8804 60.23M38.9436 41.0569L58.1403 21.8603M13.3333 18.3333C13.3333 18.9899 13.4626 19.64 13.7139 20.2467C13.9651 20.8533 14.3334 21.4045 14.7977 21.8688C15.262 22.3331 15.8132 22.7014 16.4198 22.9526C17.0265 23.2039 17.6766 23.3333 18.3333 23.3333C18.9899 23.3333 19.64 23.2039 20.2467 22.9526C20.8533 22.7014 21.4045 22.3331 21.8688 21.8688C22.3331 21.4045 22.7014 20.8533 22.9526 20.2467C23.2039 19.64 23.3333 18.9899 23.3333 18.3333C23.3333 17.6766 23.2039 17.0265 22.9526 16.4198C22.7014 15.8132 22.3331 15.262 21.8688 14.7977C21.4045 14.3334 20.8533 13.9651 20.2467 13.7139C19.64 13.4626 18.9899 13.3333 18.3333 13.3333C17.6766 13.3333 17.0265 13.4626 16.4198 13.7139C15.8132 13.9651 15.262 14.3334 14.7977 14.7977C14.3334 15.262 13.9651 15.8132 13.7139 16.4198C13.4626 17.0265 13.3333 17.6766 13.3333 18.3333ZM56.6666 18.3333C56.6666 19.6593 57.1934 20.9311 58.131 21.8688C59.0687 22.8065 60.3405 23.3333 61.6666 23.3333C62.9927 23.3333 64.2644 22.8065 65.2021 21.8688C66.1398 20.9311 66.6666 19.6593 66.6666 18.3333C66.6666 17.0072 66.1398 15.7354 65.2021 14.7977C64.2644 13.86 62.9927 13.3333 61.6666 13.3333C60.3405 13.3333 59.0687 13.86 58.131 14.7977C57.1934 15.7354 56.6666 17.0072 56.6666 18.3333ZM56.6666 61.6666C56.6666 62.9927 57.1934 64.2644 58.131 65.2021C59.0687 66.1398 60.3405 66.6666 61.6666 66.6666C62.9927 66.6666 64.2644 66.1398 65.2021 65.2021C66.1398 64.2644 66.6666 62.9927 66.6666 61.6666C66.6666 60.3405 66.1398 59.0687 65.2021 58.131C64.2644 57.1934 62.9927 56.6666 61.6666 56.6666C60.3405 56.6666 59.0687 57.1934 58.131 58.131C57.1934 59.0687 56.6666 60.3405 56.6666 61.6666ZM13.3333 51.6666C13.3333 55.6448 14.9136 59.4601 17.7266 62.2732C20.5397 65.0862 24.355 66.6666 28.3333 66.6666C32.3115 66.6666 36.1268 65.0862 38.9398 62.2732C41.7529 59.4601 43.3332 55.6448 43.3332 51.6666C43.3332 47.6883 41.7529 43.873 38.9398 41.06C36.1268 38.2469 32.3115 36.6666 28.3333 36.6666C24.355 36.6666 20.5397 38.2469 17.7266 41.06C14.9136 43.873 13.3333 47.6883 13.3333 51.6666Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

   
  </div>

  {/* Heading */}
  <h3 className="w-[344px] h-[52px] font-manrope text-[32px] leading-[52px] font-medium text-[#AA1299]">
    Unified Job Discovery
  </h3>

  {/* Paragraph */}
  <p className="w-[516px] h-[84px] font-dmsans text-[18px] leading-[28px] tracking-[0.5px] font-light text-[#47464C]">
    Find all relevant jobs in one place. Skip the chaos of multiple sites — we bring everything together for a smoother search.
  </p>
</div>

</div>
    {/* Vertical Separator */}
<div className="absolute w-[2px] h-[250px] left-[573px] top-[540px] bg-[#E2E2E2] z-0" />



{/* FRAME  468*/}
   
<div className="flex flex-row justify-center items-center gap-[64px] w-[1252px] h-[500px] z-[5]">
  {/* Place Frame 466 blocks or other children here */}
  <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M500 382.4H0V382.65H500V382.4Z" fill="#EBEBEB"/>
<path d="M449.9 398.49H416.78V398.74H449.9V398.49Z" fill="#EBEBEB"/>
<path d="M331.22 401.21H322.53V401.46H331.22V401.21Z" fill="#EBEBEB"/>
<path d="M415.78 389.21H396.59V389.46H415.78V389.21Z" fill="#EBEBEB"/>
<path d="M95.65 390.89H52.46V391.14H95.65V390.89Z" fill="#EBEBEB"/>
<path d="M110.89 390.89H104.56V391.14H110.89V390.89Z" fill="#EBEBEB"/>
<path d="M225.15 395.11H131.47V395.36H225.15V395.11Z" fill="#EBEBEB"/>
<path d="M237 337.8H43.91C42.3973 337.797 40.9475 337.195 39.8788 336.124C38.8102 335.053 38.21 333.603 38.21 332.09V60.66C38.2231 59.156 38.8292 57.718 39.8964 56.6582C40.9637 55.5985 42.4059 55.0026 43.91 55H237C238.514 55 239.967 55.6016 241.038 56.6724C242.108 57.7433 242.71 59.1956 242.71 60.71V332.09C242.71 333.604 242.108 335.057 241.038 336.128C239.967 337.198 238.514 337.8 237 337.8ZM43.91 55.2C42.4636 55.2026 41.0774 55.7791 40.0556 56.8027C39.0338 57.8264 38.46 59.2136 38.46 60.66V332.09C38.46 333.536 39.0338 334.924 40.0556 335.947C41.0774 336.971 42.4636 337.547 43.91 337.55H237C238.447 337.547 239.834 336.971 240.858 335.948C241.881 334.924 242.457 333.537 242.46 332.09V60.66C242.457 59.2127 241.881 57.8255 240.858 56.8021C239.834 55.7787 238.447 55.2026 237 55.2H43.91Z" fill="#EBEBEB"/>
<path d="M453.31 337.8H260.21C258.696 337.797 257.246 337.195 256.175 336.125C255.105 335.054 254.503 333.604 254.5 332.09V60.66C254.516 59.1551 255.124 57.7171 256.193 56.6576C257.262 55.5981 258.705 55.0025 260.21 55H453.31C454.812 55.0052 456.252 55.6022 457.317 56.6617C458.382 57.7212 458.987 59.1578 459 60.66V332.09C459 333.601 458.401 335.05 457.335 336.121C456.268 337.191 454.821 337.795 453.31 337.8ZM260.21 55.2C258.763 55.2026 257.375 55.7787 256.352 56.8021C255.329 57.8255 254.753 59.2127 254.75 60.66V332.09C254.753 333.537 255.329 334.924 256.352 335.948C257.375 336.971 258.763 337.547 260.21 337.55H453.31C454.757 337.547 456.145 336.971 457.168 335.948C458.191 334.924 458.767 333.537 458.77 332.09V60.66C458.767 59.2127 458.191 57.8255 457.168 56.8021C456.145 55.7787 454.757 55.2026 453.31 55.2H260.21Z" fill="#EBEBEB"/>
<path d="M437.88 381.74V334.92H433.88V312.62H428.03V235.05H419.57V225.04L401.5 216.62V206.52H399V235.05H395.5V312.62H392V271.83H382.49V250.81H379.83V312.62H372.61V289.1H367.86V283.09H356.85V262.57H350.82V248.06H343.41V226.92H340.76V248.06H333.35V262.57H327.32V283.09H316.31V289.1H311.56V312.62H305.92V283.09H294.91V219.53H291.41V212.53H267.89V219.53H262.89V265.57H242.87V270.08H235.36V273.58H242.87V291.6H221.85V231.55H217.35V218.78H207.59V173.5H204.84V218.78H197.83V231.55H156.76V227.34H154.25V255.87H150.75V256.37H148.65V284.89H145.15V292.65H137.74V271.63H135.09V321.68H132.13V300.66H129.48V333.44H127.87V309.92H123.11V303.91H112.1V283.39H106.07V268.88H98.66V247.74H96.02V268.88H88.61V283.39H82.58V303.91H71.57V309.92H66.81V332.94H65.96V333.44H63.61V381.74H437.88Z" fill="#E6E6E6"/>
<path d="M182.51 234.35H179.67V237.19H182.51V234.35Z" fill="#F0F0F0"/>
<path d="M182.51 239.11H179.67V241.95H182.51V239.11Z" fill="#F0F0F0"/>
<path d="M182.51 258.12H179.67V260.96H182.51V258.12Z" fill="#F0F0F0"/>
<path d="M182.51 262.88H179.67V265.72H182.51V262.88Z" fill="#F0F0F0"/>
<path d="M182.51 267.63H179.67V270.47H182.51V267.63Z" fill="#F0F0F0"/>
<path d="M182.51 281.89H179.67V284.73H182.51V281.89Z" fill="#F0F0F0"/>
<path d="M182.51 286.65H179.67V289.49H182.51V286.65Z" fill="#F0F0F0"/>
<path d="M187.02 253.37H184.18V256.21H187.02V253.37Z" fill="#F0F0F0"/>
<path d="M187.02 258.12H184.18V260.96H187.02V258.12Z" fill="#F0F0F0"/>
<path d="M187.02 262.88H184.18V265.72H187.02V262.88Z" fill="#F0F0F0"/>
<path d="M187.02 267.63H184.18V270.47H187.02V267.63Z" fill="#F0F0F0"/>
<path d="M187.02 272.38H184.18V275.22H187.02V272.38Z" fill="#F0F0F0"/>
<path d="M187.02 281.89H184.18V284.73H187.02V281.89Z" fill="#F0F0F0"/>
<path d="M187.02 286.65H184.18V289.49H187.02V286.65Z" fill="#F0F0F0"/>
<path d="M191.52 234.35H188.68V237.19H191.52V234.35Z" fill="#F0F0F0"/>
<path d="M191.52 239.11H188.68V241.95H191.52V239.11Z" fill="#F0F0F0"/>
<path d="M191.52 243.86H188.68V246.7H191.52V243.86Z" fill="#F0F0F0"/>
<path d="M191.52 248.61H188.68V251.45H191.52V248.61Z" fill="#F0F0F0"/>
<path d="M191.52 253.37H188.68V256.21H191.52V253.37Z" fill="#F0F0F0"/>
<path d="M191.52 258.12H188.68V260.96H191.52V258.12Z" fill="#F0F0F0"/>
<path d="M191.52 262.88H188.68V265.72H191.52V262.88Z" fill="#F0F0F0"/>
<path d="M191.52 267.63H188.68V270.47H191.52V267.63Z" fill="#F0F0F0"/>
<path d="M191.52 272.38H188.68V275.22H191.52V272.38Z" fill="#F0F0F0"/>
<path d="M191.52 277.14H188.68V279.98H191.52V277.14Z" fill="#F0F0F0"/>
<path d="M191.52 286.65H188.68V289.49H191.52V286.65Z" fill="#F0F0F0"/>
<path d="M196.03 234.35H193.19V237.19H196.03V234.35Z" fill="#F0F0F0"/>
<path d="M196.03 239.11H193.19V241.95H196.03V239.11Z" fill="#F0F0F0"/>
<path d="M196.03 243.86H193.19V246.7H196.03V243.86Z" fill="#F0F0F0"/>
<path d="M196.03 248.61H193.19V251.45H196.03V248.61Z" fill="#F0F0F0"/>
<path d="M196.03 253.37H193.19V256.21H196.03V253.37Z" fill="#F0F0F0"/>
<path d="M196.03 258.12H193.19V260.96H196.03V258.12Z" fill="#F0F0F0"/>
<path d="M196.03 262.88H193.19V265.72H196.03V262.88Z" fill="#F0F0F0"/>
<path d="M196.03 305.66H193.19V308.5H196.03V305.66Z" fill="#F0F0F0"/>
<path d="M200.53 234.35H197.69V237.19H200.53V234.35Z" fill="#F0F0F0"/>
<path d="M200.53 239.11H197.69V241.95H200.53V239.11Z" fill="#F0F0F0"/>
<path d="M200.53 243.86H197.69V246.7H200.53V243.86Z" fill="#F0F0F0"/>
<path d="M200.53 248.61H197.69V251.45H200.53V248.61Z" fill="#F0F0F0"/>
<path d="M200.53 253.37H197.69V256.21H200.53V253.37Z" fill="#F0F0F0"/>
<path d="M200.53 258.12H197.69V260.96H200.53V258.12Z" fill="#F0F0F0"/>
<path d="M200.53 262.88H197.69V265.72H200.53V262.88Z" fill="#F0F0F0"/>
<path d="M200.53 267.63H197.69V270.47H200.53V267.63Z" fill="#F0F0F0"/>
<path d="M200.53 296.15H197.69V298.99H200.53V296.15Z" fill="#F0F0F0"/>
<path d="M200.53 300.91H197.69V303.75H200.53V300.91Z" fill="#F0F0F0"/>
<path d="M200.53 305.66H197.69V308.5H200.53V305.66Z" fill="#F0F0F0"/>
<path d="M200.53 310.42H197.69V313.26H200.53V310.42Z" fill="#F0F0F0"/>
<path d="M200.53 329.43H197.69V332.27H200.53V329.43Z" fill="#F0F0F0"/>
<path d="M205.03 234.35H202.19V237.19H205.03V234.35Z" fill="#F0F0F0"/>
<path d="M205.03 239.11H202.19V241.95H205.03V239.11Z" fill="#F0F0F0"/>
<path d="M205.03 243.86H202.19V246.7H205.03V243.86Z" fill="#F0F0F0"/>
<path d="M205.03 248.61H202.19V251.45H205.03V248.61Z" fill="#F0F0F0"/>
<path d="M205.03 253.37H202.19V256.21H205.03V253.37Z" fill="#F0F0F0"/>
<path d="M205.03 258.12H202.19V260.96H205.03V258.12Z" fill="#F0F0F0"/>
<path d="M205.03 262.88H202.19V265.72H205.03V262.88Z" fill="#F0F0F0"/>
<path d="M205.03 267.63H202.19V270.47H205.03V267.63Z" fill="#F0F0F0"/>
<path d="M205.03 272.38H202.19V275.22H205.03V272.38Z" fill="#F0F0F0"/>
<path d="M205.03 277.14H202.19V279.98H205.03V277.14Z" fill="#F0F0F0"/>
<path d="M205.03 291.4H202.19V294.24H205.03V291.4Z" fill="#F0F0F0"/>
<path d="M205.03 296.15H202.19V298.99H205.03V296.15Z" fill="#F0F0F0"/>
<path d="M205.03 300.91H202.19V303.75H205.03V300.91Z" fill="#F0F0F0"/>
<path d="M205.03 305.66H202.19V308.5H205.03V305.66Z" fill="#F0F0F0"/>
<path d="M205.03 310.42H202.19V313.26H205.03V310.42Z" fill="#F0F0F0"/>
<path d="M205.03 329.43H202.19V332.27H205.03V329.43Z" fill="#F0F0F0"/>
<path d="M209.54 234.35H206.7V237.19H209.54V234.35Z" fill="#F0F0F0"/>
<path d="M209.54 239.11H206.7V241.95H209.54V239.11Z" fill="#F0F0F0"/>
<path d="M209.54 243.86H206.7V246.7H209.54V243.86Z" fill="#F0F0F0"/>
<path d="M209.54 248.61H206.7V251.45H209.54V248.61Z" fill="#F0F0F0"/>
<path d="M209.54 253.37H206.7V256.21H209.54V253.37Z" fill="#F0F0F0"/>
<path d="M209.54 258.12H206.7V260.96H209.54V258.12Z" fill="#F0F0F0"/>
<path d="M209.54 262.88H206.7V265.72H209.54V262.88Z" fill="#F0F0F0"/>
<path d="M209.54 267.63H206.7V270.47H209.54V267.63Z" fill="#F0F0F0"/>
<path d="M209.54 272.38H206.7V275.22H209.54V272.38Z" fill="#F0F0F0"/>
<path d="M209.54 277.14H206.7V279.98H209.54V277.14Z" fill="#F0F0F0"/>
<path d="M209.54 281.89H206.7V284.73H209.54V281.89Z" fill="#F0F0F0"/>
<path d="M209.54 286.65H206.7V289.49H209.54V286.65Z" fill="#F0F0F0"/>
<path d="M209.54 291.4H206.7V294.24H209.54V291.4Z" fill="#F0F0F0"/>
<path d="M209.54 296.15H206.7V298.99H209.54V296.15Z" fill="#F0F0F0"/>
<path d="M209.54 300.91H206.7V303.75H209.54V300.91Z" fill="#F0F0F0"/>
<path d="M209.54 305.66H206.7V308.5H209.54V305.66Z" fill="#F0F0F0"/>
<path d="M209.54 310.42H206.7V313.26H209.54V310.42Z" fill="#F0F0F0"/>
<path d="M209.54 315.17H206.7V318.01H209.54V315.17Z" fill="#F0F0F0"/>
<path d="M214.04 234.35H211.2V237.19H214.04V234.35Z" fill="#F0F0F0"/>
<path d="M214.04 239.11H211.2V241.95H214.04V239.11Z" fill="#F0F0F0"/>
<path d="M214.04 243.86H211.2V246.7H214.04V243.86Z" fill="#F0F0F0"/>
<path d="M214.04 248.61H211.2V251.45H214.04V248.61Z" fill="#F0F0F0"/>
<path d="M214.04 253.37H211.2V256.21H214.04V253.37Z" fill="#F0F0F0"/>
<path d="M214.04 258.12H211.2V260.96H214.04V258.12Z" fill="#F0F0F0"/>
<path d="M214.04 262.88H211.2V265.72H214.04V262.88Z" fill="#F0F0F0"/>
<path d="M214.04 267.63H211.2V270.47H214.04V267.63Z" fill="#F0F0F0"/>
<path d="M214.04 272.38H211.2V275.22H214.04V272.38Z" fill="#F0F0F0"/>
<path d="M214.04 277.14H211.2V279.98H214.04V277.14Z" fill="#F0F0F0"/>
<path d="M214.04 291.4H211.2V294.24H214.04V291.4Z" fill="#F0F0F0"/>
<path d="M214.04 296.15H211.2V298.99H214.04V296.15Z" fill="#F0F0F0"/>
<path d="M214.04 300.91H211.2V303.75H214.04V300.91Z" fill="#F0F0F0"/>
<path d="M214.04 305.66H211.2V308.5H214.04V305.66Z" fill="#F0F0F0"/>
<path d="M218.55 234.35H215.71V237.19H218.55V234.35Z" fill="#F0F0F0"/>
<path d="M218.55 239.11H215.71V241.95H218.55V239.11Z" fill="#F0F0F0"/>
<path d="M218.55 243.86H215.71V246.7H218.55V243.86Z" fill="#F0F0F0"/>
<path d="M218.55 248.61H215.71V251.45H218.55V248.61Z" fill="#F0F0F0"/>
<path d="M218.55 253.37H215.71V256.21H218.55V253.37Z" fill="#F0F0F0"/>
<path d="M218.55 258.12H215.71V260.96H218.55V258.12Z" fill="#F0F0F0"/>
<path d="M218.55 262.88H215.71V265.72H218.55V262.88Z" fill="#F0F0F0"/>
<path d="M218.55 267.63H215.71V270.47H218.55V267.63Z" fill="#F0F0F0"/>
<path d="M218.55 272.38H215.71V275.22H218.55V272.38Z" fill="#F0F0F0"/>
<path d="M218.55 277.14H215.71V279.98H218.55V277.14Z" fill="#F0F0F0"/>
<path d="M218.55 291.4H215.71V294.24H218.55V291.4Z" fill="#F0F0F0"/>
<path d="M218.55 296.15H215.71V298.99H218.55V296.15Z" fill="#F0F0F0"/>
<path d="M218.55 300.91H215.71V303.75H218.55V300.91Z" fill="#F0F0F0"/>
<path d="M269.26 222.01H266.42V224.85H269.26V222.01Z" fill="#F0F0F0"/>
<path d="M269.26 226.76H266.42V229.6H269.26V226.76Z" fill="#F0F0F0"/>
<path d="M269.26 231.52H266.42V234.36H269.26V231.52Z" fill="#F0F0F0"/>
<path d="M269.26 236.27H266.42V239.11H269.26V236.27Z" fill="#F0F0F0"/>
<path d="M269.26 241.02H266.42V243.86H269.26V241.02Z" fill="#F0F0F0"/>
<path d="M269.26 245.78H266.42V248.62H269.26V245.78Z" fill="#F0F0F0"/>
<path d="M269.26 250.53H266.42V253.37H269.26V250.53Z" fill="#F0F0F0"/>
<path d="M269.26 255.29H266.42V258.13H269.26V255.29Z" fill="#F0F0F0"/>
<path d="M269.26 269.55H266.42V272.39H269.26V269.55Z" fill="#F0F0F0"/>
<path d="M269.26 274.3H266.42V277.14H269.26V274.3Z" fill="#F0F0F0"/>
<path d="M273.76 222.01H270.92V224.85H273.76V222.01Z" fill="#F0F0F0"/>
<path d="M273.76 226.76H270.92V229.6H273.76V226.76Z" fill="#F0F0F0"/>
<path d="M273.76 231.52H270.92V234.36H273.76V231.52Z" fill="#F0F0F0"/>
<path d="M273.76 236.27H270.92V239.11H273.76V236.27Z" fill="#F0F0F0"/>
<path d="M273.76 241.02H270.92V243.86H273.76V241.02Z" fill="#F0F0F0"/>
<path d="M273.76 245.78H270.92V248.62H273.76V245.78Z" fill="#F0F0F0"/>
<path d="M273.76 250.53H270.92V253.37H273.76V250.53Z" fill="#F0F0F0"/>
<path d="M273.76 255.29H270.92V258.13H273.76V255.29Z" fill="#F0F0F0"/>
<path d="M273.76 274.3H270.92V277.14H273.76V274.3Z" fill="#F0F0F0"/>
<path d="M278.26 222.01H275.42V224.85H278.26V222.01Z" fill="#F0F0F0"/>
<path d="M278.26 226.76H275.42V229.6H278.26V226.76Z" fill="#F0F0F0"/>
<path d="M278.26 231.52H275.42V234.36H278.26V231.52Z" fill="#F0F0F0"/>
<path d="M278.26 236.27H275.42V239.11H278.26V236.27Z" fill="#F0F0F0"/>
<path d="M278.26 241.02H275.42V243.86H278.26V241.02Z" fill="#F0F0F0"/>
<path d="M278.26 245.78H275.42V248.62H278.26V245.78Z" fill="#F0F0F0"/>
<path d="M278.26 250.53H275.42V253.37H278.26V250.53Z" fill="#F0F0F0"/>
<path d="M278.26 255.29H275.42V258.13H278.26V255.29Z" fill="#F0F0F0"/>
<path d="M282.77 222.01H279.93V224.85H282.77V222.01Z" fill="#F0F0F0"/>
<path d="M282.77 226.76H279.93V229.6H282.77V226.76Z" fill="#F0F0F0"/>
<path d="M282.77 231.52H279.93V234.36H282.77V231.52Z" fill="#F0F0F0"/>
<path d="M282.77 236.27H279.93V239.11H282.77V236.27Z" fill="#F0F0F0"/>
<path d="M282.77 241.02H279.93V243.86H282.77V241.02Z" fill="#F0F0F0"/>
<path d="M282.77 245.78H279.93V248.62H282.77V245.78Z" fill="#F0F0F0"/>
<path d="M282.77 255.29H279.93V258.13H282.77V255.29Z" fill="#F0F0F0"/>
<path d="M282.77 260.04H279.93V262.88H282.77V260.04Z" fill="#F0F0F0"/>
<path d="M282.77 274.3H279.93V277.14H282.77V274.3Z" fill="#F0F0F0"/>
<path d="M282.77 279.06H279.93V281.9H282.77V279.06Z" fill="#F0F0F0"/>
<path d="M282.77 283.81H279.93V286.65H282.77V283.81Z" fill="#F0F0F0"/>
<path d="M282.77 288.56H279.93V291.4H282.77V288.56Z" fill="#F0F0F0"/>
<path d="M282.77 293.32H279.93V296.16H282.77V293.32Z" fill="#F0F0F0"/>
<path d="M282.77 298.07H279.93V300.91H282.77V298.07Z" fill="#F0F0F0"/>
<path d="M282.77 302.83H279.93V305.67H282.77V302.83Z" fill="#F0F0F0"/>
<path d="M287.27 222.01H284.43V224.85H287.27V222.01Z" fill="#F0F0F0"/>
<path d="M287.27 226.76H284.43V229.6H287.27V226.76Z" fill="#F0F0F0"/>
<path d="M287.27 231.52H284.43V234.36H287.27V231.52Z" fill="#F0F0F0"/>
<path d="M287.27 236.27H284.43V239.11H287.27V236.27Z" fill="#F0F0F0"/>
<path d="M287.27 241.02H284.43V243.86H287.27V241.02Z" fill="#F0F0F0"/>
<path d="M287.27 245.78H284.43V248.62H287.27V245.78Z" fill="#F0F0F0"/>
<path d="M287.27 260.04H284.43V262.88H287.27V260.04Z" fill="#F0F0F0"/>
<path d="M287.27 264.79H284.43V267.63H287.27V264.79Z" fill="#F0F0F0"/>
<path d="M287.27 269.55H284.43V272.39H287.27V269.55Z" fill="#F0F0F0"/>
<path d="M287.27 274.3H284.43V277.14H287.27V274.3Z" fill="#F0F0F0"/>
<path d="M287.27 279.06H284.43V281.9H287.27V279.06Z" fill="#F0F0F0"/>
<path d="M287.27 283.81H284.43V286.65H287.27V283.81Z" fill="#F0F0F0"/>
<path d="M287.27 288.56H284.43V291.4H287.27V288.56Z" fill="#F0F0F0"/>
<path d="M287.27 293.32H284.43V296.16H287.27V293.32Z" fill="#F0F0F0"/>
<path d="M287.27 298.07H284.43V300.91H287.27V298.07Z" fill="#F0F0F0"/>
<path d="M287.27 302.83H284.43V305.67H287.27V302.83Z" fill="#F0F0F0"/>
<path d="M287.27 307.58H284.43V310.42H287.27V307.58Z" fill="#F0F0F0"/>
<path d="M287.27 317.09H284.43V319.93H287.27V317.09Z" fill="#F0F0F0"/>
<path d="M291.77 222.01H288.93V224.85H291.77V222.01Z" fill="#F0F0F0"/>
<path d="M291.77 226.76H288.93V229.6H291.77V226.76Z" fill="#F0F0F0"/>
<path d="M291.77 231.52H288.93V234.36H291.77V231.52Z" fill="#F0F0F0"/>
<path d="M291.77 236.27H288.93V239.11H291.77V236.27Z" fill="#F0F0F0"/>
<path d="M291.77 241.02H288.93V243.86H291.77V241.02Z" fill="#F0F0F0"/>
<path d="M291.77 245.78H288.93V248.62H291.77V245.78Z" fill="#F0F0F0"/>
<path d="M291.77 260.04H288.93V262.88H291.77V260.04Z" fill="#F0F0F0"/>
<path d="M291.77 264.79H288.93V267.63H291.77V264.79Z" fill="#F0F0F0"/>
<path d="M291.77 269.55H288.93V272.39H291.77V269.55Z" fill="#F0F0F0"/>
<path d="M291.77 274.3H288.93V277.14H291.77V274.3Z" fill="#F0F0F0"/>
<path d="M291.77 288.56H288.93V291.4H291.77V288.56Z" fill="#F0F0F0"/>
<path d="M291.77 293.32H288.93V296.16H291.77V293.32Z" fill="#F0F0F0"/>
<path d="M291.77 298.07H288.93V300.91H291.77V298.07Z" fill="#F0F0F0"/>
<path d="M291.77 302.83H288.93V305.67H291.77V302.83Z" fill="#F0F0F0"/>
<path d="M291.77 307.58H288.93V310.42H291.77V307.58Z" fill="#F0F0F0"/>
<path d="M291.77 317.09H288.93V319.93H291.77V317.09Z" fill="#F0F0F0"/>
<path d="M291.77 321.84H288.93V324.68H291.77V321.84Z" fill="#F0F0F0"/>
<path d="M332.64 266.21H329.8V269.05H332.64V266.21Z" fill="#F0F0F0"/>
<path d="M332.64 270.97H329.8V273.81H332.64V270.97Z" fill="#F0F0F0"/>
<path d="M332.64 275.72H329.8V278.56H332.64V275.72Z" fill="#F0F0F0"/>
<path d="M332.64 280.47H329.8V283.31H332.64V280.47Z" fill="#F0F0F0"/>
<path d="M332.64 285.23H329.8V288.07H332.64V285.23Z" fill="#F0F0F0"/>
<path d="M332.64 289.98H329.8V292.82H332.64V289.98Z" fill="#F0F0F0"/>
<path d="M332.64 294.74H329.8V297.58H332.64V294.74Z" fill="#F0F0F0"/>
<path d="M332.64 309H329.8V311.84H332.64V309Z" fill="#F0F0F0"/>
<path d="M332.64 313.75H329.8V316.59H332.64V313.75Z" fill="#F0F0F0"/>
<path d="M332.64 318.51H329.8V321.35H332.64V318.51Z" fill="#F0F0F0"/>
<path d="M337.15 266.21H334.31V269.05H337.15V266.21Z" fill="#F0F0F0"/>
<path d="M337.15 270.97H334.31V273.81H337.15V270.97Z" fill="#F0F0F0"/>
<path d="M337.15 275.72H334.31V278.56H337.15V275.72Z" fill="#F0F0F0"/>
<path d="M337.15 280.47H334.31V283.31H337.15V280.47Z" fill="#F0F0F0"/>
<path d="M337.15 285.23H334.31V288.07H337.15V285.23Z" fill="#F0F0F0"/>
<path d="M337.15 289.98H334.31V292.82H337.15V289.98Z" fill="#F0F0F0"/>
<path d="M337.15 294.74H334.31V297.58H337.15V294.74Z" fill="#F0F0F0"/>
<path d="M341.65 266.21H338.81V269.05H341.65V266.21Z" fill="#F0F0F0"/>
<path d="M341.65 270.97H338.81V273.81H341.65V270.97Z" fill="#F0F0F0"/>
<path d="M341.65 275.72H338.81V278.56H341.65V275.72Z" fill="#F0F0F0"/>
<path d="M341.65 280.47H338.81V283.31H341.65V280.47Z" fill="#F0F0F0"/>
<path d="M341.65 285.23H338.81V288.07H341.65V285.23Z" fill="#F0F0F0"/>
<path d="M341.65 289.98H338.81V292.82H341.65V289.98Z" fill="#F0F0F0"/>
<path d="M341.65 294.74H338.81V297.58H341.65V294.74Z" fill="#F0F0F0"/>
<path d="M346.15 266.21H343.31V269.05H346.15V266.21Z" fill="#F0F0F0"/>
<path d="M346.15 270.97H343.31V273.81H346.15V270.97Z" fill="#F0F0F0"/>
<path d="M346.15 275.72H343.31V278.56H346.15V275.72Z" fill="#F0F0F0"/>
<path d="M346.15 280.47H343.31V283.31H346.15V280.47Z" fill="#F0F0F0"/>
<path d="M346.15 285.23H343.31V288.07H346.15V285.23Z" fill="#F0F0F0"/>
<path d="M346.15 289.98H343.31V292.82H346.15V289.98Z" fill="#F0F0F0"/>
<path d="M346.15 294.74H343.31V297.58H346.15V294.74Z" fill="#F0F0F0"/>
<path d="M346.15 299.49H343.31V302.33H346.15V299.49Z" fill="#F0F0F0"/>
<path d="M346.15 304.24H343.31V307.08H346.15V304.24Z" fill="#F0F0F0"/>
<path d="M346.15 309H343.31V311.84H346.15V309Z" fill="#F0F0F0"/>
<path d="M346.15 313.75H343.31V316.59H346.15V313.75Z" fill="#F0F0F0"/>
<path d="M350.66 266.21H347.82V269.05H350.66V266.21Z" fill="#F0F0F0"/>
<path d="M350.66 270.97H347.82V273.81H350.66V270.97Z" fill="#F0F0F0"/>
<path d="M350.66 275.72H347.82V278.56H350.66V275.72Z" fill="#F0F0F0"/>
<path d="M350.66 280.47H347.82V283.31H350.66V280.47Z" fill="#F0F0F0"/>
<path d="M350.66 285.23H347.82V288.07H350.66V285.23Z" fill="#F0F0F0"/>
<path d="M350.66 289.98H347.82V292.82H350.66V289.98Z" fill="#F0F0F0"/>
<path d="M350.66 294.74H347.82V297.58H350.66V294.74Z" fill="#F0F0F0"/>
<path d="M350.66 299.49H347.82V302.33H350.66V299.49Z" fill="#F0F0F0"/>
<path d="M350.66 304.24H347.82V307.08H350.66V304.24Z" fill="#F0F0F0"/>
<path d="M350.66 309H347.82V311.84H350.66V309Z" fill="#F0F0F0"/>
<path d="M350.66 313.75H347.82V316.59H350.66V313.75Z" fill="#F0F0F0"/>
<path d="M350.66 318.51H347.82V321.35H350.66V318.51Z" fill="#F0F0F0"/>
<path d="M350.66 332.77H347.82V335.61H350.66V332.77Z" fill="#F0F0F0"/>
<path d="M350.66 337.52H347.82V340.36H350.66V337.52Z" fill="#F0F0F0"/>
<path d="M355.16 266.21H352.32V269.05H355.16V266.21Z" fill="#F0F0F0"/>
<path d="M355.16 270.97H352.32V273.81H355.16V270.97Z" fill="#F0F0F0"/>
<path d="M355.16 275.72H352.32V278.56H355.16V275.72Z" fill="#F0F0F0"/>
<path d="M355.16 289.98H352.32V292.82H355.16V289.98Z" fill="#F0F0F0"/>
<path d="M355.16 294.74H352.32V297.58H355.16V294.74Z" fill="#F0F0F0"/>
<path d="M355.16 299.49H352.32V302.33H355.16V299.49Z" fill="#F0F0F0"/>
<path d="M355.16 304.24H352.32V307.08H355.16V304.24Z" fill="#F0F0F0"/>
<path d="M355.16 309H352.32V311.84H355.16V309Z" fill="#F0F0F0"/>
<path d="M355.16 313.75H352.32V316.59H355.16V313.75Z" fill="#F0F0F0"/>
<path d="M355.16 318.51H352.32V321.35H355.16V318.51Z" fill="#F0F0F0"/>
<path d="M355.16 332.77H352.32V335.61H355.16V332.77Z" fill="#F0F0F0"/>
<path d="M355.16 337.52H352.32V340.36H355.16V337.52Z" fill="#F0F0F0"/>
<path d="M355.16 342.28H352.32V345.12H355.16V342.28Z" fill="#F0F0F0"/>
<path d="M402.37 237.69H399.53V240.53H402.37V237.69Z" fill="#F0F0F0"/>
<path d="M402.37 242.44H399.53V245.28H402.37V242.44Z" fill="#F0F0F0"/>
<path d="M402.37 247.2H399.53V250.04H402.37V247.2Z" fill="#F0F0F0"/>
<path d="M402.37 251.95H399.53V254.79H402.37V251.95Z" fill="#F0F0F0"/>
<path d="M402.37 256.7H399.53V259.54H402.37V256.7Z" fill="#F0F0F0"/>
<path d="M402.37 261.46H399.53V264.3H402.37V261.46Z" fill="#F0F0F0"/>
<path d="M402.37 266.21H399.53V269.05H402.37V266.21Z" fill="#F0F0F0"/>
<path d="M402.37 270.97H399.53V273.81H402.37V270.97Z" fill="#F0F0F0"/>
<path d="M402.37 275.72H399.53V278.56H402.37V275.72Z" fill="#F0F0F0"/>
<path d="M402.37 280.47H399.53V283.31H402.37V280.47Z" fill="#F0F0F0"/>
<path d="M402.37 285.23H399.53V288.07H402.37V285.23Z" fill="#F0F0F0"/>
<path d="M402.37 289.98H399.53V292.82H402.37V289.98Z" fill="#F0F0F0"/>
<path d="M402.37 294.74H399.53V297.58H402.37V294.74Z" fill="#F0F0F0"/>
<path d="M402.37 299.49H399.53V302.33H402.37V299.49Z" fill="#F0F0F0"/>
<path d="M402.37 304.24H399.53V307.08H402.37V304.24Z" fill="#F0F0F0"/>
<path d="M402.37 309H399.53V311.84H402.37V309Z" fill="#F0F0F0"/>
<path d="M402.37 313.75H399.53V316.59H402.37V313.75Z" fill="#F0F0F0"/>
<path d="M402.37 318.51H399.53V321.35H402.37V318.51Z" fill="#F0F0F0"/>
<path d="M402.37 323.26H399.53V326.1H402.37V323.26Z" fill="#F0F0F0"/>
<path d="M402.37 328.01H399.53V330.85H402.37V328.01Z" fill="#F0F0F0"/>
<path d="M402.37 332.77H399.53V335.61H402.37V332.77Z" fill="#F0F0F0"/>
<path d="M402.37 337.52H399.53V340.36H402.37V337.52Z" fill="#F0F0F0"/>
<path d="M402.37 342.28H399.53V345.12H402.37V342.28Z" fill="#F0F0F0"/>
<path d="M406.87 237.69H404.03V240.53H406.87V237.69Z" fill="#F0F0F0"/>
<path d="M406.87 242.44H404.03V245.28H406.87V242.44Z" fill="#F0F0F0"/>
<path d="M406.87 247.2H404.03V250.04H406.87V247.2Z" fill="#F0F0F0"/>
<path d="M406.87 251.95H404.03V254.79H406.87V251.95Z" fill="#F0F0F0"/>
<path d="M406.87 256.7H404.03V259.54H406.87V256.7Z" fill="#F0F0F0"/>
<path d="M406.87 261.46H404.03V264.3H406.87V261.46Z" fill="#F0F0F0"/>
<path d="M406.87 266.21H404.03V269.05H406.87V266.21Z" fill="#F0F0F0"/>
<path d="M406.87 270.97H404.03V273.81H406.87V270.97Z" fill="#F0F0F0"/>
<path d="M406.87 275.72H404.03V278.56H406.87V275.72Z" fill="#F0F0F0"/>
<path d="M406.87 280.47H404.03V283.31H406.87V280.47Z" fill="#F0F0F0"/>
<path d="M406.87 285.23H404.03V288.07H406.87V285.23Z" fill="#F0F0F0"/>
<path d="M406.87 289.98H404.03V292.82H406.87V289.98Z" fill="#F0F0F0"/>
<path d="M406.87 294.74H404.03V297.58H406.87V294.74Z" fill="#F0F0F0"/>
<path d="M406.87 299.49H404.03V302.33H406.87V299.49Z" fill="#F0F0F0"/>
<path d="M406.87 304.24H404.03V307.08H406.87V304.24Z" fill="#F0F0F0"/>
<path d="M406.87 309H404.03V311.84H406.87V309Z" fill="#F0F0F0"/>
<path d="M406.87 313.75H404.03V316.59H406.87V313.75Z" fill="#F0F0F0"/>
<path d="M406.87 318.51H404.03V321.35H406.87V318.51Z" fill="#F0F0F0"/>
<path d="M406.87 323.26H404.03V326.1H406.87V323.26Z" fill="#F0F0F0"/>
<path d="M411.38 237.69H408.54V240.53H411.38V237.69Z" fill="#F0F0F0"/>
<path d="M411.38 242.44H408.54V245.28H411.38V242.44Z" fill="#F0F0F0"/>
<path d="M411.38 247.2H408.54V250.04H411.38V247.2Z" fill="#F0F0F0"/>
<path d="M411.38 251.95H408.54V254.79H411.38V251.95Z" fill="#F0F0F0"/>
<path d="M411.38 256.7H408.54V259.54H411.38V256.7Z" fill="#F0F0F0"/>
<path d="M411.38 261.46H408.54V264.3H411.38V261.46Z" fill="#F0F0F0"/>
<path d="M411.38 266.21H408.54V269.05H411.38V266.21Z" fill="#F0F0F0"/>
<path d="M411.38 270.97H408.54V273.81H411.38V270.97Z" fill="#F0F0F0"/>
<path d="M411.38 275.72H408.54V278.56H411.38V275.72Z" fill="#F0F0F0"/>
<path d="M411.38 280.47H408.54V283.31H411.38V280.47Z" fill="#F0F0F0"/>
<path d="M411.38 285.23H408.54V288.07H411.38V285.23Z" fill="#F0F0F0"/>
<path d="M411.38 289.98H408.54V292.82H411.38V289.98Z" fill="#F0F0F0"/>
<path d="M411.38 294.74H408.54V297.58H411.38V294.74Z" fill="#F0F0F0"/>
<path d="M411.38 299.49H408.54V302.33H411.38V299.49Z" fill="#F0F0F0"/>
<path d="M411.38 304.24H408.54V307.08H411.38V304.24Z" fill="#F0F0F0"/>
<path d="M411.38 309H408.54V311.84H411.38V309Z" fill="#F0F0F0"/>
<path d="M411.38 313.75H408.54V316.59H411.38V313.75Z" fill="#F0F0F0"/>
<path d="M411.38 318.51H408.54V321.35H411.38V318.51Z" fill="#F0F0F0"/>
<path d="M411.38 323.26H408.54V326.1H411.38V323.26Z" fill="#F0F0F0"/>
<path d="M415.88 237.69H413.04V240.53H415.88V237.69Z" fill="#F0F0F0"/>
<path d="M415.88 242.44H413.04V245.28H415.88V242.44Z" fill="#F0F0F0"/>
<path d="M415.88 247.2H413.04V250.04H415.88V247.2Z" fill="#F0F0F0"/>
<path d="M415.88 251.95H413.04V254.79H415.88V251.95Z" fill="#F0F0F0"/>
<path d="M415.88 256.7H413.04V259.54H415.88V256.7Z" fill="#F0F0F0"/>
<path d="M415.88 261.46H413.04V264.3H415.88V261.46Z" fill="#F0F0F0"/>
<path d="M415.88 266.21H413.04V269.05H415.88V266.21Z" fill="#F0F0F0"/>
<path d="M415.88 270.97H413.04V273.81H415.88V270.97Z" fill="#F0F0F0"/>
<path d="M415.88 275.72H413.04V278.56H415.88V275.72Z" fill="#F0F0F0"/>
<path d="M415.88 280.47H413.04V283.31H415.88V280.47Z" fill="#F0F0F0"/>
<path d="M415.88 285.23H413.04V288.07H415.88V285.23Z" fill="#F0F0F0"/>
<path d="M415.88 289.98H413.04V292.82H415.88V289.98Z" fill="#F0F0F0"/>
<path d="M415.88 294.74H413.04V297.58H415.88V294.74Z" fill="#F0F0F0"/>
<path d="M415.88 299.49H413.04V302.33H415.88V299.49Z" fill="#F0F0F0"/>
<path d="M415.88 304.24H413.04V307.08H415.88V304.24Z" fill="#F0F0F0"/>
<path d="M420.38 237.69H417.54V240.53H420.38V237.69Z" fill="#F0F0F0"/>
<path d="M420.38 242.44H417.54V245.28H420.38V242.44Z" fill="#F0F0F0"/>
<path d="M420.38 247.2H417.54V250.04H420.38V247.2Z" fill="#F0F0F0"/>
<path d="M420.38 251.95H417.54V254.79H420.38V251.95Z" fill="#F0F0F0"/>
<path d="M420.38 256.7H417.54V259.54H420.38V256.7Z" fill="#F0F0F0"/>
<path d="M420.38 261.46H417.54V264.3H420.38V261.46Z" fill="#F0F0F0"/>
<path d="M420.38 266.21H417.54V269.05H420.38V266.21Z" fill="#F0F0F0"/>
<path d="M420.38 270.97H417.54V273.81H420.38V270.97Z" fill="#F0F0F0"/>
<path d="M420.38 275.72H417.54V278.56H420.38V275.72Z" fill="#F0F0F0"/>
<path d="M420.38 280.47H417.54V283.31H420.38V280.47Z" fill="#F0F0F0"/>
<path d="M420.38 285.23H417.54V288.07H420.38V285.23Z" fill="#F0F0F0"/>
<path d="M420.38 289.98H417.54V292.82H420.38V289.98Z" fill="#F0F0F0"/>
<path d="M420.38 294.74H417.54V297.58H420.38V294.74Z" fill="#F0F0F0"/>
<path d="M424.89 237.69H422.05V240.53H424.89V237.69Z" fill="#F0F0F0"/>
<path d="M424.89 242.44H422.05V245.28H424.89V242.44Z" fill="#F0F0F0"/>
<path d="M424.89 247.2H422.05V250.04H424.89V247.2Z" fill="#F0F0F0"/>
<path d="M424.89 251.95H422.05V254.79H424.89V251.95Z" fill="#F0F0F0"/>
<path d="M424.89 256.7H422.05V259.54H424.89V256.7Z" fill="#F0F0F0"/>
<path d="M424.89 261.46H422.05V264.3H424.89V261.46Z" fill="#F0F0F0"/>
<path d="M424.89 266.21H422.05V269.05H424.89V266.21Z" fill="#F0F0F0"/>
<path d="M424.89 270.97H422.05V273.81H424.89V270.97Z" fill="#F0F0F0"/>
<path d="M424.89 275.72H422.05V278.56H424.89V275.72Z" fill="#F0F0F0"/>
<path d="M424.89 280.47H422.05V283.31H424.89V280.47Z" fill="#F0F0F0"/>
<path d="M424.89 285.23H422.05V288.07H424.89V285.23Z" fill="#F0F0F0"/>
<path d="M424.89 289.98H422.05V292.82H424.89V289.98Z" fill="#F0F0F0"/>
<path d="M93.94 272.38H91.1V275.22H93.94V272.38Z" fill="#F0F0F0"/>
<path d="M93.94 277.14H91.1V279.98H93.94V277.14Z" fill="#F0F0F0"/>
<path d="M93.94 281.89H91.1V284.73H93.94V281.89Z" fill="#F0F0F0"/>
<path d="M93.94 286.65H91.1V289.49H93.94V286.65Z" fill="#F0F0F0"/>
<path d="M93.94 291.4H91.1V294.24H93.94V291.4Z" fill="#F0F0F0"/>
<path d="M93.94 296.15H91.1V298.99H93.94V296.15Z" fill="#F0F0F0"/>
<path d="M93.94 300.91H91.1V303.75H93.94V300.91Z" fill="#F0F0F0"/>
<path d="M93.94 305.66H91.1V308.5H93.94V305.66Z" fill="#F0F0F0"/>
<path d="M93.94 310.42H91.1V313.26H93.94V310.42Z" fill="#F0F0F0"/>
<path d="M93.94 315.17H91.1V318.01H93.94V315.17Z" fill="#F0F0F0"/>
<path d="M93.94 319.92H91.1V322.76H93.94V319.92Z" fill="#F0F0F0"/>
<path d="M93.94 324.68H91.1V327.52H93.94V324.68Z" fill="#F0F0F0"/>
<path d="M93.94 329.43H91.1V332.27H93.94V329.43Z" fill="#F0F0F0"/>
<path d="M93.94 334.19H91.1V337.03H93.94V334.19Z" fill="#F0F0F0"/>
<path d="M93.94 338.94H91.1V341.78H93.94V338.94Z" fill="#F0F0F0"/>
<path d="M93.94 343.69H91.1V346.53H93.94V343.69Z" fill="#F0F0F0"/>
<path d="M93.94 348.45H91.1V351.29H93.94V348.45Z" fill="#F0F0F0"/>
<path d="M93.94 353.2H91.1V356.04H93.94V353.2Z" fill="#F0F0F0"/>
<path d="M93.94 357.96H91.1V360.8H93.94V357.96Z" fill="#F0F0F0"/>
<path d="M93.94 362.71H91.1V365.55H93.94V362.71Z" fill="#F0F0F0"/>
<path d="M98.44 272.38H95.6V275.22H98.44V272.38Z" fill="#F0F0F0"/>
<path d="M98.44 277.14H95.6V279.98H98.44V277.14Z" fill="#F0F0F0"/>
<path d="M98.44 281.89H95.6V284.73H98.44V281.89Z" fill="#F0F0F0"/>
<path d="M98.44 286.65H95.6V289.49H98.44V286.65Z" fill="#F0F0F0"/>
<path d="M98.44 291.4H95.6V294.24H98.44V291.4Z" fill="#F0F0F0"/>
<path d="M98.44 296.15H95.6V298.99H98.44V296.15Z" fill="#F0F0F0"/>
<path d="M98.44 300.91H95.6V303.75H98.44V300.91Z" fill="#F0F0F0"/>
<path d="M98.44 305.66H95.6V308.5H98.44V305.66Z" fill="#F0F0F0"/>
<path d="M98.44 310.42H95.6V313.26H98.44V310.42Z" fill="#F0F0F0"/>
<path d="M98.44 315.17H95.6V318.01H98.44V315.17Z" fill="#F0F0F0"/>
<path d="M98.44 319.92H95.6V322.76H98.44V319.92Z" fill="#F0F0F0"/>
<path d="M98.44 324.68H95.6V327.52H98.44V324.68Z" fill="#F0F0F0"/>
<path d="M98.44 329.43H95.6V332.27H98.44V329.43Z" fill="#F0F0F0"/>
<path d="M98.44 334.19H95.6V337.03H98.44V334.19Z" fill="#F0F0F0"/>
<path d="M98.44 338.94H95.6V341.78H98.44V338.94Z" fill="#F0F0F0"/>
<path d="M98.44 343.69H95.6V346.53H98.44V343.69Z" fill="#F0F0F0"/>
<path d="M98.44 348.45H95.6V351.29H98.44V348.45Z" fill="#F0F0F0"/>
<path d="M98.44 353.2H95.6V356.04H98.44V353.2Z" fill="#F0F0F0"/>
<path d="M102.95 272.38H100.11V275.22H102.95V272.38Z" fill="#F0F0F0"/>
<path d="M102.95 277.14H100.11V279.98H102.95V277.14Z" fill="#F0F0F0"/>
<path d="M102.95 281.89H100.11V284.73H102.95V281.89Z" fill="#F0F0F0"/>
<path d="M102.95 286.65H100.11V289.49H102.95V286.65Z" fill="#F0F0F0"/>
<path d="M102.95 291.4H100.11V294.24H102.95V291.4Z" fill="#F0F0F0"/>
<path d="M102.95 296.15H100.11V298.99H102.95V296.15Z" fill="#F0F0F0"/>
<path d="M102.95 300.91H100.11V303.75H102.95V300.91Z" fill="#F0F0F0"/>
<path d="M102.95 305.66H100.11V308.5H102.95V305.66Z" fill="#F0F0F0"/>
<path d="M102.95 310.42H100.11V313.26H102.95V310.42Z" fill="#F0F0F0"/>
<path d="M102.95 315.17H100.11V318.01H102.95V315.17Z" fill="#F0F0F0"/>
<path d="M102.95 319.92H100.11V322.76H102.95V319.92Z" fill="#F0F0F0"/>
<path d="M102.95 324.68H100.11V327.52H102.95V324.68Z" fill="#F0F0F0"/>
<path d="M102.95 329.43H100.11V332.27H102.95V329.43Z" fill="#F0F0F0"/>
<path d="M102.95 334.19H100.11V337.03H102.95V334.19Z" fill="#F0F0F0"/>
<path d="M102.95 338.94H100.11V341.78H102.95V338.94Z" fill="#F0F0F0"/>
<path d="M102.95 343.69H100.11V346.53H102.95V343.69Z" fill="#F0F0F0"/>
<path d="M102.95 348.45H100.11V351.29H102.95V348.45Z" fill="#F0F0F0"/>
<path d="M102.95 353.2H100.11V356.04H102.95V353.2Z" fill="#F0F0F0"/>
<path d="M77.09 307.08H74.25V309.92H77.09V307.08Z" fill="#F0F0F0"/>
<path d="M77.09 311.83H74.25V314.67H77.09V311.83Z" fill="#F0F0F0"/>
<path d="M77.09 316.59H74.25V319.43H77.09V316.59Z" fill="#F0F0F0"/>
<path d="M77.09 321.34H74.25V324.18H77.09V321.34Z" fill="#F0F0F0"/>
<path d="M77.09 326.1H74.25V328.94H77.09V326.1Z" fill="#F0F0F0"/>
<path d="M77.09 330.85H74.25V333.69H77.09V330.85Z" fill="#F0F0F0"/>
<path d="M77.09 335.6H74.25V338.44H77.09V335.6Z" fill="#F0F0F0"/>
<path d="M77.09 340.36H74.25V343.2H77.09V340.36Z" fill="#F0F0F0"/>
<path d="M77.09 345.11H74.25V347.95H77.09V345.11Z" fill="#F0F0F0"/>
<path d="M77.09 349.87H74.25V352.71H77.09V349.87Z" fill="#F0F0F0"/>
<path d="M77.09 354.62H74.25V357.46H77.09V354.62Z" fill="#F0F0F0"/>
<path d="M77.09 359.38H74.25V362.22H77.09V359.38Z" fill="#F0F0F0"/>
<path d="M77.09 364.13H74.25V366.97H77.09V364.13Z" fill="#F0F0F0"/>
<path d="M81.6 307.08H78.76V309.92H81.6V307.08Z" fill="#F0F0F0"/>
<path d="M81.6 311.83H78.76V314.67H81.6V311.83Z" fill="#F0F0F0"/>
<path d="M81.6 316.59H78.76V319.43H81.6V316.59Z" fill="#F0F0F0"/>
<path d="M81.6 321.34H78.76V324.18H81.6V321.34Z" fill="#F0F0F0"/>
<path d="M81.6 326.1H78.76V328.94H81.6V326.1Z" fill="#F0F0F0"/>
<path d="M81.6 330.85H78.76V333.69H81.6V330.85Z" fill="#F0F0F0"/>
<path d="M81.6 335.6H78.76V338.44H81.6V335.6Z" fill="#F0F0F0"/>
<path d="M81.6 340.36H78.76V343.2H81.6V340.36Z" fill="#F0F0F0"/>
<path d="M81.6 345.11H78.76V347.95H81.6V345.11Z" fill="#F0F0F0"/>
<path d="M81.6 349.87H78.76V352.71H81.6V349.87Z" fill="#F0F0F0"/>
<path d="M81.6 354.62H78.76V357.46H81.6V354.62Z" fill="#F0F0F0"/>
<path d="M81.6 359.38H78.76V362.22H81.6V359.38Z" fill="#F0F0F0"/>
<path d="M81.6 364.13H78.76V366.97H81.6V364.13Z" fill="#F0F0F0"/>
<path d="M86.1 307.08H83.26V309.92H86.1V307.08Z" fill="#F0F0F0"/>
<path d="M86.1 311.83H83.26V314.67H86.1V311.83Z" fill="#F0F0F0"/>
<path d="M86.1 316.59H83.26V319.43H86.1V316.59Z" fill="#F0F0F0"/>
<path d="M86.1 321.34H83.26V324.18H86.1V321.34Z" fill="#F0F0F0"/>
<path d="M86.1 326.1H83.26V328.94H86.1V326.1Z" fill="#F0F0F0"/>
<path d="M86.1 330.85H83.26V333.69H86.1V330.85Z" fill="#F0F0F0"/>
<path d="M86.1 335.6H83.26V338.44H86.1V335.6Z" fill="#F0F0F0"/>
<path d="M86.1 340.36H83.26V343.2H86.1V340.36Z" fill="#F0F0F0"/>
<path d="M86.1 345.11H83.26V347.95H86.1V345.11Z" fill="#F0F0F0"/>
<path d="M86.1 349.87H83.26V352.71H86.1V349.87Z" fill="#F0F0F0"/>
<path d="M86.1 354.62H83.26V357.46H86.1V354.62Z" fill="#F0F0F0"/>
<path d="M86.1 359.38H83.26V362.22H86.1V359.38Z" fill="#F0F0F0"/>
<path d="M86.1 364.13H83.26V366.97H86.1V364.13Z" fill="#F0F0F0"/>
<path d="M86.1 368.88H83.26V371.72H86.1V368.88Z" fill="#F0F0F0"/>
<path d="M111.12 308.5H108.28V311.34H111.12V308.5Z" fill="#F0F0F0"/>
<path d="M111.12 313.25H108.28V316.09H111.12V313.25Z" fill="#F0F0F0"/>
<path d="M111.12 318.01H108.28V320.85H111.12V318.01Z" fill="#F0F0F0"/>
<path d="M111.12 322.76H108.28V325.6H111.12V322.76Z" fill="#F0F0F0"/>
<path d="M111.12 327.51H108.28V330.35H111.12V327.51Z" fill="#F0F0F0"/>
<path d="M111.12 332.27H108.28V335.11H111.12V332.27Z" fill="#F0F0F0"/>
<path d="M111.12 337.02H108.28V339.86H111.12V337.02Z" fill="#F0F0F0"/>
<path d="M111.12 341.78H108.28V344.62H111.12V341.78Z" fill="#F0F0F0"/>
<path d="M111.12 346.53H108.28V349.37H111.12V346.53Z" fill="#F0F0F0"/>
<path d="M111.12 351.28H108.28V354.12H111.12V351.28Z" fill="#F0F0F0"/>
<path d="M111.12 365.55H108.28V368.39H111.12V365.55Z" fill="#F0F0F0"/>
<path d="M115.62 308.5H112.78V311.34H115.62V308.5Z" fill="#F0F0F0"/>
<path d="M115.62 313.25H112.78V316.09H115.62V313.25Z" fill="#F0F0F0"/>
<path d="M115.62 318.01H112.78V320.85H115.62V318.01Z" fill="#F0F0F0"/>
<path d="M115.62 322.76H112.78V325.6H115.62V322.76Z" fill="#F0F0F0"/>
<path d="M115.62 327.51H112.78V330.35H115.62V327.51Z" fill="#F0F0F0"/>
<path d="M115.62 332.27H112.78V335.11H115.62V332.27Z" fill="#F0F0F0"/>
<path d="M115.62 337.02H112.78V339.86H115.62V337.02Z" fill="#F0F0F0"/>
<path d="M115.62 341.78H112.78V344.62H115.62V341.78Z" fill="#F0F0F0"/>
<path d="M115.62 346.53H112.78V349.37H115.62V346.53Z" fill="#F0F0F0"/>
<path d="M115.62 360.79H112.78V363.63H115.62V360.79Z" fill="#F0F0F0"/>
<path d="M115.62 365.55H112.78V368.39H115.62V365.55Z" fill="#F0F0F0"/>
<path d="M120.13 308.5H117.29V311.34H120.13V308.5Z" fill="#F0F0F0"/>
<path d="M120.13 313.25H117.29V316.09H120.13V313.25Z" fill="#F0F0F0"/>
<path d="M120.13 318.01H117.29V320.85H120.13V318.01Z" fill="#F0F0F0"/>
<path d="M120.13 322.76H117.29V325.6H120.13V322.76Z" fill="#F0F0F0"/>
<path d="M120.13 327.51H117.29V330.35H120.13V327.51Z" fill="#F0F0F0"/>
<path d="M120.13 332.27H117.29V335.11H120.13V332.27Z" fill="#F0F0F0"/>
<path d="M120.13 337.02H117.29V339.86H120.13V337.02Z" fill="#F0F0F0"/>
<path d="M120.13 341.78H117.29V344.62H120.13V341.78Z" fill="#F0F0F0"/>
<path d="M120.13 356.04H117.29V358.88H120.13V356.04Z" fill="#F0F0F0"/>
<path d="M120.13 360.79H117.29V363.63H120.13V360.79Z" fill="#F0F0F0"/>
<path d="M120.13 365.55H117.29V368.39H120.13V365.55Z" fill="#F0F0F0"/>
<path d="M162 236.27H159.16V239.11H162V236.27Z" fill="#F0F0F0"/>
<path d="M162 241.02H159.16V243.86H162V241.02Z" fill="#F0F0F0"/>
<path d="M162 245.78H159.16V248.62H162V245.78Z" fill="#F0F0F0"/>
<path d="M162 250.53H159.16V253.37H162V250.53Z" fill="#F0F0F0"/>
<path d="M162 255.29H159.16V258.13H162V255.29Z" fill="#F0F0F0"/>
<path d="M162 260.04H159.16V262.88H162V260.04Z" fill="#F0F0F0"/>
<path d="M162 264.79H159.16V267.63H162V264.79Z" fill="#F0F0F0"/>
<path d="M162 269.55H159.16V272.39H162V269.55Z" fill="#F0F0F0"/>
<path d="M162 274.3H159.16V277.14H162V274.3Z" fill="#F0F0F0"/>
<path d="M162 279.06H159.16V281.9H162V279.06Z" fill="#F0F0F0"/>
<path d="M162 283.81H159.16V286.65H162V283.81Z" fill="#F0F0F0"/>
<path d="M162 288.56H159.16V291.4H162V288.56Z" fill="#F0F0F0"/>
<path d="M162 293.32H159.16V296.16H162V293.32Z" fill="#F0F0F0"/>
<path d="M162 298.07H159.16V300.91H162V298.07Z" fill="#F0F0F0"/>
<path d="M162 302.83H159.16V305.67H162V302.83Z" fill="#F0F0F0"/>
<path d="M162 307.58H159.16V310.42H162V307.58Z" fill="#F0F0F0"/>
<path d="M162 312.33H159.16V315.17H162V312.33Z" fill="#F0F0F0"/>
<path d="M162 321.84H159.16V324.68H162V321.84Z" fill="#F0F0F0"/>
<path d="M162 326.6H159.16V329.44H162V326.6Z" fill="#F0F0F0"/>
<path d="M162 331.35H159.16V334.19H162V331.35Z" fill="#F0F0F0"/>
<path d="M162 336.11H159.16V338.95H162V336.11Z" fill="#F0F0F0"/>
<path d="M162 340.86H159.16V343.7H162V340.86Z" fill="#F0F0F0"/>
<path d="M166.5 236.27H163.66V239.11H166.5V236.27Z" fill="#F0F0F0"/>
<path d="M166.5 241.02H163.66V243.86H166.5V241.02Z" fill="#F0F0F0"/>
<path d="M166.5 245.78H163.66V248.62H166.5V245.78Z" fill="#F0F0F0"/>
<path d="M166.5 250.53H163.66V253.37H166.5V250.53Z" fill="#F0F0F0"/>
<path d="M166.5 255.29H163.66V258.13H166.5V255.29Z" fill="#F0F0F0"/>
<path d="M166.5 260.04H163.66V262.88H166.5V260.04Z" fill="#F0F0F0"/>
<path d="M166.5 264.79H163.66V267.63H166.5V264.79Z" fill="#F0F0F0"/>
<path d="M166.5 269.55H163.66V272.39H166.5V269.55Z" fill="#F0F0F0"/>
<path d="M166.5 274.3H163.66V277.14H166.5V274.3Z" fill="#F0F0F0"/>
<path d="M166.5 279.06H163.66V281.9H166.5V279.06Z" fill="#F0F0F0"/>
<path d="M166.5 283.81H163.66V286.65H166.5V283.81Z" fill="#F0F0F0"/>
<path d="M166.5 288.56H163.66V291.4H166.5V288.56Z" fill="#F0F0F0"/>
<path d="M166.5 293.32H163.66V296.16H166.5V293.32Z" fill="#F0F0F0"/>
<path d="M166.5 298.07H163.66V300.91H166.5V298.07Z" fill="#F0F0F0"/>
<path d="M166.5 302.83H163.66V305.67H166.5V302.83Z" fill="#F0F0F0"/>
<path d="M166.5 307.58H163.66V310.42H166.5V307.58Z" fill="#F0F0F0"/>
<path d="M166.5 336.11H163.66V338.95H166.5V336.11Z" fill="#F0F0F0"/>
<path d="M166.5 340.86H163.66V343.7H166.5V340.86Z" fill="#F0F0F0"/>
<path d="M171 236.27H168.16V239.11H171V236.27Z" fill="#F0F0F0"/>
<path d="M171 241.02H168.16V243.86H171V241.02Z" fill="#F0F0F0"/>
<path d="M171 245.78H168.16V248.62H171V245.78Z" fill="#F0F0F0"/>
<path d="M171 250.53H168.16V253.37H171V250.53Z" fill="#F0F0F0"/>
<path d="M171 255.29H168.16V258.13H171V255.29Z" fill="#F0F0F0"/>
<path d="M171 260.04H168.16V262.88H171V260.04Z" fill="#F0F0F0"/>
<path d="M171 264.79H168.16V267.63H171V264.79Z" fill="#F0F0F0"/>
<path d="M171 269.55H168.16V272.39H171V269.55Z" fill="#F0F0F0"/>
<path d="M171 274.3H168.16V277.14H171V274.3Z" fill="#F0F0F0"/>
<path d="M171 279.06H168.16V281.9H171V279.06Z" fill="#F0F0F0"/>
<path d="M171 283.81H168.16V286.65H171V283.81Z" fill="#F0F0F0"/>
<path d="M171 288.56H168.16V291.4H171V288.56Z" fill="#F0F0F0"/>
<path d="M171 293.32H168.16V296.16H171V293.32Z" fill="#F0F0F0"/>
<path d="M171 298.07H168.16V300.91H171V298.07Z" fill="#F0F0F0"/>
<path d="M171 302.83H168.16V305.67H171V302.83Z" fill="#F0F0F0"/>
<path d="M171 307.58H168.16V310.42H171V307.58Z" fill="#F0F0F0"/>
<path d="M171 317.09H168.16V319.93H171V317.09Z" fill="#F0F0F0"/>
<path d="M171 321.84H168.16V324.68H171V321.84Z" fill="#F0F0F0"/>
<path d="M171 326.6H168.16V329.44H171V326.6Z" fill="#F0F0F0"/>
<path d="M171 331.35H168.16V334.19H171V331.35Z" fill="#F0F0F0"/>
<path d="M171 340.86H168.16V343.7H171V340.86Z" fill="#F0F0F0"/>
<path d="M145.65 296.15H142.81V298.99H145.65V296.15Z" fill="#F0F0F0"/>
<path d="M145.65 300.91H142.81V303.75H145.65V300.91Z" fill="#F0F0F0"/>
<path d="M145.65 305.66H142.81V308.5H145.65V305.66Z" fill="#F0F0F0"/>
<path d="M145.65 310.42H142.81V313.26H145.65V310.42Z" fill="#F0F0F0"/>
<path d="M145.65 315.17H142.81V318.01H145.65V315.17Z" fill="#F0F0F0"/>
<path d="M145.65 319.92H142.81V322.76H145.65V319.92Z" fill="#F0F0F0"/>
<path d="M145.65 324.68H142.81V327.52H145.65V324.68Z" fill="#F0F0F0"/>
<path d="M145.65 334.19H142.81V337.03H145.65V334.19Z" fill="#F0F0F0"/>
<path d="M145.65 338.94H142.81V341.78H145.65V338.94Z" fill="#F0F0F0"/>
<path d="M145.65 343.69H142.81V346.53H145.65V343.69Z" fill="#F0F0F0"/>
<path d="M145.65 348.45H142.81V351.29H145.65V348.45Z" fill="#F0F0F0"/>
<path d="M145.65 353.2H142.81V356.04H145.65V353.2Z" fill="#F0F0F0"/>
<path d="M145.65 357.96H142.81V360.8H145.65V357.96Z" fill="#F0F0F0"/>
<path d="M145.65 362.71H142.81V365.55H145.65V362.71Z" fill="#F0F0F0"/>
<path d="M145.65 367.47H142.81V370.31H145.65V367.47Z" fill="#F0F0F0"/>
<path d="M150.15 296.15H147.31V298.99H150.15V296.15Z" fill="#F0F0F0"/>
<path d="M150.15 300.91H147.31V303.75H150.15V300.91Z" fill="#F0F0F0"/>
<path d="M150.15 305.66H147.31V308.5H150.15V305.66Z" fill="#F0F0F0"/>
<path d="M150.15 310.42H147.31V313.26H150.15V310.42Z" fill="#F0F0F0"/>
<path d="M150.15 315.17H147.31V318.01H150.15V315.17Z" fill="#F0F0F0"/>
<path d="M150.15 319.92H147.31V322.76H150.15V319.92Z" fill="#F0F0F0"/>
<path d="M150.15 334.19H147.31V337.03H150.15V334.19Z" fill="#F0F0F0"/>
<path d="M150.15 338.94H147.31V341.78H150.15V338.94Z" fill="#F0F0F0"/>
<path d="M150.15 343.69H147.31V346.53H150.15V343.69Z" fill="#F0F0F0"/>
<path d="M150.15 348.45H147.31V351.29H150.15V348.45Z" fill="#F0F0F0"/>
<path d="M150.15 353.2H147.31V356.04H150.15V353.2Z" fill="#F0F0F0"/>
<path d="M150.15 357.96H147.31V360.8H150.15V357.96Z" fill="#F0F0F0"/>
<path d="M150.15 362.71H147.31V365.55H150.15V362.71Z" fill="#F0F0F0"/>
<path d="M150.15 367.47H147.31V370.31H150.15V367.47Z" fill="#F0F0F0"/>
<path d="M154.66 296.15H151.82V298.99H154.66V296.15Z" fill="#F0F0F0"/>
<path d="M154.66 300.91H151.82V303.75H154.66V300.91Z" fill="#F0F0F0"/>
<path d="M154.66 305.66H151.82V308.5H154.66V305.66Z" fill="#F0F0F0"/>
<path d="M154.66 310.42H151.82V313.26H154.66V310.42Z" fill="#F0F0F0"/>
<path d="M154.66 315.17H151.82V318.01H154.66V315.17Z" fill="#F0F0F0"/>
<path d="M154.66 319.92H151.82V322.76H154.66V319.92Z" fill="#F0F0F0"/>
<path d="M154.66 329.43H151.82V332.27H154.66V329.43Z" fill="#F0F0F0"/>
<path d="M154.66 334.19H151.82V337.03H154.66V334.19Z" fill="#F0F0F0"/>
<path d="M154.66 338.94H151.82V341.78H154.66V338.94Z" fill="#F0F0F0"/>
<path d="M154.66 343.69H151.82V346.53H154.66V343.69Z" fill="#F0F0F0"/>
<path d="M154.66 348.45H151.82V351.29H154.66V348.45Z" fill="#F0F0F0"/>
<path d="M154.66 353.2H151.82V356.04H154.66V353.2Z" fill="#F0F0F0"/>
<path d="M154.66 357.96H151.82V360.8H154.66V357.96Z" fill="#F0F0F0"/>
<path d="M154.66 362.71H151.82V365.55H154.66V362.71Z" fill="#F0F0F0"/>
<path d="M154.66 367.47H151.82V370.31H154.66V367.47Z" fill="#F0F0F0"/>
<path d="M249.57 269.55H246.73V272.39H249.57V269.55Z" fill="#F0F0F0"/>
<path d="M249.57 274.3H246.73V277.14H249.57V274.3Z" fill="#F0F0F0"/>
<path d="M249.57 279.06H246.73V281.9H249.57V279.06Z" fill="#F0F0F0"/>
<path d="M249.57 283.81H246.73V286.65H249.57V283.81Z" fill="#F0F0F0"/>
<path d="M249.57 288.56H246.73V291.4H249.57V288.56Z" fill="#F0F0F0"/>
<path d="M249.57 293.32H246.73V296.16H249.57V293.32Z" fill="#F0F0F0"/>
<path d="M249.57 298.07H246.73V300.91H249.57V298.07Z" fill="#F0F0F0"/>
<path d="M249.57 302.83H246.73V305.67H249.57V302.83Z" fill="#F0F0F0"/>
<path d="M249.57 307.58H246.73V310.42H249.57V307.58Z" fill="#F0F0F0"/>
<path d="M249.57 312.33H246.73V315.17H249.57V312.33Z" fill="#F0F0F0"/>
<path d="M249.57 317.09H246.73V319.93H249.57V317.09Z" fill="#F0F0F0"/>
<path d="M249.57 321.84H246.73V324.68H249.57V321.84Z" fill="#F0F0F0"/>
<path d="M249.57 326.6H246.73V329.44H249.57V326.6Z" fill="#F0F0F0"/>
<path d="M249.57 336.11H246.73V338.95H249.57V336.11Z" fill="#F0F0F0"/>
<path d="M249.57 340.86H246.73V343.7H249.57V340.86Z" fill="#F0F0F0"/>
<path d="M249.57 345.61H246.73V348.45H249.57V345.61Z" fill="#F0F0F0"/>
<path d="M249.57 350.37H246.73V353.21H249.57V350.37Z" fill="#F0F0F0"/>
<path d="M249.57 359.88H246.73V362.72H249.57V359.88Z" fill="#F0F0F0"/>
<path d="M249.57 364.63H246.73V367.47H249.57V364.63Z" fill="#F0F0F0"/>
<path d="M249.57 369.38H246.73V372.22H249.57V369.38Z" fill="#F0F0F0"/>
<path d="M254.08 269.55H251.24V272.39H254.08V269.55Z" fill="#F0F0F0"/>
<path d="M254.08 274.3H251.24V277.14H254.08V274.3Z" fill="#F0F0F0"/>
<path d="M254.08 279.06H251.24V281.9H254.08V279.06Z" fill="#F0F0F0"/>
<path d="M254.08 283.81H251.24V286.65H254.08V283.81Z" fill="#F0F0F0"/>
<path d="M254.08 288.56H251.24V291.4H254.08V288.56Z" fill="#F0F0F0"/>
<path d="M254.08 293.32H251.24V296.16H254.08V293.32Z" fill="#F0F0F0"/>
<path d="M254.08 298.07H251.24V300.91H254.08V298.07Z" fill="#F0F0F0"/>
<path d="M254.08 302.83H251.24V305.67H254.08V302.83Z" fill="#F0F0F0"/>
<path d="M254.08 307.58H251.24V310.42H254.08V307.58Z" fill="#F0F0F0"/>
<path d="M254.08 312.33H251.24V315.17H254.08V312.33Z" fill="#F0F0F0"/>
<path d="M254.08 317.09H251.24V319.93H254.08V317.09Z" fill="#F0F0F0"/>
<path d="M254.08 321.84H251.24V324.68H254.08V321.84Z" fill="#F0F0F0"/>
<path d="M254.08 326.6H251.24V329.44H254.08V326.6Z" fill="#F0F0F0"/>
<path d="M254.08 340.86H251.24V343.7H254.08V340.86Z" fill="#F0F0F0"/>
<path d="M254.08 345.61H251.24V348.45H254.08V345.61Z" fill="#F0F0F0"/>
<path d="M254.08 355.12H251.24V357.96H254.08V355.12Z" fill="#F0F0F0"/>
<path d="M254.08 359.88H251.24V362.72H254.08V359.88Z" fill="#F0F0F0"/>
<path d="M254.08 364.63H251.24V367.47H254.08V364.63Z" fill="#F0F0F0"/>
<path d="M254.08 369.38H251.24V372.22H254.08V369.38Z" fill="#F0F0F0"/>
<path d="M258.58 269.55H255.74V272.39H258.58V269.55Z" fill="#F0F0F0"/>
<path d="M258.58 274.3H255.74V277.14H258.58V274.3Z" fill="#F0F0F0"/>
<path d="M258.58 279.06H255.74V281.9H258.58V279.06Z" fill="#F0F0F0"/>
<path d="M258.58 283.81H255.74V286.65H258.58V283.81Z" fill="#F0F0F0"/>
<path d="M258.58 288.56H255.74V291.4H258.58V288.56Z" fill="#F0F0F0"/>
<path d="M258.58 293.32H255.74V296.16H258.58V293.32Z" fill="#F0F0F0"/>
<path d="M258.58 298.07H255.74V300.91H258.58V298.07Z" fill="#F0F0F0"/>
<path d="M258.58 302.83H255.74V305.67H258.58V302.83Z" fill="#F0F0F0"/>
<path d="M258.58 307.58H255.74V310.42H258.58V307.58Z" fill="#F0F0F0"/>
<path d="M258.58 312.33H255.74V315.17H258.58V312.33Z" fill="#F0F0F0"/>
<path d="M258.58 317.09H255.74V319.93H258.58V317.09Z" fill="#F0F0F0"/>
<path d="M258.58 321.84H255.74V324.68H258.58V321.84Z" fill="#F0F0F0"/>
<path d="M258.58 326.6H255.74V329.44H258.58V326.6Z" fill="#F0F0F0"/>
<path d="M258.58 331.35H255.74V334.19H258.58V331.35Z" fill="#F0F0F0"/>
<path d="M258.58 340.86H255.74V343.7H258.58V340.86Z" fill="#F0F0F0"/>
<path d="M258.58 350.37H255.74V353.21H258.58V350.37Z" fill="#F0F0F0"/>
<path d="M258.58 355.12H255.74V357.96H258.58V355.12Z" fill="#F0F0F0"/>
<path d="M258.58 359.88H255.74V362.72H258.58V359.88Z" fill="#F0F0F0"/>
<path d="M258.58 364.63H255.74V367.47H258.58V364.63Z" fill="#F0F0F0"/>
<path d="M258.58 369.38H255.74V372.22H258.58V369.38Z" fill="#F0F0F0"/>
<path d="M231.22 296.65H228.38V299.49H231.22V296.65Z" fill="#F0F0F0"/>
<path d="M231.22 301.41H228.38V304.25H231.22V301.41Z" fill="#F0F0F0"/>
<path d="M231.22 306.16H228.38V309H231.22V306.16Z" fill="#F0F0F0"/>
<path d="M231.22 310.92H228.38V313.76H231.22V310.92Z" fill="#F0F0F0"/>
<path d="M231.22 315.67H228.38V318.51H231.22V315.67Z" fill="#F0F0F0"/>
<path d="M231.22 320.43H228.38V323.27H231.22V320.43Z" fill="#F0F0F0"/>
<path d="M231.22 334.69H228.38V337.53H231.22V334.69Z" fill="#F0F0F0"/>
<path d="M231.22 339.44H228.38V342.28H231.22V339.44Z" fill="#F0F0F0"/>
<path d="M231.22 344.2H228.38V347.04H231.22V344.2Z" fill="#F0F0F0"/>
<path d="M231.22 348.95H228.38V351.79H231.22V348.95Z" fill="#F0F0F0"/>
<path d="M231.22 353.7H228.38V356.54H231.22V353.7Z" fill="#F0F0F0"/>
<path d="M231.22 358.46H228.38V361.3H231.22V358.46Z" fill="#F0F0F0"/>
<path d="M231.22 363.21H228.38V366.05H231.22V363.21Z" fill="#F0F0F0"/>
<path d="M235.73 296.65H232.89V299.49H235.73V296.65Z" fill="#F0F0F0"/>
<path d="M235.73 301.41H232.89V304.25H235.73V301.41Z" fill="#F0F0F0"/>
<path d="M235.73 306.16H232.89V309H235.73V306.16Z" fill="#F0F0F0"/>
<path d="M235.73 310.92H232.89V313.76H235.73V310.92Z" fill="#F0F0F0"/>
<path d="M235.73 315.67H232.89V318.51H235.73V315.67Z" fill="#F0F0F0"/>
<path d="M235.73 320.43H232.89V323.27H235.73V320.43Z" fill="#F0F0F0"/>
<path d="M235.73 334.69H232.89V337.53H235.73V334.69Z" fill="#F0F0F0"/>
<path d="M235.73 339.44H232.89V342.28H235.73V339.44Z" fill="#F0F0F0"/>
<path d="M235.73 344.2H232.89V347.04H235.73V344.2Z" fill="#F0F0F0"/>
<path d="M235.73 348.95H232.89V351.79H235.73V348.95Z" fill="#F0F0F0"/>
<path d="M235.73 353.7H232.89V356.54H235.73V353.7Z" fill="#F0F0F0"/>
<path d="M235.73 358.46H232.89V361.3H235.73V358.46Z" fill="#F0F0F0"/>
<path d="M235.73 367.97H232.89V370.81H235.73V367.97Z" fill="#F0F0F0"/>
<path d="M385.35 275.72H382.51V278.56H385.35V275.72Z" fill="#F0F0F0"/>
<path d="M385.35 280.47H382.51V283.31H385.35V280.47Z" fill="#F0F0F0"/>
<path d="M385.35 285.23H382.51V288.07H385.35V285.23Z" fill="#F0F0F0"/>
<path d="M385.35 289.98H382.51V292.82H385.35V289.98Z" fill="#F0F0F0"/>
<path d="M385.35 294.74H382.51V297.58H385.35V294.74Z" fill="#F0F0F0"/>
<path d="M385.35 299.49H382.51V302.33H385.35V299.49Z" fill="#F0F0F0"/>
<path d="M385.35 304.24H382.51V307.08H385.35V304.24Z" fill="#F0F0F0"/>
<path d="M385.35 309H382.51V311.84H385.35V309Z" fill="#F0F0F0"/>
<path d="M385.35 313.75H382.51V316.59H385.35V313.75Z" fill="#F0F0F0"/>
<path d="M385.35 318.51H382.51V321.35H385.35V318.51Z" fill="#F0F0F0"/>
<path d="M385.35 323.26H382.51V326.1H385.35V323.26Z" fill="#F0F0F0"/>
<path d="M385.35 332.77H382.51V335.61H385.35V332.77Z" fill="#F0F0F0"/>
<path d="M385.35 337.52H382.51V340.36H385.35V337.52Z" fill="#F0F0F0"/>
<path d="M385.35 342.28H382.51V345.12H385.35V342.28Z" fill="#F0F0F0"/>
<path d="M385.35 347.03H382.51V349.87H385.35V347.03Z" fill="#F0F0F0"/>
<path d="M385.35 351.79H382.51V354.63H385.35V351.79Z" fill="#F0F0F0"/>
<path d="M385.35 356.54H382.51V359.38H385.35V356.54Z" fill="#F0F0F0"/>
<path d="M385.35 361.29H382.51V364.13H385.35V361.29Z" fill="#F0F0F0"/>
<path d="M385.35 366.05H382.51V368.89H385.35V366.05Z" fill="#F0F0F0"/>
<path d="M389.86 275.72H387.02V278.56H389.86V275.72Z" fill="#F0F0F0"/>
<path d="M389.86 280.47H387.02V283.31H389.86V280.47Z" fill="#F0F0F0"/>
<path d="M389.86 285.23H387.02V288.07H389.86V285.23Z" fill="#F0F0F0"/>
<path d="M389.86 289.98H387.02V292.82H389.86V289.98Z" fill="#F0F0F0"/>
<path d="M389.86 294.74H387.02V297.58H389.86V294.74Z" fill="#F0F0F0"/>
<path d="M389.86 299.49H387.02V302.33H389.86V299.49Z" fill="#F0F0F0"/>
<path d="M389.86 304.24H387.02V307.08H389.86V304.24Z" fill="#F0F0F0"/>
<path d="M389.86 309H387.02V311.84H389.86V309Z" fill="#F0F0F0"/>
<path d="M389.86 313.75H387.02V316.59H389.86V313.75Z" fill="#F0F0F0"/>
<path d="M389.86 318.51H387.02V321.35H389.86V318.51Z" fill="#F0F0F0"/>
<path d="M389.86 323.26H387.02V326.1H389.86V323.26Z" fill="#F0F0F0"/>
<path d="M389.86 328.01H387.02V330.85H389.86V328.01Z" fill="#F0F0F0"/>
<path d="M389.86 332.77H387.02V335.61H389.86V332.77Z" fill="#F0F0F0"/>
<path d="M389.86 337.52H387.02V340.36H389.86V337.52Z" fill="#F0F0F0"/>
<path d="M389.86 342.28H387.02V345.12H389.86V342.28Z" fill="#F0F0F0"/>
<path d="M389.86 347.03H387.02V349.87H389.86V347.03Z" fill="#F0F0F0"/>
<path d="M389.86 351.79H387.02V354.63H389.86V351.79Z" fill="#F0F0F0"/>
<path d="M389.86 356.54H387.02V359.38H389.86V356.54Z" fill="#F0F0F0"/>
<path d="M389.86 361.29H387.02V364.13H389.86V361.29Z" fill="#F0F0F0"/>
<path d="M389.86 366.05H387.02V368.89H389.86V366.05Z" fill="#F0F0F0"/>
<path d="M363.17 294.24H360.33V297.08H363.17V294.24Z" fill="#F0F0F0"/>
<path d="M363.17 298.99H360.33V301.83H363.17V298.99Z" fill="#F0F0F0"/>
<path d="M363.17 303.74H360.33V306.58H363.17V303.74Z" fill="#F0F0F0"/>
<path d="M363.17 308.5H360.33V311.34H363.17V308.5Z" fill="#F0F0F0"/>
<path d="M363.17 313.25H360.33V316.09H363.17V313.25Z" fill="#F0F0F0"/>
<path d="M363.17 318.01H360.33V320.85H363.17V318.01Z" fill="#F0F0F0"/>
<path d="M363.17 322.76H360.33V325.6H363.17V322.76Z" fill="#F0F0F0"/>
<path d="M363.17 327.51H360.33V330.35H363.17V327.51Z" fill="#F0F0F0"/>
<path d="M363.17 332.27H360.33V335.11H363.17V332.27Z" fill="#F0F0F0"/>
<path d="M363.17 337.02H360.33V339.86H363.17V337.02Z" fill="#F0F0F0"/>
<path d="M367.67 294.24H364.83V297.08H367.67V294.24Z" fill="#F0F0F0"/>
<path d="M367.67 298.99H364.83V301.83H367.67V298.99Z" fill="#F0F0F0"/>
<path d="M367.67 303.74H364.83V306.58H367.67V303.74Z" fill="#F0F0F0"/>
<path d="M367.67 308.5H364.83V311.34H367.67V308.5Z" fill="#F0F0F0"/>
<path d="M367.67 313.25H364.83V316.09H367.67V313.25Z" fill="#F0F0F0"/>
<path d="M367.67 318.01H364.83V320.85H367.67V318.01Z" fill="#F0F0F0"/>
<path d="M367.67 322.76H364.83V325.6H367.67V322.76Z" fill="#F0F0F0"/>
<path d="M367.67 327.51H364.83V330.35H367.67V327.51Z" fill="#F0F0F0"/>
<path d="M367.67 332.27H364.83V335.11H367.67V332.27Z" fill="#F0F0F0"/>
<path d="M147.14 180.53C147.145 179.154 146.827 177.796 146.211 176.566C145.595 175.335 144.699 174.266 143.595 173.445C142.491 172.624 141.21 172.074 139.854 171.839C138.498 171.603 137.106 171.689 135.79 172.09C136.181 169.437 135.995 166.732 135.247 164.157C134.498 161.583 133.203 159.2 131.45 157.171C129.697 155.142 127.528 153.515 125.089 152.4C122.651 151.285 120.001 150.709 117.32 150.71C116.166 150.709 115.014 150.816 113.88 151.03C112.04 148.006 109.266 145.662 105.976 144.352C102.687 143.042 99.0614 142.837 95.6456 143.768C92.2299 144.7 89.2096 146.716 87.0404 149.514C84.8712 152.312 83.6707 155.74 83.6201 159.28H83.3501C79.3599 159.28 75.5331 160.865 72.7116 163.687C69.8901 166.508 68.3051 170.335 68.3051 174.325C68.3051 178.315 69.8901 182.142 72.7116 184.963C75.5331 187.785 79.3599 189.37 83.3501 189.37H138.58C140.878 189.305 143.06 188.344 144.659 186.692C146.258 185.04 147.149 182.829 147.14 180.53Z" fill="#F0F0F0"/>
<path d="M218.87 164.68C218.87 163.187 219.463 161.755 220.519 160.699C221.575 159.643 223.007 159.05 224.5 159.05C225.048 159.05 225.594 159.127 226.12 159.28C226.031 158.711 225.988 158.136 225.99 157.56C225.99 154.399 227.246 151.367 229.481 149.131C231.717 146.896 234.749 145.64 237.91 145.64C238.648 145.64 239.384 145.707 240.11 145.84C241.285 143.909 243.057 142.413 245.157 141.576C247.257 140.74 249.572 140.61 251.753 141.205C253.934 141.8 255.862 143.088 257.247 144.874C258.632 146.661 259.398 148.85 259.43 151.11H259.6C262.094 151.191 264.458 152.238 266.194 154.03C267.93 155.823 268.9 158.22 268.9 160.715C268.9 163.21 267.93 165.607 266.194 167.4C264.458 169.192 262.094 170.24 259.6 170.32H224.34C222.873 170.278 221.48 169.665 220.459 168.612C219.437 167.558 218.867 166.148 218.87 164.68Z" fill="#F0F0F0"/>
<path d="M382.31 178.69C382.31 177.197 382.903 175.765 383.959 174.709C385.015 173.653 386.447 173.06 387.94 173.06C388.489 173.058 389.035 173.139 389.56 173.3C389.477 172.727 389.433 172.149 389.43 171.57C389.43 168.409 390.686 165.377 392.921 163.141C395.157 160.906 398.189 159.65 401.35 159.65C402.088 159.65 402.824 159.717 403.55 159.85C404.725 157.919 406.497 156.423 408.597 155.586C410.697 154.75 413.012 154.62 415.193 155.215C417.374 155.81 419.302 157.098 420.687 158.884C422.072 160.671 422.838 162.86 422.87 165.12H423C424.287 165.079 425.57 165.296 426.772 165.76C427.973 166.224 429.069 166.925 429.995 167.821C430.92 168.717 431.656 169.79 432.159 170.976C432.661 172.162 432.92 173.437 432.92 174.725C432.92 176.013 432.661 177.288 432.159 178.474C431.656 179.66 430.92 180.733 429.995 181.629C429.069 182.525 427.973 183.226 426.772 183.69C425.57 184.154 424.287 184.372 423 184.33H387.78C386.313 184.288 384.92 183.675 383.899 182.622C382.877 181.568 382.307 180.158 382.31 178.69Z" fill="#F0F0F0"/>
<path d="M157.92 108.46C157.919 108.007 158.007 107.557 158.18 107.138C158.353 106.719 158.607 106.338 158.928 106.018C159.248 105.697 159.629 105.443 160.048 105.27C160.467 105.097 160.917 105.009 161.37 105.01C161.709 105.008 162.046 105.059 162.37 105.16C162.318 104.809 162.291 104.455 162.29 104.1C162.29 102.164 163.059 100.307 164.428 98.9381C165.797 97.5691 167.654 96.8 169.59 96.8C170.043 96.7993 170.495 96.8395 170.94 96.92C171.66 95.7371 172.744 94.8205 174.031 94.3084C175.317 93.7963 176.735 93.7166 178.071 94.0812C179.407 94.4459 180.587 95.2352 181.435 96.33C182.283 97.4248 182.751 98.7656 182.77 100.15H182.88C184.399 100.213 185.835 100.86 186.887 101.957C187.94 103.054 188.527 104.515 188.527 106.035C188.527 107.555 187.94 109.016 186.887 110.113C185.835 111.21 184.399 111.857 182.88 111.92H161.28C160.378 111.899 159.521 111.525 158.892 110.877C158.264 110.23 157.914 109.362 157.92 108.46Z" fill="#F0F0F0"/>
<path d="M304.87 111C304.87 110.085 305.233 109.208 305.88 108.561C306.527 107.914 307.405 107.55 308.32 107.55C308.658 107.549 308.995 107.596 309.32 107.69C309.164 106.652 309.235 105.592 309.527 104.584C309.819 103.575 310.326 102.642 311.013 101.848C311.7 101.054 312.55 100.418 313.506 99.983C314.462 99.5484 315.5 99.3256 316.55 99.33C317 99.3327 317.448 99.3762 317.89 99.46C318.607 98.2731 319.692 97.3523 320.979 96.8368C322.266 96.3213 323.687 96.2393 325.025 96.6032C326.363 96.9672 327.546 97.7572 328.395 98.8537C329.244 99.9501 329.713 101.293 329.73 102.68H329.83C331.389 102.68 332.885 103.3 333.988 104.402C335.091 105.505 335.71 107.001 335.71 108.56C335.71 110.12 335.091 111.615 333.988 112.718C332.885 113.821 331.389 114.44 329.83 114.44H308.23C307.332 114.419 306.477 114.048 305.849 113.405C305.221 112.762 304.87 111.899 304.87 111Z" fill="#F0F0F0"/>
<path d="M250 427.56C357.082 427.56 443.89 422.492 443.89 416.24C443.89 409.988 357.082 404.92 250 404.92C142.917 404.92 56.11 409.988 56.11 416.24C56.11 422.492 142.917 427.56 250 427.56Z" fill="#F5F5F5"/>
<path d="M85.22 229.22H73.28V401.51H85.22V229.22Z" fill="#7E57C2"/>
<path d="M108.19 265.73H96.25V401.51H108.19V265.73Z" fill="#7E57C2"/>
<path d="M131.16 294.22H119.22V401.51H131.16V294.22Z" fill="#7E57C2"/>
<path d="M154.13 319.45H142.19V401.51H154.13V319.45Z" fill="#7E57C2"/>
<path d="M177.09 341.52H165.15V401.52H177.09V341.52Z" fill="#7E57C2"/>
<path d="M200.06 357.48H188.12V401.51H200.06V357.48Z" fill="#7E57C2"/>
<path d="M223.03 370.6H211.09V401.51H223.03V370.6Z" fill="#7E57C2"/>
<g opacity="0.7">
<path d="M85.22 229.22H73.28V401.51H85.22V229.22Z" fill="white"/>
<path d="M108.19 265.73H96.25V401.51H108.19V265.73Z" fill="white"/>
<path d="M131.16 294.22H119.22V401.51H131.16V294.22Z" fill="white"/>
<path d="M154.13 319.45H142.19V401.51H154.13V319.45Z" fill="white"/>
<path d="M177.09 341.52H165.15V401.52H177.09V341.52Z" fill="white"/>
<path d="M200.06 357.48H188.12V401.51H200.06V357.48Z" fill="white"/>
<path d="M223.03 370.6H211.09V401.51H223.03V370.6Z" fill="white"/>
</g>
<path d="M71.62 182.6L69.21 196.09L82.69 190.69L71.62 182.6Z" fill="#7E57C2"/>
<path d="M240 375.83C176.89 345.73 134.51 297.92 110.06 263.12C83.6 225.42 72.18 195.25 71.71 194L79.2 191.2C79.31 191.5 90.82 221.84 116.76 258.74C140.64 292.68 182 339.3 243.45 368.61L240 375.83Z" fill="#7E57C2"/>
<path d="M358.36 405.38C358.36 405.38 350.36 389.86 352.36 388.38C354.36 386.9 358.36 401.38 358.36 400.22C358.36 399.06 358.13 379.36 361.81 380.14C365.49 380.92 361.81 399.09 361.81 399.09C361.81 399.09 366.75 389.81 368.69 390.51C370.63 391.21 363 402.21 363 402.21C363 402.21 367.57 399.45 368.72 399.66C369.87 399.87 363 405.38 363 405.38H358.36Z" fill="#7E57C2"/>
<path d="M143.66 409.73C143.66 409.73 151.66 394.22 149.66 392.73C147.66 391.24 143.72 405.73 143.66 404.56C143.6 403.39 143.89 383.71 140.21 384.49C136.53 385.27 140.21 403.49 140.21 403.49C140.21 403.49 133.34 390.37 131.51 393.72C129.93 396.62 139.04 406.65 139.04 406.65C139.04 406.65 129.98 400.51 129.93 403.21C129.88 406.11 139.04 409.81 139.04 409.81L143.66 409.73Z" fill="#7E57C2"/>
<path d="M265.58 396.68C265.58 396.68 258.03 387.29 260.93 386.43C263.83 385.57 265.82 393.38 266.33 392.35C266.84 391.32 266.51 381 271.33 382.55C276.15 384.1 269.53 392.9 269.53 392.9C269.53 392.9 273.89 389.57 275.06 390.42C276.23 391.27 269.83 397.42 269.83 397.42L265.58 396.68Z" fill="#7E57C2"/>
<path d="M196.46 385.15C196.46 385.15 201.56 374.24 198.54 374.09C195.52 373.94 194.54 382.39 194.54 382.39C194.54 382.39 192.84 371.07 188.32 372.64C183.53 374.3 191.78 383.22 191.78 383.22C191.78 383.22 183.86 378.22 183.34 380.98C182.69 384.38 193.57 386.41 193.57 386.41L196.46 385.15Z" fill="#7E57C2"/>
<path d="M116.53 416.91H385.88L374.81 404.92L294.57 396.47H266.51L246.24 380.05L193.6 384.34L150.37 400.54L141.48 408.74H127.67L116.53 416.91Z" fill="#263238"/>
<path opacity="0.5" d="M116.53 416.91H385.88L374.81 404.92L294.57 396.47H266.51L246.24 380.05L193.6 384.34L150.37 400.54L141.48 408.74H127.67L116.53 416.91Z" fill="white"/>
<path opacity="0.2" d="M141.48 408.74L169.83 413.57H185.18L167.78 410.56L150.37 400.54L141.48 408.74Z" fill="black"/>
<path opacity="0.2" d="M266.51 396.47H251.21L226.59 405.24L239.25 392.73L257.54 389.21L266.51 396.47Z" fill="black"/>
<path opacity="0.2" d="M374.81 404.92L345.8 413.57L320.61 407.06L343.03 416.91H385.88L374.81 404.92Z" fill="black"/>
<path d="M236.6 386.58L229.59 384.6L232.19 367.82L239.19 369.8L236.6 386.58Z" fill="#E4897B"/>
<path d="M229.44 378.73H238.31C238.454 378.727 238.595 378.774 238.708 378.863C238.821 378.953 238.9 379.079 238.93 379.22L240.44 385.69C240.475 385.847 240.473 386.011 240.436 386.168C240.399 386.325 240.326 386.471 240.224 386.596C240.122 386.721 239.993 386.822 239.847 386.89C239.701 386.958 239.541 386.992 239.38 386.99C236.53 386.94 234.44 386.77 230.85 386.77C228.64 386.77 221.97 387 218.91 387C215.85 387 215.43 384 216.68 383.71C222.27 382.48 226.48 380.79 228.26 379.17C228.585 378.881 229.005 378.724 229.44 378.73Z" fill="#263238"/>
<path d="M349.63 406.03L342.51 407.53L337.02 391.46L344.14 389.97L349.63 406.03Z" fill="#E4897B"/>
<path d="M287.29 247.29C287.29 247.29 254 284 245.05 298.48C236.1 312.96 228.25 374.38 228.25 374.38L241.49 377.58C241.49 377.58 256.89 317.73 260.99 311.73C265.09 305.73 308.64 265.11 308.64 265.11L287.29 247.29Z" fill="#263238"/>
<path opacity="0.1" d="M308.64 265.11L304.32 269.11C300.72 272.5 295.24 277.65 289.37 283.26C277.15 294.9 263.23 308.42 260.99 311.69C256.89 317.69 241.49 377.55 241.49 377.55L228.25 374.34C228.25 374.34 236.07 312.96 245.06 298.45C254.05 283.94 287.29 247.26 287.29 247.26L308.64 265.11Z" fill="white"/>
<path opacity="0.2" d="M304.32 269.15C300.72 272.54 295.24 277.69 289.37 283.3C293.26 272.75 302.66 265.92 302.66 265.92L304.32 269.15Z" fill="black"/>
<path d="M298.87 249.92C298.87 249.92 307.42 312.34 311.55 333.29C316.07 356.23 336.2 398.8 336.2 398.8L349.2 396.06C349.2 396.06 335.49 356.71 332.45 333.68C329.06 307.92 323.97 249.68 323.97 249.68L298.87 249.92Z" fill="#263238"/>
<g opacity="0.1">
<path d="M298.87 249.92C298.87 249.92 307.42 312.34 311.55 333.29C316.07 356.23 336.2 398.8 336.2 398.8L349.2 396.06C349.2 396.06 335.49 356.71 332.45 333.68C329.06 307.92 323.97 249.68 323.97 249.68L298.87 249.92Z" fill="white"/>
</g>
<path d="M248.17 171.89L247.6 164.49L255.27 167.49C255.27 167.49 255.38 174.12 251.96 174.03L248.17 171.89Z" fill="#E4897B"/>
<path d="M250.58 160.22L257.83 160.68L255.27 167.46L247.6 164.49L250.58 160.22Z" fill="#E4897B"/>
<path d="M247.91 173.19L248.11 171.14L254.31 172.41L253.82 174.56L247.91 173.19Z" fill="#7E57C2"/>
<path opacity="0.7" d="M247.91 173.19L248.11 171.14L254.31 172.41L253.82 174.56L247.91 173.19Z" fill="white"/>
<path d="M277.48 162.2H261.43C260.86 162.2 260.43 163.43 260.43 164.94C260.43 166.45 260.89 167.67 261.43 167.67H277.48C278.04 167.67 278.48 166.45 278.48 164.94C278.48 163.43 278 162.2 277.48 162.2Z" fill="#7E57C2"/>
<path opacity="0.4" d="M277.48 162.2H261.43C260.86 162.2 260.43 163.43 260.43 164.94C260.43 166.45 260.89 167.67 261.43 167.67H277.48C278.04 167.67 278.48 166.45 278.48 164.94C278.48 163.43 278 162.2 277.48 162.2Z" fill="white"/>
<path d="M261.19 161.45H242C241.28 161.45 240.7 163.01 240.7 164.94C240.7 166.87 241.28 168.42 242 168.42H261.15C261.87 168.42 262.46 166.86 262.46 164.94C262.46 163.02 261.91 161.45 261.19 161.45Z" fill="#7E57C2"/>
<path opacity="0.2" d="M261.19 161.45H242C241.28 161.45 240.7 163.01 240.7 164.94C240.7 166.87 241.28 168.42 242 168.42H261.15C261.87 168.42 262.46 166.86 262.46 164.94C262.46 163.02 261.91 161.45 261.19 161.45Z" fill="white"/>
<path d="M242.31 160.75H222.31C221.44 160.75 220.74 162.62 220.74 164.94C220.74 167.26 221.44 169.12 222.31 169.12H242.31C243.17 169.12 243.88 167.25 243.88 164.94C243.88 162.63 243.17 160.75 242.31 160.75Z" fill="#7E57C2"/>
<path opacity="0.4" d="M242.31 160.75H222.31C221.44 160.75 220.74 162.62 220.74 164.94C220.74 167.26 221.44 169.12 222.31 169.12H242.31C243.17 169.12 243.88 167.25 243.88 164.94C243.88 162.63 243.17 160.75 242.31 160.75Z" fill="white"/>
<path opacity="0.2" d="M223.87 164.94C223.87 167.25 223.17 169.12 222.3 169.12C221.43 169.12 220.73 167.25 220.73 164.94C220.73 162.63 221.43 160.75 222.3 160.75C223.17 160.75 223.87 162.62 223.87 164.94Z" fill="white"/>
<path d="M222.3 168.65C221.91 168.65 221.2 167.24 221.2 164.94C221.2 162.64 221.91 161.22 222.3 161.22C222.69 161.22 223.39 162.63 223.39 164.94C223.39 167.25 222.69 168.65 222.3 168.65Z" fill="black"/>
<path d="M339.92 400.27H348.79C348.936 400.271 349.077 400.32 349.192 400.411C349.306 400.502 349.386 400.628 349.42 400.77L350.92 407.24C350.955 407.396 350.954 407.558 350.917 407.714C350.88 407.87 350.808 408.015 350.707 408.139C350.606 408.263 350.478 408.363 350.333 408.431C350.188 408.498 350.03 408.532 349.87 408.53C347.01 408.53 344.93 408.32 341.33 408.32C339.12 408.32 332.45 408.55 329.39 408.55C326.33 408.55 325.91 405.55 327.16 405.25C332.75 404.03 336.96 402.34 338.74 400.72C339.064 400.428 339.484 400.268 339.92 400.27Z" fill="#263238"/>
<path d="M274.65 190.42C274.65 190.42 270.71 191.42 266.53 192.01C264.43 192.31 262.35 192.6 260.34 192.81C259.34 192.91 258.34 192.97 257.45 193.02H256.92C256.671 192.311 256.457 191.59 256.28 190.86C255.81 188.96 255.42 186.86 255.08 184.8C254.41 180.63 254.21 173.53 254.21 173.53L247.77 172C247.154 176.474 246.843 180.984 246.84 185.5C246.836 187.839 246.963 190.176 247.22 192.5C247.365 193.795 247.602 195.079 247.93 196.34C248.13 197.131 248.405 197.901 248.75 198.64C248.989 199.148 249.274 199.633 249.6 200.09C250.114 200.804 250.754 201.418 251.49 201.9C251.751 202.062 252.022 202.209 252.3 202.34C252.626 202.472 252.96 202.586 253.3 202.68L253.99 202.85C254.46 202.96 254.82 203.01 255.22 203.07C255.96 203.17 256.65 203.23 257.3 203.27C258.59 203.35 259.81 203.34 260.99 203.27C263.36 203.27 265.64 203.05 267.9 202.82C272.43 202.37 276.8 201.7 281.26 200.82L274.65 190.42Z" fill="#263238"/>
<path d="M316.31 188.05C316.114 195.665 316.505 203.285 317.48 210.84C318.14 216.47 319 221.84 319.9 226.64C322 237.98 324.28 246.5 324.65 249.48L285.65 255.2C270.13 213.69 275.54 190.26 275.54 190.26C278.561 189.228 281.644 188.386 284.77 187.74C285.43 187.6 286.1 187.48 286.77 187.37C292.272 186.647 297.811 186.243 303.36 186.16C304.36 186.16 305.45 186.16 306.47 186.16C309.828 186.276 313.148 186.914 316.31 188.05Z" fill="#7E57C2"/>
<path opacity="0.7" d="M316.31 188.05C316.114 195.665 316.505 203.285 317.48 210.84C318.14 216.47 319 221.84 319.9 226.64C322 237.98 324.28 246.5 324.65 249.48L285.65 255.2C270.13 213.69 275.54 190.26 275.54 190.26C278.561 189.228 281.644 188.386 284.77 187.74C285.43 187.6 286.1 187.48 286.77 187.37C292.272 186.647 297.811 186.243 303.36 186.16C304.36 186.16 305.45 186.16 306.47 186.16C309.828 186.276 313.148 186.914 316.31 188.05Z" fill="white"/>
<path d="M290.25 196.79C289.76 199.79 288.25 207.58 288.25 215.24C288.97 216.72 289.94 220.34 290.81 221.81C291.45 220.14 292.56 216.69 293.32 215C292.65 207.72 291.32 200.42 291.75 196.6L290.25 196.79Z" fill="#7E57C2"/>
<path d="M290.71 199.09L288.8 195.69L291.22 194.15L293.36 195.04L290.71 199.09Z" fill="#7E57C2"/>
<path d="M298.53 169.07C298.35 174.48 298.89 184.26 303.15 187.2C301.797 189.139 300.041 190.763 298.003 191.96C295.965 193.158 293.692 193.902 291.34 194.14C286.79 194.73 286.95 190.92 287.67 189.02C292.41 187.02 291.56 183.09 289.87 179.16L298.53 169.07Z" fill="#E4897B"/>
<path d="M291.22 194.15C291.22 194.15 293.22 196.08 295.62 197.95C298.36 195.95 304.73 190.68 303.89 186.8C303.367 186.047 302.601 185.496 301.72 185.24C298.721 188.755 295.176 191.763 291.22 194.15Z" fill="white"/>
<path d="M291.22 194.15C289.928 195.61 288.844 197.242 288 199C285.64 197.81 286.48 190 287.17 189.11C288.166 187.832 289.447 186.805 290.91 186.11C290.023 188.737 290.134 191.599 291.22 194.15Z" fill="white"/>
<path opacity="0.2" d="M295 173.19L289.88 179.19C290.295 180.099 290.629 181.043 290.88 182.01C293.08 181.34 295.76 178.41 295.61 176.01C295.581 175.041 295.374 174.085 295 173.19Z" fill="black"/>
<path d="M279.84 156.58C278.72 159.29 278.72 165.07 282.77 163.58C286.82 162.09 281.76 151.91 279.84 156.58Z" fill="#263238"/>
<path d="M299.63 162.06C299.45 169.27 299.71 173.5 296.2 177.3C290.93 183 281.9 179.94 279.92 172.8C278.14 166.37 278.73 155.66 285.69 152.6C287.232 151.938 288.916 151.675 290.586 151.835C292.257 151.995 293.86 152.573 295.249 153.515C296.638 154.457 297.767 155.734 298.532 157.227C299.298 158.721 299.675 160.382 299.63 162.06Z" fill="#E4897B"/>
<path d="M295.27 149.82C295.01 149.82 294.81 149.93 294.6 149.93C294.6 149.93 295.22 164.03 298.46 167.11C306.75 164.77 311 149.06 295.27 149.82Z" fill="#263238"/>
<path d="M302.63 168C302.386 168.862 301.975 169.667 301.419 170.369C300.862 171.071 300.173 171.656 299.39 172.09C297.28 173.23 295.67 171.47 295.79 169.19C295.9 167.19 297.13 164.08 299.47 163.88C299.983 163.846 300.496 163.939 300.964 164.151C301.432 164.363 301.84 164.687 302.153 165.094C302.465 165.502 302.672 165.98 302.756 166.487C302.839 166.994 302.796 167.514 302.63 168Z" fill="#E4897B"/>
<path d="M282.13 164.54C282.13 165.12 281.85 165.61 281.47 165.62C281.09 165.63 280.76 165.16 280.74 164.57C280.72 163.98 281.01 163.5 281.39 163.49C281.77 163.48 282.1 164 282.13 164.54Z" fill="#263238"/>
<path d="M284.25 164.77C283.59 166.527 282.688 168.183 281.57 169.69C281.985 169.947 282.45 170.114 282.934 170.182C283.418 170.249 283.91 170.214 284.38 170.08L284.25 164.77Z" fill="#DE5753"/>
<path d="M287.61 172.24C287.356 172.284 287.098 172.308 286.84 172.31C286.797 172.31 286.755 172.293 286.723 172.264C286.692 172.234 286.673 172.193 286.67 172.15C286.667 172.127 286.669 172.104 286.676 172.083C286.683 172.061 286.694 172.041 286.709 172.024C286.724 172.007 286.743 171.993 286.764 171.984C286.785 171.974 286.807 171.97 286.83 171.97C287.559 171.969 288.278 171.794 288.927 171.46C289.575 171.126 290.135 170.643 290.56 170.05C290.572 170.031 290.588 170.014 290.607 170.001C290.626 169.988 290.647 169.978 290.669 169.974C290.692 169.969 290.715 169.969 290.737 169.974C290.76 169.978 290.781 169.987 290.8 170C290.819 170.011 290.836 170.026 290.849 170.044C290.862 170.062 290.871 170.082 290.875 170.104C290.88 170.126 290.88 170.148 290.876 170.17C290.871 170.191 290.863 170.212 290.85 170.23C290.479 170.771 289.999 171.23 289.441 171.576C288.884 171.922 288.26 172.148 287.61 172.24Z" fill="#263238"/>
<path d="M289.24 162.81C289.187 162.842 289.127 162.858 289.065 162.858C289.003 162.858 288.943 162.842 288.89 162.81C288.513 162.593 288.092 162.466 287.658 162.44C287.224 162.414 286.79 162.489 286.39 162.66C286.351 162.682 286.307 162.695 286.263 162.7C286.218 162.705 286.173 162.701 286.129 162.689C286.086 162.676 286.046 162.655 286.011 162.627C285.976 162.599 285.947 162.564 285.925 162.525C285.903 162.486 285.89 162.442 285.885 162.398C285.88 162.353 285.884 162.308 285.896 162.265C285.909 162.221 285.93 162.181 285.958 162.146C285.986 162.111 286.021 162.082 286.06 162.06C286.56 161.831 287.108 161.725 287.658 161.751C288.208 161.778 288.743 161.935 289.22 162.21C289.272 162.24 289.315 162.283 289.345 162.335C289.375 162.386 289.391 162.445 289.391 162.505C289.391 162.565 289.375 162.624 289.345 162.675C289.315 162.727 289.272 162.77 289.22 162.8L289.24 162.81Z" fill="#263238"/>
<path d="M278.81 161.9C278.745 161.888 278.686 161.857 278.64 161.81C278.576 161.744 278.54 161.657 278.54 161.565C278.54 161.473 278.576 161.385 278.64 161.32C279.023 160.924 279.495 160.626 280.017 160.452C280.54 160.278 281.096 160.233 281.64 160.32C281.729 160.341 281.806 160.396 281.856 160.472C281.906 160.548 281.925 160.64 281.91 160.73C281.902 160.774 281.885 160.816 281.86 160.853C281.835 160.891 281.803 160.923 281.766 160.948C281.729 160.973 281.687 160.991 281.643 161C281.599 161.009 281.554 161.009 281.51 161C281.08 160.94 280.642 160.986 280.234 161.134C279.827 161.282 279.461 161.528 279.17 161.85C279.12 161.89 279.06 161.916 278.997 161.925C278.933 161.934 278.869 161.925 278.81 161.9Z" fill="#263238"/>
<path d="M287.14 164.71C287.098 164.708 287.059 164.69 287.03 164.66C287.002 164.632 286.987 164.594 286.987 164.555C286.987 164.516 287.002 164.478 287.03 164.45C287.266 164.227 287.563 164.078 287.883 164.023C288.203 163.968 288.533 164.009 288.83 164.14C288.864 164.159 288.89 164.19 288.903 164.227C288.916 164.264 288.915 164.304 288.9 164.34C288.881 164.374 288.85 164.4 288.813 164.413C288.776 164.426 288.736 164.425 288.7 164.41C288.459 164.302 288.192 164.268 287.932 164.313C287.672 164.357 287.431 164.478 287.24 164.66C287.214 164.688 287.178 164.706 287.14 164.71Z" fill="#263238"/>
<path d="M297.2 159.16C296.232 159.072 295.306 158.725 294.52 158.154C293.733 157.584 293.115 156.812 292.73 155.92C291.44 152.85 290.34 155.35 290.34 155.35C290.34 155.35 289.92 154.43 287.14 153.87C284.36 153.31 282.53 160.78 279.53 159.57C278.712 159.26 278.04 158.655 277.648 157.873C277.255 157.091 277.17 156.191 277.41 155.35C277.41 155.35 278.72 154.71 280.2 150.64C281.86 146.05 289.87 144.01 296.81 147.48C303.75 150.95 297.2 159.16 297.2 159.16Z" fill="#263238"/>
<path d="M330.09 259L301 265.11L293.37 254.11L288.83 264.38L276.15 257.19L282.9 247.34C270.39 216.96 274.66 190.46 274.66 190.46C278.669 188.719 282.941 187.661 287.3 187.33C280.04 198.33 290.86 221.85 290.86 221.85C297.37 203.71 305.16 186.18 305.16 186.18C309.309 185.915 313.474 186.347 317.48 187.46C317.48 187.46 320.32 228.85 324.07 239.37C327.82 249.89 330.09 259 330.09 259Z" fill="#263238"/>
<path opacity="0.1" d="M300.9 201.14L307 208.8C307 208.8 292.8 218.97 288.62 235.8L290.12 225.94L278.44 209.54L283.81 202.83L277.43 198.09C277.43 198.09 282.92 188.84 287.31 187.24C280.05 198.24 290.87 221.76 290.87 221.76C297.38 203.62 305.17 186.09 305.17 186.09C308.81 189.04 311.551 192.951 313.08 197.38L300.9 201.14Z" fill="white"/>
<path d="M350.37 259.19C349.728 259.194 349.086 259.151 348.45 259.06C346.34 258.75 345.01 257.91 344.72 256.7C344.13 254.31 347.79 251.52 353.21 250.2C358.63 248.88 363.21 249.68 363.75 252.06C364.04 253.28 363.25 254.63 361.52 255.88C359.612 257.15 357.487 258.059 355.25 258.56C353.654 258.964 352.016 259.175 350.37 259.19ZM358.11 250.76C356.555 250.78 355.008 250.981 353.5 251.36C348.57 252.56 345.5 254.99 345.88 256.42C346.05 257.1 347.07 257.65 348.62 257.87C350.748 258.104 352.9 257.945 354.97 257.4C357.058 256.936 359.042 256.089 360.82 254.9C362.09 253.99 362.75 253.04 362.58 252.35C362.36 251.41 360.64 250.76 358.11 250.76Z" fill="#263238"/>
<path d="M376.93 249.75L384.63 281.37C384.692 281.617 384.705 281.874 384.667 282.126C384.63 282.378 384.542 282.62 384.41 282.838C384.278 283.055 384.104 283.245 383.898 283.394C383.692 283.544 383.458 283.651 383.21 283.71L337.09 294.94C336.843 295.001 336.586 295.013 336.335 294.975C336.083 294.936 335.842 294.849 335.625 294.717C335.407 294.585 335.218 294.411 335.068 294.206C334.918 294 334.81 293.767 334.75 293.52L327.05 261.9C326.929 261.402 327.011 260.875 327.277 260.437C327.543 259.998 327.972 259.683 328.47 259.56L374.59 248.33C374.837 248.269 375.093 248.257 375.345 248.295C375.596 248.334 375.838 248.422 376.055 248.553C376.273 248.685 376.462 248.859 376.612 249.064C376.762 249.27 376.87 249.503 376.93 249.75Z" fill="#263238"/>
<path opacity="0.1" d="M376.93 249.75L384.63 281.37C384.692 281.617 384.705 281.874 384.667 282.126C384.63 282.378 384.542 282.62 384.41 282.838C384.278 283.055 384.104 283.245 383.898 283.394C383.692 283.544 383.458 283.651 383.21 283.71L337.09 294.94C336.843 295.001 336.586 295.013 336.335 294.975C336.083 294.936 335.842 294.849 335.625 294.717C335.407 294.585 335.218 294.411 335.068 294.206C334.918 294 334.81 293.767 334.75 293.52L327.05 261.9C326.929 261.402 327.011 260.875 327.277 260.437C327.543 259.998 327.972 259.683 328.47 259.56L374.59 248.33C374.837 248.269 375.093 248.257 375.345 248.295C375.596 248.334 375.838 248.422 376.055 248.553C376.273 248.685 376.462 248.859 376.612 249.064C376.762 249.27 376.87 249.503 376.93 249.75Z" fill="white"/>
<path d="M331.58 260.8L339.28 292.42C339.385 292.918 339.297 293.436 339.033 293.871C338.769 294.306 338.35 294.624 337.86 294.76L337.09 294.94C336.843 295.001 336.586 295.013 336.335 294.975C336.083 294.936 335.842 294.849 335.625 294.717C335.407 294.585 335.218 294.411 335.068 294.206C334.918 294 334.81 293.767 334.75 293.52L327.05 261.9C326.929 261.402 327.011 260.875 327.277 260.437C327.543 259.998 327.972 259.683 328.47 259.56L329.24 259.38C329.487 259.318 329.744 259.305 329.996 259.342C330.248 259.38 330.49 259.468 330.707 259.6C330.925 259.732 331.114 259.906 331.264 260.112C331.414 260.318 331.521 260.552 331.58 260.8Z" fill="#263238"/>
<path d="M329.75 259.28C330.235 259.19 330.737 259.29 331.15 259.56C331.564 259.83 331.857 260.249 331.97 260.73L335.54 275.39C335.637 275.786 335.887 276.128 336.236 276.34C336.585 276.552 337.003 276.616 337.4 276.52L379.77 266.2C379.966 266.152 380.151 266.066 380.313 265.946C380.476 265.827 380.613 265.676 380.717 265.503C380.821 265.33 380.89 265.138 380.92 264.939C380.949 264.739 380.939 264.536 380.89 264.34L377.31 249.64C377.189 249.145 376.877 248.719 376.442 248.455C376.007 248.19 375.485 248.109 374.99 248.23L328.85 259.47L329.75 259.28Z" fill="#263238"/>
<path opacity="0.2" d="M329.75 259.28C330.235 259.19 330.737 259.29 331.15 259.56C331.564 259.83 331.857 260.249 331.97 260.73L335.54 275.39C335.637 275.786 335.887 276.128 336.236 276.34C336.585 276.552 337.003 276.616 337.4 276.52L379.77 266.2C379.966 266.152 380.151 266.066 380.313 265.946C380.476 265.827 380.613 265.676 380.717 265.503C380.821 265.33 380.89 265.138 380.92 264.939C380.949 264.739 380.939 264.536 380.89 264.34L377.31 249.64C377.189 249.145 376.877 248.719 376.442 248.455C376.007 248.19 375.485 248.109 374.99 248.23L328.85 259.47L329.75 259.28Z" fill="white"/>
<path d="M356.54 269.72L361.077 268.615L363.145 277.107C363.181 277.254 363.157 277.409 363.079 277.538C363 277.667 362.873 277.76 362.726 277.796L359.297 278.631C359.15 278.667 358.995 278.643 358.866 278.564C358.736 278.486 358.644 278.359 358.608 278.212L356.54 269.72Z" fill="#263238"/>
<path d="M358.24 276.67C358.022 276.669 357.808 276.611 357.62 276.5C357.487 276.418 357.372 276.31 357.281 276.183C357.19 276.056 357.125 275.912 357.09 275.76L356.63 273.87C356.591 273.719 356.582 273.561 356.605 273.407C356.627 273.252 356.68 273.104 356.76 272.97C356.928 272.701 357.193 272.508 357.5 272.43L361.5 271.43C361.652 271.39 361.81 271.382 361.965 271.406C362.119 271.43 362.268 271.486 362.4 271.57C362.534 271.65 362.65 271.756 362.743 271.881C362.836 272.006 362.903 272.149 362.94 272.3L363.4 274.2C363.47 274.504 363.419 274.822 363.26 275.09C363.18 275.224 363.074 275.34 362.949 275.433C362.824 275.526 362.681 275.593 362.53 275.63L358.53 276.63C358.436 276.659 358.338 276.673 358.24 276.67ZM361.75 272.03H361.6L357.6 273.03C357.525 273.049 357.455 273.082 357.393 273.129C357.331 273.175 357.279 273.233 357.24 273.3C357.197 273.364 357.169 273.436 357.156 273.512C357.144 273.588 357.149 273.666 357.17 273.74L357.63 275.64C357.667 275.789 357.76 275.918 357.89 276C357.956 276.042 358.03 276.071 358.108 276.083C358.185 276.095 358.264 276.09 358.34 276.07L362.34 275.07C362.415 275.051 362.485 275.018 362.547 274.971C362.609 274.925 362.661 274.867 362.7 274.8C362.778 274.667 362.803 274.51 362.77 274.36L362.31 272.46C362.269 272.31 362.173 272.181 362.04 272.1C361.955 272.04 361.854 272.005 361.75 272V272.03Z" fill="white"/>
<path d="M349.29 242.31L348 249.58L357 247.14C357 247.14 356.71 240.72 353.27 240.53L349.29 242.31Z" fill="#E4897B"/>
<path d="M350.87 254.92L358.22 252.55L357.04 247.14L348.02 249.58L350.87 254.92Z" fill="#E4897B"/>
<path d="M348.73 239.39L348.96 242.65L354.93 241.42L354.46 238.35L348.73 239.39Z" fill="#7E57C2"/>
<path opacity="0.7" d="M348.73 239.39L348.96 242.65L354.93 241.42L354.46 238.35L348.73 239.39Z" fill="white"/>
<path d="M317.32 187.33C322.562 189.392 327.669 191.784 332.61 194.49C335.149 195.865 337.616 197.371 340 199C341.21 199.85 342.43 200.77 343.64 201.81C344.991 202.946 346.205 204.235 347.26 205.65C347.582 206.096 347.872 206.564 348.13 207.05C348.27 207.31 348.42 207.59 348.54 207.83L348.77 208.4L349.22 209.55L349.58 210.62C349.83 211.34 350.03 212.04 350.22 212.73C350.41 213.42 350.61 214.12 350.78 214.8C351.51 217.53 352.07 220.25 352.61 222.96C353.61 228.38 354.47 233.8 355.04 239.29L348.61 240.49C348.61 240.49 346.2 230.18 344.48 225.1C343.64 222.56 342.75 220.04 341.85 217.59C341.63 216.97 341.4 216.37 341.16 215.78C340.92 215.19 340.69 214.59 340.45 214.05L340.09 213.21L339.73 212.49L339.55 212.13C339.524 212.09 339.494 212.053 339.46 212.02C339.387 211.915 339.307 211.814 339.22 211.72C338.568 211.018 337.847 210.381 337.07 209.82C336.18 209.14 335.19 208.47 334.14 207.82C332.04 206.54 329.79 205.3 327.47 204.12C322.86 201.79 317.96 199.56 313.22 197.53L317.32 187.33Z" fill="#263238"/>
<path d="M376.24 190.13C402.435 190.13 423.67 168.895 423.67 142.7C423.67 116.505 402.435 95.27 376.24 95.27C350.045 95.27 328.81 116.505 328.81 142.7C328.81 168.895 350.045 190.13 376.24 190.13Z" fill="#7E57C2"/>
<path opacity="0.7" d="M376.24 190.13C402.435 190.13 423.67 168.895 423.67 142.7C423.67 116.505 402.435 95.27 376.24 95.27C350.045 95.27 328.81 116.505 328.81 142.7C328.81 168.895 350.045 190.13 376.24 190.13Z" fill="white"/>
<path d="M327.49 165.76C330.257 165.76 332.5 163.517 332.5 160.75C332.5 157.983 330.257 155.74 327.49 155.74C324.723 155.74 322.48 157.983 322.48 160.75C322.48 163.517 324.723 165.76 327.49 165.76Z" fill="#7E57C2"/>
<path opacity="0.7" d="M327.49 165.76C330.257 165.76 332.5 163.517 332.5 160.75C332.5 157.983 330.257 155.74 327.49 155.74C324.723 155.74 322.48 157.983 322.48 160.75C322.48 163.517 324.723 165.76 327.49 165.76Z" fill="white"/>
<path d="M319.63 164.19C319.591 164.757 319.385 165.299 319.038 165.748C318.69 166.197 318.217 166.534 317.679 166.714C317.14 166.894 316.561 166.911 316.013 166.762C315.465 166.613 314.973 166.304 314.601 165.876C314.228 165.447 313.991 164.918 313.92 164.354C313.848 163.791 313.945 163.219 314.199 162.711C314.453 162.203 314.851 161.781 315.345 161.5C315.838 161.219 316.404 161.09 316.97 161.13C317.728 161.184 318.434 161.536 318.933 162.11C319.432 162.684 319.682 163.432 319.63 164.19Z" fill="#7E57C2"/>
<path opacity="0.7" d="M319.63 164.19C319.591 164.757 319.385 165.299 319.038 165.748C318.69 166.197 318.217 166.534 317.679 166.714C317.14 166.894 316.561 166.911 316.013 166.762C315.465 166.613 314.973 166.304 314.601 165.876C314.228 165.447 313.991 164.918 313.92 164.354C313.848 163.791 313.945 163.219 314.199 162.711C314.453 162.203 314.851 161.781 315.345 161.5C315.838 161.219 316.404 161.09 316.97 161.13C317.728 161.184 318.434 161.536 318.933 162.11C319.432 162.684 319.682 163.432 319.63 164.19Z" fill="white"/>
<path d="M311 163.42C310.982 163.704 310.879 163.977 310.706 164.203C310.532 164.429 310.296 164.599 310.026 164.69C309.756 164.782 309.465 164.791 309.19 164.718C308.915 164.644 308.668 164.49 308.48 164.275C308.292 164.061 308.172 163.796 308.135 163.513C308.098 163.231 308.146 162.944 308.272 162.688C308.399 162.433 308.598 162.221 308.845 162.078C309.092 161.936 309.376 161.871 309.66 161.89C310.039 161.918 310.393 162.094 310.643 162.381C310.894 162.667 311.022 163.04 311 163.42Z" fill="#7E57C2"/>
<path opacity="0.7" d="M311 163.42C310.982 163.704 310.879 163.977 310.706 164.203C310.532 164.429 310.296 164.599 310.026 164.69C309.756 164.782 309.465 164.791 309.19 164.718C308.915 164.644 308.668 164.49 308.48 164.275C308.292 164.061 308.172 163.796 308.135 163.513C308.098 163.231 308.146 162.944 308.272 162.688C308.399 162.433 308.598 162.221 308.845 162.078C309.092 161.936 309.376 161.871 309.66 161.89C310.039 161.918 310.393 162.094 310.643 162.381C310.894 162.667 311.022 163.04 311 163.42Z" fill="white"/>
<path d="M382.879 165.308C392.479 161.874 396.8 149.416 392.532 137.481C388.263 125.547 377.021 118.655 367.421 122.089C357.822 125.522 353.5 137.98 357.768 149.915C362.037 161.849 373.279 168.741 382.879 165.308Z" fill="#7E57C2"/>
<path d="M382.743 160.647C390.491 157.876 393.98 147.822 390.535 138.191C387.091 128.56 378.017 122.999 370.269 125.771C362.52 128.542 359.032 138.596 362.476 148.227C365.921 157.858 374.994 163.418 382.743 160.647Z" fill="white"/>
<path d="M388.93 138.77C391.69 146.49 388.93 154.54 382.69 156.77C376.45 159 369.21 154.53 366.45 146.82C363.69 139.11 366.45 131.06 372.7 128.82C378.95 126.58 386.17 131.06 388.93 138.77Z" fill="#7E57C2"/>
<path d="M382.361 153.215C386.937 151.579 388.93 145.45 386.811 139.527C384.693 133.604 379.266 130.129 374.69 131.766C370.113 133.403 368.121 139.531 370.239 145.454C372.358 151.377 377.785 154.852 382.361 153.215Z" fill="white"/>
<path d="M385.26 140.45C386.77 144.67 385.46 149 382.34 150.12C379.22 151.24 375.47 148.71 373.96 144.49C372.45 140.27 373.75 135.94 376.87 134.82C379.99 133.7 383.75 136.23 385.26 140.45Z" fill="#7E57C2"/>
<path d="M384.16 140.84C385.26 143.84 384.43 146.98 382.31 147.73C380.19 148.48 377.6 146.63 376.51 143.58C375.42 140.53 376.25 137.44 378.36 136.68C380.47 135.92 383.07 137.79 384.16 140.84Z" fill="white"/>
<path d="M409.35 127.06L403.67 129.09L402.58 134.25L406.7 137.56L412.38 135.52L408.17 132.26L409.35 127.06Z" fill="#7E57C2"/>
<path d="M381.22 142.89C380.985 142.89 380.757 142.807 380.578 142.655C380.398 142.504 380.277 142.294 380.236 142.063C380.196 141.831 380.238 141.593 380.356 141.389C380.473 141.186 380.659 141.03 380.88 140.95L408.7 131C408.951 130.911 409.226 130.926 409.466 131.04C409.706 131.154 409.891 131.359 409.98 131.61C410.069 131.861 410.055 132.136 409.94 132.376C409.826 132.616 409.621 132.801 409.37 132.89L381.56 142.83C381.451 142.87 381.336 142.89 381.22 142.89Z" fill="#263238"/>
</svg>
 {/* Right Content Block */}
  <div className="flex flex-col justify-center items-start gap-[8px] py-[40px] w-[688px] h-[312px]">
    {/* Icon Circle */}
    <div className="flex items-center justify-center w-[80px] h-[80px]">
     <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.334 44C30.7263 35.0166 36.4811 27.1158 43.9908 21.1315C51.5006 15.1471 60.4867 11.3013 70.0006 10C68.6993 19.5139 64.8522 28.5001 58.8679 36.0098C52.8835 43.5196 44.9827 49.2743 35.9993 52.6667M35.3337 30C41.8109 32.9896 47.0108 38.1894 50.0003 44.6667M10 70V56.6667C10 54.0296 10.782 51.4517 12.2471 49.2591C13.7122 47.0664 15.7945 45.3574 18.2309 44.3483C20.6672 43.3391 23.3481 43.0751 25.9345 43.5895C28.5209 44.104 30.8967 45.3739 32.7614 47.2386C34.6261 49.1033 35.896 51.4791 36.4105 54.0655C36.9249 56.6519 36.6609 59.3328 35.6517 61.7691C34.6426 64.2055 32.9336 66.2878 30.7409 67.7529C28.5483 69.218 25.9704 70 23.3333 70H10Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div>

    {/* Heading */}
    <h3 className="w-[344px] text-[32px] leading-[52px] font-medium text-[#AA1299] font-manrope">
      Transparent & Match Insights
    </h3>

    {/* Paragraph */}
    <p className="w-[516px] text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] font-light font-dmsans">
      Get clear insights into why a job matches your profile. Our transparency ensures you're always informed about the best opportunities.
    </p>
  </div>
</div>

{/* Vertical Separator */}
<div className="absolute w-[2px] h-[250px] left-[573px] top-[540px] bg-[#E2E2E2] z-0" />


{/*FRAME   469   */}

<div className="flex justify-center items-center gap-[64px] w-full max-w-[1252px] h-[500px] relative z-[6]">
  {/* Left Image */}
  <div className="w-[500px] h-[500px]  rounded-xl relative">
    



</div>


  {/* Right Content Block */}
  <div className="flex flex-col justify-center items-start gap-[8px] py-[40px] w-[688px] h-[312px]">
    {/* Icon Circle */}
    <div className="flex justify-center items-center w-[80px] h-[80px]">
     
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3333 23.3333C23.3333 25.1014 22.631 26.7971 21.3807 28.0474C20.1305 29.2976 18.4348 30 16.6667 30C14.8986 30 13.2029 29.2976 11.9526 28.0474C10.7024 26.7971 10 25.1014 10 23.3333C10 21.5652 10.7024 19.8695 11.9526 18.6193C13.2029 17.369 14.8986 16.6667 16.6667 16.6667C18.4348 16.6667 20.1305 17.369 21.3807 18.6193C22.631 19.8695 23.3333 21.5652 23.3333 23.3333ZM23.3333 23.3333L50 20M50 20C50 22.6522 51.0536 25.1957 52.9289 27.0711C54.8043 28.9464 57.3478 30 60 30C62.6522 30 65.1957 28.9464 67.0711 27.0711C68.9464 25.1957 70 22.6522 70 20C70 17.3478 68.9464 14.8043 67.0711 12.9289C65.1957 11.0536 62.6522 10 60 10C57.3478 10 54.8043 11.0536 52.9289 12.9289C51.0536 14.8043 50 17.3478 50 20ZM30 56.6667L46.6667 51.6667M21.6667 28.3333L47.7 46.2333M46.6667 50C46.6667 51.7681 47.369 53.4638 48.6193 54.714C49.8695 55.9643 51.5652 56.6667 53.3333 56.6667C55.1014 56.6667 56.7971 55.9643 58.0474 54.714C59.2976 53.4638 60 51.7681 60 50C60 48.2319 59.2976 46.5362 58.0474 45.286C56.7971 44.0357 55.1014 43.3333 53.3333 43.3333C51.5652 43.3333 49.8695 44.0357 48.6193 45.286C47.369 46.5362 46.6667 48.2319 46.6667 50ZM10 60C10 62.6522 11.0536 65.1957 12.9289 67.0711C14.8043 68.9464 17.3478 70 20 70C22.6522 70 25.1957 68.9464 27.0711 67.0711C28.9464 65.1957 30 62.6522 30 60C30 57.3478 28.9464 54.8043 27.0711 52.9289C25.1957 51.0536 22.6522 50 20 50C17.3478 50 14.8043 51.0536 12.9289 52.9289C11.0536 54.8043 10 57.3478 10 60Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

    {/* Heading */}
    <h3 className="w-[344px] text-[32px] leading-[52px] font-medium text-[#AA1299] font-manrope">
      Transparent & Match Insights
    </h3>

    {/* Paragraph */}
    <p className="w-[516px] text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] font-light font-dmsans">
      See how closely jobs match your profile with our smart match percentage. Make better, faster decisions.
    </p>
  </div>
</div>


{/*FRAME 470 */}

{/* Frame 470 */}
<div className="flex flex-row justify-center items-center gap-[64px] w-[1252px] h-[500px] z-[7]">
  <div className="w-[500px] h-[400px] bg-[#F5F5F5] rounded-[24px] shadow-md flex items-center justify-center">
    
  </div>

  {/* Left Content Block */}
  <div className="flex flex-col justify-center items-start gap-[8px] py-[40px] w-[688px] h-[312px]">



    {/* Icon Circle */}
    <div className="flex items-center justify-center w-[80px] h-[80px]">
      
    </div>

    {/* Heading */}
    <h3 className="w-[344px] text-[32px] leading-[52px] font-medium text-[#AA1299] font-manrope">
      Build a Standout Resume
    </h3>

    {/* Paragraph */}
    <p className="w-[516px] text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] font-light font-dmsans">
      Use our built-in CV builder to craft a professional resume that gets noticed — optimized to impress recruiters and hiring managers.
    </p>
  </div>

  {/* Right Graphic Block (Placeholder) */}
  
</div>

<div className="flex justify-center items-center gap-[64px] w-full max-w-[1252px] h-[500px] relative z-[8]">
  {/* Left Illustration Box */}
  <div className="w-[500px] h-[500px] rounded-xl relative">
    {/*  SVG with the actual visual if needed */}
    <svg width="500" height="500" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M500 382.4H0V382.65H500V382.4Z" fill="#EBEBEB"/>
<path d="M85.58 391.92H52.46V392.17H85.58V391.92Z" fill="#EBEBEB"/>
<path d="M179.83 389.21H153.44V389.46H179.83V389.21Z" fill="#EBEBEB"/>
<path d="M135.89 397.82H89.97V398.07H135.89V397.82Z" fill="#EBEBEB"/>
<path d="M449.9 399.53H428.3V399.78H449.9V399.53Z" fill="#EBEBEB"/>
<path d="M423.44 399.53H391.47V399.78H423.44V399.53Z" fill="#EBEBEB"/>
<path d="M332.33 395.31H277.21V395.56H332.33V395.31Z" fill="#EBEBEB"/>
<path d="M237 337.8H43.91C42.3973 337.797 40.9475 337.195 39.8788 336.124C38.8102 335.053 38.21 333.603 38.21 332.09V60.66C38.2231 59.156 38.8292 57.718 39.8964 56.6582C40.9637 55.5985 42.4059 55.0026 43.91 55H237C238.514 55 239.967 55.6016 241.038 56.6724C242.108 57.7433 242.71 59.1956 242.71 60.71V332.09C242.71 333.604 242.108 335.057 241.038 336.128C239.967 337.198 238.514 337.8 237 337.8ZM43.91 55.2C42.4636 55.2026 41.0774 55.7791 40.0556 56.8027C39.0338 57.8264 38.46 59.2136 38.46 60.66V332.09C38.46 333.536 39.0338 334.924 40.0556 335.947C41.0774 336.971 42.4636 337.547 43.91 337.55H237C238.447 337.547 239.834 336.971 240.858 335.948C241.881 334.924 242.457 333.537 242.46 332.09V60.66C242.457 59.2127 241.881 57.8255 240.858 56.8021C239.834 55.7787 238.447 55.2026 237 55.2H43.91Z" fill="#EBEBEB"/>
<path d="M453.31 337.8H260.21C258.696 337.797 257.246 337.195 256.175 336.125C255.105 335.054 254.503 333.604 254.5 332.09V60.66C254.516 59.1551 255.124 57.7171 256.193 56.6576C257.262 55.5981 258.705 55.0025 260.21 55H453.31C454.812 55.0052 456.252 55.6022 457.317 56.6617C458.382 57.7212 458.987 59.1578 459 60.66V332.09C459 333.601 458.401 335.05 457.335 336.121C456.268 337.191 454.821 337.795 453.31 337.8ZM260.21 55.2C258.763 55.2026 257.375 55.7787 256.352 56.8021C255.329 57.8255 254.753 59.2127 254.75 60.66V332.09C254.753 333.537 255.329 334.924 256.352 335.948C257.375 336.971 258.763 337.547 260.21 337.55H453.31C454.757 337.547 456.145 336.971 457.168 335.948C458.191 334.924 458.767 333.537 458.77 332.09V60.66C458.767 59.2127 458.191 57.8255 457.168 56.8021C456.145 55.7787 454.757 55.2026 453.31 55.2H260.21Z" fill="#EBEBEB"/>
<path d="M70.3699 219.85L340.93 219.85V69.2201L70.3699 69.2201V219.85Z" fill="#E0E0E0"/>
<path d="M55.5201 219.85L339.57 219.85V69.2201L55.5201 69.2201V219.85Z" fill="#F5F5F5"/>
<path d="M334.92 215.2V73.8599L60.15 73.8599V215.2L334.92 215.2Z" fill="white"/>
<path d="M223.67 215.21L171.79 73.8599H257.41L309.29 215.21H223.67Z" fill="#F5F5F5"/>
<path d="M141.26 215.21L89.38 73.8599H153.97L205.84 215.21H141.26Z" fill="#F5F5F5"/>
<path d="M432.5 377.73H447.9V274.1H432.5V377.73Z" fill="#F0F0F0"/>
<path d="M275.82 382.4H444.93V377.73H275.82V382.4Z" fill="#F0F0F0"/>
<path d="M432.5 274.09H272.87V377.72H432.5V274.09Z" fill="#F5F5F5"/>
<path d="M434.1 274.09H449.84V270.01H434.1V274.09Z" fill="#F0F0F0"/>
<path d="M434.09 270.02H270.93V274.1H434.09V270.02Z" fill="#FAFAFA"/>
<path d="M427.07 323.21H278.29V282.54H427.07V323.21ZM279.55 322H425.81V283.8H279.55V322Z" fill="#E0E0E0"/>
<path d="M427.07 369.28H278.29V329.17H427.07V369.28ZM279.55 368H425.81V330.43H279.55V368Z" fill="#E0E0E0"/>
<path d="M307.8 290.65H397.56C398 290.65 398.422 290.475 398.734 290.164C399.045 289.852 399.22 289.43 399.22 288.99C399.217 288.551 399.041 288.132 398.73 287.823C398.419 287.513 397.998 287.34 397.56 287.34H307.8C307.362 287.34 306.943 287.514 306.633 287.823C306.324 288.133 306.15 288.552 306.15 288.99C306.149 289.207 306.19 289.423 306.273 289.624C306.355 289.826 306.476 290.009 306.63 290.163C306.783 290.317 306.965 290.44 307.166 290.523C307.367 290.607 307.582 290.65 307.8 290.65Z" fill="#E0E0E0"/>
<path d="M307.8 337.29H397.56C397.999 337.288 398.42 337.112 398.731 336.801C399.042 336.49 399.217 336.07 399.22 335.63C399.217 335.191 399.042 334.77 398.731 334.459C398.42 334.149 397.999 333.973 397.56 333.97H307.8C307.361 333.973 306.942 334.149 306.633 334.46C306.324 334.771 306.15 335.192 306.15 335.63C306.15 336.069 306.324 336.489 306.633 336.8C306.942 337.112 307.361 337.288 307.8 337.29Z" fill="#E0E0E0"/>
<path d="M141.61 258.12H115.76C111.207 258.182 106.803 259.756 103.242 262.594C99.6814 265.433 97.1653 269.375 96.09 273.8L89.26 302.31L75.26 302.26C72.0088 302.255 68.8574 303.383 66.3467 305.448C63.8359 307.514 62.1223 310.389 61.5 313.58L59.64 323.35C58.2261 323.561 56.9072 324.188 55.8511 325.152C54.795 326.115 54.0497 327.371 53.71 328.76H123C127.548 328.696 131.945 327.124 135.502 324.289C139.059 321.455 141.573 317.519 142.65 313.1L152.45 272.16C152.895 270.502 152.951 268.764 152.614 267.08C152.277 265.397 151.556 263.814 150.507 262.456C149.458 261.097 148.109 259.999 146.566 259.247C145.023 258.494 143.327 258.109 141.61 258.12ZM73.72 323.27H63.35L65.09 314.27C65.5406 311.92 66.795 309.801 68.638 308.275C70.481 306.75 72.7975 305.913 75.19 305.91H88.35L86.69 312.85C85.988 315.778 84.3334 318.391 81.9858 320.277C79.6383 322.163 76.7308 323.215 73.72 323.27Z" fill="#E6E6E6"/>
<path d="M121.3 328.76H124.26L135.91 382.4H132.95L121.3 328.76Z" fill="#E0E0E0"/>
<path d="M110.19 328.76H113.15L124.8 382.4H121.84L110.19 328.76Z" fill="#E0E0E0"/>
<path d="M66.58 328.76H63.62L51.97 382.4H54.93L66.58 328.76Z" fill="#E0E0E0"/>
<path d="M77.69 328.76H74.73L63.08 382.4H66.04L77.69 328.76Z" fill="#E0E0E0"/>
<path d="M237.58 258.12H211.74C207.187 258.182 202.783 259.756 199.222 262.595C195.661 265.433 193.145 269.375 192.07 273.8L185.24 302.31L171.24 302.26C167.998 302.261 164.857 303.391 162.358 305.457C159.86 307.523 158.159 310.396 157.55 313.58L155.68 323.35C154.268 323.565 152.951 324.194 151.895 325.157C150.84 326.12 150.093 327.373 149.75 328.76H219C223.549 328.697 227.948 327.125 231.507 324.29C235.065 321.456 237.581 317.52 238.66 313.1L248.46 272.16C248.906 270.499 248.961 268.757 248.622 267.071C248.283 265.384 247.558 263.799 246.505 262.44C245.451 261.08 244.097 259.983 242.549 259.233C241.001 258.484 239.3 258.103 237.58 258.12ZM169.69 323.27H159.32L161.06 314.27C161.513 311.92 162.769 309.8 164.614 308.275C166.458 306.749 168.776 305.913 171.17 305.91H184.34L182.67 312.85C181.971 315.782 180.316 318.397 177.965 320.284C175.615 322.171 172.703 323.221 169.69 323.27Z" fill="#E6E6E6"/>
<path d="M217.27 328.76H220.24L231.89 382.4H228.93L217.27 328.76Z" fill="#E0E0E0"/>
<path d="M206.16 328.76H209.12L220.78 382.4H217.82L206.16 328.76Z" fill="#E0E0E0"/>
<path d="M162.56 328.76H159.6L147.95 382.4H150.91L162.56 328.76Z" fill="#E0E0E0"/>
<path d="M173.67 328.76H170.71L159.06 382.4H162.02L173.67 328.76Z" fill="#E0E0E0"/>
<path d="M360.15 269.98H408.45L412.37 226.92H364.07L360.15 269.98Z" fill="#E6E6E6"/>
<path d="M358.51 269.98H406.81L410.72 226.92H362.43L358.51 269.98Z" fill="#F0F0F0"/>
<path d="M402.47 265.21L405.52 231.68H366.76L363.71 265.21H402.47Z" fill="white"/>
<path d="M348.97 238.53L346.11 269.98H369.25L372.12 238.53H348.97Z" fill="#E6E6E6"/>
<path d="M347.77 238.53L344.91 269.98H368.06L370.92 238.53H347.77Z" fill="#F0F0F0"/>
<path d="M350.94 242.01L348.71 266.49H364.89L367.12 242.01H350.94Z" fill="white"/>
<path d="M250 427.56C357.082 427.56 443.89 422.492 443.89 416.24C443.89 409.988 357.082 404.92 250 404.92C142.917 404.92 56.11 409.988 56.11 416.24C56.11 422.492 142.917 427.56 250 427.56Z" fill="#F5F5F5"/>
<path d="M407.61 312.43H144.18C142.63 312.441 141.095 312.134 139.669 311.526C138.243 310.919 136.958 310.024 135.892 308.899C134.827 307.773 134.004 306.441 133.476 304.984C132.947 303.527 132.724 301.977 132.82 300.43L142.65 99.4301C142.832 96.2137 144.228 93.1862 146.555 90.959C148.883 88.7317 151.969 87.4705 155.19 87.4301H418.62C420.17 87.4174 421.706 87.7241 423.133 88.3311C424.559 88.938 425.846 89.8323 426.911 90.9581C427.977 92.0839 428.8 93.4171 429.328 94.8747C429.855 96.3322 430.078 97.8829 429.98 99.4301L420.15 300.43C419.966 303.646 418.569 306.672 416.242 308.898C413.915 311.125 410.831 312.387 407.61 312.43Z" fill="#7E57C2"/>
<path opacity="0.7" d="M407.61 312.43H144.18C142.63 312.441 141.095 312.134 139.669 311.526C138.243 310.919 136.958 310.024 135.892 308.899C134.827 307.773 134.004 306.441 133.476 304.984C132.947 303.527 132.724 301.977 132.82 300.43L142.65 99.4301C142.832 96.2137 144.228 93.1862 146.555 90.959C148.883 88.7317 151.969 87.4705 155.19 87.4301H418.62C420.17 87.4174 421.706 87.7241 423.133 88.3311C424.559 88.938 425.846 89.8323 426.911 90.9581C427.977 92.0839 428.8 93.4171 429.328 94.8747C429.855 96.3322 430.078 97.8829 429.98 99.4301L420.15 300.43C419.966 303.646 418.569 306.672 416.242 308.898C413.915 311.125 410.831 312.387 407.61 312.43Z" fill="white"/>
<path d="M428.82 89.6002C427.417 88.0459 425.666 86.8464 423.71 86.1002L424.07 85.1602C426.166 85.9732 428.045 87.2601 429.56 88.9202L428.82 89.6002Z" fill="#7E57C2"/>
<path d="M418.75 84.1899H397.69V85.1899H418.75V84.1899Z" fill="#7E57C2"/>
<path d="M418.62 87.4898H155.19C151.969 87.5303 148.883 88.7914 146.555 91.0187C144.228 93.246 142.832 96.2735 142.65 99.4898H430C430.098 97.941 429.875 96.3886 429.346 94.9297C428.817 93.4707 427.992 92.1365 426.924 91.0105C425.857 89.8844 424.568 88.9905 423.139 88.3848C421.71 87.779 420.172 87.4744 418.62 87.4898Z" fill="#7E57C2"/>
<path d="M140.86 298.87L150 113C150.086 111.501 150.738 110.092 151.824 109.056C152.91 108.02 154.349 107.435 155.85 107.42H416C416.723 107.412 417.439 107.552 418.105 107.833C418.771 108.115 419.372 108.53 419.87 109.053C420.369 109.577 420.754 110.198 421.001 110.877C421.249 111.556 421.354 112.278 421.31 113L412.22 298.88C412.134 300.381 411.481 301.793 410.393 302.831C409.305 303.869 407.864 304.454 406.36 304.47H146.17C145.446 304.477 144.728 304.334 144.062 304.052C143.395 303.769 142.794 303.352 142.296 302.826C141.797 302.301 141.413 301.678 141.166 300.997C140.919 300.317 140.815 299.592 140.86 298.87Z" fill="white"/>
<path opacity="0.3" d="M177.78 171.14H165.78C165.52 171.143 165.263 171.093 165.023 170.992C164.783 170.892 164.567 170.743 164.387 170.556C164.207 170.368 164.067 170.146 163.977 169.903C163.886 169.659 163.846 169.399 163.86 169.14L164.86 148.14C164.895 147.6 165.134 147.094 165.527 146.723C165.92 146.352 166.439 146.144 166.98 146.14H178.98C179.241 146.135 179.5 146.185 179.74 146.285C179.981 146.384 180.199 146.533 180.38 146.72C180.561 146.908 180.701 147.131 180.793 147.375C180.884 147.619 180.924 147.88 180.91 148.14L179.91 169.14C179.875 169.681 179.635 170.189 179.24 170.56C178.844 170.931 178.322 171.139 177.78 171.14Z" fill="#7E57C2"/>
<path opacity="0.3" d="M201.8 171.14H189.8C189.54 171.141 189.283 171.09 189.043 170.989C188.804 170.889 188.587 170.74 188.407 170.553C188.226 170.366 188.086 170.145 187.993 169.902C187.901 169.659 187.859 169.4 187.87 169.14L189.08 144.34C189.12 143.8 189.361 143.295 189.756 142.925C190.15 142.555 190.669 142.346 191.21 142.34H203.21C203.47 142.338 203.727 142.389 203.967 142.49C204.206 142.591 204.423 142.74 204.603 142.927C204.784 143.114 204.924 143.335 205.017 143.578C205.109 143.821 205.151 144.08 205.14 144.34L203.93 169.14C203.89 169.679 203.649 170.184 203.255 170.555C202.86 170.925 202.341 171.134 201.8 171.14Z" fill="#7E57C2"/>
<path opacity="0.3" d="M225.82 171.14H213.82C213.56 171.142 213.303 171.09 213.063 170.99C212.824 170.889 212.607 170.74 212.427 170.553C212.246 170.366 212.106 170.145 212.014 169.902C211.921 169.659 211.879 169.4 211.89 169.14L213.23 141.75C213.27 141.21 213.511 140.706 213.906 140.335C214.3 139.965 214.819 139.756 215.36 139.75H227.36C227.62 139.748 227.877 139.8 228.117 139.9C228.356 140.001 228.573 140.15 228.753 140.337C228.934 140.524 229.074 140.745 229.167 140.988C229.259 141.231 229.301 141.49 229.29 141.75L228 169.11C227.967 169.664 227.722 170.183 227.316 170.561C226.91 170.939 226.375 171.146 225.82 171.14Z" fill="#7E57C2"/>
<path opacity="0.3" d="M249.85 171.14H237.85C237.591 171.142 237.334 171.09 237.095 170.989C236.856 170.888 236.64 170.74 236.46 170.553C236.28 170.366 236.141 170.144 236.05 169.901C235.959 169.658 235.918 169.399 235.93 169.14L237.38 139.4C237.42 138.86 237.661 138.356 238.056 137.985C238.45 137.615 238.969 137.406 239.51 137.4H251.51C251.77 137.398 252.027 137.45 252.267 137.55C252.506 137.651 252.723 137.8 252.903 137.987C253.084 138.174 253.224 138.395 253.317 138.638C253.409 138.881 253.451 139.14 253.44 139.4L252 169.11C251.972 169.66 251.733 170.178 251.332 170.556C250.932 170.934 250.401 171.143 249.85 171.14Z" fill="#7E57C2"/>
<path d="M273.87 171.14H261.87C261.61 171.142 261.353 171.091 261.113 170.99C260.874 170.889 260.657 170.74 260.477 170.553C260.296 170.366 260.156 170.145 260.063 169.902C259.971 169.659 259.929 169.4 259.94 169.14L261.84 130.33C261.878 129.79 262.118 129.284 262.513 128.913C262.908 128.542 263.428 128.334 263.97 128.33H275.97C276.23 128.329 276.487 128.38 276.727 128.481C276.966 128.581 277.183 128.73 277.363 128.917C277.544 129.104 277.684 129.325 277.777 129.568C277.869 129.811 277.911 130.07 277.9 130.33L276 169.11C275.967 169.655 275.729 170.167 275.334 170.544C274.939 170.92 274.416 171.134 273.87 171.14Z" fill="#7E57C2"/>
<path d="M270.74 124.16L271.88 122.34C271.943 122.241 271.978 122.128 271.982 122.011C271.986 121.894 271.958 121.779 271.902 121.676C271.846 121.574 271.763 121.489 271.662 121.43C271.562 121.37 271.447 121.339 271.33 121.34H269.22C269.102 121.336 268.984 121.364 268.881 121.422C268.777 121.48 268.692 121.564 268.633 121.667C268.574 121.77 268.545 121.888 268.548 122.006C268.551 122.125 268.586 122.24 268.65 122.34L269.65 124.16C269.707 124.253 269.788 124.33 269.883 124.383C269.978 124.436 270.086 124.464 270.195 124.464C270.304 124.464 270.412 124.436 270.507 124.383C270.603 124.33 270.683 124.253 270.74 124.16Z" fill="#263238"/>
<path opacity="0.3" d="M297.89 171.14H285.89C285.63 171.141 285.373 171.09 285.133 170.989C284.894 170.888 284.677 170.74 284.497 170.553C284.316 170.366 284.176 170.144 284.083 169.901C283.991 169.659 283.949 169.399 283.96 169.14L285.56 136.45C285.6 135.91 285.841 135.405 286.236 135.035C286.63 134.665 287.149 134.456 287.69 134.45H299.69C299.95 134.448 300.207 134.499 300.447 134.6C300.686 134.701 300.903 134.849 301.083 135.036C301.264 135.223 301.404 135.445 301.497 135.688C301.589 135.931 301.631 136.19 301.62 136.45L300 169.11C299.97 169.652 299.735 170.163 299.344 170.539C298.953 170.916 298.433 171.13 297.89 171.14Z" fill="#7E57C2"/>
<path opacity="0.1" d="M298.94 177.66H164.13C164.044 177.662 163.959 177.645 163.88 177.612C163.801 177.579 163.73 177.53 163.67 177.468C163.611 177.406 163.565 177.332 163.536 177.252C163.507 177.171 163.495 177.086 163.5 177C163.513 176.822 163.592 176.656 163.721 176.533C163.851 176.411 164.022 176.342 164.2 176.34H299C299.086 176.338 299.171 176.355 299.25 176.388C299.329 176.421 299.401 176.47 299.46 176.532C299.519 176.594 299.565 176.667 299.594 176.748C299.623 176.829 299.636 176.914 299.63 177C299.622 177.178 299.546 177.346 299.418 177.469C299.289 177.592 299.118 177.66 298.94 177.66Z" fill="#263238"/>
<path opacity="0.1" d="M308.54 294.58L317.22 117.28C317.228 117.11 317.301 116.95 317.424 116.833C317.547 116.715 317.71 116.65 317.88 116.65H317.94C318.022 116.648 318.103 116.664 318.179 116.695C318.254 116.727 318.322 116.774 318.379 116.833C318.435 116.892 318.479 116.963 318.506 117.04C318.534 117.116 318.546 117.198 318.54 117.28L309.87 294.58C309.86 294.75 309.787 294.91 309.665 295.028C309.542 295.147 309.38 295.215 309.21 295.22H309.14C309.058 295.219 308.977 295.201 308.903 295.168C308.828 295.135 308.76 295.087 308.704 295.027C308.648 294.968 308.605 294.897 308.577 294.82C308.548 294.744 308.536 294.662 308.54 294.58Z" fill="#263238"/>
<path d="M353.05 150.3C352.137 155.103 352.989 160.075 355.45 164.3L349.51 168C346.254 162.385 345.122 155.789 346.32 149.41C347.553 142.88 350.943 136.952 355.945 132.577C360.948 128.202 367.274 125.632 373.91 125.28V132.1C368.893 132.347 364.106 134.277 360.321 137.579C356.536 140.881 353.975 145.363 353.05 150.3Z" fill="#7E57C2"/>
<path opacity="0.3" d="M400 142.46L393.56 145.06C392.326 141.663 390.18 138.671 387.357 136.413C384.535 134.155 381.145 132.718 377.56 132.26C376.354 132.094 375.136 132.037 373.92 132.09V125.27C379.526 125.01 385.071 126.533 389.757 129.622C394.443 132.71 398.029 137.205 400 142.46Z" fill="#7E57C2"/>
<path d="M401.14 156.74C398.38 171.88 383.74 182.67 368.7 180.66C364.748 180.151 360.965 178.746 357.639 176.552C354.313 174.358 351.533 171.433 349.51 168L355.45 164.34C356.972 166.935 359.069 169.146 361.579 170.803C364.089 172.46 366.946 173.52 369.93 173.9C375.532 174.559 381.175 173.068 385.719 169.726C390.263 166.385 393.369 161.443 394.41 155.9C395.087 152.293 394.783 148.57 393.53 145.12L399.97 142.52C401.612 147.073 402.016 151.98 401.14 156.74Z" fill="#263238"/>
<path d="M352.88 129.72C352.812 129.721 352.743 129.708 352.68 129.683C352.616 129.657 352.559 129.619 352.51 129.57L348.08 124.9H332.86C332.727 124.9 332.6 124.847 332.507 124.753C332.413 124.66 332.36 124.533 332.36 124.4C332.36 124.267 332.413 124.14 332.507 124.046C332.6 123.953 332.727 123.9 332.86 123.9H348.29C348.358 123.9 348.425 123.914 348.487 123.941C348.549 123.969 348.605 124.009 348.65 124.06L353.24 128.88C353.311 128.949 353.359 129.038 353.378 129.135C353.397 129.232 353.387 129.332 353.348 129.423C353.309 129.514 353.243 129.591 353.16 129.644C353.076 129.697 352.979 129.723 352.88 129.72Z" fill="#263238"/>
<path opacity="0.3" d="M381.83 208.76C377.652 206.175 372.676 205.197 367.83 206.01L367.09 199.26C373.497 198.219 380.064 199.511 385.6 202.9C396.79 209.84 401.02 224.18 395.6 236.73L389.35 234.29C393.42 225 390.45 214.1 381.83 208.76Z" fill="#7E57C2"/>
<path d="M368.27 254.57L368.73 247.74C372.477 247.777 376.172 246.863 379.47 245.085C382.768 243.306 385.562 240.721 387.59 237.57C388.273 236.529 388.865 235.432 389.36 234.29L395.61 236.73C394.956 238.247 394.173 239.706 393.27 241.09C390.575 245.26 386.871 248.683 382.5 251.039C378.13 253.396 373.235 254.61 368.27 254.57Z" fill="#263238"/>
<path d="M354.61 250.6C341.91 242.73 338.47 225.48 346.98 212.4C349.233 208.922 352.19 205.955 355.661 203.692C359.132 201.429 363.039 199.919 367.13 199.26L367.87 206.01C364.782 206.503 361.831 207.64 359.211 209.347C356.591 211.054 354.359 213.294 352.66 215.92C346.2 225.86 348.78 238.77 358.42 244.75C361.519 246.671 365.084 247.708 368.73 247.75L368.27 254.58C363.44 254.514 358.719 253.138 354.61 250.6Z" fill="#7E57C2"/>
<path d="M349.27 203.41C349.134 203.406 349.004 203.349 348.91 203.25L344.47 198.58H329.25C329.117 198.58 328.99 198.527 328.896 198.434C328.803 198.34 328.75 198.213 328.75 198.08C328.75 197.947 328.803 197.82 328.896 197.727C328.99 197.633 329.117 197.58 329.25 197.58H344.69C344.826 197.584 344.956 197.642 345.05 197.74L349.63 202.56C349.677 202.607 349.714 202.662 349.739 202.723C349.765 202.784 349.778 202.849 349.778 202.915C349.778 202.981 349.765 203.046 349.739 203.107C349.714 203.168 349.677 203.224 349.63 203.27C349.531 203.36 349.403 203.409 349.27 203.41Z" fill="#263238"/>
<path d="M336.06 279.41H331C330.316 279.421 329.661 279.69 329.166 280.162C328.671 280.635 328.373 281.277 328.33 281.96L328.08 287.03C328.061 287.36 328.11 287.69 328.223 288C328.337 288.31 328.513 288.593 328.741 288.832C328.969 289.072 329.244 289.261 329.548 289.39C329.852 289.518 330.18 289.583 330.51 289.58H335.57C336.256 289.571 336.913 289.303 337.41 288.831C337.907 288.358 338.207 287.714 338.25 287.03L338.5 281.96C338.518 281.63 338.468 281.299 338.353 280.989C338.238 280.679 338.061 280.396 337.832 280.157C337.603 279.918 337.328 279.728 337.023 279.6C336.719 279.471 336.391 279.407 336.06 279.41Z" fill="#7E57C2"/>
<path d="M364.44 279.41H359.38C358.688 279.419 358.025 279.692 357.527 280.174C357.029 280.655 356.733 281.308 356.7 282L356.46 287.07C356.441 287.399 356.489 287.728 356.603 288.038C356.716 288.347 356.891 288.63 357.118 288.869C357.345 289.108 357.618 289.298 357.921 289.427C358.224 289.556 358.551 289.622 358.88 289.62H364C364.684 289.609 365.339 289.34 365.834 288.867C366.329 288.395 366.627 287.753 366.67 287.07L366.92 282C366.946 281.663 366.9 281.324 366.786 281.005C366.671 280.687 366.492 280.396 366.258 280.152C366.024 279.908 365.741 279.715 365.428 279.587C365.115 279.46 364.778 279.399 364.44 279.41Z" fill="#263238"/>
<path opacity="0.3" d="M392.83 279.41H387.76C387.076 279.421 386.421 279.69 385.926 280.163C385.431 280.635 385.133 281.277 385.09 281.96L384.84 287.03C384.821 287.359 384.869 287.688 384.982 287.998C385.096 288.307 385.271 288.59 385.498 288.829C385.725 289.068 385.998 289.258 386.301 289.387C386.604 289.516 386.931 289.582 387.26 289.58H392.33C393.02 289.571 393.68 289.299 394.176 288.819C394.672 288.34 394.967 287.689 395 287L395.25 281.93C395.265 281.604 395.213 281.278 395.098 280.972C394.983 280.666 394.807 280.387 394.581 280.151C394.354 279.915 394.082 279.728 393.782 279.601C393.481 279.473 393.157 279.408 392.83 279.41Z" fill="#7E57C2"/>
<path d="M177.277 217.28L177.209 218.651H172.027C172.109 218.133 172.302 217.642 172.606 217.18C172.91 216.714 173.495 216.098 174.361 215.331C175.058 214.711 175.487 214.29 175.649 214.07C175.868 213.765 175.985 213.464 176 213.166C176.016 212.837 175.939 212.585 175.769 212.41C175.603 212.231 175.363 212.142 175.051 212.142C174.743 212.142 174.493 212.234 174.301 212.42C174.109 212.606 173.989 212.914 173.939 213.345L172.474 213.198C172.602 212.385 172.906 211.802 173.387 211.448C173.868 211.094 174.455 210.918 175.149 210.918C175.91 210.918 176.498 211.122 176.912 211.532C177.327 211.942 177.519 212.452 177.488 213.061C177.471 213.408 177.391 213.739 177.249 214.054C177.111 214.366 176.898 214.693 176.611 215.036C176.421 215.264 176.082 215.592 175.594 216.019C175.106 216.446 174.796 216.73 174.662 216.87C174.533 217.01 174.426 217.147 174.342 217.28H177.277ZM178.334 216.67L179.814 216.518C179.84 216.851 179.951 217.115 180.148 217.311C180.345 217.504 180.579 217.6 180.849 217.6C181.157 217.6 181.425 217.476 181.651 217.227C181.878 216.975 182.004 216.597 182.029 216.092C182.053 215.62 181.963 215.266 181.761 215.031C181.563 214.793 181.293 214.674 180.953 214.674C180.529 214.674 180.139 214.861 179.784 215.236L178.593 215.063L179.551 211.054H183.459L183.39 212.436H180.602L180.305 213.744C180.643 213.579 180.984 213.497 181.328 213.497C181.983 213.497 182.527 213.735 182.959 214.212C183.391 214.688 183.589 215.306 183.551 216.066C183.519 216.7 183.306 217.266 182.913 217.763C182.378 218.443 181.665 218.782 180.774 218.782C180.062 218.782 179.491 218.592 179.061 218.21C178.632 217.828 178.389 217.315 178.334 216.67ZM184.526 218.651L184.6 217.175H186.078L186.004 218.651H184.526ZM187.329 216.67L188.809 216.518C188.835 216.851 188.946 217.115 189.143 217.311C189.34 217.504 189.574 217.6 189.844 217.6C190.153 217.6 190.42 217.476 190.647 217.227C190.873 216.975 190.999 216.597 191.024 216.092C191.048 215.62 190.959 215.266 190.756 215.031C190.558 214.793 190.289 214.674 189.948 214.674C189.524 214.674 189.134 214.861 188.779 215.236L187.588 215.063L188.546 211.054H192.454L192.385 212.436H189.597L189.3 213.744C189.638 213.579 189.979 213.497 190.323 213.497C190.979 213.497 191.523 213.735 191.955 214.212C192.387 214.688 192.584 215.306 192.546 216.066C192.514 216.7 192.302 217.266 191.909 217.763C191.373 218.443 190.66 218.782 189.769 218.782C189.057 218.782 188.486 218.592 188.057 218.21C187.627 217.828 187.384 217.315 187.329 216.67ZM196.104 218.651L196.181 217.101H193.025L193.09 215.809L196.68 210.918H197.922L197.677 215.804H198.635L198.57 217.101H197.612L197.535 218.651H196.104ZM196.246 215.804L196.378 213.171L194.474 215.804H196.246ZM199.25 214.787C199.273 214.327 199.39 213.986 199.602 213.765C199.817 213.543 200.097 213.432 200.443 213.432C200.8 213.432 201.074 213.543 201.264 213.765C201.456 213.984 201.541 214.325 201.517 214.787C201.494 215.246 201.376 215.587 201.161 215.809C200.949 216.031 200.67 216.141 200.325 216.141C199.967 216.141 199.692 216.032 199.5 215.812C199.31 215.591 199.227 215.249 199.25 214.787ZM200.018 214.78C200.001 215.113 200.028 215.337 200.1 215.452C200.154 215.536 200.233 215.578 200.335 215.578C200.44 215.578 200.524 215.536 200.587 215.452C200.667 215.337 200.716 215.113 200.733 214.78C200.749 214.446 200.723 214.223 200.654 214.111C200.6 214.025 200.52 213.982 200.415 213.982C200.312 213.982 200.23 214.024 200.167 214.108C200.084 214.222 200.034 214.446 200.018 214.78ZM200.922 218.847H200.193L203.201 213.432H203.909L200.922 218.847ZM202.58 217.499C202.603 217.04 202.721 216.699 202.933 216.477C203.147 216.256 203.43 216.145 203.78 216.145C204.133 216.145 204.404 216.256 204.594 216.477C204.786 216.699 204.871 217.04 204.848 217.499C204.825 217.962 204.706 218.303 204.492 218.525C204.28 218.747 204.001 218.858 203.655 218.858C203.298 218.858 203.023 218.747 202.831 218.525C202.641 218.303 202.557 217.962 202.58 217.499ZM203.348 217.496C203.331 217.83 203.359 218.053 203.43 218.165C203.484 218.251 203.563 218.294 203.666 218.294C203.771 218.294 203.854 218.252 203.914 218.168C203.997 218.054 204.046 217.83 204.063 217.496C204.08 217.162 204.054 216.938 203.984 216.824C203.93 216.74 203.851 216.698 203.745 216.698C203.64 216.698 203.558 216.74 203.497 216.824C203.415 216.938 203.365 217.162 203.348 217.496Z" fill="#263238"/>
<path d="M215.75 234.79H215.63C215.566 234.776 215.505 234.749 215.451 234.711C215.398 234.673 215.352 234.624 215.318 234.569C215.283 234.513 215.26 234.45 215.25 234.385C215.24 234.32 215.244 234.254 215.26 234.19C218.64 219.98 225.81 205.42 234.26 204.95C239.91 204.63 243.13 209.35 246.86 214.8C249.56 218.73 252.61 223.18 257.08 226.54C260.16 228.85 263.3 229.45 266.42 228.33C273.37 225.82 280.02 214.51 283.78 198.82C283.796 198.754 283.824 198.692 283.864 198.638C283.904 198.583 283.954 198.537 284.011 198.502C284.069 198.466 284.133 198.443 284.2 198.432C284.266 198.422 284.334 198.424 284.4 198.44C284.466 198.456 284.528 198.484 284.582 198.524C284.637 198.564 284.683 198.614 284.718 198.671C284.754 198.729 284.777 198.793 284.788 198.86C284.798 198.926 284.796 198.994 284.78 199.06C280.89 215.31 274.16 226.61 266.78 229.27C263.32 230.51 259.86 229.86 256.5 227.34C251.9 223.89 248.8 219.34 246.06 215.34C242.34 209.92 239.42 205.65 234.34 205.92C226.45 206.36 219.6 220.54 216.34 234.39C216.328 234.455 216.303 234.517 216.267 234.573C216.231 234.629 216.184 234.676 216.129 234.714C216.074 234.751 216.012 234.777 215.947 234.79C215.882 234.803 215.815 234.803 215.75 234.79Z" fill="#7E57C2"/>
<path opacity="0.1" d="M289 241.71H167.85C166.815 241.717 165.789 241.512 164.836 241.107C163.884 240.703 163.024 240.108 162.31 239.358C161.596 238.608 161.043 237.721 160.685 236.749C160.328 235.778 160.173 234.743 160.23 233.71L162 198.43C162.119 196.285 163.049 194.265 164.601 192.78C166.153 191.294 168.212 190.454 170.36 190.43H291.46C292.495 190.423 293.521 190.628 294.474 191.032C295.426 191.437 296.286 192.032 297 192.782C297.714 193.531 298.267 194.419 298.625 195.391C298.983 196.362 299.137 197.396 299.08 198.43L297.36 233.7C297.243 235.847 296.315 237.869 294.762 239.356C293.21 240.844 291.15 241.685 289 241.71ZM170.31 191.46C168.426 191.482 166.62 192.215 165.255 193.514C163.889 194.812 163.066 196.579 162.95 198.46L161.23 233.73C161.171 234.632 161.299 235.537 161.605 236.388C161.912 237.239 162.391 238.017 163.012 238.675C163.634 239.332 164.384 239.853 165.217 240.207C166.049 240.561 166.946 240.739 167.85 240.73H289C290.884 240.708 292.69 239.974 294.055 238.676C295.421 237.377 296.244 235.61 296.36 233.73L298.09 198.46C298.146 197.557 298.016 196.653 297.708 195.802C297.399 194.952 296.919 194.175 296.297 193.518C295.675 192.861 294.925 192.34 294.093 191.986C293.261 191.632 292.364 191.453 291.46 191.46H170.31Z" fill="#263238"/>
<path opacity="0.1" d="M194.06 200.46H174.48C174.182 200.46 173.887 200.4 173.613 200.283C173.339 200.165 173.092 199.993 172.887 199.777C172.682 199.56 172.524 199.305 172.421 199.025C172.318 198.745 172.274 198.447 172.29 198.15C172.323 197.541 172.586 196.968 173.026 196.547C173.467 196.125 174.051 195.887 174.66 195.88H194.23C194.529 195.878 194.825 195.937 195.1 196.054C195.375 196.171 195.623 196.343 195.829 196.56C196.035 196.776 196.195 197.032 196.298 197.313C196.402 197.593 196.446 197.892 196.43 198.19C196.395 198.798 196.131 199.37 195.691 199.791C195.251 200.212 194.669 200.451 194.06 200.46ZM174.66 196.88C174.309 196.887 173.973 197.025 173.72 197.268C173.466 197.51 173.313 197.84 173.29 198.19C173.278 198.354 173.3 198.519 173.355 198.674C173.41 198.829 173.497 198.97 173.61 199.09C173.723 199.206 173.859 199.298 174.008 199.362C174.157 199.425 174.318 199.459 174.48 199.46H194.06C194.41 199.451 194.745 199.312 194.998 199.069C195.251 198.827 195.405 198.499 195.43 198.15C195.44 197.985 195.416 197.82 195.36 197.665C195.303 197.51 195.214 197.369 195.1 197.25C194.989 197.131 194.854 197.036 194.704 196.972C194.555 196.909 194.393 196.877 194.23 196.88H174.66Z" fill="#263238"/>
<path d="M176.3 230.2H171.22L170.97 235.28H176.05L176.3 230.2Z" fill="#7E57C2"/>
<path opacity="0.3" d="M181.87 295.17H171.51C171.062 295.173 170.618 295.085 170.206 294.91C169.793 294.735 169.421 294.478 169.112 294.154C168.802 293.829 168.563 293.445 168.408 293.025C168.253 292.605 168.185 292.157 168.21 291.71L168.72 281.34C168.775 280.41 169.18 279.536 169.854 278.892C170.527 278.248 171.419 277.883 172.35 277.87H182.72C183.168 277.866 183.613 277.955 184.026 278.13C184.438 278.306 184.811 278.564 185.119 278.89C185.428 279.215 185.666 279.601 185.819 280.022C185.973 280.444 186.037 280.892 186.01 281.34L185.51 291.71C185.45 292.639 185.042 293.511 184.367 294.152C183.692 294.793 182.801 295.157 181.87 295.17Z" fill="#7E57C2"/>
<path opacity="0.1" d="M221.62 289.51H194.89C194.502 289.513 194.116 289.437 193.759 289.285C193.401 289.134 193.078 288.911 192.81 288.63C192.542 288.348 192.334 288.015 192.2 287.651C192.066 287.286 192.008 286.898 192.03 286.51C192.068 285.708 192.411 284.95 192.99 284.392C193.568 283.835 194.337 283.519 195.14 283.51H221.86C222.249 283.508 222.633 283.585 222.991 283.737C223.349 283.889 223.672 284.112 223.94 284.393C224.209 284.673 224.417 285.006 224.553 285.37C224.689 285.734 224.749 286.122 224.73 286.51C224.692 287.312 224.349 288.069 223.771 288.627C223.192 289.185 222.423 289.501 221.62 289.51ZM195.14 284.51C194.601 284.518 194.084 284.728 193.692 285.098C193.3 285.468 193.06 285.972 193.02 286.51C193.008 286.764 193.047 287.018 193.135 287.256C193.222 287.495 193.357 287.714 193.53 287.9C193.706 288.082 193.918 288.227 194.151 288.324C194.385 288.422 194.637 288.472 194.89 288.47H221.62C222.16 288.466 222.678 288.257 223.069 287.886C223.461 287.515 223.697 287.008 223.73 286.47C223.748 286.215 223.712 285.96 223.624 285.72C223.536 285.481 223.398 285.262 223.22 285.08C223.045 284.895 222.834 284.748 222.6 284.648C222.366 284.548 222.114 284.498 221.86 284.5L195.14 284.51Z" fill="#263238"/>
<path d="M177 289.51C176.934 289.508 176.87 289.492 176.81 289.464C176.751 289.437 176.697 289.398 176.652 289.35C176.608 289.301 176.573 289.245 176.55 289.183C176.528 289.121 176.517 289.056 176.52 288.99L176.74 284.56C176.74 284.494 176.753 284.428 176.78 284.368C176.807 284.307 176.846 284.253 176.895 284.209C176.944 284.164 177.002 284.131 177.065 284.11C177.128 284.09 177.194 284.083 177.26 284.09C177.326 284.093 177.39 284.108 177.45 284.136C177.51 284.163 177.563 284.202 177.608 284.251C177.652 284.299 177.687 284.355 177.71 284.417C177.732 284.479 177.743 284.544 177.74 284.61L177.52 289.04C177.512 289.171 177.453 289.294 177.356 289.381C177.259 289.469 177.131 289.516 177 289.51Z" fill="#7E57C2"/>
<path d="M175.09 286.58C174.954 286.576 174.824 286.518 174.73 286.42C174.683 286.373 174.646 286.318 174.621 286.257C174.595 286.196 174.582 286.131 174.582 286.065C174.582 285.999 174.595 285.934 174.621 285.873C174.646 285.812 174.683 285.756 174.73 285.71L176.87 283.71C176.967 283.618 177.096 283.568 177.23 283.57C177.362 283.578 177.487 283.635 177.58 283.73L179.52 285.73C179.612 285.827 179.661 285.956 179.657 286.089C179.653 286.222 179.597 286.348 179.5 286.44C179.403 286.531 179.274 286.581 179.141 286.577C179.008 286.573 178.882 286.517 178.79 286.42L177.2 284.74L175.42 286.44C175.329 286.523 175.213 286.572 175.09 286.58Z" fill="#7E57C2"/>
<path opacity="0.4" d="M250.23 277.87H239.87C238.938 277.883 238.045 278.248 237.37 278.891C236.695 279.535 236.288 280.409 236.23 281.34L235.73 291.71C235.704 292.157 235.77 292.604 235.924 293.024C236.078 293.445 236.316 293.829 236.625 294.153C236.933 294.477 237.305 294.735 237.717 294.91C238.129 295.085 238.572 295.173 239.02 295.17H249.39C250.32 295.156 251.21 294.793 251.883 294.151C252.556 293.51 252.962 292.638 253.02 291.71L253.53 281.34C253.556 280.892 253.49 280.443 253.335 280.021C253.181 279.6 252.942 279.215 252.632 278.889C252.323 278.564 251.95 278.306 251.537 278.13C251.124 277.955 250.679 277.866 250.23 277.87Z" fill="#263238"/>
<path opacity="0.1" d="M289.13 289.51H262.41C262.022 289.512 261.637 289.434 261.279 289.282C260.922 289.131 260.599 288.908 260.33 288.627C260.061 288.346 259.853 288.014 259.717 287.65C259.581 287.286 259.521 286.898 259.54 286.51C259.578 285.707 259.921 284.95 260.5 284.392C261.078 283.835 261.847 283.519 262.65 283.51H289.38C289.768 283.509 290.152 283.588 290.509 283.74C290.866 283.892 291.189 284.115 291.457 284.396C291.725 284.676 291.934 285.008 292.07 285.371C292.206 285.735 292.268 286.122 292.25 286.51C292.209 287.313 291.864 288.07 291.284 288.628C290.705 289.185 289.934 289.501 289.13 289.51ZM262.65 284.51C262.112 284.518 261.596 284.729 261.206 285.099C260.815 285.469 260.578 285.973 260.54 286.51C260.528 286.764 260.567 287.018 260.655 287.256C260.742 287.495 260.877 287.714 261.05 287.9C261.226 288.082 261.437 288.227 261.671 288.325C261.905 288.423 262.156 288.472 262.41 288.47H289.13C289.671 288.466 290.19 288.257 290.583 287.886C290.976 287.515 291.215 287.009 291.25 286.47C291.269 286.213 291.235 285.955 291.15 285.713C291.065 285.47 290.93 285.247 290.754 285.059C290.578 284.871 290.365 284.722 290.129 284.62C289.892 284.519 289.637 284.468 289.38 284.47L262.65 284.51Z" fill="#263238"/>
<path d="M244.53 289C244.464 288.997 244.4 288.982 244.34 288.954C244.281 288.927 244.227 288.888 244.182 288.84C244.138 288.791 244.103 288.735 244.08 288.673C244.058 288.611 244.047 288.546 244.05 288.48L244.27 284.05C244.27 283.983 244.283 283.918 244.31 283.857C244.337 283.796 244.376 283.741 244.425 283.696C244.473 283.651 244.531 283.616 244.594 283.594C244.657 283.573 244.724 283.564 244.79 283.57C244.924 283.578 245.049 283.638 245.139 283.737C245.228 283.836 245.276 283.966 245.27 284.1L245.05 288.52C245.048 288.586 245.032 288.65 245.004 288.71C244.977 288.77 244.938 288.823 244.89 288.868C244.841 288.912 244.785 288.947 244.723 288.97C244.661 288.992 244.596 289.003 244.53 289Z" fill="white"/>
<path d="M244.51 289.51C244.379 289.505 244.254 289.451 244.16 289.36L242.22 287.36C242.173 287.313 242.136 287.258 242.111 287.197C242.085 287.136 242.072 287.071 242.072 287.005C242.072 286.939 242.085 286.873 242.111 286.813C242.136 286.752 242.173 286.696 242.22 286.65C242.267 286.603 242.322 286.566 242.383 286.54C242.444 286.515 242.509 286.502 242.575 286.502C242.641 286.502 242.706 286.515 242.767 286.54C242.828 286.566 242.884 286.603 242.93 286.65L244.52 288.33L246.3 286.63C246.347 286.583 246.402 286.546 246.463 286.52C246.524 286.495 246.589 286.482 246.655 286.482C246.721 286.482 246.786 286.495 246.847 286.52C246.908 286.546 246.964 286.583 247.01 286.63C247.057 286.675 247.094 286.73 247.119 286.79C247.144 286.85 247.157 286.915 247.157 286.98C247.157 287.045 247.144 287.11 247.119 287.17C247.094 287.23 247.057 287.284 247.01 287.33L244.87 289.38C244.77 289.467 244.642 289.513 244.51 289.51Z" fill="white"/>
<path d="M112.11 115C108.11 120.21 107.37 127.39 107.6 131.06C107.88 135.61 101.93 135.82 103.6 143.74C105.03 150.6 100.86 152.74 100.96 158.11C101.18 170.56 112.35 174.24 133.18 170.56C154.01 166.88 141.5 147.86 144.28 140.37C147.06 132.88 144.86 115.32 139.28 116.11C139.89 102.89 120.14 104.61 112.11 115Z" fill="#263238"/>
<path d="M119.15 171C119.01 173.53 118.74 175.81 118.41 178.2C118.08 180.59 117.65 182.91 117.12 185.25C116.59 187.59 115.99 189.95 115.25 192.25C114.496 194.641 113.584 196.979 112.52 199.25L112.29 199.75C111.755 200.911 110.796 201.824 109.61 202.3C108.423 202.776 107.099 202.78 105.91 202.31C104.541 201.746 103.206 201.105 101.91 200.39C100.64 199.71 99.4699 198.95 98.2899 198.21C97.1099 197.47 95.9999 196.64 94.8999 195.8C93.7999 194.96 92.7399 194.1 91.6899 193.12C91.2494 192.654 90.9664 192.061 90.8808 191.426C90.7953 190.79 90.9117 190.144 91.2134 189.578C91.5151 189.012 91.987 188.555 92.5623 188.272C93.1377 187.989 93.7875 187.894 94.4199 188H94.5199C95.7999 188.29 97.0899 188.67 98.3499 189L102.1 190.1L105.75 191.17C106.93 191.51 108.11 191.8 109.16 192.03L102.54 195.09C103.19 193.23 103.72 191.24 104.22 189.2C104.72 187.16 105.09 185.05 105.46 182.93C105.83 180.81 106.14 178.66 106.46 176.5C106.78 174.34 107 172.12 107.23 170.11V170C107.363 168.409 108.122 166.935 109.341 165.904C110.56 164.872 112.139 164.367 113.73 164.5C115.321 164.632 116.795 165.392 117.826 166.611C118.858 167.83 119.363 169.409 119.23 171H119.15Z" fill="#B55B52"/>
<path d="M90.9 184.55L88.44 183.68C88.1381 183.573 87.818 183.528 87.4983 183.546C87.1787 183.564 86.8659 183.646 86.5782 183.787C86.2905 183.927 86.0337 184.124 85.8229 184.365C85.612 184.606 85.4512 184.886 85.35 185.19L84.41 188C84.2289 188.542 84.2473 189.131 84.4618 189.661C84.6763 190.191 85.0728 190.626 85.58 190.89L88.66 192.51C88.66 192.51 93.66 196.35 96.17 194L97.54 190L93.83 186.39C92.9962 185.574 91.9971 184.947 90.9 184.55Z" fill="#B55B52"/>
<path d="M117.93 157.24C110.56 158.63 109 161.64 103.57 172.83C105.21 180.19 119.2 186.66 119.2 186.66C119.2 186.66 130.08 166.76 117.93 157.24Z" fill="#263238"/>
<path d="M130.58 409.71C135.2 403.55 135.58 401.85 138.49 398.61C140.088 396.753 141.901 395.091 143.89 393.66C145.83 392.09 144.67 389.82 142.89 388.86C141.5 388.12 139.97 387.46 138.29 386.48L130.67 392.7C131.42 396.23 129.85 403.59 126.67 408.49C124.34 412 128.73 412.17 130.58 409.71Z" fill="#263238"/>
<path d="M108.08 213.27C108.08 213.27 100.98 263.09 95.69 297.08C94.6124 303.692 95.2599 310.471 97.57 316.76C106.62 340.87 130.08 393.29 130.08 393.29C131.16 394.35 137.65 388.18 138.28 386.48C138.28 386.48 130.17 320.23 117.56 305.38C143.29 252.3 142.89 213.27 142.89 213.27H108.08Z" fill="#7E57C2"/>
<g opacity="0.2">
<path d="M142.87 214.75L123.87 216.08C123.87 216.08 120.19 270.8 119.4 301.48C140.49 256.34 142.65 222.11 142.87 214.75Z" fill="black"/>
<path d="M119.29 307.76C119.03 323.49 118.24 343.96 116.69 362.87C121.5 373.94 125.83 383.73 128.2 389.05C130.48 382.46 133.02 374.59 135.31 366.25C132.12 347 126.53 319.24 119.29 307.76Z" fill="black"/>
</g>
<path d="M126.72 390.7C127.3 391.55 128.31 393.08 129.01 394.24C129.073 394.331 129.153 394.409 129.247 394.468C129.34 394.527 129.445 394.567 129.554 394.585C129.664 394.603 129.776 394.598 129.883 394.571C129.991 394.545 130.092 394.497 130.18 394.43C133.383 392.144 136.393 389.599 139.18 386.82C139.313 386.695 139.406 386.533 139.447 386.355C139.488 386.177 139.475 385.99 139.41 385.82L137.88 382.34C137.823 382.227 137.741 382.13 137.641 382.054C137.54 381.978 137.423 381.927 137.299 381.904C137.175 381.88 137.048 381.886 136.927 381.92C136.805 381.954 136.694 382.016 136.6 382.1L127 389.51C126.814 389.638 126.682 389.831 126.63 390.051C126.579 390.271 126.611 390.502 126.72 390.7Z" fill="#7E57C2"/>
<path opacity="0.3" d="M126.72 390.7C127.3 391.55 128.31 393.08 129.01 394.24C129.073 394.331 129.153 394.409 129.247 394.468C129.34 394.527 129.445 394.567 129.554 394.585C129.664 394.603 129.776 394.598 129.883 394.571C129.991 394.545 130.092 394.497 130.18 394.43C133.383 392.144 136.393 389.599 139.18 386.82C139.313 386.695 139.406 386.533 139.447 386.355C139.488 386.177 139.475 385.99 139.41 385.82L137.88 382.34C137.823 382.227 137.741 382.13 137.641 382.054C137.54 381.978 137.423 381.927 137.299 381.904C137.175 381.88 137.048 381.886 136.927 381.92C136.805 381.954 136.694 382.016 136.6 382.1L127 389.51C126.814 389.638 126.682 389.831 126.63 390.051C126.579 390.271 126.611 390.502 126.72 390.7Z" fill="white"/>
<path d="M104.07 412.17C111.33 413.61 114.13 414.06 118.27 414.74C121.81 415.31 122.47 415.9 125.27 416.4C127.63 416.81 128.47 414.65 128.81 412.03C128.99 410.72 129.31 407.49 129.68 405.39L118.43 404.79C115.75 407.23 108.6 408.03 104.29 407.79C100.2 407.47 101.18 411.59 104.07 412.17Z" fill="#263238"/>
<path d="M118.52 213.27C118.52 213.27 122.25 277.27 122.94 306.27C123.65 336.72 123.07 384.27 117.55 404.53C119.06 405.53 126.06 405.53 129.71 404.47C129.71 404.47 152.44 339.97 143.88 307.62C161.11 236.36 150.88 219.53 148.01 213.3L118.52 213.27Z" fill="#7E57C2"/>
<path d="M118.51 400.36C118.049 401.728 117.497 403.065 116.86 404.36C116.797 404.453 116.758 404.56 116.745 404.672C116.732 404.784 116.747 404.897 116.787 405.002C116.827 405.107 116.892 405.2 116.976 405.275C117.06 405.349 117.161 405.403 117.27 405.43C121.16 406.43 127.38 406.06 129.37 405.9C129.563 405.881 129.747 405.813 129.907 405.703C130.066 405.593 130.194 405.444 130.28 405.27L132.07 401.53C132.135 401.427 132.172 401.309 132.177 401.188C132.182 401.066 132.155 400.945 132.098 400.837C132.041 400.73 131.957 400.639 131.853 400.575C131.75 400.51 131.632 400.474 131.51 400.47L119.61 399.61C119.371 399.606 119.137 399.675 118.94 399.81C118.743 399.944 118.593 400.136 118.51 400.36Z" fill="#7E57C2"/>
<path opacity="0.3" d="M118.51 400.36C118.049 401.728 117.497 403.065 116.86 404.36C116.797 404.453 116.758 404.56 116.745 404.672C116.732 404.784 116.747 404.897 116.787 405.002C116.827 405.107 116.892 405.2 116.976 405.275C117.06 405.349 117.161 405.403 117.27 405.43C121.16 406.43 127.38 406.06 129.37 405.9C129.563 405.881 129.747 405.813 129.907 405.703C130.066 405.593 130.194 405.444 130.28 405.27L132.07 401.53C132.135 401.427 132.172 401.309 132.177 401.188C132.182 401.066 132.155 400.945 132.098 400.837C132.041 400.73 131.957 400.639 131.853 400.575C131.75 400.51 131.632 400.474 131.51 400.47L119.61 399.61C119.371 399.606 119.137 399.675 118.94 399.81C118.743 399.944 118.593 400.136 118.51 400.36Z" fill="white"/>
<path d="M147.73 156.71C146.14 156.55 144.47 156.41 142.73 156.33C136.694 155.9 130.636 155.9 124.6 156.33C122.6 156.51 120.6 156.76 118.6 157.03C115.152 157.533 111.987 159.22 109.648 161.802C107.308 164.384 105.941 167.7 105.78 171.18C105.66 175.11 106.51 181.04 107.33 190.39C108.41 202.58 105.44 208.78 108.04 213.27C113.13 218.11 136.5 215.69 147.97 213.27C151.42 208.83 144.67 197.27 155.65 168.81C157.89 163.12 153.65 157.31 147.73 156.71Z" fill="#263238"/>
<path d="M124 166.06C123.79 166.81 123.36 167.33 123 167.24C122.64 167.15 122.57 166.47 122.78 165.73C122.99 164.99 123.43 164.46 123.78 164.55C124.13 164.64 124.22 165.32 124 166.06Z" fill="white"/>
<path d="M122.54 172.23C122.44 173 122.09 173.59 121.75 173.54C121.41 173.49 121.22 172.85 121.31 172.08C121.4 171.31 121.76 170.73 122.09 170.77C122.42 170.81 122.63 171.46 122.54 172.23Z" fill="white"/>
<path d="M138.91 136.54C138.73 142.54 137.96 152.44 141.75 156.33C141.75 156.33 136.22 155.5 124.49 162.76C121.09 157.88 123.61 156.33 123.61 156.33C124.51 156.199 125.367 155.859 126.112 155.337C126.857 154.816 127.47 154.127 127.902 153.326C128.333 152.526 128.571 151.635 128.597 150.726C128.623 149.817 128.435 148.914 128.05 148.09L138.91 136.54Z" fill="#B55B52"/>
<path d="M127 161.3C130.87 161.85 132.08 167.68 132.08 167.68C132.08 167.68 141.36 161.12 144.3 156.49C143.132 155.834 142.001 155.116 140.91 154.34C140.91 154.34 129.21 159.07 127 161.3Z" fill="white"/>
<path d="M123.28 160.67C123.28 160.67 120.21 161.34 118.67 165.61C117.79 157.1 121.82 156.31 121.82 156.31C122.887 155.723 124.131 155.545 125.32 155.81C124.467 156.255 123.796 156.985 123.424 157.872C123.051 158.759 123.001 159.749 123.28 160.67Z" fill="white"/>
<path opacity="0.2" d="M132.12 144.46L130.59 145.39L128.05 148.09C128.708 149.464 128.795 151.042 128.29 152.48C131.19 151.36 134.11 149.09 134.88 146.64C134.995 146.276 134.997 145.885 134.885 145.52C134.773 145.155 134.553 144.833 134.253 144.596C133.954 144.359 133.589 144.22 133.208 144.195C132.827 144.171 132.447 144.263 132.12 144.46Z" fill="black"/>
<path d="M137 122.39C139.79 131.56 141.16 135.39 138.49 141.87C134.49 151.64 122.95 153.59 117.56 145.57C112.72 138.34 108.97 124.57 116.14 117.31C117.625 115.698 119.514 114.514 121.611 113.879C123.709 113.245 125.938 113.184 128.067 113.702C130.196 114.221 132.148 115.3 133.718 116.828C135.289 118.356 136.422 120.276 137 122.39Z" fill="#B55B52"/>
<path opacity="0.4" d="M127.25 117C124.9 123.26 130.47 131.05 138.44 130.45C142.15 123.36 139.9 117.94 137.92 115.73C135.94 113.52 129.94 113.14 127.25 117Z" fill="#263238"/>
<path d="M137.87 116.94C136.8 124.53 112.16 119.83 110.82 127.44C110.76 117.5 121.87 104.22 137.87 116.94Z" fill="#263238"/>
<path d="M124.9 131.75C125.16 132.51 125 133.29 124.53 133.49C124.06 133.69 123.46 133.24 123.19 132.49C122.92 131.74 123.09 130.95 123.56 130.74C124.03 130.53 124.63 131 124.9 131.75Z" fill="#263238"/>
<path d="M115.66 134.64C115.93 135.4 115.77 136.18 115.3 136.38C114.83 136.58 114.23 136.13 113.96 135.38C113.69 134.63 113.86 133.84 114.33 133.64C114.8 133.44 115.4 133.88 115.66 134.64Z" fill="#263238"/>
<path d="M114.55 133.58L112.64 133.8C112.64 133.8 114 134.84 114.55 133.58Z" fill="#263238"/>
<path d="M118.25 134.21C118.218 136.222 117.929 138.221 117.39 140.16C117.864 140.275 118.358 140.281 118.834 140.177C119.311 140.073 119.757 139.862 120.14 139.56L118.25 134.21Z" fill="#A02724"/>
<path d="M122.54 142.06C122.129 142.23 121.704 142.364 121.27 142.46C121.241 142.467 121.211 142.468 121.181 142.463C121.152 142.457 121.124 142.446 121.099 142.429C121.075 142.412 121.054 142.39 121.038 142.364C121.023 142.338 121.013 142.31 121.01 142.28C121.001 142.218 121.015 142.155 121.05 142.103C121.086 142.051 121.139 142.014 121.2 142C122.179 141.784 123.097 141.352 123.886 140.734C124.676 140.116 125.316 139.328 125.76 138.43C125.767 138.397 125.781 138.366 125.801 138.339C125.822 138.313 125.848 138.291 125.877 138.275C125.907 138.259 125.94 138.25 125.973 138.248C126.007 138.247 126.04 138.252 126.071 138.265C126.102 138.277 126.13 138.297 126.153 138.321C126.176 138.346 126.193 138.375 126.204 138.407C126.214 138.439 126.217 138.473 126.213 138.506C126.209 138.539 126.198 138.571 126.18 138.6C125.436 140.164 124.14 141.396 122.54 142.06Z" fill="#263238"/>
<path d="M142.83 130.27C142.884 131.189 142.745 132.109 142.421 132.97C142.097 133.831 141.596 134.615 140.95 135.27C139.29 136.81 137.27 135.04 136.73 132.48C136.25 130.18 136.53 126.6 138.73 126.08C140.93 125.56 142.77 127.8 142.83 130.27Z" fill="#B55B52"/>
<path d="M124.71 127.38C124.651 127.392 124.59 127.391 124.531 127.377C124.473 127.363 124.418 127.337 124.37 127.3C123.924 126.944 123.396 126.704 122.833 126.603C122.271 126.501 121.693 126.542 121.15 126.72C121.095 126.744 121.036 126.755 120.976 126.754C120.917 126.753 120.858 126.739 120.804 126.714C120.75 126.688 120.702 126.652 120.664 126.606C120.625 126.561 120.596 126.507 120.58 126.45C120.543 126.329 120.552 126.199 120.606 126.084C120.659 125.97 120.753 125.879 120.87 125.83C121.552 125.596 122.282 125.537 122.993 125.657C123.704 125.778 124.373 126.075 124.94 126.52C125.037 126.6 125.099 126.715 125.112 126.841C125.125 126.966 125.089 127.092 125.01 127.19C124.934 127.285 124.829 127.352 124.71 127.38Z" fill="#263238"/>
<path d="M111.45 132.09C111.341 132.135 111.219 132.135 111.11 132.09C111.053 132.068 111.002 132.035 110.958 131.993C110.914 131.951 110.879 131.9 110.855 131.844C110.831 131.789 110.818 131.728 110.817 131.668C110.816 131.607 110.827 131.547 110.85 131.49C111.091 130.772 111.491 130.119 112.021 129.578C112.551 129.038 113.197 128.625 113.91 128.37C113.969 128.355 114.029 128.353 114.089 128.363C114.149 128.373 114.205 128.395 114.256 128.428C114.307 128.461 114.35 128.503 114.383 128.554C114.417 128.604 114.439 128.661 114.45 128.72C114.473 128.843 114.45 128.97 114.385 129.077C114.321 129.183 114.219 129.263 114.1 129.3C113.535 129.503 113.025 129.833 112.609 130.265C112.193 130.696 111.882 131.218 111.7 131.79C111.681 131.854 111.648 131.914 111.605 131.966C111.563 132.017 111.51 132.059 111.45 132.09Z" fill="#263238"/>
<path d="M123.78 130.7L121.87 130.91C121.87 130.91 123.26 132 123.78 130.7Z" fill="#263238"/>
<path d="M153.79 177.82C153.79 178.35 153.79 178.6 153.79 178.96V179.96C153.79 180.6 153.7 181.23 153.63 181.86C153.495 183.109 153.295 184.351 153.03 185.58C152.509 188.086 151.714 190.527 150.66 192.86C149.576 195.302 148.156 197.581 146.44 199.63C144.681 201.747 142.586 203.561 140.24 205L139.88 205.22C139.567 205.404 139.231 205.546 138.88 205.64C137.181 206.13 135.379 206.13 133.68 205.64C132.554 205.322 131.467 204.879 130.44 204.32C128.781 203.389 127.22 202.293 125.78 201.05C124.454 199.91 123.199 198.691 122.02 197.4C120.854 196.131 119.762 194.795 118.75 193.4C118.307 192.841 118.077 192.142 118.102 191.43C118.128 190.717 118.406 190.036 118.888 189.51C119.369 188.984 120.022 188.646 120.73 188.558C121.438 188.47 122.154 188.638 122.75 189.03L122.86 189.1L126.86 191.45C128.19 192.21 129.52 192.96 130.86 193.61C132.053 194.229 133.293 194.75 134.57 195.17C134.997 195.323 135.446 195.407 135.9 195.42C136.19 195.42 136.17 195.24 135.48 195.42L134.17 196.06C135.402 195.079 136.483 193.924 137.38 192.63C137.849 191.969 138.267 191.274 138.63 190.55C139.03 189.81 139.381 189.045 139.68 188.26C140.31 186.618 140.795 184.925 141.13 183.2C141.31 182.32 141.44 181.43 141.56 180.54C141.61 180.09 141.66 179.65 141.7 179.21L141.78 178.1V177.57C141.825 175.978 142.5 174.47 143.658 173.377C144.815 172.284 146.359 171.695 147.95 171.74C149.541 171.785 151.049 172.46 152.143 173.617C153.236 174.774 153.825 176.318 153.78 177.91L153.79 177.82Z" fill="#B55B52"/>
<path d="M116.33 198.18H94.6699C93.706 198.195 92.7641 197.891 91.9903 197.316C91.2164 196.741 90.6539 195.927 90.3899 195L87.7399 181.26C87.3999 179.52 88.7399 178.11 90.7999 178.11H112.45C113.411 178.09 114.351 178.388 115.125 178.957C115.899 179.527 116.463 180.336 116.73 181.26L119.39 195C119.72 196.77 118.35 198.18 116.33 198.18Z" fill="#7E57C2"/>
<path d="M115.66 197.29H94.66C93.9221 197.307 93.1986 197.084 92.5982 196.655C91.9977 196.226 91.5527 195.614 91.33 194.91L88.74 181.54C88.6919 181.312 88.6957 181.075 88.7511 180.849C88.8065 180.622 88.912 180.411 89.06 180.23C89.2922 179.98 89.5765 179.785 89.8927 179.657C90.2089 179.529 90.5494 179.472 90.89 179.49H111.89C112.626 179.476 113.347 179.698 113.947 180.125C114.546 180.552 114.993 181.16 115.22 181.86L117.8 195.23C117.852 195.458 117.852 195.694 117.798 195.921C117.744 196.148 117.639 196.36 117.49 196.54C117.258 196.791 116.974 196.987 116.658 197.117C116.342 197.247 116.001 197.306 115.66 197.29ZM90.84 179.74C90.5358 179.723 90.2316 179.772 89.9484 179.885C89.6652 179.997 89.4098 180.169 89.2 180.39C89.0764 180.544 88.9889 180.723 88.944 180.916C88.899 181.108 88.8976 181.307 88.94 181.5L91.52 194.86C91.738 195.501 92.1559 196.054 92.7122 196.439C93.2685 196.825 93.9337 197.021 94.61 197H115.61C115.914 197.018 116.217 196.968 116.499 196.854C116.781 196.74 117.034 196.564 117.24 196.34C117.367 196.19 117.458 196.013 117.504 195.822C117.551 195.631 117.553 195.432 117.51 195.24L115 181.91C114.789 181.265 114.375 180.705 113.82 180.314C113.265 179.923 112.599 179.722 111.92 179.74H90.84Z" fill="white"/>
<path d="M116.79 185.08L114.25 184.44C113.939 184.363 113.616 184.348 113.3 184.397C112.984 184.446 112.68 184.558 112.407 184.725C112.135 184.893 111.898 185.113 111.711 185.373C111.525 185.633 111.392 185.928 111.32 186.24L110.66 189.13C110.533 189.686 110.608 190.269 110.872 190.775C111.136 191.281 111.571 191.676 112.1 191.89L115.32 193.21C115.32 193.21 120.71 196.54 122.95 193.97L123.95 189.85L119.95 186.61C119.023 185.872 117.944 185.349 116.79 185.08Z" fill="#B55B52"/>
<path d="M148.1 156.76C156.87 157.28 159.57 166.43 156.65 183.07C155.23 189.32 137.71 180.78 137.71 180.78C137.71 180.78 137.1 163 148.1 156.76Z" fill="#263238"/>
<path d="M395.88 334.46C392.69 314.46 401.43 288.23 412.51 290.16C421.69 291.76 397.78 328.35 395.88 334.46Z" fill="#7E57C2"/>
<path d="M392.39 344.66C402.81 329.85 396.39 299.41 385.39 298.72C374.39 298.03 391.49 337.21 392.39 344.66Z" fill="#263238"/>
<path d="M392.91 353.33C391.72 321.33 411.21 305.24 419.91 309.06C428.86 313 399.72 335.62 392.91 353.33Z" fill="#7E57C2"/>
<path d="M390.29 373.26C400.71 350.73 391.78 315.52 375.21 319.33C361.47 322.49 387.83 363.78 390.29 373.26Z" fill="#7E57C2"/>
<path d="M391 380C389.85 358.4 383.3 330.86 369.84 333.41C357 335.81 387 361.11 391 380Z" fill="#263238"/>
<path d="M387.7 390.57C391 358.7 418.28 340.91 418 353C417.71 365.91 396.87 374.32 387.7 390.57Z" fill="#7E57C2"/>
<path d="M390.35 383.82C394.18 372.42 385.18 356.94 375.73 360.25C367.9 363 387.89 379.66 390.35 383.82Z" fill="#7E57C2"/>
<path d="M390.6 379.56C386.48 355.12 407.54 313.06 426.54 322.1C445 330.89 399.6 351.48 390.6 379.56Z" fill="#263238"/>
<path d="M400 416.45H381.8C380.211 416.453 378.663 415.946 377.385 415.002C376.107 414.059 375.165 412.729 374.7 411.21C372.321 403.938 371.231 396.307 371.48 388.66C371.607 386.249 371.942 383.854 372.48 381.5C372.584 381.03 372.844 380.609 373.218 380.305C373.593 380.002 374.058 379.835 374.54 379.83H407.31C407.791 379.833 408.256 380 408.629 380.304C409.002 380.608 409.26 381.03 409.36 381.5C409.898 383.854 410.233 386.249 410.36 388.66C410.607 396.306 409.521 403.937 407.15 411.21C406.679 412.736 405.73 414.069 404.442 415.013C403.154 415.957 401.597 416.461 400 416.45Z" fill="#7E57C2"/>
<path opacity="0.5" d="M410.3 388.66H371.48C371.607 386.249 371.942 383.854 372.48 381.5C372.584 381.03 372.844 380.609 373.218 380.305C373.593 380.002 374.058 379.835 374.54 379.83H407.31C407.791 379.833 408.256 380 408.629 380.304C409.002 380.608 409.26 381.03 409.36 381.5C409.878 383.855 410.192 386.251 410.3 388.66Z" fill="white"/>
</svg>

  </div>

  {/* Right Text Box */}
  <div className="flex flex-col justify-center items-start py-[40px] gap-[8px] w-[688px] h-[312px]">
    {/* Icon Wrapper */}
    <div className="flex justify-center items-center w-[80px] h-[80px]">
      {/* SVG Icon */}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3333 23.3333H23.3333C24.2174 23.3333 25.0652 22.9821 25.6904 22.357C26.3155 21.7319 26.6667 20.8841 26.6667 20V16.6667C26.6667 14.8986 27.369 13.2029 28.6193 11.9526C29.8695 10.7024 31.5652 10 33.3333 10C35.1014 10 36.7971 10.7024 38.0474 11.9526C39.2976 13.2029 40 14.8986 40 16.6667V20C40 20.8841 40.3512 21.7319 40.9763 22.357C41.6014 22.9821 42.4493 23.3333 43.3333 23.3333H53.3333C54.2174 23.3333 55.0652 23.6845 55.6904 24.3096C56.3155 24.9348 56.6667 25.7826 56.6667 26.6667V36.6667C56.6667 37.5507 57.0178 38.3986 57.643 39.0237C58.2681 39.6488 59.1159 40 60 40H63.3333C65.1014 40 66.7971 40.7024 68.0474 41.9526C69.2976 43.2029 70 44.8986 70 46.6667C70 48.4348 69.2976 50.1305 68.0474 51.3807C66.7971 52.6309 65.1014 53.3333 63.3333 53.3333H60C59.1159 53.3333 58.2681 53.6845 57.643 54.3096C57.0178 54.9348 56.6667 55.7826 56.6667 56.6667V66.6667C56.6667 67.5507 56.3155 68.3986 55.6904 69.0237C55.0652 69.6488 54.2174 70 53.3333 70H43.3333C42.4493 70 41.6014 69.6488 40.9763 69.0237C40.3512 68.3986 40 67.5507 40 66.6667V63.3333C40 61.5652 39.2976 59.8695 38.0474 58.6193C36.7971 57.369 35.1014 56.6667 33.3333 56.6667C31.5652 56.6667 29.8695 57.369 28.6193 58.6193C27.369 59.8695 26.6667 61.5652 26.6667 63.3333V66.6667C26.6667 67.5507 26.3155 68.3986 25.6904 69.0237C25.0652 69.6488 24.2174 70 23.3333 70H13.3333C12.4493 70 11.6014 69.6488 10.9763 69.0237C10.3512 68.3986 10 67.5507 10 66.6667V56.6667C10 55.7826 10.3512 54.9348 10.9763 54.3096C11.6014 53.6845 12.4493 53.3333 13.3333 53.3333H16.6667C18.4348 53.3333 20.1305 52.6309 21.3807 51.3807C22.631 50.1305 23.3333 48.4348 23.3333 46.6667C23.3333 44.8986 22.631 43.2029 21.3807 41.9526C20.1305 40.7024 18.4348 40 16.6667 40H13.3333C12.4493 40 11.6014 39.6488 10.9763 39.0237C10.3512 38.3986 10 37.5507 10 36.6667V26.6667C10 25.7826 10.3512 24.9348 10.9763 24.3096C11.6014 23.6845 12.4493 23.3333 13.3333 23.3333Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

    {/* Heading */}
<h3 className="w-[469px] h-[52px] font-manrope text-[32px] leading-[52px] font-medium text-[#AA1299]">
  Your Smart Job App Companion
</h3>

{/* Paragraph */}
<p className="w-[516px] h-[56px] font-dmsans text-[18px] leading-[28px] tracking-[0.5px] font-light text-[#47464C]">
  Track every application, follow up easily, and stay organized with your personal job assistant.
</p>

  </div>
</div>










</div>







</section>







       {/* Featured Companies */}
<section className="w-[1728px] h-[1122px] flex flex-col items-center py-[80px] px-0">
    <h2 className="w-[1728px] h-[38px] text-[24px] leading-[38px] font-bold text-center text-[#AA1299] font-manrope">
  DREAM COMPANIES
</h2>
  <div className="w-[100px] h-[8px]"></div>

  <h2 className="w-[880px] h-[90px] font-manrope font-bold text-[56px] leading-[90px] tracking-[-0.25px] text-[#1B1C1C] text-center">
  Discover 2025's Top Companies
</h2>
      <div className="w-[100px] h-[32px]"></div>
     <div className="w-[100px] h-[32px] "></div>
     
  <div className="grid md:grid-cols-3 gap-8">
    {companies.map(({ name, desc }) => (
      <div key={name} className="flex flex-col items-start p-[18px] gap-[18px] w-[420px] h-[398px] bg-white rounded-[18px] shadow-[0_6px_9px_4.5px_rgba(0,0,0,0.15),_0_3px_3px_rgba(0,0,0,0.3)]">
        <div className="flex flex-row items-center gap-[7.5px] w-full h-[84px]">
          <div className="w-[72px] h-[72px] rounded-[15.43px] bg-gray-200" />
        </div>
        <div className="flex flex-col items-start w-full h-[102px]">
          <h3 className="text-[24px] font-extrabold text-[#1B1C1E] leading-[39px]">{name}</h3>
          <p className="text-[13.5px] font-light text-[#1B1C1E] leading-[21px] tracking-[0.375px]">{desc}</p>
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-4 w-[384px] h-[73px]">
          <div className="px-3 py-[5.25px] rounded-full bg-[#FFDF9E]">
            <span className="text-[12px] font-medium text-[#5B4300] tracking-[0.5px] text-center">Skill Boost</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#FFDAD6]">
            <span className="text-[12px] font-medium text-[#93000A] tracking-[0.5px] text-center">Career Clarity</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#93F7BA]">
            <span className="text-[12px] font-medium text-[#00522F] tracking-[0.5px] text-center">Confidence</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#B1ECFF]">
            <span className="text-[12px] font-medium text-[#004E5E] tracking-[0.5px] text-center">Insightful Path</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#FFD7F1]">
            <span className="text-[12px] font-medium text-[#840077] tracking-[0.5px] text-center">Mentorship</span>
          </div>
        </div>
        <button className="flex items-center justify-center gap-1 px-[18px] py-[10.5px] w-[384px] h-[49px] bg-[#1B1C1C] border-[1.5px] border-[#1B1C1C] rounded-full">
          <span className="text-white text-[18px] font-medium leading-[28px] tracking-[0.5px]">View Jobs</span>
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.125" className="text-white" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    ))}   
  </div>
    
  


</section>

      {/* Newsletter */}
      <section className="relative w-[1648px] h-[470px] bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5] rounded-[40px] flex flex-col items-start px-[80px] py-[96px] gap-[161px] isolate mt-20 overflow-hidden">
        {/* Background Lines */}
        <div className="absolute inset-0 z-0">
          {Array.from({ length: 32 }).map((_, index) => (
            <div
              key={index}
              className="absolute left-[calc(50%-866px)] w-[1732px] border-t border-white"
              style={{ top: `${58 - index * 2}px`, height: `${600 - index * 10}px` }}
            />
          ))}
        </div>

        <div className="relative z-10 flex flex-col gap-10">
          <h2 className="text-[56px] leading-[90px] font-bold font-['Manrope'] bg-gradient-to-b from-[#180323] via-[#180323]/75 to-transparent text-transparent bg-clip-text">
            Revolutionizing How You Find Work
          </h2>
          <p className="text-[24px] leading-[38px] text-[#180323]/75 font-medium max-w-[880px] font-['Manrope']">
            Connect with the right roles, people, and companies faster than ever. Say goodbye to endless scrolling and hello to focused, meaningful opportunities.
          </p>

          <div className="flex items-center gap-[48px] px-[24px] py-[8px] bg-white rounded-full shadow-lg w-[720px] h-[72px]">
            <div className="flex items-center gap-2 w-[502px]">
              <input
                type="email"
                placeholder="Enter your email to get job alerts..."
                className="w-full text-[18px] leading-[28px] placeholder-[#47464C] text-[#47464C] font-['DM_Sans'] font-normal tracking-wide outline-none text-center"
              />
            </div>
            <button className="bg-[#1B1C1C] text-white text-[18px] px-[24px] py-[14px] font-medium rounded-full border-2 border-[#1B1C1C] font-['DM_Sans']">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center w-[1728px] h-[492px] px-[144px] bg-white mt-20">
        <div className="flex flex-col items-center px-[40px] pt-[40px] w-[1440px] h-[492px]">
          <div className="flex flex-row items-start gap-[64px] w-[1360px] h-[376px]">
            {/* Left Info */}
            <div className="flex flex-col items-start w-[368px] h-[192px]">
              <h2 className="text-[40px] leading-[64px] font-extrabold font-['Manrope'] text-[#A10091]">JobHunt</h2>
              <div className="h-2" />
              <p className="text-[16px] leading-[24px] font-light font-['DM_Sans'] text-[#1B1C1C] tracking-wide">
                Connecting skilled professionals with the right opportunities in a smarter, faster way.
              </p>
              <div className="h-6" />
              <div className="flex gap-4">
                {["facebook", "instagram", "x", "linkedin", "youtube", "discord"].map((icon, i) => (
                  <div key={i} className="w-[48px] h-[48px] rounded bg-white flex items-center justify-center border border-[#993D6F]">
                    <div className="w-[32px] h-[32px]" />
                  </div>
                ))}
              </div>
            </div>

            {/* Spacer */}
            <div className="w-[383px] h-[200px]" />

            {/* Services */}
            <div className="flex flex-col items-start w-[200px] h-[208px] px-[16px]">
              <h3 className="text-[40px] leading-[64px] font-bold font-['Manrope'] text-[#1B1C1C]">Services</h3>
              <div className="h-4" />
              {["Who’s Hiring", "Resume Templates", "Resume Builder"].map((label, i) => (
                <div key={i} className="w-[168px] h-[40px] bg-white rounded flex items-center px-[16px] mb-1">
                  <span className="text-[#993D6F] font-['DM_Sans'] text-[16px] tracking-wide">{label}</span>
                </div>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col items-start w-[217px] h-[296px] px-[16px]">
              <h3 className="text-[40px] leading-[64px] font-bold font-['Manrope'] text-[#1B1C1C]">Company</h3>
              <div className="h-4" />
              {["About", "Job Tracker", "Get In Touch", "Privacy Policies", "Terms & Conditions"].map((label, i) => (
                <div key={i} className="w-[185px] h-[40px] bg-white rounded flex items-center px-[16px] mb-1">
                  <span className="text-[#993D6F] font-['DM_Sans'] text-[16px] tracking-wide">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex justify-center items-center w-[1360px] h-[76px] border-t border-[#78767D] mt-4">
            <p className="text-[18px] font-medium font-['DM_Sans'] text-black tracking-wide">
              © 2025. JobHunt Inc. • All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
    
  );
}
