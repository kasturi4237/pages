import React from 'react';

const jobLocations = ['Mumbai', 'Pune', 'Remote in India'];

export const JobLocationsSection = () => {
  return (
    <div className="box-border flex flex-col items-start p-4 gap-3 w-96 border-b border-light-gray"> {/* Frame 541 */}
      <h3 className="w-auto h-7 font-dm-sans font-medium text-lg leading-7 tracking-wider text-primary-pink">Job Locations</h3> {/* Job Locations */}
      <div className="flex flex-row flex-wrap items-start content-start p-0 gap-2 w-88 h-6 self-stretch"> {/* Frame 215 */}
        {jobLocations.map((location, index) => (
          <div key={index} className="box-border flex justify-center items-center py-1 px-3 border border-black-rock rounded-md"> {/* Tags */}
            <span className="font-dm-sans font-bold text-xs leading-4 tracking-wider text-black-rock">{location}</span> {/* Label */}
          </div>
        ))}
      </div>
    </div>
  );
};