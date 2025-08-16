// import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import avatar from '../../assets/avatar.png';

import JobCard from './components/JobCard';
import JobCardDetail from './components/JobCardDetail';
import Pagination from './components/Pagination';

const jobData = [
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi',  bgColor: '#E6F5E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Arun Joshi',bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F5E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F5E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F2FF' },
  { company: 'Amazon', title: 'Arun Joshi', bgColor: '#E6F5E6' },
  {company: 'Amazon', title: 'Arun Joshi', bgColor: '#FFF2E6' },
  
];
const colors = ["#FFFFFF", "#CCFFCC", "#CCCCFF", "#FFF0CC", "#CCE5FF"];
 const navItems = [
    { name: "Dashboard", path: "/", outerWidth: "121px", innerWidth: "97px" },
    { name: "Find a Job", path: "/find-job", outerWidth: "116px", innerWidth: "92px" },
    { name: "Find Recruiters", path: "/recruiters", outerWidth: "159px", innerWidth: "145px" },
    { name: "CV Builder", path: "/cv-builder", outerWidth: "118px", innerWidth: "94px" },
    { name: "Job Tracker", path: "/job-tracker", outerWidth: "128px", innerWidth: "114px" },
    { name: "Extension", path: "/extension", outerWidth: "111px", innerWidth: "87px" },
  ];
