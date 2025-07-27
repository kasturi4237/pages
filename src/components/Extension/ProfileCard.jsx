import React from 'react';


const skills = [
  'Figma', 'Wireframing', 'Design Thinking', 'User Personas', 'HTML',
  'CSS', 'Bootstrap', 'JavaScript', 'React JS', 'Next JS', 'Node JS',
  'Express JS', 'MongoDB', 'Python', 'GitHub', 'SQL',
];

export default function ProfileCard() {
  return (
    <div className="w-[400px] h-[720px] p-6 rounded-[8px] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] bg-white overflow-hidden flex flex-col gap-4 border border-[#C8C5CD]">
      
      {/* Header: Avatar, Name, Edit Icon */}
      <div className="flex items-start justify-between">
        <div className="flex gap-4 items-start">
          <div className="w-12 h-12 rounded-full border border-[#993D6F] bg-gray-200" />
          <div className="flex flex-col">
            <span className="text-[#1B1C1E] font-bold text-[18px] leading-[24px]">Ashutosh Gupta</span>
            <span className="text-[#6B6B6B] text-[14px] leading-[20px]">Profile last updated: 07/06/2025</span>
          </div>
        </div>
        <button className="w-8 h-8 p-1 rounded-full border border-[#1B1C1C] flex items-center justify-center">
          {/* <PencilIcon className="w-5 h-5 text-[#1B1C1C]" /> */}
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-y-3 text-[#1B1C1C] text-sm font-normal">
        <div>
          <div className="text-[#6B6B6B] text-[12px] leading-[16px]">Location</div>
          <div className="text-[14px] leading-[20px] font-medium">Mumbai, India</div>
        </div>
        <div>
          <div className="text-[#6B6B6B] text-[12px] leading-[16px]">Experience</div>
          <div className="text-[14px] leading-[20px] font-medium">2.5 Years</div>
        </div>
        <div>
          <div className="text-[#6B6B6B] text-[12px] leading-[16px]">Phone</div>
          <div className="text-[14px] leading-[20px] font-medium">0123456789</div>
        </div>
        <div>
          <div className="text-[#6B6B6B] text-[12px] leading-[16px]">Email</div>
          <div className="text-[14px] leading-[20px] font-medium">example@gmail.com</div>
        </div>
      </div>

      <hr className="border-t border-[#C8C5CD]" />

      {/* Bio Section */}
      <div className="flex flex-col gap-2">
        <h2 className="text-[#993D6F] text-[18px] font-bold leading-[24px]">Bio</h2>
        <p className="text-[#1B1C1C] text-[14px] leading-[20px]">
          UI/UX Designer with 2.5 years of experience creating user-centered designs...
        </p>
      </div>

      <hr className="border-t border-[#C8C5CD]" />

      {/* Tags Section */}
      <div className="flex flex-col gap-2 overflow-y-auto pr-2">
        <h2 className="text-[#993D6F] text-[18px] font-bold leading-[24px]">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 h-6 inline-flex items-center justify-center border border-[#1B1C1C] rounded-[4px] text-[10px] font-bold leading-[16px] text-[#1B1C1C] font-['DM_Sans']"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
