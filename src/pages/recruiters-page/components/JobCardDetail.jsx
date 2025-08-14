import React, { useState } from 'react';
import { Mail, BrandLinkedin, BrandWhatsapp } from 'tabler-icons-react';

const JobCardDetail = ({ onClose }) => {
  return (
    <div className="flex flex-col items-center p-2 pb-6 gap-6 w-[394px] h-[326px] bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.3),0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[32px]">
      {/* Card Top Section */}
      <div className="flex flex-col items-center p-6 gap-6 w-[378px] h-[214px] bg-[#E6F2FF] rounded-[24px]">
        {/* Header Row */}
        <div className="flex flex-row justify-center items-start gap-2 w-[330px] h-[62px]">
          {/* Company Logo */}
          <div className="flex justify-center items-center p-2 w-14 h-14 bg-white rounded">
            <img
              src="/Google__G__logo.svg"
              alt="Logo"
              className="w-10 h-10 rounded"
            />
          </div>

          {/* Text Block */}
          <div className="flex flex-col items-start w-[250px] h-[62px]">
            <div className="font-['DM_Sans'] text-[16px] font-medium leading-6 text-black">
              Amazon
            </div>
            <div className="font-['Manrope'] text-[24px] font-bold leading-[38px] text-black">
              Senior UI/UX Designer
            </div>
          </div>
        </div>

        {/* Contact Rows */}
        <div className="flex flex-col items-start gap-2 w-[330px] h-[80px]">
          {/* Email Row */}
          <div className="flex flex-row items-center gap-2 w-full h-9">
            <Mail size={24} stroke={1.8} />
            <div className="font-['DM_Sans'] text-[16px] font-normal leading-6 text-black">
              arun@gmail.com
            </div>
            <button className="ml-auto flex justify-center items-center px-4 py-1.5 w-[100px] h-[36px] rounded bg-transparent border-2 border-[#B75589]">
              <span className="font-['DM_Sans'] text-[16px] font-medium leading-6 text-[#B75589]">
                Email
              </span>
            </button>
          </div>

          {/* Phone Row */}
          <div className="flex flex-row items-center gap-2 w-full h-9">
            <BrandWhatsapp size={24} stroke={1.8} />
            <div className="font-['DM_Sans'] text-[16px] font-normal leading-6 text-black">
              99999-99999
            </div>
            <button className="ml-auto flex justify-center items-center px-4 py-1.5 w-[100px] h-[36px] rounded bg-transparent border-2 border-[#B75589]">
              <span className="font-['DM_Sans'] text-[16px] font-medium leading-6 text-[#B75589]">
                Message
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-row justify-between items-center px-4 gap-6 w-[378px] h-14">
        {/* Close Button */}
        <button onClick={onClose}
        className="flex justify-center items-center px-6 py-3 w-[98px] h-14 bg-white border-2 border-[#B75589] rounded">
          <span className="font-['DM_Sans'] text-[18px] font-medium text-[#B75589]">
            Close
          </span>
        </button>

        {/* LinkedIn Button */}
        <button className="flex justify-center items-center px-6 py-3 w-[209px] h-14 bg-[#B75589] border-2 border-[#B75589] rounded gap-2">
          <BrandLinkedin size={24} stroke={1.5} color="#fff" />
          <span className="font-['DM_Sans'] text-[18px] font-medium text-white">
            Go to LinkedIn
          </span>
        </button>
      </div>
    </div>
  );
};

export default JobCardDetail;