const FindRecruiters = () => {
  
 
  return (
    <>
    
        <div
      className="
        relative flex flex-col items-center w-full min-h-screen
        bg-white text-[#1B1C1C] font-['Manrope'] isolation-isolate
        ">

          <div
        className="
          flex flex-col items-center w-full
          pt-20 sm:pt-24 xl:pt-[120px]
        "
      >
      {/* Navbar */}
            <nav
              className="
                fixed left-0 top-0 w-full
                flex flex-col items-center justify-center gap-4
                px-4 py-2 bg-white
                shadow-[0px_1px_3px_rgba(0,0,0,0.3),0px_4px_8px_3px_rgba(0,0,0,0.15)]
                z-[10]
                sm:flex-row sm:justify-between sm:px-6 sm:gap-6
                lg:justify-center lg:gap-8
                xl:gap-10 xl:px-10 xl:h-[100px]
              "
            >
              <div className="flex items-center justify-between w-full max-w-[1728px] h-full">
                {/* JobHunt Logo */}
                <div
                  className="
                    flex flex-row items-center p-0 w-[184px] h-[40px]
                    md:flex-col md:justify-center md:items-start
                    md:w-[303.5px] md:h-[84px] md:flex-grow
                  "
                >
                  <svg width="134" height="25" viewBox="0 0 134 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.072 24.48C5.23733 24.48 3.72267 24.0107 2.528 23.072C1.344 22.1333 0.501333 20.864 0 19.264L4.288 18.24C4.384 18.8267 4.69333 19.3387 5.216 19.776C5.73867 20.2027 6.29333 20.416 6.88 20.416C7.28533 20.416 7.71733 20.304 8.176 20.08C8.64533 19.856 8.98133 19.4987 9.184 19.008C9.312 18.6987 9.38667 18.32 9.408 17.872C9.42933 17.424 9.44 16.9067 9.44 16.32V0.959999H13.856V16.32C13.856 17.056 13.8507 17.696 13.84 18.24C13.84 18.784 13.7867 19.296 13.68 19.776C13.584 20.2453 13.3867 20.736 13.088 21.248C12.4373 22.3787 11.5893 23.2 10.544 23.712C9.49867 24.224 8.34133 24.48 7.072 24.48ZM26.4223 24.48C24.6836 24.48 23.1583 24.0907 21.8463 23.312C20.5343 22.5333 19.5103 21.4613 18.7743 20.096C18.0489 18.72 17.6863 17.1413 17.6863 15.36C17.6863 13.5573 18.0596 11.9733 18.8063 10.608C19.5529 9.232 20.5823 8.16 21.8943 7.392C23.2063 6.624 24.7156 6.24 26.4223 6.24C28.1609 6.24 29.6863 6.62933 30.9983 7.408C32.3209 8.18667 33.3503 9.264 34.0863 10.64C34.8223 12.0053 35.1903 13.5787 35.1903 15.36C35.1903 17.152 34.8169 18.736 34.0703 20.112C33.3343 21.4773 32.3049 22.5493 30.9823 23.328C29.6703 24.096 28.1503 24.48 26.4223 24.48ZM26.4223 20.416C27.8196 20.416 28.8596 19.9467 29.5423 19.008C30.2356 18.0587 30.5823 16.8427 30.5823 15.36C30.5823 13.824 30.2303 12.5973 29.5263 11.68C28.8329 10.7627 27.7983 10.304 26.4223 10.304C25.4729 10.304 24.6943 10.5173 24.0863 10.944C23.4783 11.3707 23.0249 11.9627 22.7263 12.72C22.4383 13.4773 22.2943 14.3573 22.2943 15.36C22.2943 16.9067 22.6409 18.1387 23.3343 19.056C24.0383 19.9627 25.0676 20.416 26.4223 20.416ZM47.1888 24.48C45.4714 24.48 44.0368 24.08 42.8848 23.28C41.7328 22.48 40.8634 21.392 40.2768 20.016C39.7008 18.64 39.4128 17.088 39.4128 15.36C39.4128 13.632 39.7008 12.08 40.2768 10.704C40.8528 9.328 41.7008 8.24 42.8208 7.44C43.9408 6.64 45.3221 6.24 46.9648 6.24C48.6181 6.24 50.0581 6.63467 51.2848 7.424C52.5114 8.21333 53.4608 9.296 54.1328 10.672C54.8154 12.0373 55.1568 13.6 55.1568 15.36C55.1568 17.088 54.8208 18.64 54.1488 20.016C53.4874 21.392 52.5594 22.48 51.3648 23.28C50.1701 24.08 48.7781 24.48 47.1888 24.48ZM38.6768 24V0.959999H43.0608V12.16H42.5168V24H38.6768ZM46.4848 20.608C47.4234 20.608 48.1914 20.3733 48.7888 19.904C49.3861 19.4347 49.8288 18.8053 50.1168 18.016C50.4048 17.216 50.5488 16.3307 50.5488 15.36C50.5488 14.4 50.3994 13.5253 50.1008 12.736C49.8021 11.936 49.3381 11.3013 48.7088 10.832C48.0901 10.352 47.2954 10.112 46.3248 10.112C45.4181 10.112 44.6821 10.3307 44.1168 10.768C43.5621 11.2053 43.1568 11.8187 42.9008 12.608C42.6448 13.3973 42.5168 14.3147 42.5168 15.36C42.5168 16.4053 42.6448 17.3227 42.9008 18.112C43.1568 18.9013 43.5728 19.5147 44.1488 19.952C44.7354 20.3893 45.5141 20.608 46.4848 20.608Z" fill="#A10091"/>
                    <path d="M58.6775 24V0.959999H63.0295V10.432H73.3335V0.959999H77.6855V24H73.3335V14.496H63.0295V24H58.6775ZM88.6095 24.512C87.2548 24.512 86.1508 24.2827 85.2975 23.824C84.4442 23.3653 83.7775 22.784 83.2975 22.08C82.8282 21.376 82.4922 20.6453 82.2895 19.888C82.0868 19.12 81.9642 18.4213 81.9215 17.792C81.8788 17.1627 81.8575 16.704 81.8575 16.416V6.72H86.2735V14.88C86.2735 15.2747 86.2948 15.7813 86.3375 16.4C86.3802 17.008 86.5135 17.6213 86.7375 18.24C86.9615 18.8587 87.3242 19.376 87.8255 19.792C88.3375 20.208 89.0575 20.416 89.9855 20.416C90.3588 20.416 90.7588 20.3573 91.1855 20.24C91.6122 20.1227 92.0122 19.8987 92.3855 19.568C92.7588 19.2267 93.0628 18.7307 93.2975 18.08C93.5428 17.4187 93.6655 16.5547 93.6655 15.488L96.1615 16.672C96.1615 18.0373 95.8842 19.3173 95.3295 20.512C94.7748 21.7067 93.9375 22.672 92.8175 23.408C91.7082 24.144 90.3055 24.512 88.6095 24.512ZM94.2095 24V18.272H93.6655V6.72H98.0495V24H94.2095ZM114.297 24V15.84C114.297 15.4453 114.276 14.944 114.233 14.336C114.191 13.7173 114.057 13.0987 113.833 12.48C113.609 11.8613 113.241 11.344 112.729 10.928C112.228 10.512 111.513 10.304 110.585 10.304C110.212 10.304 109.812 10.3627 109.385 10.48C108.959 10.5973 108.559 10.8267 108.185 11.168C107.812 11.4987 107.503 11.9893 107.257 12.64C107.023 13.2907 106.905 14.1547 106.905 15.232L104.409 14.048C104.409 12.6827 104.687 11.4027 105.241 10.208C105.796 9.01333 106.628 8.048 107.737 7.312C108.857 6.576 110.265 6.208 111.961 6.208C113.316 6.208 114.42 6.43733 115.273 6.896C116.127 7.35467 116.788 7.936 117.257 8.64C117.737 9.344 118.079 10.08 118.281 10.848C118.484 11.6053 118.607 12.2987 118.649 12.928C118.692 13.5573 118.713 14.016 118.713 14.304V24H114.297ZM102.489 24V6.72H106.361V12.448H106.905V24H102.489ZM133.233 24C132.038 24.224 130.865 24.32 129.713 24.288C128.572 24.2667 127.548 24.0693 126.641 23.696C125.745 23.312 125.062 22.6987 124.593 21.856C124.166 21.0667 123.942 20.2667 123.921 19.456C123.9 18.6347 123.889 17.7067 123.889 16.672V1.92H128.241V16.416C128.241 17.088 128.246 17.696 128.257 18.24C128.278 18.7733 128.39 19.2 128.593 19.52C128.977 20.128 129.59 20.4587 130.433 20.512C131.276 20.5653 132.209 20.5227 133.233 20.384V24ZM120.945 10.08V6.72H133.233V10.08H120.945Z" fill="#FC8EC5"/>
                  </svg>
                </div>
      
                {/* Nav Links - Desktop Only */}
                <nav className="hidden md:flex md:w-[753px] md:h-[84px] mx-auto md:items-center md:flex-grow">
                  <nav className="flex gap-4">
                    {navItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="
                          flex flex-row justify-center items-center
                          px-[12px] py-[8px] isolate flex-none order-0 flex-grow-0
                        "
                        style={{ width: item.outerWidth, height: '44px' }}
                      >
                        <span
                          className="
                            flex items-center justify-center
                            font-['DM_Sans'] font-medium text-[18px] leading-[28px]
                            tracking-[0.5px] text-center z-0
                            flex-none order-0 flex-grow-0
                          "
                          style={{ width: item.innerWidth, height: '28px' }}
                        >
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </nav>
                </nav>
      
                {/* Right side */}
                <div
                  className="
                    hidden md:flex md:flex-row md:justify-end md:items-center
                    md:gap-[10px] md:p-0
                    md:w-[303.5px] md:h-[72px]
                    md:order-2 md:flex-grow
                  "
                >
                  {/* notification icon */}
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.0509 37.2183C25.0709 38.2367 24.4025 39.9817 22.9642 40.0617C22.0278 40.1143 21.0908 39.9684 20.2148 39.6335C19.3387 39.2986 18.5433 38.7823 17.8809 38.1183C17.2175 37.4559 16.7016 36.6608 16.3669 35.785C16.0323 34.9093 15.8866 33.9727 15.9392 33.0367C16.0159 31.66 17.6142 30.99 18.6459 31.8267L18.7825 31.95L24.0509 37.2183Z" fill="#47464C"/>
                    <path d="M41.4522 14.5484C43.0522 16.1484 43.3422 18.565 42.3189 20.46L42.1689 20.715L42.1289 20.775C42.6952 22.8072 42.7721 24.9446 42.3532 27.0121C41.9343 29.0797 41.0315 31.0186 39.7189 32.67L39.4139 33.0417L39.0956 33.405L35.6406 36.8584L35.5072 37.045C34.8001 38.0739 34.5034 39.3301 34.6756 40.5667L34.7339 40.9017L34.8089 41.21C35.2489 42.7967 33.3872 43.9517 32.1672 42.9617L32.0239 42.8317L13.1689 23.9767C11.9572 22.765 13.1406 20.735 14.7906 21.1917C15.4938 21.3867 16.2313 21.4254 16.9511 21.305C17.6709 21.1847 18.3556 20.9082 18.9572 20.495L19.1506 20.3517L22.6522 16.8517C24.2636 15.3849 26.2098 14.3354 28.3206 13.795C30.4315 13.2546 32.6426 13.2397 34.7606 13.7517L35.2239 13.87L35.2856 13.8317C36.1571 13.2932 37.173 13.0351 38.1959 13.0923C39.2188 13.1496 40.1995 13.5193 41.0056 14.1517L41.2389 14.3467L41.4522 14.5484Z" fill="#47464C"/>
                    <path d="M24.0509 37.2183C25.0709 38.2367 24.4025 39.9817 22.9642 40.0617C22.0278 40.1143 21.0908 39.9684 20.2148 39.6335C19.3387 39.2986 18.5433 38.7823 17.8809 38.1183C17.2175 37.4559 16.7016 36.6608 16.3669 35.785C16.0323 34.9093 15.8866 33.9727 15.9392 33.0367C16.0159 31.66 17.6142 30.99 18.6459 31.8267L18.7825 31.95L24.0509 37.2183Z" stroke="#47464C"/>
                    <path d="M41.4522 14.5484C43.0522 16.1484 43.3422 18.565 42.3189 20.46L42.1689 20.715L42.1289 20.775C42.6952 22.8072 42.7721 24.9446 42.3532 27.0121C41.9343 29.0797 41.0315 31.0186 39.7189 32.67L39.4139 33.0417L39.0956 33.405L35.6406 36.8584L35.5072 37.045C34.8001 38.0739 34.5034 39.3301 34.6756 40.5667L34.7339 40.9017L34.8089 41.21C35.2489 42.7967 33.3872 43.9517 32.1672 42.9617L32.0239 42.8317L13.1689 23.9767C11.9572 22.765 13.1406 20.735 14.7906 21.1917C15.4938 21.3867 16.2313 21.4254 16.9511 21.305C17.6709 21.1847 18.3556 20.9082 18.9572 20.495L19.1506 20.3517L22.6522 16.8517C24.2636 15.3849 26.2098 14.3354 28.3206 13.795C30.4315 13.2546 32.6426 13.2397 34.7606 13.7517L35.2239 13.87L35.2856 13.8317C36.1571 13.2932 37.173 13.0351 38.1959 13.0923C39.2188 13.1496 40.1995 13.5193 41.0056 14.1517L41.2389 14.3467L41.4522 14.5484Z" stroke="#47464C"/>
                    <circle cx="42" cy="28" r="4" fill="#DC3545"/>
                  </svg>
      
                  <div
                    className="
                      flex flex-row justify-center items-center
                      px-[8px] pr-[24px] py-[8px] gap-[8px]
                      w-[194px] h-[72px]
                      flex-none order-1 flex-grow-0
                    "
                  >
                    <img src={avatar} alt="User Avatar" className="w-12 h-12 rounded-full" />
                    <svg width="58" height="52" viewBox="0 0 58 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.47023 15V4.92H2.49923V9.463H8.07123V4.92H9.09324V15H8.07123V10.45H2.49923V15H1.47023ZM14.2532 15.21C13.5159 15.21 12.8766 15.0467 12.3352 14.72C11.7986 14.3933 11.3809 13.9337 11.0822 13.341C10.7836 12.7483 10.6342 12.053 10.6342 11.255C10.6342 10.429 10.7812 9.715 11.0752 9.113C11.3692 8.511 11.7822 8.04667 12.3142 7.72C12.8509 7.39333 13.4832 7.23 14.2112 7.23C14.9579 7.23 15.5949 7.40267 16.1222 7.748C16.6496 8.08867 17.0486 8.57867 17.3192 9.218C17.5899 9.85733 17.7136 10.6203 17.6902 11.507H16.6402V11.143C16.6216 10.163 16.4092 9.42333 16.0032 8.924C15.6019 8.42467 15.0139 8.175 14.2392 8.175C13.4272 8.175 12.8042 8.43867 12.3702 8.966C11.9409 9.49333 11.7262 10.2447 11.7262 11.22C11.7262 12.172 11.9409 12.9117 12.3702 13.439C12.8042 13.9617 13.4179 14.223 14.2112 14.223C14.7526 14.223 15.2239 14.0993 15.6252 13.852C16.0312 13.6 16.3509 13.2383 16.5842 12.767L17.5432 13.138C17.2446 13.796 16.8036 14.307 16.2202 14.671C15.6416 15.0303 14.9859 15.21 14.2532 15.21ZM11.3622 11.507V10.646H17.1372V11.507H11.3622ZM20.185 18.36L21.648 14.391L21.669 15.567L18.358 7.44H19.45L22.166 14.237H21.718L24.224 7.44H25.274L21.214 18.36H20.185Z" fill="#180323"/>
                      <path d="M5.37041 45.36C3.99441 45.36 2.85841 45.008 1.96241 44.304C1.07441 43.6 0.442406 42.648 0.0664062 41.448L3.28241 40.68C3.35441 41.12 3.58641 41.504 3.97841 41.832C4.37041 42.152 4.78641 42.312 5.22641 42.312C5.53041 42.312 5.85441 42.228 6.19841 42.06C6.55041 41.892 6.80241 41.624 6.95441 41.256C7.05041 41.024 7.10641 40.74 7.12241 40.404C7.13841 40.068 7.14641 39.68 7.14641 39.24V27.72H10.4584V39.24C10.4584 39.792 10.4544 40.272 10.4464 40.68C10.4464 41.088 10.4064 41.472 10.3264 41.832C10.2544 42.184 10.1064 42.552 9.88241 42.936C9.39441 43.784 8.75841 44.4 7.97441 44.784C7.19041 45.168 6.32241 45.36 5.37041 45.36ZM22.8831 45V38.88C22.8831 38.584 22.8671 38.208 22.8351 37.752C22.8031 37.288 22.7031 36.824 22.5351 36.36C22.3671 35.896 22.0911 35.508 21.7071 35.196C21.3311 34.884 20.7951 34.728 20.0991 34.728C19.8191 34.728 19.5191 34.772 19.1991 34.86C18.8791 34.948 18.5791 35.12 18.2991 35.376C18.0191 35.624 17.7871 35.992 17.6031 36.48C17.4271 36.968 17.3391 37.616 17.3391 38.424L15.4671 37.536C15.4671 36.512 15.6751 35.552 16.0911 34.656C16.5071 33.76 17.1311 33.036 17.9631 32.484C18.8031 31.932 19.8591 31.656 21.1311 31.656C22.1471 31.656 22.9751 31.828 23.6151 32.172C24.2551 32.516 24.7511 32.952 25.1031 33.48C25.4631 34.008 25.7191 34.56 25.8711 35.136C26.0231 35.704 26.1151 36.224 26.1471 36.696C26.1791 37.168 26.1951 37.512 26.1951 37.728V45H22.8831ZM14.0271 45V27.72H16.9311V36.6H17.3391V45H14.0271ZM35.1409 45.36C33.8369 45.36 32.6929 45.068 31.7089 44.484C30.7249 43.9 29.9569 43.096 29.4049 42.072C28.8609 41.04 28.5889 39.856 28.5889 38.52C28.5889 37.168 28.8689 35.98 29.4289 34.956C29.9889 33.924 30.7609 33.12 31.7449 32.544C32.7289 31.968 33.8609 31.68 35.1409 31.68C36.4449 31.68 37.5889 31.972 38.5729 32.556C39.5649 33.14 40.3369 33.948 40.8889 34.98C41.4409 36.004 41.7169 37.184 41.7169 38.52C41.7169 39.864 41.4369 41.052 40.8769 42.084C40.3249 43.108 39.5529 43.912 38.5609 44.496C37.5769 45.072 36.4369 45.36 35.1409 45.36ZM35.1409 42.312C36.1889 42.312 36.9689 41.96 37.4809 41.256C38.0009 40.544 38.2609 39.632 38.2609 38.52C38.2609 37.368 37.9969 36.448 37.4689 35.76C36.9489 35.072 36.1729 34.728 35.1409 34.728C34.4289 34.728 33.8449 34.888 33.3889 35.208C32.9329 35.528 32.5929 35.972 32.3689 36.54C32.1529 37.108 32.0449 37.768 32.0449 38.52C32.0449 39.68 32.3049 40.604 32.8249 41.292C33.3529 41.972 34.1249 42.312 35.1409 42.312ZM53.1878 45V38.88C53.1878 38.584 53.1718 38.208 53.1398 37.752C53.1078 37.288 53.0078 36.824 52.8398 36.36C52.6718 35.896 52.3958 35.508 52.0118 35.196C51.6358 34.884 51.0998 34.728 50.4038 34.728C50.1238 34.728 49.8238 34.772 49.5038 34.86C49.1838 34.948 48.8838 35.12 48.6038 35.376C48.3238 35.624 48.0918 35.992 47.9078 36.48C47.7318 36.968 47.6438 37.616 47.6438 38.424L45.7718 37.536C45.7718 36.512 45.9798 35.552 46.3958 34.656C46.8118 33.76 47.4358 33.036 48.2678 32.484C49.1078 31.932 50.1638 31.656 51.4358 31.656C52.4518 31.656 53.2798 31.828 53.9198 32.172C54.5598 32.516 55.0558 32.952 55.4078 33.48C55.7678 34.008 56.0238 34.56 56.1758 35.136C56.3278 35.704 56.4198 36.224 56.4518 36.696C56.4838 37.168 56.4998 37.512 56.4998 37.728V45H53.1878ZM44.3318 45V32.04H47.2358V36.336H47.6438V45H44.3318Z" fill="#180323"/>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="#47464C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
      
                {/* Mobile Hamburger */}
                <button className="sm:hidden flex items-center justify-center w-10 h-10 border-2 border-[#B75589] rounded">
                  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 13.25C18.4142 13.25 18.75 13.5858 18.75 14C18.75 14.4142 18.4142 14.75 18 14.75H2C1.58579 14.75 1.25 14.4142 1.25 14C1.25 13.5858 1.58579 13.25 2 13.25H18ZM18 7.25C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H2C1.58579 8.75 1.25 8.41421 1.25 8C1.25 7.58579 1.58579 7.25 2 7.25H18ZM18 1.25C18.4142 1.25 18.75 1.58579 18.75 2C18.75 2.41421 18.4142 2.75 18 2.75H2C1.58579 2.75 1.25 2.41421 1.25 2C1.25 1.58579 1.58579 1.25 2 1.25H18Z" fill="#B75589" stroke="#B75589" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </nav>
      
        {/* Top Filter Bar */}
      <div
  className="
    flex items-center  relative w-full p-10 gap-6 bg-[#1B1C1C]
     flex-col isolation-isolate overflow-hidden
    py-10 sm:py-14 xl:py-10 self-stretch
  "
>
  <div className="flex items-center justify-center gap-6 w-full max-w-7xl flex-col md:flex-row">
         {/*COMPANY BOX */}
          <div
  className="
    flex items-center gap-2
    w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-[76px] p-2 px-4 bg-[#3A3939] rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    md:h-[64px] md:p-0 md:bg-transparent md:rounded-none md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
>
          {/*company search logo */}
       <div
  className="
    flex justify-center items-center p-2
    w-10 h-10 border-2 border-white rounded-full
    md:w-12 md:h-12
  "
>
    <div className="flex justify-center items-center w-6 h-6">
  <svg
    className="w-8 h-8"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M28 28L20 20M4 13.3333C4 14.559 4.24141 15.7727 4.71046 16.905C5.1795 18.0374 5.86699 19.0663 6.73367 19.933C7.60035 20.7997 8.62925 21.4872 9.76162 21.9562C10.894 22.4253 12.1077 22.6667 13.3333 22.6667C14.559 22.6667 15.7727 22.4253 16.905 21.9562C18.0374 21.4872 19.0663 20.7997 19.933 19.933C20.7997 19.0663 21.4872 18.0374 21.9562 16.905C22.4253 15.7727 22.6667 14.559 22.6667 13.3333C22.6667 12.1077 22.4253 10.894 21.9562 9.76162C21.4872 8.62925 20.7997 7.60035 19.933 6.73367C19.0663 5.86699 18.0374 5.1795 16.905 4.71046C15.7727 4.24141 14.559 4 13.3333 4C12.1077 4 10.894 4.24141 9.76162 4.71046C8.62925 5.1795 7.60035 5.86699 6.73367 6.73367C5.86699 7.60035 5.1795 8.62925 4.71046 9.76162C4.24141 10.894 4 12.1077 4 13.3333Z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

      </div>
           {/*company text */}
        <div
  className="
    flex flex-row items-center gap-2 p-4
    w-full h-[60px]
    md:h-[64px]
  "
>
         <p
  className="
    flex items-center text-white
    font-['DM_Sans'] font-normal text-[18px] leading-[28px] tracking-[0.5px]
    md:font-['Manrope'] md:font-medium md:text-[24px] md:leading-[32px] md:tracking-normal
    w-full h-[28px]
    md:h-[32px]
  "
>
  Company
</p>


              {/* Desktop down Icon */}
<svg
  className="hidden md:block"
  width="33"
  height="32"
  viewBox="0 0 33 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.66406 12L16.6641 20L24.6641 12"
    stroke="white"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

{/* Mobile Icon */}
<svg
  className="block md:hidden"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

             </div>
                 </div>

        {/* RECTANGLE */}
<svg
  className="hidden lg:block"
  width="11"
  height="72"
  viewBox="0 0 11 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_1572_110562)">
    <rect x="4.66406" width="2" height="64" fill="white" />
  </g>
  <defs>
    <filter
      id="filter0_d_1572_110562"
      x="0.664062"
      y="0"
      width="10"
      height="72"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1572_110562"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1572_110562"
        result="shape"
      />
    </filter>
  </defs>
</svg>



        {/*ROLE BOX */}
          <div
  className="
    flex flex-row items-center gap-2
    w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-[76px] p-2 px-4 bg-[#3A3939] rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    md:h-[64px] md:p-0 md:bg-transparent md:rounded-none  md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
>
<div
  className="
    box-border flex justify-center items-center p-2
    w-10 h-10 border-2 border-white rounded-full
    md:w-12 md:h-12
  "
>
  {/* Mobile icon */}
  <svg
    className="block md:hidden"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 7V5C8 4.46957 8.21071 3.96086 8.58579 3.58579C8.96086 3.21071 9.46957 3 10 3H14C14.5304 3 15.0391 3.21071 15.4142 3.58579C15.7893 3.96086 16 4.46957 16 5V7M12 12V12.01M3 13C5.79158 14.4067 8.87403 15.1394 12 15.1394C15.126 15.1394 18.2084 14.4067 21 13M3 9C3 8.46957 3.21071 7.96086 3.58579 7.58579C3.96086 7.21071 4.46957 7 5 7H19C19.5304 7 20.0391 7.21071 20.4142 7.58579C20.7893 7.96086 21 8.46957 21 9V18C21 18.5304 20.7893 19.0391 20.4142 19.4142C20.0391 19.7893 19.5304 20 19 20H5C4.46957 20 3.96086 19.7893 3.58579 19.4142C3.21071 19.0391 3 18.5304 3 18V9Z"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Desktop icon */}
  <svg
    className="hidden md:block"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.3307 9.33333V6.66667C11.3307 5.95942 11.6117 5.28115 12.1118 4.78105C12.6119 4.28095 13.2902 4 13.9974 4H19.3307C20.038 4 20.7162 4.28095 21.2163 4.78105C21.7164 5.28115 21.9974 5.95942 21.9974 6.66667V9.33333M16.6641 16V16.0133M4.66406 17.3333C8.38617 19.2089 12.4961 20.1859 16.6641 20.1859C20.832 20.1859 24.942 19.2089 28.6641 17.3333M4.66406 12C4.66406 11.2928 4.94501 10.6145 5.44511 10.1144C5.94521 9.61428 6.62349 9.33333 7.33073 9.33333H25.9974C26.7046 9.33333 27.3829 9.61428 27.883 10.1144C28.3831 10.6145 28.6641 11.2928 28.6641 12V24C28.6641 24.7072 28.3831 25.3855 27.883 25.8856C27.3829 26.3857 26.7046 26.6667 25.9974 26.6667H7.33073C6.62349 26.6667 5.94521 26.3857 5.44511 25.8856C4.94501 25.3855 4.66406 24.7072 4.66406 24V12Z"
      stroke="white"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

   <div
  className="
    flex flex-row items-center gap-2 p-4
    w-full h-[60px]
    lg:h-[64px]
  "
>
         <p
  className="
    flex items-center text-white
    font-['DM_Sans'] font-normal text-[18px] leading-[28px] tracking-[0.5px]
    md:font-['Manrope'] md:font-medium md:text-[24px] md:leading-[32px] md:tracking-normal
    w-full h-[28px]
    md:h-[32px]
  "
>
  Role
</p>
   {/* Desktop down Icon */}
<svg
  className="hidden lg:block"
  width="33"
  height="32"
  viewBox="0 0 33 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.66406 12L16.6641 20L24.6641 12"
    stroke="white"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

{/* Mobile Icon */}
<svg
  className="block lg:hidden"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
         </div>
         {/* RECTANGLE */}
<svg
  className="hidden lg:block"
  width="11"
  height="72"
  viewBox="0 0 11 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_1572_110562)">
    <rect x="4.66406" width="2" height="64" fill="white" />
  </g>
  <defs>
    <filter
      id="filter0_d_1572_110562"
      x="0.664062"
      y="0"
      width="10"
      height="72"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1572_110562"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1572_110562"
        result="shape"
      />
    </filter>
  </defs>
</svg>

        {/*LOCATION BOX */}
          <div
  className="
    flex flex-row items-center gap-2
    w-full max-w-[300px] md:max-w-[400px] lg:max-w-[450px] h-[76px] p-2 px-4 bg-[#3A3939] rounded-[4px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
    md:h-[64px] md:p-0 md:bg-transparent md:rounded-none  md:shadow-[0px_4px_4px_rgba(0,0,0,0.25)]
  "
>
  <div
  className="
    box-border flex justify-center items-center p-2
    w-10 h-10 border-2 border-white rounded-full
    md:w-12 md:h-12
  "
>
  {/* Mobile icon */}
  <svg
    className="block md:hidden"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 18.5L9 17M9 17L3 20V7L9 4M9 17V4M9 4L15 7M15 7L21 4V11.5M15 7V12.5M19 18V18.01M21.121 20.121C21.5407 19.7015 21.8265 19.167 21.9423 18.585C22.0581 18.003 21.9988 17.3998 21.7717 16.8516C21.5447 16.3033 21.1602 15.8347 20.6668 15.505C20.1734 15.1754 19.5934 14.9994 19 14.9994C18.4066 14.9994 17.8266 15.1754 17.3332 15.505C16.8398 15.8347 16.4553 16.3033 16.2283 16.8516C16.0012 17.3998 15.9419 18.003 16.0577 18.585C16.1735 19.167 16.4594 19.7015 16.879 20.121C17.297 20.54 18.004 21.166 19 22C20.051 21.11 20.759 20.484 21.121 20.121Z"
      stroke="white"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

  {/* Desktop icon */}
  <svg
    className="hidden md:block"
    width="33"
    height="32"
    viewBox="0 0 33 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3359 24.6667L12.3359 22.6667M12.3359 22.6667L4.33594 26.6667V9.33337L12.3359 5.33337M12.3359 22.6667V5.33337M12.3359 5.33337L20.3359 9.33337M20.3359 9.33337L28.3359 5.33337V15.3334M20.3359 9.33337V16.6667M25.6693 24V24.0134M28.4973 26.8281C29.0568 26.2687 29.4379 25.556 29.5923 24.78C29.7468 24.0041 29.6676 23.1997 29.3649 22.4688C29.0622 21.7378 28.5495 21.113 27.8917 20.6734C27.2339 20.2339 26.4604 19.9992 25.6693 19.9992C24.8781 19.9992 24.1047 20.2339 23.4469 20.6734C22.789 21.113 22.2764 21.7378 21.9736 22.4688C21.6709 23.1997 21.5918 24.0041 21.7462 24.78C21.9007 25.556 22.2817 26.2687 22.8413 26.8281C23.3986 27.3867 24.3413 28.2214 25.6693 29.3334C27.0706 28.1467 28.0146 27.3121 28.4973 26.8281Z"
      stroke="white"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

  <div
  className="
    flex flex-row items-center gap-2 p-4
    w-full h-[60px]
    lg:h-[64px]
  "
>
         <p
  className="
    flex items-center text-white
    font-['DM_Sans'] font-normal text-[18px] leading-[28px] tracking-[0.5px]
    md:font-['Manrope'] md:font-medium md:text-[24px] md:leading-[32px] md:tracking-normal
    w-full h-[28px]
    md:h-[32px]
  "
>
  Location
</p>
   {/* Desktop down Icon */}
<svg
  className="hidden lg:block"
  width="33"
  height="32"
  viewBox="0 0 33 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M8.66406 12L16.6641 20L24.6641 12"
    stroke="white"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

{/* Mobile Icon */}
<svg
  className="block lg:hidden"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M6 9L12 15L18 9"
    stroke="white"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</div>
           </div>

           {/* RECTANGLE svg*/}
<svg
  className="hidden lg:block"
  width="11"
  height="72"
  viewBox="0 0 11 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g filter="url(#filter0_d_1572_110562)">
    <rect x="4.66406" width="2" height="64" fill="white" />
  </g>
  <defs>
    <filter
      id="filter0_d_1572_110562"
      x="0.664062"
      y="0"
      width="10"
      height="72"
      filterUnits="userSpaceOnUse"
      colorInterpolationFilters="sRGB"
    >
      <feFlood floodOpacity="0" result="BackgroundImageFix" />
      <feColorMatrix
        in="SourceAlpha"
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha"
      />
      <feOffset dy="4" />
      <feGaussianBlur stdDeviation="2" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix
        type="matrix"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
      />
      <feBlend
        mode="normal"
        in2="BackgroundImageFix"
        result="effect1_dropShadow_1572_110562"
      />
      <feBlend
        mode="normal"
        in="SourceGraphic"
        in2="effect1_dropShadow_1572_110562"
        result="shape"
      />
    </filter>
  </defs>
</svg>


           {/* SEARCH BOX for desktop*/}

              <button class=" flex flex-row justify-center items-center md:py-5 md:px-8 md:gap-2 md:w-fit md:h-20 md:bg-white md:border-2 md:border-white md:rounded">
  <div class="hidden md:w-8 md:h-8"></div>

  <span class="font-manrope font-bold md:text-2xl md:leading-10 text-[#47464C]">
    Button
  </span>

  <div class="hidden md:w-8 md:h-8"></div>
</button>


           {/* SEARCH find recruiters BOX for mobile*/}
              <button class="overflow-hidden block md:hidden flex flex-row justify-center items-center py-3 px-6 gap-2 w-full max-w-sm h-14 bg-white border-2 border-white rounded-md">
  <div class="hidden w-6 h-6"></div>

  <span class="font-dmsans font-medium text-lg leading-7 tracking-wide text-neutral-800">
    Find Recruiters
  </span>

  <div class="hidden w-6 h-6"></div>
</button>

             </div>
  </div>







        {/* Main Section */}

       <div
  className="
    flex flex-col md:flex-row
    justify-between items-start
    gap-6 
    w-full max-w-[1648px] mx-auto
    h-auto relative
    py-4 sm:py-6 xl:py-8
    overflow-hidden
  "
>
  {/* Sidebar Filters */}
  <div
    className="
      hidden md:flex flex-col items-center
      gap-10
      flex-shrink-0
      md:w-[244px] max-w-[244px]
      h-auto
      overflow-hidden
    "
  >
            <div className="flex flex-col items-start p-0 w-full h-auto self-stretch">
            <div>
              <h3 className="w-full h-auto font-manrope font-bold text-[40px] leading-[64px] text-black self-stretch">
                 Filters</h3>
                 <div className="w-full h-auto flex flex-col items-start gap-2 self-stretch">
                  {/* Filter Section Container (Frame 494) */}
<div className="w-full h-auto flex flex-col items-start p-4 gap-2 self-stretch">
                 {/* Label Text - "Level" */}
<div className="w-full h-auto flex items-center font-dm-sans font-medium text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] self-stretch">
  Level
</div>
              {['Fresher', 'Entry-Level', 'Intermediate', 'Senior-Level', 'Expert'].map(level => (
                <label key={level} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{level}</span>
                </label>
              ))}
              </div>
            
            
           <div className="w-full h-auto flex flex-col items-start p-4 gap-2 self-stretch">
              <div className="w-full h-auto flex items-center font-dm-sans font-medium text-[18px] leading-[28px] tracking-[0.5px] text-[#47464C] self-stretch"> Job Hunt</div>
 

 

              {['Internship', 'Full Time', 'Part Time', 'Shift Work', 'Flexible Schedule', 'Hourly Basis'].map(type => (
                <label key={type} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{type}</span>
                </label>
              ))}
            </div>



          </div>

          </div>
           </div>
           </div>
            {/* Sidebar Filters mobile*/}
           <div className="flex flex-col items-end p-4 gap-6 w-full h-auto md:hidden">
  <button
    className="flex flex-row justify-center items-center px-4 py-[6px] gap-2 
               w-[104px] h-[36px] bg-white border-2 border-[#1B1C1C] rounded
               text-[#1B1C1C] text-[16px] font-medium leading-6 tracking-[0.25px]"
  >
    <svg className="w-6 h-6" fill="none" stroke="#1B1C1C" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M3 12h18M12 3l9 9-9 9"/>
    </svg>
    <span>Button</span>
  </button>
</div>

{/* only for desktop recruiters info */}

          {/* Desktop Layout - xl and up, show 12 cards */}
<div
  className="
    hidden xl:flex flex-col
    gap-6
    flex-1 min-w-0
    h-auto
    px-6 md:px-0
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3   /* max 3 per row */
      gap-6
      w-full
    "
  >
    {jobData.slice(0, 12).map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
  <Pagination />
</div>

{/* Tablet Layout - md to lg, show 6 cards */}
<div
  className="
    hidden md:flex xl:hidden flex-col
    gap-6
    flex-1 min-w-0
    h-auto
    px-6
  "
>
  <div
    className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3   /* max 3 per row */
      gap-6
      w-full
    "
  >
    {jobData.slice(0, 6).map((job, index) => (
      <JobCard key={index} {...job} />
    ))}
  </div>
  <Pagination />
</div>

{/* Mobile Layout - below md */}
<div
  className="
    flex flex-col items-center
    px-6 gap-6
    w-full h-auto
    md:hidden
  "
>
  {colors.map((color, index) => (
    <JobCardDetail key={index} bgColor={color} />
  ))}
  <Pagination />
</div>


          
        

        
     </div>
      
       {/* Footer */}
     <footer className="w-full flex flex-col items-center bg-white mt-20">
  <div className="w-full max-w-screen-2xl flex flex-col items-center px-6 lg:px-20 py-8 lg:py-20">
    {/* Main Content Wrapper */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-16 w-full">
      
      {/* Left Info Column */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/3 text-center lg:text-left">
        <h2 className="text-[32px] lg:text-[40px] font-extrabold font-manrope text-[#A10091]">
          JobHunt
        </h2>
        <p className="mt-2 text-[#1B1C1C] text-sm lg:text-base font-dmsans font-light tracking-wide">
          Connecting skilled professionals with the right opportunities in a smarter, faster way.
        </p>
        <div className="flex gap-4 mt-4 justify-center lg:justify-start">
            {/* Social Icons */}
            <div className="flex flex-row gap-4 w-full justify-center lg:justify-start">
              {/* Facebook */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.33331 13.3333V18.6667H13.3333V28H18.6666V18.6667H22.6666L24 13.3333H18.6666V10.6667C18.6666 10.313 18.8071 9.97391 19.0572 9.72386C19.3072 9.47381 19.6464 9.33333 20 9.33333H24V4H20C18.2319 4 16.5362 4.70238 15.2859 5.95262C14.0357 7.20286 13.3333 8.89856 13.3333 10.6667V13.3333H9.33331Z" stroke="#993D6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Instagram */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 9.99967V10.013M5.33331 10.6663C5.33331 9.25185 5.89522 7.8953 6.89541 6.8951C7.8956 5.89491 9.25216 5.33301 10.6666 5.33301H21.3333C22.7478 5.33301 24.1044 5.89491 25.1045 6.8951C26.1047 7.8953 26.6666 9.25185 26.6666 10.6663V21.333C26.6666 22.7475 26.1047 24.104 25.1045 25.1042C24.1044 26.1044 22.7478 26.6663 21.3333 26.6663H10.6666C9.25216 26.6663 7.8956 26.1044 6.89541 25.1042C5.89522 24.104 5.33331 22.7475 5.33331 21.333V10.6663ZM12 15.9997C12 17.0605 12.4214 18.078 13.1716 18.8281C13.9217 19.5782 14.9391 19.9997 16 19.9997C17.0608 19.9997 18.0783 19.5782 18.8284 18.8281C19.5786 18.078 20 17.0605 20 15.9997C20 14.9388 19.5786 13.9214 18.8284 13.1712C18.0783 12.4211 17.0608 11.9997 16 11.9997C14.9391 11.9997 13.9217 12.4211 13.1716 13.1712C12.4214 13.9214 12 14.9388 12 15.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* X (Twitter) */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33331 26.6663L14.3573 17.6423M17.6373 14.3623L26.6666 5.33301M5.33331 5.33301L20.9773 26.6663H26.6666L11.0226 5.33301H5.33331Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* LinkedIn */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.6666 14.6663V21.333M10.6666 10.6663V10.6797M16 21.333V14.6663M21.3333 21.333V17.333C21.3333 16.6258 21.0524 15.9475 20.5523 15.4474C20.0522 14.9473 19.3739 14.6663 18.6666 14.6663C17.9594 14.6663 17.2811 14.9473 16.781 15.4474C16.2809 15.9475 16 16.6258 16 17.333M5.33331 7.99967C5.33331 7.29243 5.61426 6.61415 6.11436 6.11406C6.61446 5.61396 7.29274 5.33301 7.99998 5.33301H24C24.7072 5.33301 25.3855 5.61396 25.8856 6.11406C26.3857 6.61415 26.6666 7.29243 26.6666 7.99967V23.9997C26.6666 24.7069 26.3857 25.3852 25.8856 25.8853C25.3855 26.3854 24.7072 26.6663 24 26.6663H7.99998C7.29274 26.6663 6.61446 26.3854 6.11436 25.8853C5.61426 25.3852 5.33331 24.7069 5.33331 23.9997V7.99967Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* YouTube */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.66669 10.6663C2.66669 9.25185 3.22859 7.8953 4.22878 6.8951C5.22898 5.89491 6.58553 5.33301 8.00002 5.33301H24C25.4145 5.33301 26.7711 5.89491 27.7713 6.8951C28.7715 7.8953 29.3334 9.25185 29.3334 10.6663V21.333C29.3334 22.7475 28.7715 24.104 27.7713 25.1042C26.7711 26.1044 25.4145 26.6663 24 26.6663H8.00002C6.58553 26.6663 5.22898 26.1044 4.22878 25.1042C3.22859 24.104 2.66669 22.7475 2.66669 21.333V10.6663Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M13.3334 11.9997L20 15.9997L13.3334 19.9997V11.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Discord */}
              <div className="flex justify-center items-center p-2 w-12 h-12 bg-white rounded-[4px]">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.6666 22.6663C20.6666 23.9997 22.6666 26.6663 23.3332 26.6663C25.3332 26.6663 27.1106 24.4437 27.9999 22.6663C28.8892 20.4437 28.6666 14.889 25.9999 7.33301C24.0572 5.97967 21.9999 5.54634 19.9999 5.33301L18.7039 7.89701C16.9158 7.58834 15.088 7.58834 13.2999 7.89701L11.9999 5.33301C9.99991 5.54634 7.94258 5.97967 5.99991 7.33301C3.33325 14.889 3.11058 20.4437 3.99991 22.6663C4.88925 24.4437 6.66658 26.6663 8.66658 26.6663C9.33324 26.6663 11.3332 23.9997 11.3332 22.6663M9.33331 21.9997C14 23.333 18 23.333 22.6666 21.9997M10.6666 15.9997C10.6666 16.3533 10.8071 16.6924 11.0572 16.9425C11.3072 17.1925 11.6464 17.333 12 17.333C12.3536 17.333 12.6927 17.1925 12.9428 16.9425C13.1928 16.6924 13.3333 16.3533 13.3333 15.9997C13.3333 15.6461 13.1928 15.3069 12.9428 15.0569C12.6927 14.8068 12.3536 14.6663 12 14.6663C11.6464 14.6663 11.3072 14.8068 11.0572 15.0569C10.8071 15.3069 10.6666 15.6461 10.6666 15.9997ZM18.6666 15.9997C18.6666 16.3533 18.8071 16.6924 19.0572 16.9425C19.3072 17.1925 19.6464 17.333 20 17.333C20.3536 17.333 20.6927 17.1925 20.9428 16.9425C21.1928 16.6924 21.3333 16.3533 21.3333 15.9997C21.3333 15.6461 21.1928 15.3069 20.9428 15.0569C20.6927 14.8068 20.3536 14.6663 20 14.6663C19.6464 14.6663 19.3072 14.8068 19.0572 15.0569C18.8071 15.3069 18.6666 15.6461 18.6666 15.9997Z" stroke="#993D6F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
          </div>

          {/* Desktop-only spacer */}
          <div className="hidden lg:block w-[383px]" />

                {/* Services Column */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/6 text-center lg:text-left">
        <h3 className="text-xl lg:text-2xl font-bold font-manrope text-[#1B1C1C]">
          Services
        </h3>
        <ul className="mt-2 space-y-1">
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Who’s Hiring</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Resume Templates</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Resume Builder</li>
        </ul>
      </div>

      {/* Company Column */}
      <div className="flex flex-col items-center lg:items-start w-full lg:w-1/6 text-center lg:text-left">
        <h3 className="text-xl lg:text-2xl font-bold font-manrope text-[#1B1C1C]">
          Company
        </h3>
        <ul className="mt-2 space-y-1">
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">About</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Get In Touch</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Privacy Policies</li>
          <li className="text-[#993D6F] font-dmsans text-sm lg:text-base">Terms & Conditions</li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom */}
    <div className="w-full flex justify-center items-center py-6 mt-8 border-t border-[#78767D]">
      <p className="text-xs lg:text-sm font-medium font-dmsans text-black text-center">
        © 2025 JobHunt Inc. • All Rights Reserved
      </p>
    </div>
  </div>
</footer>

      </div>
      </div>
    
    </>
  );
};


export default FindRecruiters;
