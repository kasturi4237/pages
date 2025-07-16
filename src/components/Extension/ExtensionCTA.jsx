// src/components/Extension/ExtensionCTA.jsx
import React from 'react';

const ExtensionCTA = () => {
  return (
    <section className="relative w-[1648px] h-[544px] rounded-[40px] overflow-hidden px-[80px] py-[96px] flex flex-col gap-[161px] bg-gradient-to-br from-[#FFD8E7] to-[#FF7AE5] isolation-isolate">
      {/* Background Vectors */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => {
          const top = 60 - i * 2;
          const height = 596 - i * 10;
          return (
            <div
              key={i}
              className="absolute border border-white"
              style={{
                width: '1732px',
                height: `${height}px`,
                left: 'calc(50% - 866px - 42px)',
                top: `${top}px`,
              }}
            />
          );
        })}
      </div>

      {/* CTA Content */}
      <div className="relative z-10 flex flex-col w-[880px] h-[352px] gap-[40px]">
        <h2 className="w-[880px] h-[180px] font-manrope font-bold text-[56px] leading-[90px] tracking-[-0.25px] text-transparent bg-clip-text bg-gradient-to-b from-[#180323] via-[#180323bf] to-transparent">
          Accelerate Your Job Search. Instantly.
        </h2>
        <p className="w-[880px] h-[76px] font-manrope font-medium text-[24px] leading-[38px] text-[#180323bf]">
          Stop wasting time on tedious applications. Our extension fills forms and uploads resumes in a flash, so you can apply to more jobs, faster.
        </p>

        <button className="w-[313px] h-[56px] flex items-center justify-center gap-2 px-6 py-[14px] bg-[#1B1C1C] border-2 border-[#1B1C1C] text-white rounded-[4px] font-dmSans font-medium text-[18px] leading-[28px] tracking-[0.5px]">
          <span>Add to Browser - It's Free!</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ExtensionCTA;
