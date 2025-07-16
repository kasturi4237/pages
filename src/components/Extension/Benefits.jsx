import React from 'react';
import { Rocket, Upload, Zap } from 'lucide-react';

const benefits = [
  {
    icon: <Rocket className="w-[40px] h-[40px] text-[#840077]" strokeWidth={2.5} />,
    title: "Lightning-Fast Autofill",
    desc: "Automatically populate tedious application forms with your saved details in seconds.",
  },
  {
    icon: <Upload className="w-[40px] h-[40px] text-[#840077]" strokeWidth={1.5} />,
    title: "Seamless Resume Uploads",
    desc: "Upload your perfectly crafted resume directly from our builder to any job portal.",
  },
  {
    icon: <Zap className="w-[40px] h-[40px] text-[#840077]" strokeWidth={1.5} />,
    title: "Boost Your Productivity",
    desc: "Spend less time on repetitive tasks and more time on what truly matters: finding your dream job.",
  },
];

const Benefits = () => {
  return (
    <section className="w-[1648px] h-[308px] flex flex-row justify-center items-start gap-[40px] px-[40px]">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="w-[520px] h-[228px] bg-white rounded-[10px] flex flex-col items-start px-[40px] py-[32px]"
        >
          {/* Icon */}
          <div className="w-[56px] h-[56px] bg-[#FFD7F1] rounded-full flex items-center justify-center mb-[16px]">
            {benefit.icon}
          </div>

          {/* Title */}
          <h4 className="w-[440px] h-[52px] font-['Manrope'] font-bold text-[32px] leading-[52px] text-black">
            {benefit.title}
          </h4>

          {/* Description */}
          <p className="w-[440px] h-[56px] font-['DM Sans'] font-light text-[18px] leading-[28px] tracking-[0.5px] text-black mt-[8px]">
            {benefit.desc}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
