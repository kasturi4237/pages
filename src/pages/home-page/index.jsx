// Complete homepage matching the provided layout and Figma CSS
import React from 'react';

import { Link } from 'react-router-dom';
import heroPattern from '../../assets/hero-pattern.svg';
; 
import analytics  from '../../assets/analytics.png';
import Navbar from '../../components/Navbar';
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
   <div className="flex flex-col items-center w-full max-w-[440px] sm:max-w-full min-h-[6484px] sm:min-h-screen bg-white mx-auto px-4 sm:px-6 md:px-10 xl:px-[40px] pt-24 sm:pt-[120px] xl:pt-[140px] gap-10 font-['Manrope'] z-0 scroll-smooth">


    
      {/* Header */}
      
    <Navbar />




      {/* Hero Section */}
     <section
    className="
    relative flex flex-col items-center justify-center 
    w-full max-w-[1648px]
    px-4 sm:px-6 lg:px-0
    py-[64px] md:py-[104px]
    
    bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]
    rounded-[20px] overflow-hidden isolate
     "
     >

    {/* Background Pattern Lines */}
   <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />



  {/* Hero Content */}
  <div
  className="
    flex flex-col items-center justify-center
    gap-[32px] md:gap-[40px]
    w-full max-w-[392px] md:max-w-[1648px]
    min-h-[740px] md:h-[564px]
    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-0
    text-center mx-auto
    bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]
    rounded-[20px]
  "
>


     <div
  className="
    flex flex-col items-center
    w-full max-w-[360px] md:max-w-[1648px]
    h-[208px] md:h-[276px]
    px-0 sm:px-6 md:px-8 lg:px-10 xl:px-0
  "
>

  {/* Heading */}
  <h1
  className="
    text-[40px] leading-[48px]
    sm:text-[64px] sm:leading-[64px]
    lg:text-[88px] lg:leading-[88px]
    font-extrabold text-center tracking-[-0.25px]
    bg-gradient-to-b from-[#1B1C1C] via-[#1B1C1C]/75 to-transparent 
    text-transparent bg-clip-text
    w-full max-w-[360px] sm:max-w-[600px] lg:max-w-[800px]
    mx-auto
  "
>
  Your Launchpad to Career Success
</h1>



  {/* Spacer */}
  <div className="h-2" /> {/* 8px gap */}

  <p
  className="
    text-[#47464C] 
    text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] 
    leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[38px]
    font-medium 
    text-center 
    tracking-[0.25px] 
    max-w-[360px] sm:max-w-[600px] md:max-w-[720px] lg:max-w-[820px]
  "
>
  Discover the right opportunities, match with top companies, and take control of your career all in one place.
</p>

</div>




    {/* Search Bar */}
    <div className="w-full max-w-[360px] lg:max-w-[1200px] h-[224px] lg:h-auto flex flex-col lg:flex-row items-center justify-between gap-[24px] lg:gap-4 p-4 lg:px-6 lg:py-2 bg-white rounded-[8px] lg:rounded-full shadow-lg mx-auto">


      <div className="flex items-center gap-2 w-full lg:w-[443px]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28 28L20 20M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z" stroke="#47464C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        <input
          type="text"
          placeholder="Search by job title, keyword or company"
          className="w-full text-[16px] sm:text-[18px] leading-[28px] placeholder-[#47464C] text-[#47464C] font-['DM_Sans'] font-light tracking-wide outline-none"
        />
      </div>

      <div className="hidden lg:block w-[2px] h-[32px] bg-[#C8C5CD] rounded-full" />

      <div className="flex items-center gap-2 w-full lg:w-[443px]">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.6667 24.0002L12 22.6668M12 22.6668L4 26.6668V9.3335L12 5.3335M12 22.6668V5.3335M12 5.3335L20 9.3335M20 9.3335L28 5.3335V15.3335M20 9.3335V16.0002M26.9336 26.9335L29.3336 29.3335M20 24.0002C20 25.061 20.4214 26.0784 21.1716 26.8286C21.9217 27.5787 22.9391 28.0002 24 28.0002C25.0609 28.0002 26.0783 27.5787 26.8284 26.8286C27.5786 26.0784 28 25.061 28 24.0002C28 22.9393 27.5786 21.9219 26.8284 21.1717C26.0783 20.4216 25.0609 20.0002 24 20.0002C22.9391 20.0002 21.9217 20.4216 21.1716 21.1717C20.4214 21.9219 20 22.9393 20 24.0002Z" stroke="#47464C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

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
   <div className="mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center max-w-[1040px] px-4 z-[1]">
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
   <section
  className="flex flex-col lg:flex-row
    items-center lg:items-start
    gap-[24px] lg:gap-[40px]
    px-0 lg:px-[80px]
    py-[24px] lg:py-0
    w-full
    max-w-full lg:max-w-[1648px]
    mx-auto
  "
>
  {/* Block 1 */}
  <div className="flex flex-col items-center w-full lg:w-[440px] h-auto lg:h-[252px]">
    <div className="relative w-[91px] h-[40px] mb-4">
      {/* % symbol */}
      <div className="absolute left-[54px] top-[-12px] w-[37px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
        %
      </div>
      {/* Stack for first digit */}
      <div className="absolute top-[-12px] left-[0px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-1-${num}`}
            className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
      {/* Stack for second digit */}
      <div className="absolute top-[-12px] left-[27px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div
            key={`digit-2-${num}`}
            className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center"
          >
            {num}
          </div>
        ))}
      </div>
    </div>
    <h3 className="w-full lg:w-[440.67px] text-[24px] lg:text-[32px] leading-[32px] lg:leading-[52px] font-bold text-center text-[#180323] font-['Manrope']">
      Swift & Seamless
    </h3>
    <p className="w-full lg:w-[440.67px] text-[18px] lg:text-[24px] leading-[28px] lg:leading-[38px] font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope']">
      Experience a streamlined process from application to offer. Save time and reduce stress with our smart matching engine.
    </p>
  </div>

 
  {/* Divider */}
  <div className="hidden lg:block w-[3px] h-[252px] bg-[rgba(24,3,35,0.15)] rounded-full" />
  <div className="block lg:hidden w-full h-[3px] bg-[rgba(24,3,35,0.15)] rounded-full" />

  {/* Block 2 */}
  <div className="flex flex-col items-center w-full lg:w-[440px] h-auto lg:h-[252px]">
    <div className="relative w-[91px] h-[40px] mb-4">
      <div className="absolute left-[54px] top-[-12px] w-[37px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
        %
      </div>
      <div className="absolute top-[-12px] left-[0px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div key={`digit-1-${num}`} className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">{num}</div>
        ))}
      </div>
      <div className="absolute top-[-12px] left-[27px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div key={`digit-2-${num}`} className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">{num}</div>
        ))}
      </div>
    </div>
    <h3 className="w-full lg:w-[440.67px] text-[24px] lg:text-[32px] leading-[32px] lg:leading-[52px] font-bold text-center text-[#180323] font-['Manrope']">
      Tailored Opportunities
    </h3>
    <p className="w-full lg:w-[440.67px] text-[18px] lg:text-[24px] leading-[28px] lg:leading-[38px] font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope']">
      Get job suggestions that align with your skills, preferences, and goals so you never miss the perfect role.
    </p>
  </div>

  {/* Divider */}
  <div className="hidden lg:block w-[3px] h-[252px] bg-[rgba(24,3,35,0.15)] rounded-full" />
  <div className="block lg:hidden w-full h-[3px] bg-[rgba(24,3,35,0.15)] rounded-full" />

  {/* Block 3 */}
  <div className="flex flex-col items-center w-full lg:w-[440px] h-auto lg:h-[252px]">
    <div className="relative w-[91px] h-[40px] mb-4">
      <div className="absolute left-[54px] top-[-12px] w-[37px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">
        %
      </div>
      <div className="absolute top-[-12px] left-[0px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div key={`digit-1-${num}`} className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">{num}</div>
        ))}
      </div>
      <div className="absolute top-[-12px] left-[27px] w-[27px] h-[64px] overflow-hidden flex flex-col items-center">
        {[0,1,2,3,4,5,6,7,8,9].map(num => (
          <div key={`digit-2-${num}`} className="w-[27px] h-[64px] text-[40px] leading-[64px] font-extrabold text-[#1B1C1E] flex items-center justify-center">{num}</div>
        ))}
      </div>
    </div>
    <h3 className="w-full lg:w-[440.67px] text-[24px] lg:text-[32px] leading-[32px] lg:leading-[52px] font-bold text-center text-[#180323] font-['Manrope']">
      Diverse Job Selections
    </h3>
    <p className="w-full lg:w-[440.67px] text-[18px] lg:text-[24px] leading-[28px] lg:leading-[38px] font-medium text-center text-[rgba(24,3,35,0.75)] font-['Manrope']">
      Explore a wide range of roles across top industries, catering to every experience level and interest area.
    </p>
  </div>
