import React from 'react';

export const SalaryExpectationSection = () => {
  return (
    <div className="box-border flex flex-col items-start p-4 gap-3 w-96"> {/* Frame 540 */}
      <h3 className="w-auto h-7 font-dm-sans font-medium text-lg leading-7 tracking-wider text-primary-pink">Salary Expectation</h3> {/* Salary Expectation */}
      <div className="flex flex-row justify-center items-center p-0 gap-0.5 w-auto h-[18px]"> {/* Frame 812 */}
        <span className="w-auto h-[18px] font-manrope font-medium text-xs leading-[18px] tracking-wider text-black flex items-center">₹10,000</span> {/* ₹10,000 */}
        <span className="w-1.5 h-[18px] font-manrope font-medium text-xs leading-[18px] tracking-wider text-black flex items-center">-</span> {/* - */}
        <span className="w-auto h-[18px] font-manrope font-medium text-xs leading-[18px] tracking-wider text-black flex items-center">₹15,000</span> {/* ₹15,000 */}
      </div>
    </div>
  );
};