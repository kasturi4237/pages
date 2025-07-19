import React from 'react';

const jobTypes = ['Internship', 'Full-Time - Junior (1 to 2 years)'];

export const JobTypeSection = () => {
  return (
    <div className="box-border flex flex-col items-start p-4 gap-3 w-96 border-b border-light-gray"> {/* Frame 537 */}
      <h3 className="w-auto h-7 font-dm-sans font-medium text-lg leading-7 tracking-wider text-primary-pink">Job Type</h3> {/* Job Type */}
      <div className="flex flex-row flex-wrap items-start content-start p-0 gap-2 w-88 h-6 self-stretch"> {/* Frame 215 */}
        {jobTypes.map((type, index) => (
          <div key={index} className="box-border flex justify-center items-center py-1 px-3 border border-black-rock rounded-md"> {/* Tags */}
            <span className="font-dm-sans font-bold text-xs leading-4 tracking-wider text-black-rock">{type}</span> {/* Label */}
          </div>
        ))}
      </div>
    </div>
  );
};