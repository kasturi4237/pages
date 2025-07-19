import React from 'react';
import { FlagIcon, XIcon, PencilMinusIcon, DiscountCheckIcon, UserCircleIcon } from './Icons'; // Assuming you create an Icons.jsx

export const Header = ({ isExtensionOn, setIsExtensionOn }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-[183px] bg-white flex flex-col items-center pt-4 px-2 gap-4 z-10"> {/* Frame 892 */}
      <div className="w-96 flex justify-between items-center px-0 gap-2.5"> {/* Frame 877 */}
        <h1 className="font-manrope font-extrabold text-2xl leading-loose text-primary-pink mx-auto">JobHunt</h1> {/* JobHunt */}
        <div className="flex justify-end items-center gap-2.5 mx-auto"> {/* Frame 876 */}
          <div className="flex justify-center items-center w-6 h-6"> {/* Icon */}
            <FlagIcon className="w-6 h-6 border-[0.9px] border-dark-gray" />
          </div>
          <div className="flex justify-center items-center w-6 h-6"> {/* Icon */}
            <XIcon className="w-6 h-6 border-[1.2px] border-dark-gray" />
          </div>
        </div>
      </div>

      <div className="w-96 flex items-center px-0 gap-4"> {/* Frame 883 */}
        <span className="flex-1 font-dm-sans font-medium text-lg leading-7 tracking-wider text-black">Turn On/Off the extension</span> {/* Turn On/Off the extension */}
        <div
          className={`box-border flex flex-row justify-end items-center p-1 w-10 h-6 rounded-full cursor-pointer transition-colors duration-300 ${isExtensionOn ? 'bg-primary-pink border-primary-pink' : 'bg-gray-300 border-gray-300'}`}
          onClick={() => setIsExtensionOn(!isExtensionOn)}
        > {/* Toggle Switch */}
          <div className="w-4 h-4 bg-white rounded-full"></div> {/* Ellipse 650 */}
        </div>
      </div>

      <div className="w-96 h-12 bg-off-white rounded-lg flex justify-center items-center p-2 gap-2.5"> {/* Frame 878 */}
        <div className="flex justify-center items-center py-1.5 px-3 gap-2 rounded-md flex-1"> {/* Tab - Autofill */}
          <PencilMinusIcon className="w-[18px] h-[18px] border-2 border-black-rock" />
          <span className="font-dm-sans font-medium text-sm leading-[22px] tracking-wider text-black-rock">Autofill</span>
        </div>
        <div className="flex justify-center items-center py-1.5 px-3 gap-2 rounded-md flex-1"> {/* Tab - Job Score */}
          <DiscountCheckIcon className="w-[18px] h-[18px] border-2 border-black-rock" />
          <span className="font-dm-sans font-medium text-sm leading-[22px] tracking-wider text-black-rock">Job Score</span>
        </div>
        <div className="flex justify-center items-center py-1.5 px-3 gap-2 rounded-md flex-1 bg-light-pink"> {/* Tab - Profile */}
          <UserCircleIcon className="w-[18px] h-[18px] border-2 border-text-dark-pink" />
          <span className="font-dm-sans font-medium text-sm leading-[22px] tracking-wider text-text-dark-pink">Profile</span>
        </div>
      </div>

      <div className="w-96 h-[5px] flex justify-center items-center py-0.5 px-6"> {/* Divider */}
        <div className="w-full h-px bg-gray-500 rounded-full"></div> {/* Rectangle 186 */}
      </div>
    </div>
  );
};