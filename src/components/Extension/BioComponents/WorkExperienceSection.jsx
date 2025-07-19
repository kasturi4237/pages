import React from 'react';

const workExperiences = [
  {
    title: 'UX Designer',
    company: 'Razorpay',
    type: 'Full-time',
    duration: 'Jan 2023 - Present',
  },
  {
    title: 'Product Designer (Intern)',
    company: 'CRED',
    type: 'Internship',
    duration: 'Jun 2022 - Dec 2022',
  },
  {
    title: 'Design Intern',
    company: 'Obvious Design Studio',
    type: 'Internship',
    duration: 'Jan 2022 - May 2022',
  },
];

export const WorkExperienceSection = () => {
  return (
    <div className="box-border flex flex-col items-start p-4 gap-3 w-96 border-b border-light-gray"> {/* Frame 209 */}
      <h3 className="w-auto h-7 font-dm-sans font-medium text-lg leading-7 tracking-wider text-primary-pink">Work Experience</h3> {/* Work Experience */}
      <div className="flex flex-col items-start p-0 gap-1 w-88 h-auto self-stretch"> {/* Frame 238 */}
        {workExperiences.map((exp, index) => (
          <div key={index} className={`box-border flex flex-col items-start p-0 pb-1 gap-1 w-88 h-auto self-stretch ${index < workExperiences.length - 1 ? 'border-b border-light-gray' : ''}`}> {/* Frame 235, 236, 237 */}
            <p className="w-88 h-6 font-dm-sans font-medium text-base leading-6 tracking-wider text-black self-stretch">{exp.title}</p> {/* Job Title */}
            <p className="w-88 h-[18px] font-manrope font-light text-xs leading-[18px] tracking-wider text-black self-stretch">{exp.company}</p> {/* Company */}
            <div className="flex flex-row items-center p-0 gap-1 w-88 h-4 self-stretch"> {/* Frame 236 */}
              <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-text-gray">{exp.type}</span> {/* Type */}
              <div className="w-px h-3.5 bg-border-gray rounded-full"></div> {/* Rectangle 77 */}
              <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-text-gray">{exp.duration}</span> {/* Duration */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};