</section>








          
    {/* Features Section */}
<section
  className="relative
    flex flex-col items-center
    pt-[24px] sm:pt-[80px]
    bg-white
    w-full
    h-auto
    px-0
  "
>


 <h3
  className="
    font-[Manrope] font-bold text-[24px] leading-[38px] w-[1728px] h-[38px] text-[#AA1299] text-center
    sm:font-[Manrope] sm:font-bold sm:text-[24px] sm:leading-[38px] sm:w-[1728px] sm:h-[38px]
    font-[DM_Sans] font-medium text-[14px] leading-[22px] tracking-[0.4px] w-[392px] h-[22px]
    text-center text-[#AA1299]
  "
>
  HOW ARE WE BETTER
</h3>


  
<div className="w-[100px] h-[8px]" />
  <h2
  className="
    w-[392px] h-[88px] font-[Manrope] font-bold text-[28px] leading-[44px] text-center text-[#1B1C1C]
    sm:w-[880px] sm:h-[180px] sm:text-[56px] sm:leading-[90px] sm:tracking-[-0.25px]
  "
>
  How We Help Elevate Your Career
</h2>



  <div
  className="
    flex flex-col items-center gap-[32px] w-[392px] h-auto
    sm:items-start sm:gap-[256px] sm:w-[1252px] sm:h-[3524px] isolate relative
  "
>

    {/* Vertical Lines */}
<div className="hidden sm:block absolute top-[540px] left-1/2 transform -translate-x-1/2 w-[2px] h-[250px] bg-[#E2E2E2] z-0" />
<div className="hidden sm:block absolute top-[1296px] left-1/2 transform -translate-x-1/2 w-[2px] h-[250px] bg-[#E2E2E2] z-1" />
<div className="hidden sm:block absolute top-[2052px] left-1/2 transform -translate-x-1/2 w-[2px] h-[250px] bg-[#E2E2E2] z-2" />
<div className="hidden sm:block absolute top-[2808px] left-1/2 transform -translate-x-1/2 w-[2px] h-[250px] bg-[#E2E2E2] z-3" />


    
    {/* FRAME  467*/}
  <div
  className="
    relative flex flex-col justify-center items-center w-[392px] h-[466px]z-[4]
    sm:flex-row sm:gap-[64px] sm:w-full sm:max-w-[1252px] sm:h-[500px] sm:
  "
>
  {/* Left Image Box */}
  <div className="w-[500px] h-[500px]  rounded-xl relative">
    
   <img
    src="src/assets/Job hunt-rafiki 1.png"
    alt="analytics image"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />
 </div>

  {/* Right Text Box - Frame 466 */}
  <div
  className="
    flex flex-col justify-center items-center py-[24px] gap-[8px] w-[392px] h-[166px]
    sm:items-start sm:py-[40px] sm:w-[688px] sm:h-[312px]
  "
>
  {/* Icon Wrapper */}
  <div className="hidden sm:flex justify-center items-center w-[80px] h-[80px]">
    {/* Circular Border (Icon placeholder) */}
       
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.7704 23.12L24.0204 37.2834M42.7104 55.98L56.8804 60.23M38.9436 41.0569L58.1403 21.8603M13.3333 18.3333C13.3333 18.9899 13.4626 19.64 13.7139 20.2467C13.9651 20.8533 14.3334 21.4045 14.7977 21.8688C15.262 22.3331 15.8132 22.7014 16.4198 22.9526C17.0265 23.2039 17.6766 23.3333 18.3333 23.3333C18.9899 23.3333 19.64 23.2039 20.2467 22.9526C20.8533 22.7014 21.4045 22.3331 21.8688 21.8688C22.3331 21.4045 22.7014 20.8533 22.9526 20.2467C23.2039 19.64 23.3333 18.9899 23.3333 18.3333C23.3333 17.6766 23.2039 17.0265 22.9526 16.4198C22.7014 15.8132 22.3331 15.262 21.8688 14.7977C21.4045 14.3334 20.8533 13.9651 20.2467 13.7139C19.64 13.4626 18.9899 13.3333 18.3333 13.3333C17.6766 13.3333 17.0265 13.4626 16.4198 13.7139C15.8132 13.9651 15.262 14.3334 14.7977 14.7977C14.3334 15.262 13.9651 15.8132 13.7139 16.4198C13.4626 17.0265 13.3333 17.6766 13.3333 18.3333ZM56.6666 18.3333C56.6666 19.6593 57.1934 20.9311 58.131 21.8688C59.0687 22.8065 60.3405 23.3333 61.6666 23.3333C62.9927 23.3333 64.2644 22.8065 65.2021 21.8688C66.1398 20.9311 66.6666 19.6593 66.6666 18.3333C66.6666 17.0072 66.1398 15.7354 65.2021 14.7977C64.2644 13.86 62.9927 13.3333 61.6666 13.3333C60.3405 13.3333 59.0687 13.86 58.131 14.7977C57.1934 15.7354 56.6666 17.0072 56.6666 18.3333ZM56.6666 61.6666C56.6666 62.9927 57.1934 64.2644 58.131 65.2021C59.0687 66.1398 60.3405 66.6666 61.6666 66.6666C62.9927 66.6666 64.2644 66.1398 65.2021 65.2021C66.1398 64.2644 66.6666 62.9927 66.6666 61.6666C66.6666 60.3405 66.1398 59.0687 65.2021 58.131C64.2644 57.1934 62.9927 56.6666 61.6666 56.6666C60.3405 56.6666 59.0687 57.1934 58.131 58.131C57.1934 59.0687 56.6666 60.3405 56.6666 61.6666ZM13.3333 51.6666C13.3333 55.6448 14.9136 59.4601 17.7266 62.2732C20.5397 65.0862 24.355 66.6666 28.3333 66.6666C32.3115 66.6666 36.1268 65.0862 38.9398 62.2732C41.7529 59.4601 43.3332 55.6448 43.3332 51.6666C43.3332 47.6883 41.7529 43.873 38.9398 41.06C36.1268 38.2469 32.3115 36.6666 28.3333 36.6666C24.355 36.6666 20.5397 38.2469 17.7266 41.06C14.9136 43.873 13.3333 47.6883 13.3333 51.6666Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

   
  </div>

  {/* Heading */}
  <h3 className="
    w-[392px] h-[38px] font-[Manrope] font-bold text-[24px] leading-[38px] text-center text-[#AA1299]
    sm:w-[344px] sm:h-[52px] sm:text-[32px] sm:leading-[52px] sm:font-medium sm:text-left
  ">
    Unified Job Discovery
  </h3>

  {/* Paragraph */}
  <p
  className="
    w-[392px] h-[72px] font-[DM_Sans] font-light text-[16px] leading-[24px] tracking-[0.25px] text-center text-[#47464C]
    sm:w-[516px] sm:h-[84px] sm:text-[18px] sm:leading-[28px] sm:tracking-[0.5px] sm:text-left
  "
>
    Find all relevant jobs in one place. Skip the chaos of multiple sites — we bring everything together for a smoother search.
  </p>
</div>

</div>
   




{/* FRAME  468*/}
   
<div
  className="
    flex flex-col items-center p-0 w-full max-w-[392px]
    sm:flex-row sm:justify-center sm:items-center sm:gap-[64px] sm:max-w-[1252px] sm:relative sm:z-[7]
  "
>
  {/* Place Frame 466 blocks or other children here */}
  <div className="w-[500px] h-[500px]  rounded-xl relative">
  <img
    src="src/assets/Vision statement-rafiki 1.png"
    alt="analytics image"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  /></div>
 {/* Right Content Block */}
  <div
  className="
    flex flex-col items-center gap-[8px] px-0 py-[24px] w-[392px]
    sm:items-start sm:w-[688px] sm:h-[312px] sm:py-[40px] sm:gap-[8px]
  "
>
    {/* Icon Circle */}
    <div className="hidden sm:flex items-center justify-center w-[80px] h-[80px]">
     <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.334 44C30.7263 35.0166 36.4811 27.1158 43.9908 21.1315C51.5006 15.1471 60.4867 11.3013 70.0006 10C68.6993 19.5139 64.8522 28.5001 58.8679 36.0098C52.8835 43.5196 44.9827 49.2743 35.9993 52.6667M35.3337 30C41.8109 32.9896 47.0108 38.1894 50.0003 44.6667M10 70V56.6667C10 54.0296 10.782 51.4517 12.2471 49.2591C13.7122 47.0664 15.7945 45.3574 18.2309 44.3483C20.6672 43.3391 23.3481 43.0751 25.9345 43.5895C28.5209 44.104 30.8967 45.3739 32.7614 47.2386C34.6261 49.1033 35.896 51.4791 36.4105 54.0655C36.9249 56.6519 36.6609 59.3328 35.6517 61.7691C34.6426 64.2055 32.9336 66.2878 30.7409 67.7529C28.5483 69.218 25.9704 70 23.3333 70H10Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
  </div>

   <h3
  className="
    w-[392px] h-[38px] text-[24px] leading-[38px] font-bold text-[#AA1299] text-center font-manrope
    sm:w-[373px] sm:h-[52px] sm:text-[32px] sm:leading-[52px] sm:font-medium sm:text-left
  "
>
  Tailored to Your Ambition
</h3>


    {/* Paragraph */}
    <p
  className="
    w-[392px] h-[72px] text-[16px] leading-[24px] tracking-[0.25px] text-[#47464C] font-light text-center font-dmsans
    sm:w-[516px] sm:h-auto sm:text-[18px] sm:leading-[28px] sm:tracking-[0.5px] sm:text-left
  "
>
  Get clear insights into why a job matches your profile. Our transparency ensures you're always informed about the best opportunities.
</p>

  </div>
</div>






{/*FRAME   469   Transparent & Match Insights*/}

<div
  className="
    flex flex-col items-center p-0 w-full max-w-[392px]
    sm:flex-row sm:justify-center sm:items-center sm:gap-[64px] sm:max-w-[1252px] sm:relative sm:z-[7]
  "
>
  {/* Left Image */}
  <div className="w-[500px] h-[500px]  rounded-xl relative">
    
   <img
    src="src/assets/analytics.png"
    alt="analytics image"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />
</div>
  {/* Right Content Block */}
  <div
  className="
    flex flex-col items-center gap-[8px] py-6
    w-[392px] h-[166px]
    sm:justify-center sm:items-start sm:py-[40px] sm:w-[688px] sm:h-[312px]
  "
>
    {/* Icon Circle */}
    <div className=" hidden sm:flex justify-center items-center w-[80px] h-[80px]">
     
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M23.3333 23.3333C23.3333 25.1014 22.631 26.7971 21.3807 28.0474C20.1305 29.2976 18.4348 30 16.6667 30C14.8986 30 13.2029 29.2976 11.9526 28.0474C10.7024 26.7971 10 25.1014 10 23.3333C10 21.5652 10.7024 19.8695 11.9526 18.6193C13.2029 17.369 14.8986 16.6667 16.6667 16.6667C18.4348 16.6667 20.1305 17.369 21.3807 18.6193C22.631 19.8695 23.3333 21.5652 23.3333 23.3333ZM23.3333 23.3333L50 20M50 20C50 22.6522 51.0536 25.1957 52.9289 27.0711C54.8043 28.9464 57.3478 30 60 30C62.6522 30 65.1957 28.9464 67.0711 27.0711C68.9464 25.1957 70 22.6522 70 20C70 17.3478 68.9464 14.8043 67.0711 12.9289C65.1957 11.0536 62.6522 10 60 10C57.3478 10 54.8043 11.0536 52.9289 12.9289C51.0536 14.8043 50 17.3478 50 20ZM30 56.6667L46.6667 51.6667M21.6667 28.3333L47.7 46.2333M46.6667 50C46.6667 51.7681 47.369 53.4638 48.6193 54.714C49.8695 55.9643 51.5652 56.6667 53.3333 56.6667C55.1014 56.6667 56.7971 55.9643 58.0474 54.714C59.2976 53.4638 60 51.7681 60 50C60 48.2319 59.2976 46.5362 58.0474 45.286C56.7971 44.0357 55.1014 43.3333 53.3333 43.3333C51.5652 43.3333 49.8695 44.0357 48.6193 45.286C47.369 46.5362 46.6667 48.2319 46.6667 50ZM10 60C10 62.6522 11.0536 65.1957 12.9289 67.0711C14.8043 68.9464 17.3478 70 20 70C22.6522 70 25.1957 68.9464 27.0711 67.0711C28.9464 65.1957 30 62.6522 30 60C30 57.3478 28.9464 54.8043 27.0711 52.9289C25.1957 51.0536 22.6522 50 20 50C17.3478 50 14.8043 51.0536 12.9289 52.9289C11.0536 54.8043 10 57.3478 10 60Z" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

    <h3
  className="
    w-[392px] text-[24px] leading-[38px] font-bold text-center
    sm:w-[344px] sm:text-[32px] sm:leading-[52px] sm:font-medium sm:text-left
    font-manrope text-[#AA1299]
  "
>
      Transparent & Match Insights
    </h3>

    {/* Paragraph */}
    <p
  className="
    w-[392px] text-[16px] leading-[24px] tracking-[0.25px] font-light text-center
    sm:w-[516px] sm:text-[18px] sm:leading-[28px] sm:tracking-[0.5px] sm:text-left
    text-[#47464C] font-dmsans
  "
>
      See how closely jobs match your profile with our smart match percentage. Make better, faster decisions.
    </p>
  </div>
</div>




{/*FRAME 470 Build a Standout Resume*/}

{/* Frame 470  Build a Standout Resume*/}
<div
  className="
    flex flex-col items-center p-0 w-full max-w-[392px] self-stretch
    sm:flex-row sm:justify-center sm:items-center sm:gap-[64px] sm:w-full sm:max-w-[1252px] sm:h-[500px] sm:relative sm:z-[7]
  "
>
  <div className="w-[500px] h-[400px] rounded-xl relative ">
    <img
    src="src\assets\image23.png"
    alt="build resume image"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />

      
  </div>

  {/* RIGHT Content Block */}
 <div
  className="
    flex flex-col justify-center items-start gap-[8px] py-[40px] w-full max-w-[688px]
    sm:h-[312px]
  "
>



    {/* Icon Circle */}
    <div className="hidden sm:flex items-center justify-center w-[80px] h-[80px]">
      
      {/* CV ICON SVG*/}
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.667 10V23.3333C46.667 24.2174 47.0182 25.0652 47.6433 25.6904C48.2684 26.3155 49.1163 26.6667 50.0003 26.6667H63.3337M46.667 10H23.3337C21.5655 10 19.8699 10.7024 18.6196 11.9526C17.3694 13.2029 16.667 14.8986 16.667 16.6667V63.3333C16.667 65.1014 17.3694 66.7971 18.6196 68.0474C19.8699 69.2976 21.5655 70 23.3337 70H56.667C58.4351 70 60.1308 69.2976 61.381 68.0474C62.6313 66.7971 63.3337 65.1014 63.3337 63.3333V26.6667M46.667 10L63.3337 26.6667M36.667 41.6667C36.667 40.3406 36.1402 39.0688 35.2025 38.1311C34.2648 37.1934 32.9931 36.6667 31.667 36.6667C30.3409 36.6667 29.0691 37.1934 28.1315 38.1311C27.1938 39.0688 26.667 40.3406 26.667 41.6667V51.6667C26.667 52.9927 27.1938 54.2645 28.1315 55.2022C29.0691 56.1399 30.3409 56.6667 31.667 56.6667C32.9931 56.6667 34.2648 56.1399 35.2025 55.2022C36.1402 54.2645 36.667 52.9927 36.667 51.6667M43.3337 36.6667L48.3337 56.6667L53.3337 36.6667" stroke="#47464C" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>

    {/* Heading */}
    <h3
  className="
    w-[392px] text-[24px] leading-[38px] font-bold text-center text-[#AA1299] font-manrope
    md:w-[376px] md:text-[32px] md:leading-[52px] md:font-medium md:text-left
  "
>
      Build a Standout Resume
    </h3>

    {/* Paragraph */}
    <p
  className="
    w-[392px] text-[16px] leading-[24px] tracking-[0.25px] text-[#47464C] font-light font-dmsans text-center
    md:w-[516px] md:text-[18px] md:leading-[28px] md:tracking-[0.5px] md:text-left
  "
>
      Use our built-in CV builder to craft a professional resume that gets noticed — optimized to impress recruiters and hiring managers.
    </p>
  </div>

  {/* Right Graphic Block (Placeholder) */}
  
</div>



{/* Frame 471 */}
<div
  className="
    flex flex-col items-center p-0 self-stretch flex-grow-0
    md:flex-row md:justify-center md:items-center md:gap-[64px] 
    md:w-full md:max-w-[1252px] md:h-[500px] md:relative md:z-[8]
    w-full max-w-[392px] h-auto 
  "
>
  {/* Left Illustration Box */}
  <div className="w-full max-w-[500px] aspect-square rounded-xl relative">
    <img
      src="src/assets/Design stats-rafiki 1.png"
      alt="build resume image"
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-auto z-0"
    />
  </div>

  {/* Right Text Box */}
  <div className="flex flex-col justify-center items-start py-[40px] gap-[8px] w-full max-w-[688px] h-auto">
    {/* Icon Wrapper */}
    <div className="flex justify-center items-center w-[80px] h-[80px]">
      {/* SVG */}
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ... */}
      </svg>
    </div>

    {/* Heading */}
    <h3 className="w-full max-w-[469px] font-manrope text-[24px] md:text-[32px] leading-[38px] md:leading-[52px] font-medium text-[#AA1299] text-center md:text-left">
      Your Smart Job App Companion
    </h3>

    {/* Paragraph */}
    <p className="w-full max-w-[516px] font-dmsans text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] tracking-[0.25px] md:tracking-[0.5px] font-light text-[#47464C] text-center md:text-left">
      Track every application, follow up easily, and stay organized with your personal job assistant.
    </p>
  </div>
</div>




</div>

</section>







       {/* Featured Companies */}
<section
  className="
    flex flex-col items-center
    px-0
    py-[24px]
    w-[392px] h-auto
    lg:w-[1728px] lg:h-auto lg:py-[80px]
  "
>

    <h2 className="w-[1728px] h-[38px] text-[24px] leading-[38px] font-bold text-center text-[#AA1299] font-manrope">
  DREAM COMPANIES
</h2>
  <div className="w-[100px] h-[8px]"></div>

  <h2
  className="
    w-[392px] h-[88px] text-[28px] leading-[44px]
    font-manrope font-bold text-[#1B1C1C] text-center
    flex-grow-0 
    lg:w-[880px] lg:h-[90px] lg:text-[56px] lg:leading-[90px] lg:tracking-[-0.25px]
  "
>
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
            <span className="text-[12px] font-medium text-[#5B4300] tracking-[0.5px] text-center">Visual Design</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#FFDAD6]">
            <span className="text-[12px] font-medium text-[#93000A] tracking-[0.5px] text-center">Technology Solutions</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#93F7BA]">
            <span className="text-[12px] font-medium text-[#00522F] tracking-[0.5px] text-center">Accounting</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#B1ECFF]">
            <span className="text-[12px] font-medium text-[#004E5E] tracking-[0.5px] text-center">Business Development</span>
          </div>
          <div className="px-3 py-[5.25px] rounded-full bg-[#FFD7F1]">
            <span className="text-[12px] font-medium text-[#840077] tracking-[0.5px] text-center">Operations</span>
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
{/* pagination */}
  <svg width="1728" height="58" viewBox="0 0 1728 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M792 29C792 26.2386 794.239 24 797 24C799.761 24 802 26.2386 802 29C802 31.7614 799.761 34 797 34C794.239 34 792 31.7614 792 29Z" fill="#C8C5CD"/>
<path d="M812 29C812 26.2386 814.239 24 817 24C819.761 24 822 26.2386 822 29C822 31.7614 819.761 34 817 34C814.239 34 812 31.7614 812 29Z" fill="#C8C5CD"/>
<path d="M832 29C832 26.2386 834.239 24 837 24H891C893.761 24 896 26.2386 896 29C896 31.7614 893.761 34 891 34H837C834.239 34 832 31.7614 832 29Z" fill="#AA1299"/>
<path d="M906 29C906 26.2386 908.239 24 911 24C913.761 24 916 26.2386 916 29C916 31.7614 913.761 34 911 34C908.239 34 906 31.7614 906 29Z" fill="#C8C5CD"/>
<path d="M926 29C926 26.2386 928.239 24 931 24C933.761 24 936 26.2386 936 29C936 31.7614 933.761 34 931 34C928.239 34 926 31.7614 926 29Z" fill="#C8C5CD"/>
</svg>


{/*show more svg */}
<svg width="194" height="80" viewBox="0 0 194 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.90039 1H187.1C188.236 1 189.029 1.00041 189.646 1.05078C190.251 1.10023 190.599 1.19296 190.862 1.32715C191.427 1.61472 191.885 2.07347 192.173 2.6377C192.307 2.90105 192.4 3.24932 192.449 3.85449C192.5 4.47129 192.5 5.26396 192.5 6.40039V73.5996C192.5 74.736 192.5 75.5287 192.449 76.1455C192.4 76.7507 192.307 77.0989 192.173 77.3623C191.885 77.9265 191.427 78.3853 190.862 78.6729C190.599 78.807 190.251 78.8998 189.646 78.9492C189.029 78.9996 188.236 79 187.1 79H6.90039C5.76396 79 4.97129 78.9996 4.35449 78.9492C3.74933 78.8998 3.40105 78.807 3.1377 78.6729C2.57347 78.3853 2.11472 77.9265 1.82715 77.3623C1.69296 77.0989 1.60023 76.7507 1.55078 76.1455C1.50041 75.5287 1.5 74.736 1.5 73.5996V6.40039L1.50684 4.93262C1.51333 4.51531 1.52559 4.16295 1.55078 3.85449C1.60023 3.24932 1.69296 2.90105 1.82715 2.6377C2.11472 2.07347 2.57347 1.61472 3.1377 1.32715C3.40105 1.19296 3.74932 1.10023 4.35449 1.05078C4.97129 1.00041 5.76396 1 6.90039 1Z" fill="#B75589"/>
<path d="M6.90039 1H187.1C188.236 1 189.029 1.00041 189.646 1.05078C190.251 1.10023 190.599 1.19296 190.862 1.32715C191.427 1.61472 191.885 2.07347 192.173 2.6377C192.307 2.90105 192.4 3.24932 192.449 3.85449C192.5 4.47129 192.5 5.26396 192.5 6.40039V73.5996C192.5 74.736 192.5 75.5287 192.449 76.1455C192.4 76.7507 192.307 77.0989 192.173 77.3623C191.885 77.9265 191.427 78.3853 190.862 78.6729C190.599 78.807 190.251 78.8998 189.646 78.9492C189.029 78.9996 188.236 79 187.1 79H6.90039C5.76396 79 4.97129 78.9996 4.35449 78.9492C3.74933 78.8998 3.40105 78.807 3.1377 78.6729C2.57347 78.3853 2.11472 77.9265 1.82715 77.3623C1.69296 77.0989 1.60023 76.7507 1.55078 76.1455C1.50041 75.5287 1.5 74.736 1.5 73.5996V6.40039L1.50684 4.93262C1.51333 4.51531 1.52559 4.16295 1.55078 3.85449C1.60023 3.24932 1.69296 2.90105 1.82715 2.6377C2.11472 2.07347 2.57347 1.61472 3.1377 1.32715C3.40105 1.19296 3.74932 1.10023 4.35449 1.05078C4.97129 1.00041 5.76396 1 6.90039 1Z" stroke="#B75589" stroke-width="2" stroke-linecap="round"/>
<path d="M40.576 49.36C39.312 49.36 38.172 49.14 37.156 48.7C36.148 48.26 35.316 47.632 34.66 46.816C34.012 45.992 33.6 45.016 33.424 43.888L36.424 43.432C36.68 44.456 37.204 45.248 37.996 45.808C38.796 46.368 39.716 46.648 40.756 46.648C41.372 46.648 41.952 46.552 42.496 46.36C43.04 46.168 43.48 45.888 43.816 45.52C44.16 45.152 44.332 44.7 44.332 44.164C44.332 43.924 44.292 43.704 44.212 43.504C44.132 43.296 44.012 43.112 43.852 42.952C43.7 42.792 43.5 42.648 43.252 42.52C43.012 42.384 42.732 42.268 42.412 42.172L37.948 40.852C37.564 40.74 37.148 40.592 36.7 40.408C36.26 40.216 35.84 39.956 35.44 39.628C35.048 39.292 34.724 38.868 34.468 38.356C34.22 37.836 34.096 37.196 34.096 36.436C34.096 35.324 34.376 34.392 34.936 33.64C35.504 32.88 36.264 32.312 37.216 31.936C38.176 31.56 39.24 31.376 40.408 31.384C41.592 31.392 42.648 31.596 43.576 31.996C44.504 32.388 45.28 32.96 45.904 33.712C46.528 34.464 46.968 35.372 47.224 36.436L44.116 36.976C43.988 36.368 43.74 35.852 43.372 35.428C43.012 34.996 42.568 34.668 42.04 34.444C41.52 34.22 40.964 34.1 40.372 34.084C39.796 34.076 39.26 34.164 38.764 34.348C38.276 34.524 37.88 34.78 37.576 35.116C37.28 35.452 37.132 35.844 37.132 36.292C37.132 36.716 37.26 37.064 37.516 37.336C37.772 37.6 38.088 37.812 38.464 37.972C38.848 38.124 39.236 38.252 39.628 38.356L42.724 39.22C43.148 39.332 43.624 39.484 44.152 39.676C44.68 39.868 45.188 40.136 45.676 40.48C46.164 40.824 46.564 41.276 46.876 41.836C47.196 42.396 47.356 43.108 47.356 43.972C47.356 44.868 47.168 45.656 46.792 46.336C46.424 47.008 45.924 47.568 45.292 48.016C44.66 48.464 43.936 48.8 43.12 49.024C42.312 49.248 41.464 49.36 40.576 49.36ZM58.9174 49V42.76C58.9174 42.352 58.8894 41.9 58.8334 41.404C58.7774 40.908 58.6454 40.432 58.4374 39.976C58.2374 39.512 57.9334 39.132 57.5254 38.836C57.1254 38.54 56.5814 38.392 55.8934 38.392C55.5254 38.392 55.1614 38.452 54.8014 38.572C54.4414 38.692 54.1134 38.9 53.8174 39.196C53.5294 39.484 53.2974 39.884 53.1214 40.396C52.9454 40.9 52.8574 41.548 52.8574 42.34L51.1414 41.608C51.1414 40.504 51.3534 39.504 51.7774 38.608C52.2094 37.712 52.8414 37 53.6734 36.472C54.5054 35.936 55.5294 35.668 56.7454 35.668C57.7054 35.668 58.4974 35.828 59.1214 36.148C59.7454 36.468 60.2414 36.876 60.6094 37.372C60.9774 37.868 61.2494 38.396 61.4254 38.956C61.6014 39.516 61.7134 40.048 61.7614 40.552C61.8174 41.048 61.8454 41.452 61.8454 41.764V49H58.9174ZM49.9294 49V31.72H52.5094V40.816H52.8574V49H49.9294ZM70.7009 49.36C69.4049 49.36 68.2729 49.068 67.3049 48.484C66.3369 47.9 65.5849 47.096 65.0489 46.072C64.5209 45.04 64.2569 43.856 64.2569 42.52C64.2569 41.16 64.5289 39.968 65.0729 38.944C65.6169 37.92 66.3729 37.12 67.3409 36.544C68.3089 35.968 69.4289 35.68 70.7009 35.68C72.0049 35.68 73.1409 35.972 74.1089 36.556C75.0769 37.14 75.8289 37.948 76.3649 38.98C76.9009 40.004 77.1689 41.184 77.1689 42.52C77.1689 43.864 76.8969 45.052 76.3529 46.084C75.8169 47.108 75.0649 47.912 74.0969 48.496C73.1289 49.072 71.9969 49.36 70.7009 49.36ZM70.7009 46.648C71.8529 46.648 72.7089 46.264 73.2689 45.496C73.8289 44.728 74.1089 43.736 74.1089 42.52C74.1089 41.264 73.8249 40.264 73.2569 39.52C72.6889 38.768 71.8369 38.392 70.7009 38.392C69.9249 38.392 69.2849 38.568 68.7809 38.92C68.2849 39.264 67.9169 39.748 67.6769 40.372C67.4369 40.988 67.3169 41.704 67.3169 42.52C67.3169 43.776 67.6009 44.78 68.1689 45.532C68.7449 46.276 69.5889 46.648 70.7009 46.648ZM82.1041 49L78.1441 36.016L80.9761 36.04L83.5081 44.356L86.0761 36.04H88.5121L91.0681 44.356L93.6121 36.04H96.4441L92.4841 49H90.2281L87.2881 40.084L84.3601 49H82.1041ZM103.414 49V31.72H106.018L111.994 43.96L117.97 31.72H120.574V49H117.874V37.924L112.57 49H111.418L106.126 37.924V49H103.414ZM129.67 49.36C128.374 49.36 127.242 49.068 126.274 48.484C125.306 47.9 124.554 47.096 124.018 46.072C123.49 45.04 123.226 43.856 123.226 42.52C123.226 41.16 123.498 39.968 124.042 38.944C124.586 37.92 125.342 37.12 126.31 36.544C127.278 35.968 128.398 35.68 129.67 35.68C130.974 35.68 132.11 35.972 133.078 36.556C134.046 37.14 134.798 37.948 135.334 38.98C135.87 40.004 136.138 41.184 136.138 42.52C136.138 43.864 135.866 45.052 135.322 46.084C134.786 47.108 134.034 47.912 133.066 48.496C132.098 49.072 130.966 49.36 129.67 49.36ZM129.67 46.648C130.822 46.648 131.678 46.264 132.238 45.496C132.798 44.728 133.078 43.736 133.078 42.52C133.078 41.264 132.794 40.264 132.226 39.52C131.658 38.768 130.806 38.392 129.67 38.392C128.894 38.392 128.254 38.568 127.75 38.92C127.254 39.264 126.886 39.748 126.646 40.372C126.406 40.988 126.286 41.704 126.286 42.52C126.286 43.776 126.57 44.78 127.138 45.532C127.714 46.276 128.558 46.648 129.67 46.648ZM138.782 49V36.04H141.338V39.196L141.026 38.788C141.186 38.356 141.398 37.964 141.662 37.612C141.934 37.252 142.258 36.956 142.634 36.724C142.954 36.508 143.306 36.34 143.69 36.22C144.082 36.092 144.482 36.016 144.89 35.992C145.298 35.96 145.694 35.976 146.078 36.04V38.74C145.694 38.628 145.25 38.592 144.746 38.632C144.25 38.672 143.802 38.812 143.402 39.052C143.002 39.268 142.674 39.544 142.418 39.88C142.17 40.216 141.986 40.6 141.866 41.032C141.746 41.456 141.686 41.916 141.686 42.412V49H138.782ZM154.025 49.36C152.713 49.36 151.561 49.076 150.569 48.508C149.577 47.94 148.801 47.152 148.241 46.144C147.689 45.136 147.413 43.976 147.413 42.664C147.413 41.248 147.685 40.02 148.229 38.98C148.773 37.932 149.529 37.12 150.497 36.544C151.465 35.968 152.585 35.68 153.857 35.68C155.201 35.68 156.341 35.996 157.277 36.628C158.221 37.252 158.921 38.136 159.377 39.28C159.833 40.424 160.005 41.772 159.893 43.324H157.025V42.268C157.017 40.86 156.769 39.832 156.281 39.184C155.793 38.536 155.025 38.212 153.977 38.212C152.793 38.212 151.913 38.58 151.337 39.316C150.761 40.044 150.473 41.112 150.473 42.52C150.473 43.832 150.761 44.848 151.337 45.568C151.913 46.288 152.753 46.648 153.857 46.648C154.569 46.648 155.181 46.492 155.693 46.18C156.213 45.86 156.613 45.4 156.893 44.8L159.749 45.664C159.253 46.832 158.485 47.74 157.445 48.388C156.413 49.036 155.273 49.36 154.025 49.36ZM149.561 43.324V41.14H158.477V43.324H149.561Z" fill="white"/>
</svg>


    
  


</section>
    






      {/* Newsletter */}
      <section
  className="
    relative
    w-[392px] h-auto
    bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5]
    rounded-[40px]
    flex flex-col items-center
    px-[16px] py-[64px]
    isolation-isolate
     
    mt-20
    overflow-hidden

    lg:w-[1648px] lg:h-[598px]
    lg:items-start
    lg:px-[80px] lg:py-[96px]
    lg:gap-[161px]
  "
>

        
          <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />

 <div
  className="
    relative  flex flex-col gap-10
    px-[16px] py-0
    w-[392px] h-[348px]
    flex-none order-1 flex-grow-0

    md:px-0 md:w-auto md:h-auto md:flex-grow md:order-0
  "
>
          <h2
  className="
    w-[360px] h-[104px]
    text-[32px] leading-[52px]
    font-bold font-['Manrope']
    text-center
    bg-gradient-to-b from-[#180323] via-[#180323]/75 to-transparent
    text-transparent bg-clip-text
    flex-none order-0 self-stretch flex-grow-0

    lg:w-auto lg:h-auto
    lg:text-[56px] lg:leading-[90px] lg:text-left
  "
>
  Revolutionizing How You Find Work
</h2>

          <p
  className="
    text-[16px] leading-[24px] font-normal font-['DM Sans'] text-[#180323]/75 text-center max-w-[360px] 
    flex-none  flex-grow-0
    md:text-[24px] md:leading-[38px] md:font-medium md:font-['Manrope'] md:max-w-[880px] md:text-left
  "
>
  Connect with the right roles, people, and companies faster than ever. Say goodbye to endless scrolling and hello to focused, meaningful opportunities.
</p>


        <div
  className="
    flex flex-col justify-center items-center
    px-4 py-4 gap-2
    w-[360px] h-[124px]
    bg-white rounded-lg
    flex-none order-3 flex-grow-0

    md:flex-row md:items-center md:gap-[48px] md:px-[24px] md:py-[8px] 
    md:w-[720px] md:h-[72px] md:rounded-full md:shadow-lg
  "
>
            <div className="relative flex justify-center items-center gap-2 w-[328px] h-[48px] px-4 py-[10px] bg-[#FBF9F9] rounded-sm">
  
  
  
  

  {/* Input wrapper */}
  <div className="flex items-center gap-2 w-[296px] h-[28px] flex-grow">
    <input
      type="email"
      placeholder="Enter your email to get job alerts..."
      className="w-full h-full text-[18px] leading-[28px] placeholder-[#78767D] text-[#78767D] font-['DM Sans'] font-normal tracking-wide outline-none text-center bg-transparent"
    />
  </div>
</div>

            <button
  className="
    flex flex-row justify-center items-center
    w-full max-w-[328px] h-[36px] 
    px-4 py-1.5 gap-2
    bg-[#1B1C1C] border-2 border-[#1B1C1C]
    rounded-sm
    font-['DM Sans'] font-medium text-base leading-6 tracking-wide text-white
    box-border

    md:w-auto md:h-auto md:px-6 md:py-3 md:text-[18px] md:rounded-full
  "
>
  {/* Left arrow icon - hidden by default */}
  <svg className="hidden md:block w-6 h-6 order-0 flex-shrink-0" /* icon props */ />
  
  <span className="order-1 flex items-center w-[78px] h-[24px] md:w-auto md:h-auto">
    Subscribe
  </span>
  
  {/* Right arrow icon - hidden by default */}
  <svg className="hidden md:block w-6 h-6 order-2 flex-shrink-0" /* icon props */ />
</button>


          </div>
          
        </div>
      </section>



      {/* Footer */}
     <footer className="w-full flex flex-col items-center bg-white mt-20">
      <div className="w-full lg:w-[1728px] flex flex-col items-center px-6 lg:px-[144px] py-[24px] lg:py-[80px]">
        {/* Main Content Wrapper */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-[64px] w-full lg:w-[1360px] h-auto lg:h-[376px]">
          {/* Left Info Column */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[368px] h-auto lg:h-[192px] text-center lg:text-left">
            {/* JobHunt Logo */}
            <div className="text-[40px] leading-[64px] font-extrabold font-manrope text-[#A10091]">JobHunt</div>
            {/* Spacer */}
            <div className="w-full h-2" />
            {/* Tagline */}
            <p className="w-full text-[#1B1C1C] text-[16px] leading-[24px] font-dmsans font-light tracking-[0.25px]">
              Connecting skilled professionals with the right opportunities in a smarter, faster way.
            </p>
            {/* Spacer */}
            <div className="w-full h-6" />
            {/* Social Icons */}
            <div className="flex flex-row gap-4 w-full justify-center lg:justify-start">
              {/* Facebook */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33331 13.3333V18.6667H13.3333V28H18.6666V18.6667H22.6666L24 13.3333H18.6666V10.6667C18.6666 10.313 18.8071 9.97391 19.0572 9.72386C19.3072 9.47381 19.6464 9.33333 20 9.33333H24V4H20C18.2319 4 16.5362 4.70238 15.2859 5.95262C14.0357 7.20286 13.3333 8.89856 13.3333 10.6667V13.3333H9.33331Z" stroke="#993D6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Instagram */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9.99967V10.013M5.33331 10.6663C5.33331 9.25185 5.89522 7.8953 6.89541 6.8951C7.8956 5.89491 9.25216 5.33301 10.6666 5.33301H21.3333C22.7478 5.33301 24.1044 5.89491 25.1045 6.8951C26.1047 7.8953 26.6666 9.25185 26.6666 10.6663V21.333C26.6666 22.7475 26.1047 24.104 25.1045 25.1042C24.1044 26.1044 22.7478 26.6663 21.3333 26.6663H10.6666C9.25216 26.6663 7.8956 26.1044 6.89541 25.1042C5.89522 24.104 5.33331 22.7475 5.33331 21.333V10.6663ZM12 15.9997C12 17.0605 12.4214 18.078 13.1716 18.8281C13.9217 19.5782 14.9391 19.9997 16 19.9997C17.0608 19.9997 18.0783 19.5782 18.8284 18.8281C19.5786 18.078 20 17.0605 20 15.9997C20 14.9388 19.5786 13.9214 18.8284 13.1712C18.0783 12.4211 17.0608 11.9997 16 11.9997C14.9391 11.9997 13.9217 12.4211 13.1716 13.1712C12.4214 13.9214 12 14.9388 12 15.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* X (Twitter) */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33331 26.6663L14.3573 17.6423M17.6373 14.3623L26.6666 5.33301M5.33331 5.33301L20.9773 26.6663H26.6666L11.0226 5.33301H5.33331Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* LinkedIn */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6666 14.6663V21.333M10.6666 10.6663V10.6797M16 21.333V14.6663M21.3333 21.333V17.333C21.3333 16.6258 21.0524 15.9475 20.5523 15.4474C20.0522 14.9473 19.3739 14.6663 18.6666 14.6663C17.9594 14.6663 17.2811 14.9473 16.781 15.4474C16.2809 15.9475 16 16.6258 16 17.333M5.33331 7.99967C5.33331 7.29243 5.61426 6.61415 6.11436 6.11406C6.61446 5.61396 7.29274 5.33301 7.99998 5.33301H24C24.7072 5.33301 25.3855 5.61396 25.8856 6.11406C26.3857 6.61415 26.6666 7.29243 26.6666 7.99967V23.9997C26.6666 24.7069 26.3857 25.3852 25.8856 25.8853C25.3855 26.3854 24.7072 26.6663 24 26.6663H7.99998C7.29274 26.6663 6.61446 26.3854 6.11436 25.8853C5.61426 25.3852 5.33331 24.7069 5.33331 23.9997V7.99967Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* YouTube */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66669 10.6663C2.66669 9.25185 3.22859 7.8953 4.22878 6.8951C5.22898 5.89491 6.58553 5.33301 8.00002 5.33301H24C25.4145 5.33301 26.7711 5.89491 27.7713 6.8951C28.7715 7.8953 29.3334 9.25185 29.3334 10.6663V21.333C29.3334 22.7475 28.7715 24.104 27.7713 25.1042C26.7711 26.1044 25.4145 26.6663 24 26.6663H8.00002C6.58553 26.6663 5.22898 26.1044 4.22878 25.1042C3.22859 24.104 2.66669 22.7475 2.66669 21.333V10.6663Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3334 11.9997L20 15.9997L13.3334 19.9997V11.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Discord */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6666 22.6663C20.6666 23.9997 22.6666 26.6663 23.3332 26.6663C25.3332 26.6663 27.1106 24.4437 27.9999 22.6663C28.8892 20.4437 28.6666 14.889 25.9999 7.33301C24.0572 5.97967 21.9999 5.54634 19.9999 5.33301L18.7039 7.89701C16.9158 7.58834 15.088 7.58834 13.2999 7.89701L11.9999 5.33301C9.99991 5.54634 7.94258 5.97967 5.99991 7.33301C3.33325 14.889 3.11058 20.4437 3.99991 22.6663C4.88925 24.4437 6.66658 26.6663 8.66658 26.6663C9.33324 26.6663 11.3332 23.9997 11.3332 22.6663M9.33331 21.9997C14 23.333 18 23.333 22.6666 21.9997M10.6666 15.9997C10.6666 16.3533 10.8071 16.6924 11.0572 16.9425C11.3072 17.1925 11.6464 17.333 12 17.333C12.3536 17.333 12.6927 17.1925 12.9428 16.9425C13.1928 16.6924 13.3333 16.3533 13.3333 15.9997C13.3333 15.6461 13.1928 15.3069 12.9428 15.0569C12.6927 14.8068 12.3536 14.6663 12 14.6663C11.6464 14.6663 11.3072 14.8068 11.0572 15.0569C10.8071 15.3069 10.6666 15.6461 10.6666 15.9997ZM18.6666 15.9997C18.6666 16.3533 18.8071 16.6924 19.0572 16.9425C19.3072 17.1925 19.6464 17.333 20 17.333C20.3536 17.333 20.6927 17.1925 20.9428 16.9425C21.1928 16.6924 21.3333 16.3533 21.3333 15.9997C21.3333 15.6461 21.1928 15.3069 20.9428 15.0569C20.6927 14.8068 20.3536 14.6663 20 14.6663C19.6464 14.6663 19.3072 14.8068 19.0572 15.0569C18.8071 15.3069 18.6666 15.6461 18.6666 15.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop-only spacer */}
          <div className="hidden lg:block w-[383px] h-[200px]" />

          {/* Services Column */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[200px] h-auto lg:h-[208px] text-center lg:text-left">
            <h3 className="text-[28px] lg:text-[40px] font-bold font-manrope text-[#1B1C1C]">Services</h3>
            <div className="h-4" />
            {["Who’s Hiring", "Resume Templates", "Resume Builder"].map((label, i) => (
              <div key={i} className="w-full lg:w-[168px] h-[40px] flex justify-center lg:justify-start items-center mb-1">
                <span className="text-[#993D6F] font-dmsans text-[16px] tracking-wide">{label}</span>
              </div>
            ))}
          </div>

          {/* Company Column */}
          <div className="flex flex-col items-center lg:items-start w-full lg:w-[217px] h-auto lg:h-[296px] text-center lg:text-left">
            <h3 className="w-full lg:w-[185px] text-[28px] lg:text-[40px] font-bold font-manrope text-[#1B1C1C]">Company</h3>
            {/* Spacer */}
            <div className="w-full h-4" />
            {[
              "About",
              "Get In Touch",
              "Privacy Policies",
              "Terms & Conditions",
            ].map((label, index) => (
              <div key={index} className="w-full lg:w-[185px] h-[40px] flex justify-center lg:justify-start items-center mb-1">
                <span className="text-[#993D6F] font-dmsans text-[16px] tracking-wide">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full lg:w-[1360px] flex justify-center items-center py-[24px] mt-8 border-t border-[#78767D] px-6 lg:px-[40px]">
          <p className="text-[14px] md:text-[18px] font-medium font-dmsans text-black text-center">
            © 2025. JobHunt Inc. • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
    </div>
    
  );
}
