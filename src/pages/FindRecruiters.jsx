// import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Pagination from '../components/recruiters/Pagination';
import JobCard from '../components/recruiters/JobCard';
import Footer from '../components/Extension/Footer';

const jobData = [
  { company: 'Amazon', title: 'Senior UI/UX Designer', bgColor: '#E6F2FF' },
  { company: 'Google', title: 'Frontend Developer', bgColor: '#E6F5E6' },
  { company: 'Meta', title: 'Backend Engineer', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Senior UI/UX Designer', bgColor: '#E6F2FF' },
  { company: 'Google', title: 'Frontend Developer', bgColor: '#E6F5E6' },
  { company: 'Meta', title: 'Backend Engineer', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Senior UI/UX Designer', bgColor: '#E6F2FF' },
  { company: 'Google', title: 'Frontend Developer', bgColor: '#E6F5E6' },
  { company: 'Meta', title: 'Backend Engineer', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Senior UI/UX Designer', bgColor: '#E6F2FF' },
  { company: 'Google', title: 'Frontend Developer', bgColor: '#E6F5E6' },
  { company: 'Meta', title: 'Backend Engineer', bgColor: '#FFF2E6' },
  
];
const FindRecruiters = () => {
  // const [recruiters, setRecruiters] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/scrapeRecruiters')
  //     .then(res => res.json())
  //     .then(data => {
  //       if (Array.isArray(data)) {
  //         setRecruiters(data);
  //       } else {
  //         setRecruiters([]);
  //       }
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setRecruiters([]);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <>
    
        <div className="flex flex-col items-center w-full min-h-screen xl:h-[1892px] px-5 sm:px-6 md:px-10 lg:px-[32px] xl:px-[40px] pt-[100px] gap-[40px]  bg-white text-[#1B1C1C] font-['Manrope'] z-0">

          
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

      
        {/* Top Filter Bar */}
<div className="flex flex-row items-center w-full h-[160px] px-5 sm:px-6 md:px-10 lg:px-[32px] xl:px-[40px] gap-[24px] bg-[#1B1C1C] mx-auto">
         {/*COMPANY BOX */}
          <div className="flex flex-row items-center gap-2 w-[450.67px] h-[64px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
       <div className="flex justify-center items-center w-[48px] h-[48px] p-2 border-2 border-white rounded-full flex-none">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 28L20 20M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
      </div>
        <div className="flex flex-row items-center p-4 gap-2 h-[64px] flex-grow order-1">
         <div className="w-[322.67px] h-8 font-['Manrope'] font-medium text-[24px] leading-8 flex items-center text-white flex-grow order-0">
        Company</div>

              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66406 12L16.6641 20L24.6641 12" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>
             </div>
                 </div>

        {/*RACTANGLE */}
         <svg width="11" height="72" viewBox="0 0 11 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1572_110562)">
<rect x="4.66406" width="2" height="64" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1572_110562" x="0.664062" y="0" width="10" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1572_110562"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1572_110562" result="shape"/>
</filter>
</defs>
         </svg>
        {/*ROLE BOX */}
          <div className="flex flex-row items-center gap-2 w-[450.67px] h-[64px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
  <div className="flex justify-center items-center w-[48px] h-[48px] p-2 border-2 border-white rounded-full flex-none">
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3307 9.33333V6.66667C11.3307 5.95942 11.6117 5.28115 12.1118 4.78105C12.6119 4.28095 13.2902 4 13.9974 4H19.3307C20.038 4 20.7162 4.28095 21.2163 4.78105C21.7164 5.28115 21.9974 5.95942 21.9974 6.66667V9.33333M16.6641 16V16.0133M4.66406 17.3333C8.38617 19.2089 12.4961 20.1859 16.6641 20.1859C20.832 20.1859 24.942 19.2089 28.6641 17.3333M4.66406 12C4.66406 11.2928 4.94501 10.6145 5.44511 10.1144C5.94521 9.61428 6.62349 9.33333 7.33073 9.33333H25.9974C26.7046 9.33333 27.3829 9.61428 27.883 10.1144C28.3831 10.6145 28.6641 11.2928 28.6641 12V24C28.6641 24.7072 28.3831 25.3855 27.883 25.8856C27.3829 26.3857 26.7046 26.6667 25.9974 26.6667H7.33073C6.62349 26.6667 5.94521 26.3857 5.44511 25.8856C4.94501 25.3855 4.66406 24.7072 4.66406 24V12Z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  </div>
  <div className="flex flex-row items-center p-4 gap-2 h-[64px] flex-grow order-1">
   <div className="w-[322.67px] h-8 font-['Manrope'] font-medium text-[24px] leading-8 flex items-center text-white flex-grow order-0">
  Role
</div>
   <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66406 12L16.6641 20L24.6641 12" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
         </div>
        {/*RACTANGLE */}
        <svg width="11" height="72" viewBox="0 0 11 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1572_110562)">
<rect x="4.66406" width="2" height="64" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1572_110562" x="0.664062" y="0" width="10" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1572_110562"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1572_110562" result="shape"/>
</filter>
</defs>
         </svg>

        {/*LOCATION BOX */}
          <div className="flex flex-row items-center gap-2 w-[450.67px] h-[64px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ">
  <div className="flex justify-center items-center w-[48px] h-[48px] p-2 border-2 border-white rounded-full flex-none">
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.3359 24.6667L12.3359 22.6667M12.3359 22.6667L4.33594 26.6667V9.33337L12.3359 5.33337M12.3359 22.6667V5.33337M12.3359 5.33337L20.3359 9.33337M20.3359 9.33337L28.3359 5.33337V15.3334M20.3359 9.33337V16.6667M25.6693 24V24.0134M28.4973 26.8281C29.0568 26.2687 29.4379 25.556 29.5923 24.78C29.7468 24.0041 29.6676 23.1997 29.3649 22.4688C29.0622 21.7378 28.5495 21.113 27.8917 20.6734C27.2339 20.2339 26.4604 19.9992 25.6693 19.9992C24.8781 19.9992 24.1047 20.2339 23.4469 20.6734C22.789 21.113 22.2764 21.7378 21.9736 22.4688C21.6709 23.1997 21.5918 24.0041 21.7462 24.78C21.9007 25.556 22.2817 26.2687 22.8413 26.8281C23.3986 27.3867 24.3413 28.2214 25.6693 29.3334C27.0706 28.1467 28.0146 27.3121 28.4973 26.8281Z" stroke="white" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


  </div>
  <div className="flex flex-row items-center p-4 gap-2 h-[64px] flex-grow order-1">
   <div className="w-[322.67px] h-8 font-['Manrope'] font-medium text-[24px] leading-8 flex items-center text-white flex-grow order-0">
  Location
</div>
   <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.66406 12L16.6641 20L24.6641 12" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
           </div>

          {/*RACTANGLE */}
          <svg width="11" height="72" viewBox="0 0 11 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1572_110562)">
<rect x="4.66406" width="2" height="64" fill="white"/>
</g>
<defs>
<filter id="filter0_d_1572_110562" x="0.664062" y="0" width="10" height="72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1572_110562"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1572_110562" result="shape"/>
</filter>
</defs>
          </svg>


           {/* SEARCH BOX */}

              <svg width="146" height="80" viewBox="0 0 146 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.40039 1H139.6C140.736 1 141.529 1.00041 142.146 1.05078C142.751 1.10023 143.099 1.19296 143.362 1.32715C143.927 1.61472 144.385 2.07347 144.673 2.6377C144.807 2.90105 144.9 3.24932 144.949 3.85449C145 4.47129 145 5.26396 145 6.40039V73.5996C145 74.736 145 75.5287 144.949 76.1455C144.9 76.7507 144.807 77.0989 144.673 77.3623C144.385 77.9265 143.927 78.3853 143.362 78.6729C143.099 78.807 142.751 78.8998 142.146 78.9492C141.529 78.9996 140.736 79 139.6 79H6.40039C5.26396 79 4.47129 78.9996 3.85449 78.9492C3.24933 78.8998 2.90105 78.807 2.6377 78.6729C2.07347 78.3853 1.61472 77.9265 1.32715 77.3623C1.19296 77.0989 1.10023 76.7507 1.05078 76.1455C1.00041 75.5287 1 74.736 1 73.5996V6.40039L1.00684 4.93262C1.01333 4.51531 1.02559 4.16295 1.05078 3.85449C1.10023 3.24932 1.19296 2.90105 1.32715 2.6377C1.61472 2.07347 2.07347 1.61472 2.6377 1.32715C2.90105 1.19296 3.24932 1.10023 3.85449 1.05078C4.47129 1.00041 5.26396 1 6.40039 1Z" fill="white"/>
<path d="M6.40039 1H139.6C140.736 1 141.529 1.00041 142.146 1.05078C142.751 1.10023 143.099 1.19296 143.362 1.32715C143.927 1.61472 144.385 2.07347 144.673 2.6377C144.807 2.90105 144.9 3.24932 144.949 3.85449C145 4.47129 145 5.26396 145 6.40039V73.5996C145 74.736 145 75.5287 144.949 76.1455C144.9 76.7507 144.807 77.0989 144.673 77.3623C144.385 77.9265 143.927 78.3853 143.362 78.6729C143.099 78.807 142.751 78.8998 142.146 78.9492C141.529 78.9996 140.736 79 139.6 79H6.40039C5.26396 79 4.47129 78.9996 3.85449 78.9492C3.24933 78.8998 2.90105 78.807 2.6377 78.6729C2.07347 78.3853 1.61472 77.9265 1.32715 77.3623C1.19296 77.0989 1.10023 76.7507 1.05078 76.1455C1.00041 75.5287 1 74.736 1 73.5996V6.40039L1.00684 4.93262C1.01333 4.51531 1.02559 4.16295 1.05078 3.85449C1.10023 3.24932 1.19296 2.90105 1.32715 2.6377C1.61472 2.07347 2.07347 1.61472 2.6377 1.32715C2.90105 1.19296 3.24932 1.10023 3.85449 1.05078C4.47129 1.00041 5.26396 1 6.40039 1Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
<path d="M40.076 49.36C38.812 49.36 37.672 49.14 36.656 48.7C35.648 48.26 34.816 47.632 34.16 46.816C33.512 45.992 33.1 45.016 32.924 43.888L35.924 43.432C36.18 44.456 36.704 45.248 37.496 45.808C38.296 46.368 39.216 46.648 40.256 46.648C40.872 46.648 41.452 46.552 41.996 46.36C42.54 46.168 42.98 45.888 43.316 45.52C43.66 45.152 43.832 44.7 43.832 44.164C43.832 43.924 43.792 43.704 43.712 43.504C43.632 43.296 43.512 43.112 43.352 42.952C43.2 42.792 43 42.648 42.752 42.52C42.512 42.384 42.232 42.268 41.912 42.172L37.448 40.852C37.064 40.74 36.648 40.592 36.2 40.408C35.76 40.216 35.34 39.956 34.94 39.628C34.548 39.292 34.224 38.868 33.968 38.356C33.72 37.836 33.596 37.196 33.596 36.436C33.596 35.324 33.876 34.392 34.436 33.64C35.004 32.88 35.764 32.312 36.716 31.936C37.676 31.56 38.74 31.376 39.908 31.384C41.092 31.392 42.148 31.596 43.076 31.996C44.004 32.388 44.78 32.96 45.404 33.712C46.028 34.464 46.468 35.372 46.724 36.436L43.616 36.976C43.488 36.368 43.24 35.852 42.872 35.428C42.512 34.996 42.068 34.668 41.54 34.444C41.02 34.22 40.464 34.1 39.872 34.084C39.296 34.076 38.76 34.164 38.264 34.348C37.776 34.524 37.38 34.78 37.076 35.116C36.78 35.452 36.632 35.844 36.632 36.292C36.632 36.716 36.76 37.064 37.016 37.336C37.272 37.6 37.588 37.812 37.964 37.972C38.348 38.124 38.736 38.252 39.128 38.356L42.224 39.22C42.648 39.332 43.124 39.484 43.652 39.676C44.18 39.868 44.688 40.136 45.176 40.48C45.664 40.824 46.064 41.276 46.376 41.836C46.696 42.396 46.856 43.108 46.856 43.972C46.856 44.868 46.668 45.656 46.292 46.336C45.924 47.008 45.424 47.568 44.792 48.016C44.16 48.464 43.436 48.8 42.62 49.024C41.812 49.248 40.964 49.36 40.076 49.36ZM55.3454 49.36C54.0334 49.36 52.8814 49.076 51.8894 48.508C50.8974 47.94 50.1214 47.152 49.5614 46.144C49.0094 45.136 48.7334 43.976 48.7334 42.664C48.7334 41.248 49.0054 40.02 49.5494 38.98C50.0934 37.932 50.8494 37.12 51.8174 36.544C52.7854 35.968 53.9054 35.68 55.1774 35.68C56.5214 35.68 57.6614 35.996 58.5974 36.628C59.5414 37.252 60.2414 38.136 60.6974 39.28C61.1534 40.424 61.3254 41.772 61.2134 43.324H58.3454V42.268C58.3374 40.86 58.0894 39.832 57.6014 39.184C57.1134 38.536 56.3454 38.212 55.2974 38.212C54.1134 38.212 53.2334 38.58 52.6574 39.316C52.0814 40.044 51.7934 41.112 51.7934 42.52C51.7934 43.832 52.0814 44.848 52.6574 45.568C53.2334 46.288 54.0734 46.648 55.1774 46.648C55.8894 46.648 56.5014 46.492 57.0134 46.18C57.5334 45.86 57.9334 45.4 58.2134 44.8L61.0694 45.664C60.5734 46.832 59.8054 47.74 58.7654 48.388C57.7334 49.036 56.5934 49.36 55.3454 49.36ZM50.8814 43.324V41.14H59.7974V43.324H50.8814ZM67.2806 49.36C66.3446 49.36 65.5526 49.184 64.9046 48.832C64.2566 48.472 63.7646 47.996 63.4286 47.404C63.1006 46.812 62.9366 46.16 62.9366 45.448C62.9366 44.824 63.0406 44.264 63.2486 43.768C63.4566 43.264 63.7766 42.832 64.2086 42.472C64.6406 42.104 65.2006 41.804 65.8886 41.572C66.4086 41.404 67.0166 41.252 67.7126 41.116C68.4166 40.98 69.1766 40.856 69.9926 40.744C70.8166 40.624 71.6766 40.496 72.5726 40.36L71.5406 40.948C71.5486 40.052 71.3486 39.392 70.9406 38.968C70.5326 38.544 69.8446 38.332 68.8766 38.332C68.2926 38.332 67.7286 38.468 67.1846 38.74C66.6406 39.012 66.2606 39.48 66.0446 40.144L63.4046 39.316C63.7246 38.22 64.3326 37.34 65.2286 36.676C66.1326 36.012 67.3486 35.68 68.8766 35.68C70.0286 35.68 71.0406 35.868 71.9126 36.244C72.7926 36.62 73.4446 37.236 73.8686 38.092C74.1006 38.548 74.2406 39.016 74.2886 39.496C74.3366 39.968 74.3606 40.484 74.3606 41.044V49H71.8286V46.192L72.2486 46.648C71.6646 47.584 70.9806 48.272 70.1966 48.712C69.4206 49.144 68.4486 49.36 67.2806 49.36ZM67.8566 47.056C68.5126 47.056 69.0726 46.94 69.5366 46.708C70.0006 46.476 70.3686 46.192 70.6406 45.856C70.9206 45.52 71.1086 45.204 71.2046 44.908C71.3566 44.54 71.4406 44.12 71.4566 43.648C71.4806 43.168 71.4926 42.78 71.4926 42.484L72.3806 42.748C71.5086 42.884 70.7606 43.004 70.1366 43.108C69.5126 43.212 68.9766 43.312 68.5286 43.408C68.0806 43.496 67.6846 43.596 67.3406 43.708C67.0046 43.828 66.7206 43.968 66.4886 44.128C66.2566 44.288 66.0766 44.472 65.9486 44.68C65.8286 44.888 65.7686 45.132 65.7686 45.412C65.7686 45.732 65.8486 46.016 66.0086 46.264C66.1686 46.504 66.4006 46.696 66.7046 46.84C67.0166 46.984 67.4006 47.056 67.8566 47.056ZM77.4847 49V36.04H80.0407V39.196L79.7287 38.788C79.8887 38.356 80.1007 37.964 80.3647 37.612C80.6367 37.252 80.9607 36.956 81.3367 36.724C81.6567 36.508 82.0087 36.34 82.3927 36.22C82.7847 36.092 83.1847 36.016 83.5927 35.992C84.0007 35.96 84.3967 35.976 84.7807 36.04V38.74C84.3967 38.628 83.9527 38.592 83.4487 38.632C82.9527 38.672 82.5047 38.812 82.1047 39.052C81.7047 39.268 81.3767 39.544 81.1207 39.88C80.8727 40.216 80.6887 40.6 80.5687 41.032C80.4487 41.456 80.3887 41.916 80.3887 42.412V49H77.4847ZM92.4643 49.36C91.1283 49.36 89.9883 49.064 89.0443 48.472C88.1003 47.872 87.3763 47.056 86.8723 46.024C86.3763 44.992 86.1243 43.824 86.1163 42.52C86.1243 41.192 86.3843 40.016 86.8963 38.992C87.4163 37.96 88.1523 37.152 89.1043 36.568C90.0563 35.976 91.1883 35.68 92.5003 35.68C93.9723 35.68 95.2163 36.052 96.2323 36.796C97.2563 37.532 97.9243 38.54 98.2363 39.82L95.3563 40.6C95.1323 39.904 94.7603 39.364 94.2403 38.98C93.7203 38.588 93.1283 38.392 92.4643 38.392C91.7123 38.392 91.0923 38.572 90.6043 38.932C90.1163 39.284 89.7563 39.772 89.5243 40.396C89.2923 41.02 89.1763 41.728 89.1763 42.52C89.1763 43.752 89.4523 44.748 90.0043 45.508C90.5563 46.268 91.3763 46.648 92.4643 46.648C93.2323 46.648 93.8363 46.472 94.2763 46.12C94.7243 45.768 95.0603 45.26 95.2843 44.596L98.2363 45.256C97.8363 46.576 97.1363 47.592 96.1363 48.304C95.1363 49.008 93.9123 49.36 92.4643 49.36ZM109.605 49V42.76C109.605 42.352 109.577 41.9 109.521 41.404C109.465 40.908 109.333 40.432 109.125 39.976C108.925 39.512 108.621 39.132 108.213 38.836C107.813 38.54 107.269 38.392 106.581 38.392C106.213 38.392 105.849 38.452 105.489 38.572C105.129 38.692 104.801 38.9 104.505 39.196C104.217 39.484 103.985 39.884 103.809 40.396C103.633 40.9 103.545 41.548 103.545 42.34L101.829 41.608C101.829 40.504 102.041 39.504 102.465 38.608C102.897 37.712 103.529 37 104.361 36.472C105.193 35.936 106.217 35.668 107.433 35.668C108.393 35.668 109.185 35.828 109.809 36.148C110.433 36.468 110.929 36.876 111.297 37.372C111.665 37.868 111.937 38.396 112.113 38.956C112.289 39.516 112.401 40.048 112.449 40.552C112.505 41.048 112.533 41.452 112.533 41.764V49H109.605ZM100.617 49V31.72H103.197V40.816H103.545V49H100.617Z" fill="#47464C"/>
              </svg>
</div>







        {/* Main Section */}

        <div className="flex flex-row justify-center items-start p-[40px] gap-[24px] w-[1728px] h-[1060px]">
        
          {/* Sidebar Filters */}
          <div className="flex flex-col items-center p-0 gap-[40px] w-[394px] h-[980px] self-stretch">
            <div className="flex flex-col items-start p-0 w-[394px] h-[648px] self-stretch">
            <div>
              <h3 className="w-[394px] h-[64px] font-manrope font-bold text-[40px] leading-[64px] text-black self-stretch">
                 Filters</h3>
                 <div className="w-[394px] h-[584px] flex flex-col items-start gap-2 self-stretch">
                  {/* Filter Section Container (Frame 494) */}
<div className="w-[394px] h-[268px] flex flex-col items-start p-4 gap-2 self-stretch">
                 {/* Label Text - "Level" */}
<div className="w-[362px] h-[28px] flex items-center font-dm-sans font-medium text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] self-stretch">
  Level
</div>
              {['Fresher', 'Entry-Level', 'Intermediate', 'Senior-Level', 'Expert'].map(level => (
                <label key={level} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{level}</span>
                </label>
              ))}
              </div>
            
            
           <div className="w-[394px] h-[268px] flex flex-col items-start p-4 gap-2 self-stretch">
              <div className="w-[362px] h-[28px] flex items-center font-dm-sans font-medium text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] self-stretch"> Job Hunt</div>
 

 

              {['Internship', 'Full Time', 'Part Time', 'Shift Work', 'Flexible Schedule', 'Hourly Basis'].map(type => (
                <label key={type} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{type}</span>
                </label>
              ))}
            </div>



          </div>

          </div>
           </div>
           </div>

            






          <div className="flex flex-col items-center gap-6 w-[1230px] h-[980px] mx-auto">
      <div className="flex flex-wrap items-start gap-6 w-full h-[880px]">
        {jobData.map((job, index) => (
          <JobCard key={index} {...job} />
        ))}
      </div>
      <Pagination />
    </div>

          
        

        
     </div>
      
      {/* Footer */}
      <Footer/>
    </div>
    </>
  );
};


export default FindRecruiters;
