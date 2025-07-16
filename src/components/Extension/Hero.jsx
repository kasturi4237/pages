// src/components/Extension/Hero.jsx
import React from 'react';
import { ChevronDown, Eye, Edit, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="flex flex-col items-center gap-[40px] isolate w-[1648px] h-[730px] px-[144px] py-[104px] rounded-[24px] hero-gradient">
       {/* Background SVG pattern */}
  <img
    src="src/assets/hero-pattern.svg"
    alt="Hero Background Pattern"
     className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1728px] h-[410px] z-0"
  />
  
  {/* Actual Hero Content */}
  <div className="flex flex-row justify-center items-center gap-[40px] w-[1360px] h-[522px] z-[1] self-stretch">

      <div className="flex flex-col justify-center items-start w-[660px] h-[522px] gap-0 order-0 flex-grow self-stretch">
  {/* Gradient Text Heading */}
  <h1 className="w-[660px] h-[288px] text-[88px] leading-[96px] font-bold font-['Manrope'] tracking-[-0.25px] bg-gradient-to-b from-[#1B1C1C] via-[#1B1C1C]/75 to-[#1B1C1C]/0 bg-clip-text text-transparent">
    Supercharge Your Job Applications
  </h1>

  {/* Spacer */}
  <div className="h-[24px]" />

  {/* Paragraph */}
  <p className="w-[660px] h-[114px] text-[24px] leading-[38px] font-medium text-[#1B1C1C] font-['DM_Sans']">
    Fill forms in a flash and upload your ATS-friendly resume directly from our CV builder,
    saving you hours and boosting your chances.
  </p>

  {/* Spacer */}
  <div className="h-[40px]" />

  {/* CTA Button */}
  <button className="flex flex-row justify-center items-center px-[24px] py-[14px] gap-[8px] w-[308px] h-[56px] bg-[#1B1C1C] border-[2px] border-[#1B1C1C] rounded-[4px]">
    {/* Optional Left Icon */}
    {/* <span className="hidden w-[24px] h-[24px]"></span> */}

    {/* Text */}
    <span className="w-[228px] h-[28px] text-white text-[18px] leading-[28px] font-medium tracking-[0.5px] font-['DM_Sans'] flex items-center">
      Add to Browser - It's Free
    </span>

    {/* Right Icon Placeholder */}
     <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-2"
  >
    <path
      d="M1 7H15M15 7L9 13M15 7L9 1"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  </button>
</div>



{/*RIGHT SIDE */}


    <div className="flex flex-row justify-center items-center px-[8px] w-[660px] h-[522px] order-1 self-stretch flex-grow">
      <div className="flex flex-col items-center p-0 gap-[11.6px] w-[290px] h-[522px] isolation-isolate bg-white shadow-[0px_8.7px_13.05px_6.525px_rgba(0,0,0,0.15),0px_4.35px_4.35px_rgba(0,0,0,0.3)] rounded-[10px] order-0 flex-grow-0">
        <div className="w-[290px] h-[522px] overflow-y-scroll order-0 flex-grow-0 z-0">
         <div className="flex flex-col items-center  left-0 top-0 pt-[144.275px] px-[5.8px] pb-[11.6px] gap-[17.4px] w-[290px] h-[1274.62px]">



          <div className="flex flex-col items-center p-[11.6px] gap-[7.25px] w-[278.4px] h-[111.4px] bg-[#AA1299] shadow-[0px_0.725px_1.45px_rgba(0,0,0,0.3),0px_0.725px_2.175px_0.725px_rgba(0,0,0,0.15)] rounded-[5.8px]">
  {/* Row with icon and heading */}
  <div className="flex flex-row items-center gap-[5.8px] w-[255.2px] h-[29px]">
    {/* Icon Box */}
    <div className="flex justify-center items-center p-[5.8px] w-[29px] h-[29px] bg-white rounded-[2.9px]">
      {/* Replace with actual bolt SVG */}
      <svg
        className="w-[17.4px] h-[17.4px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#AA1299"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
      </svg>
    </div>
    {/* Heading */}
    <div className="text-white text-[13.05px] font-medium leading-[20px] tracking-[0.3625px]">
      Autofill this job application!
    </div>
  </div>

  {/* Subtext */}
  <div className="w-[255.2px] h-[18px] text-[#FFD7F1] text-[11.6px] font-normal leading-[17px] tracking-[0.0725px]">
    Information is pulled from your profile
  </div>

  {/* Button */}
  <button className="flex flex-row justify-center items-center px-[11.6px] py-[4.35px] gap-[5.8px] w-[255.2px] h-[26.7px] bg-white border-[1.45px] border-white rounded-[4.35px]">
    <svg
      className="w-[17.4px] h-[17.4px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#AA1299"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M13 2L3 14h9l-1 8L21 10h-9l1-8z" />
    </svg>
    <span className="text-[#AA1299] text-[16px] font-medium leading-[24px] tracking-[0.25px]">
      Autofill this page
    </span>
  </button>
