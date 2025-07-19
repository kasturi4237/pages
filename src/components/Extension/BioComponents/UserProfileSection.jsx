import React from 'react';
import { EditIcon, MapPinIcon, CalendarMonthIcon, PhoneIcon, MailIcon } from './Icons'; // Assuming Icons.jsx

export const UserProfileSection = () => {
  return (
    <div className="box-border flex flex-col items-center p-4 gap-2 w-96 border-b border-light-gray"> {/* Frame 206 */}
      <div className="flex flex-row items-center gap-4 w-88 h-14"> {/* Frame 211 */}
        <div className="box-border w-14 h-14 bg-gray-200 border-4 border-success-green rounded-full flex-none order-0 flex-grow-0"> {/* Profile Image/Avatar */}
          {/* Replace with actual image */}
        </div>
        <div className="flex flex-col items-start p-0 w-70 h-14 flex-none order-1 flex-grow-1"> {/* Frame 208 */}
          <div className="flex flex-row justify-center items-center p-0 gap-2.5 w-70 h-10 flex-none order-0 self-stretch flex-grow-0"> {/* Frame 918 */}
            <h2 className="w-auto h-9 font-manrope font-extrabold text-2xl leading-normal text-primary-pink flex items-center flex-1">Jhon Doe</h2> {/* Jhon Doe */}
            <button className="box-border flex flex-row justify-center items-center p-2 gap-2 w-10 h-10 bg-accent-pink border-2 border-accent-pink rounded-md flex-none order-1 self-stretch flex-grow-0"> {/* Button */}
              <EditIcon className="w-6 h-6 border-2 border-white" />
            </button>
          </div>
          <div className="flex flex-row items-center p-0 gap-0.5 w-70 h-4 flex-none order-1 self-stretch flex-grow-0"> {/* Frame 207 */}
            <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-text-gray flex items-center flex-none order-0 flex-grow-0">Profile last update</span> {/* Profile last update */}
            <span className="w-1.5 h-4 font-dm-sans text-xs leading-4 tracking-wider text-text-gray flex items-center flex-none order-1 flex-grow-0">-</span> {/* - */}
            <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-black flex items-center flex-none order-2 flex-grow-0">07/06/2025</span> {/* 07/06/2025 */}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start p-0 gap-1 w-88 h-19 flex-none order-1 self-stretch flex-grow-0"> {/* Frame 209 */}
        <div className="flex flex-row items-center p-0 gap-2 w-auto h-4 flex-none order-0 flex-grow-0"> {/* Frame 207 */}
          <div className="flex flex-row justify-center items-center p-0 w-4 h-4"> {/* Icon */}
            <MapPinIcon className="w-4 h-4 border-[1.6px] border-dark-gray" />
          </div>
          <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-black flex items-center flex-none order-1 flex-grow-0">Mumbai, India</span> {/* Mumbai, India */}
        </div>
        <div className="flex flex-row items-center p-0 gap-2 w-auto h-4 flex-none order-1 flex-grow-0"> {/* Frame 208 */}
          <div className="flex flex-row justify-center items-center p-0 w-4 h-4"> {/* Icon */}
            <CalendarMonthIcon className="w-4 h-4 border-[1.6px] border-dark-gray" />
          </div>
          <div className="flex flex-row items-center p-0 gap-0.5 w-auto h-4 flex-none order-1 flex-grow-0"> {/* Frame 214 */}
            <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-black flex items-center flex-none order-0 flex-grow-0">2.5</span> {/* 2.5 */}
            <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-black flex items-center flex-none order-1 flex-grow-0">Years</span> {/* Years */}
          </div>
        </div>
        <div className="flex flex-row items-center p-0 gap-2 w-auto h-4 flex-none order-2 flex-grow-0"> {/* Frame 207 */}
          <div className="flex flex-row justify-center items-center p-0 w-4 h-4"> {/* Icon */}
            <PhoneIcon className="w-4 h-4 border-[1.6px] border-dark-gray" />
          </div>
          <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-black flex items-center flex-none order-1 flex-grow-0">0123456789</span> {/* 0123456789 */}
        </div>
        <div className="flex flex-row items-center p-0 gap-2 w-auto h-4 flex-none order-3 flex-grow-0"> {/* Frame 208 */}
          <div className="flex flex-row justify-center items-center p-0 w-4 h-4"> {/* Icon */}
            <MailIcon className="w-4 h-4 border-[1.6px] border-dark-gray" />
          </div>
          <span className="w-auto h-4 font-dm-sans text-xs leading-4 tracking-wider text-black flex items-center flex-none order-1 flex-grow-0">example@gmail.com</span> {/* example@gmail.com */}
        </div>
      </div>
    </div>
  );
};