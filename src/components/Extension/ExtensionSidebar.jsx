import React from 'react';
import { ChevronDown, File, FileText, Eye, Edit, AlertCircle, CheckCircle, Bolt, Bookmark } from 'lucide-react';

const ExtensionSidebar = () => {
  return (
    <aside className="absolute right-0 top-0 w-[400px] h-[1119px] flex flex-col items-center pt-[96px] z-[1]">
      <div className="w-[400px] h-[720px] flex flex-col items-center gap-[16px] bg-white shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15),0px_4px_4px_rgba(0,0,0,0.3)] rounded-[4px] overflow-y-scroll">
        <div className="w-[384px] p-[16px] gap-[10px] flex flex-col items-center bg-[#AA1299] rounded-[8px] shadow">
          <div className="flex items-center gap-[8px] w-full">
            <div className="w-[40px] h-[40px] bg-white flex items-center justify-center rounded-[4px]">
              <Bolt className="w-[24px] h-[24px] text-[#AA1299]" />
            </div>
            <span className="text-white text-[18px] leading-[28px] font-medium tracking-[0.5px]">Autofill this job application!</span>
          </div>
          <p className="text-[#FFD7F1] text-[16px] leading-[24px] tracking-[0.1px] w-full">Information is pulled from your profile</p>
          <button className="w-full h-[36px] flex justify-center items-center gap-[8px] bg-white border-2 border-white rounded-[4px]">
            <Bolt className="w-[24px] h-[24px] text-[#AA1299]" />
            <span className="text-[#AA1299] text-[16px] leading-[24px] font-medium tracking-[0.25px]">Autofill this page</span>
          </button>
        </div>

        <div className="w-[384px] p-[16px] gap-[10px] flex flex-col items-center bg-[#F3EDF7] rounded-[8px] shadow">
          <div className="flex items-start gap-[8px] w-full">
            <div className="w-[40px] h-[40px] bg-[#993D6F] flex items-center justify-center rounded-[4px]">
              <Bookmark className="w-[24px] h-[24px] text-white" />
            </div>
            <span className="text-[#1B1C1C] text-[18px] leading-[28px] font-medium tracking-[0.5px] w-[304px]">Want to save this job for tracking instead?</span>
          </div>
          <p className="text-[#47464C] text-[16px] leading-[24px] tracking-[0.1px] w-full">All necessary information is added to a card to add to the job trackers saved section.</p>
          <button className="w-full h-[36px] flex justify-center items-center gap-[8px] bg-[#B75589] border-2 border-[#B75589] rounded-[4px]">
            <span className="text-white text-[16px] leading-[24px] font-medium tracking-[0.25px]">Add job to tracker</span>
          </button>
        </div>

        <div className="w-[384px] h-[48px] bg-white rounded-[8px] shadow flex items-center justify-center px-[16px] gap-[8px]">
          <div className="flex items-center gap-[10px] w-[272px]">
            <div className="w-[32px] h-[32px] bg-[#FFD7F1] flex items-center justify-center rounded-[4px]">
              <File className="w-[24px] h-[24px] text-[#840077]" />
            </div>
            <span className="text-[#47464C] text-[14px] leading-[22px] font-medium tracking-[0.4px]">Resume</span>
          </div>
          <Eye className="w-[32px] h-[32px] text-[#AA1299]" />
          <ChevronDown className="w-[32px] h-[32px] text-[#78767D]" />
        </div>

        <div className="w-[384px] h-[48px] bg-white rounded-[8px] shadow flex items-center justify-center px-[16px] gap-[8px]">
          <div className="flex items-center gap-[10px] w-[312px]">
            <div className="w-[32px] h-[32px] bg-[#FFD7F1] flex items-center justify-center rounded-[4px]">
              <FileText className="w-[24px] h-[24px] text-[#840077]" />
            </div>
            <span className="text-[#47464C] text-[14px] leading-[22px] font-medium tracking-[0.4px]">Unique Questions</span>
          </div>
          <div className="flex items-center gap-[2px] w-[74px]">
            <CheckCircle className="w-[16px] h-[16px] text-[#78767D]" />
            <span className="text-[#47464C] text-[10px] leading-[16px] font-bold tracking-[0.4px]">Filled (0/1)</span>
          </div>
          <ChevronDown className="w-[32px] h-[32px] text-[#78767D]" />
        </div>
      </div>
    </aside>
  );
};

export default ExtensionSidebar;
