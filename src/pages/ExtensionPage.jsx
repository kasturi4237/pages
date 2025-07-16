// src/pages/ExtensionPage.jsx
import React, { useState } from "react";

// ✅ All imports at the top
import Hero from '../components/Extension/Hero';
import Benefits from '../components/Extension/Benefits';
import HowItWorks from '../components/Extension/HowItWorks';
import FAQs from '../components/Extension/FAQs';
import ExtensionCTA from '../components/Extension/ExtensionCTA';
import Navbar from '../components/Extension/Navbar';
import Footer from '../components/Extension/Footer';
import ExtensionTutorialModal from '../components/Extension/ExtensionTutorialModal'; // ✅ fix path if needed

const ExtensionPage = () => {
  const [showTutorial, setShowTutorial] = useState(true);

  return (
    <div className="flex flex-col items-center w-full max-w-[1728px] min-h-screen h-auto xl:h-[4694px] px-5 md:px-10 xl:px-[40px] pt-[140px] gap-[40px] mx-auto bg-white text-[#1B1C1C] font-['Manrope'] z-0">
      <Navbar />
      <Hero />
      <Benefits />
      <HowItWorks />
      <FAQs />
      <ExtensionCTA />
      <Footer />
      
      {/* ✅ Modal at the end */}
      <ExtensionTutorialModal
        show={showTutorial}
        onClose={() => setShowTutorial(false)}
      />
    </div>
  );
};

export default ExtensionPage;
