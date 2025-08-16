// Complete homepage matching the provided layout and Figma CSS
import React from 'react';

import { Link } from 'react-router-dom';
import heroPattern from '../../assets/hero-pattern.svg'; 
import analytics  from '../../assets/analytics.png';
import Navbar from '../../components/Navbar_home';
import FeaturesSection from './components/FeaturesSection';
import FeaturedCompanies from './components/FeaturedCompanies';
import HeroSection from './components/HeroSection';
import Footer from '../../components/Footer';
import WhyUsSection from './components/WhyUsSection';
import CTASection from './components/CTASection';


export default function HomePage() {
  return (
   <div
      className="
        relative flex flex-col items-center w-full min-h-screen
        bg-white text-[#1B1C1C] font-['Manrope'] isolation-isolate
        px-4 pb-8 gap-4
        sm:px-6 sm:pb-10 sm:gap-6
        md:px-8 md:pb-12 md:gap-8
        lg:px-12 lg:pb-14 lg:gap-10
        xl:max-w-[1728px] xl:mx-auto xl:pb-16" >
      

        {/* Header */} 
        <Navbar />
        <div
        className="
          flex flex-col items-center w-full
          " >
        <HeroSection/>
        <WhyUsSection/>
        <FeaturesSection />
        <FeaturedCompanies/>
        <CTASection/>
         <Footer/>
     
    </div>
    </div>
        
  );
}

        

    
     
      
    



        
      
     




    









          
   







      







    
      




     
