import React from 'react';

export const BioSection = () => {
  return (
    <div className="box-border flex flex-col items-start p-4 gap-3 w-96 border-b border-light-gray"> {/* Frame 208 */}
      <h3 className="w-auto h-7 font-dm-sans font-medium text-lg leading-7 tracking-wider text-primary-pink">Bio</h3> {/* Bio */}
      <p className="w-auto h-9 font-dm-sans text-xs leading-[18px] tracking-wider text-black self-stretch"> {/* User-focused UX designer... */}
        User-focused UX designer with 2+ years of experience in creating intuitive digital products. I specialize in simplifying complex interfaces and aligning user needs with business goals. Passionate about inclusive design and usability. Always curious, always learning.... <span className="text-blue-600 cursor-pointer">Read More</span>
      </p>
    </div>
  );
};