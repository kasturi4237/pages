// src/components/JobCard.jsx
import React from 'react';

function JobCard({ company, title, bgColor }) {
  return (
    <div className="flex flex-col items-center p-2 pb-6 gap-6 w-[394px] h-[202px] bg-white shadow-md rounded-[32px]">
      {/* Frame 473 */}
      <div
        className="flex flex-col items-center p-6 gap-6 w-[378px] h-[110px] rounded-3xl"
        style={{ backgroundColor: bgColor }}
      >
        {/* Frame 479 */}
        <div className="flex flex-row justify-center items-start p-0 gap-2 w-[330px] h-[62px] self-stretch">
          {/* Company Logo Icon - assuming Google logo is used for all */}
          <div className="flex flex-row justify-center items-center p-2 w-14 h-14 bg-white rounded-md">
            {/* Frame 929 - Google Logo SVG */}
            <div
              className="w-10 h-10 bg-no-repeat bg-center bg-contain"
              style={{ backgroundImage: 'url(/Google__G__logo.svg)' }}
              aria-label={`${company} logo`}
            ></div>
          </div>

          {/* Frame 486 */}
          <div className="flex flex-col items-start p-0 w-[250px] h-[62px] flex-grow">
            {/* Company Name */}
            <p className="w-[250px] h-6 font-['DM_Sans'] font-medium text-base leading-6 tracking-wider text-black">
              {company}
            </p>
            {/* Job Title */}
            <h6 className="w-[250px] h-[38px] font-['Manrope'] font-bold text-2xl leading-tight text-black">
              {title}
            </h6>
          </div>
        </div>
      </div>

      {/* Frame 476 - Salary and Apply Button */}
      <div className="flex flex-row items-center px-4 gap-6 w-[378px] h-9 self-stretch">
        {/* Frame 661 - Salary */}
        <div className="flex flex-row items-center p-0 gap-2 w-[208px] h-9 self-stretch flex-grow">
          {/* Icon (Mail icon) - assuming a generic icon for demonstration */}
          <div className="flex flex-row justify-center items-center p-0 w-6 h-6">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="5"
                width="18"
                height="14"
                rx="2"
                stroke="#000000"
                strokeWidth="1.8"
              />
              <path
                d="M3 7L12 13L21 7"
                stroke="#000000"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          {/* Monthly text */}
          <p className="w-32 h-6 font-['DM_Sans'] font-normal text-base leading-6 tracking-wider text-black">
            monthly
          </p>
        </div>

        {/* Button */}
        <button className="flex flex-row justify-center items-center px-4 py-1.5 gap-2 w-[114px] h-9 bg-black border-2 border-black rounded-md text-white font-['DM_Sans'] font-medium text-base leading-6 tracking-wider">
          Button
        </button>
      </div>
    </div>
  );
}

export default JobCard;