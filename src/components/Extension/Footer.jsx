import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaDiscord,
} from 'react-icons/fa6';

const FooterLink = ({ label }) => (
  <div className="w-full h-10 bg-white rounded px-4 flex items-center">
    <span className="text-[#993D6F] text-[16px] leading-[24px] tracking-[0.25px] font-dmSans">{label}</span>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-[1728px] h-[492px] bg-white px-[144px] flex flex-col items-center">
      <div className="w-[1440px] h-[492px] flex flex-col items-center pt-[40px] px-[40px]">
        <div className="w-[1360px] h-[376px] flex flex-row items-start gap-[64px] py-[40px]">
          {/* Left Block */}
          <div className="w-[368px] flex flex-col">
            <h3 className="text-[#A10091] font-manrope font-extrabold text-[40px] leading-[64px]">JobHunt</h3>
            <div className="h-2" />
            <p className="text-[#1B1C1C] text-[16px] leading-[24px] tracking-[0.25px] font-dmSans font-light">
              Your Career Copilot. AI-assisted tools and resources to get hired at FAANG, top tech, and startup companies 10X faster.
            </p>
            <div className="h-6" />
            {/* Social Icons */}
            <div className="flex gap-4">
              {[FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube, FaDiscord].map((Icon, idx) => (
                <div key={idx} className="w-12 h-12 p-2 bg-white rounded flex justify-center items-center border border-[#993D6F]">
                  <Icon className="w-8 h-8 text-[#993D6F]" />
                </div>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="w-[383px] h-[200px] flex-shrink-0" />

          {/* Services */}
          <div className="flex flex-col w-[200px] px-4">
            <h3 className="text-[#1B1C1C] font-manrope font-bold text-[40px] leading-[64px]">Services</h3>
            <div className="h-4" />
            <FooterLink label="Who’s Hiring" />
            <div className="h-1" />
            <FooterLink label="Resume Templates" />
            <div className="h-1" />
            <FooterLink label="Resume Builder" />
          </div>

          {/* Company */}
          <div className="flex flex-col w-[217px] px-4">
            <h3 className="text-[#1B1C1C] font-manrope font-bold text-[40px] leading-[64px]">Company</h3>
            <div className="h-4" />
            <FooterLink label="About" />
            <div className="h-1" />
            <FooterLink label="Job Tracker" />
            <div className="h-1" />
            <FooterLink label="Get In Touch" />
            <div className="h-1" />
            <FooterLink label="Privacy Policies" />
            <div className="h-1" />
            <FooterLink label="Terms & Conditions" />
          </div>
        </div>

        {/* Divider + Copyright */}
        <div className="w-[1360px] h-[76px] border-t border-[#78767D] flex items-center justify-center px-[40px]">
          <p className="text-[18px] font-dmSans font-medium leading-[28px] tracking-[0.5px] text-black">
            © 2025. JobHunt Inc. • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
