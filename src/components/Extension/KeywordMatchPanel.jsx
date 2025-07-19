import React from 'react';
import { CheckCircle2, Lightbulb } from 'lucide-react';

const keywords = [
  { label: "Figma", matched: true },
  { label: "HubSpot", matched: true },
  { label: "Salesforce", matched: true },
  { label: "Python", matched: true },
  { label: "Tableau", matched: false },
  { label: "Git", matched: false },
  { label: "HTML", matched: false },
  { label: "SQL", matched: false },
  { label: "machine learning", matched: false },
  { label: "market analysis", matched: false },
  { label: "product marketing", matched: false },
  { label: "business strategy", matched: false },
];

const KeywordMatchPanel = () => {
  const matchedCount = keywords.filter(k => k.matched).length;
  const percentage = Math.round((matchedCount / keywords.length) * 100);

  return (
    <div className="absolute top-0 right-0 w-[400px] h-[1119px] flex flex-col items-center pt-[96px] z-[1]">
      <div className="w-[400px] h-[720px] bg-white rounded shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),_0px_4px_4px_rgba(0,0,0,0.3)] flex flex-col items-center gap-4 overflow-y-scroll">
        {/* Match Summary Card */}
        <div className="w-[384px] bg-white rounded-lg shadow-md p-4 flex flex-col items-center gap-2">
          {/* Title Row */}
          <div className="flex items-center gap-2 w-full">
            <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
              <CheckCircle2 size={24} className="text-[#AA1299]" />
            </div>
            <div className="flex gap-2 text-[16px] font-medium leading-6 tracking-wide">
              <span className="text-[#47464C]">Keyword Match -</span>
              <span className="text-[#FABD00]">Needs Work</span>
            </div>
          </div>

          {/* Score + Summary Row */}
          <div className="flex gap-6 items-center w-full">
            <p className="text-sm text-[#47464C] leading-[22px] w-[248px]">
              Your resume has {matchedCount} out of {keywords.length} keywords that appear in the job description.
            </p>
            <div className="relative w-20 h-20">
              <div className="absolute w-full h-full rounded-full bg-[#E3E2E2]" />
              <div className="absolute w-full h-full rounded-full bg-[#FABD00]" />
              <div className="absolute left-3 top-[29px] w-[56px] h-[22px] flex items-center justify-center text-sm font-bold text-black">
                {percentage}%
              </div>
            </div>
          </div>

          {/* Tip Box */}
          <div className="flex items-center gap-2 bg-[#F7F2FA] w-full p-[10px] rounded">
            <Lightbulb size={24} className="text-[#FABD00]" />
            <p className="text-sm text-[#47464C] leading-[22px] tracking-wide">
              Try to get your score above 70% to increase your chances!
            </p>
          </div>
        </div>

        {/* High Priority Keywords */}
        <div className="w-[384px] flex flex-col gap-2">
          <div className="bg-[#FFD8E7] rounded px-4 py-2 flex justify-between items-center">
            <div className="flex items-center gap-2 text-[#7C2457] font-medium text-[14px]">
              High Priority Keywords
              <CheckCircle2 size={20} className="text-[#47464C]" />
            </div>
            <div className="bg-white text-[#993D6F] text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 size={14} className="text-[#993D6F]" />
              {matchedCount}/{keywords.length}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 px-2 relative">
            {keywords.map((keyword, index) => (
              <div
                key={index}
                className={`w-[176px] h-[22px] flex items-center gap-2 absolute`}
                style={{
                  left: index % 2 === 0 ? 8 : 200,
                  top: Math.floor(index / 2) * 38 + 16,
                }}
              >
                <CheckCircle2 size={20} className={keyword.matched ? "text-[#AA1299]" : "text-[#78767D]"} />
                <span className="text-sm font-medium text-[#47464C]">{keyword.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeywordMatchPanel;