</div>
<div className="flex flex-col items-center p-[11.6px] gap-[7.25px] w-[278.4px] h-[140.4px] bg-[#F3EDF7] shadow-[0px_0.725px_1.45px_rgba(0,0,0,0.3),0px_0.725px_2.175px_0.725px_rgba(0,0,0,0.15)] rounded-[5.8px]">
  {/* Top Row: Icon + Heading */}
  <div className="flex flex-row items-start gap-[5.8px] w-[255.2px] h-[41px]">
    {/* Bookmark Icon Box */}
    <div className="flex justify-center items-center p-[5.8px] w-[29px] h-[29px] bg-[#993D6F] rounded-[2.9px]">
      {/* Replace with your bookmark icon SVG */}
      <svg
        className="w-[17.4px] h-[17.4px]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
      </svg>
    </div>
    <div className="w-[220.4px] h-[41px] text-[#1B1C1C] text-[13.05px] font-medium leading-[20px] tracking-[0.3625px] flex items-center">
      Want to save this job for tracking instead?
    </div>
  </div>

  {/* Description */}
  <p className="w-[255.2px] h-[35px] text-[#47464C] text-[11.6px] font-normal leading-[17px] tracking-[0.0725px]">
    All necessary information is added to a card to add to the job trackers saved section.
  </p>

  {/* Add to Tracker Button */}
  <button className="flex flex-row justify-center items-center px-[11.6px] py-[4.35px] gap-[5.8px] w-[255.2px] h-[26.7px] bg-[#B75589] border border-[#B75589] rounded-[4.35px]">
    <span className="text-white text-[16px] font-medium leading-[24px] tracking-[0.25px]">
      Add job to tracker
    </span>
  </button>
</div>


 <div className="w-[278.4px] h-[215.55px] flex flex-col items-center bg-white shadow-[0px_0.725px_1.45px_rgba(0,0,0,0.3),_0px_0.725px_2.175px_0.725px_rgba(0,0,0,0.15)] rounded-[5.8px]">
      
      {/* Top Row: Resume Heading */}
      <div className="w-full h-[34.8px] flex flex-row justify-center items-center px-[11.6px] py-[5.8px] gap-[5.8px]">
        <div className="flex flex-row items-center p-[2.9px] gap-[7.25px] w-[23.2px] h-[23.2px] bg-[#FFD7F1] rounded-[2.9px]">
          {/* Icon placeholder */}
          <div className="w-[17.4px] h-[17.4px] border border-[#840077]"></div>
        </div>
        <span className="text-[#47464C] text-[10.15px] leading-[16px] tracking-[0.29px] font-medium">Resume</span>
        {/* Alert icon */}
        <div className="w-[17.4px] h-[17.4px] bg-[#47464C]"></div>
        {/* Chevron down */}
        <div className="w-[23.2px] h-[23.2px] relative flex items-center justify-center">
          <ChevronDown className="w-[17.4px] h-[17.4px] text-[#78767D]" strokeWidth={1.16} />
        </div>
      </div>

      {/* Input Field */}
      <div className="w-[255.2px] mt-2 flex flex-col items-end">
        <div className="relative w-full h-[41.2px] flex items-center border border-[#C8C5CD] rounded-[2.9px] px-[11.6px] py-[11.6px]">
          <span className="opacity-0 text-[16px] text-[#47464C] tracking-[0.25px]">Type here...</span>
          <ChevronDown className="w-[17.4px] h-[17.4px] absolute right-10 text-[#47464C]" strokeWidth={1.45} />
          <Eye className="w-[17.4px] h-[17.4px] absolute right-[11.6px] text-[#47464C]" strokeWidth={1.45} />
          <span className="absolute left-[11.6px] top-1/2 -translate-y-1/2 text-[#47464C] text-[16px] tracking-[0.25px]">-- Select --</span>
        </div>
      </div>

      {/* Keyword Match Summary */}
      <div className="w-[255.2px] mt-3 bg-[#F7F2FA] rounded-[2.9px] px-[11.6px] py-[11.6px] flex flex-col items-start gap-[8.7px]">
        <div className="flex flex-row gap-[2.9px]">
          <span className="text-[#47464C] text-[11.6px] font-medium tracking-[0.18125px]">Keyword Match -</span>
          <span className="text-[#FABD00] text-[11.6px] font-medium tracking-[0.18125px]">Needs Work</span>
        </div>
        <div className="h-[4.35px]" />
        <div className="flex flex-row items-center gap-[2.9px]">
          <span className="text-[#47464C] text-[11.6px] font-light">Your resume has</span>
          <span className="text-[#AA1299] text-[11.6px] font-medium">4</span>
          <span className="text-[#AA1299] text-[11.6px] font-medium">out of</span>
          <span className="text-[#AA1299] text-[11.6px] font-medium">12</span>
          <span className="text-[#AA1299] text-[11.6px] font-medium">keywords</span>
          <ArrowRight className="w-[17.4px] h-[17.4px] text-[#AA1299]" strokeWidth={0.65} />
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[17.4px]" />

      {/* Improve Resume Button */}
      <button className="w-[232px] h-[26.7px] flex flex-row items-center justify-center gap-[5.8px] px-[11.6px] py-[4.35px] bg-[#B75589] border border-[#B75589] rounded-[4.35px]">
        <Edit className="w-[17.4px] h-[17.4px] text-white" strokeWidth={1.45} />
        <span className="text-white text-[16px] font-medium tracking-[0.25px]">Improve Resume</span>
      </button>
    </div>


    


        

        

        

        

        

        

        
        </div>
        </div>
      </div>
    </div>
  

      
      </div>
    </section>
  );
};

export default Hero;
