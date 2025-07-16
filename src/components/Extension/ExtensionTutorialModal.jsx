import { useState } from "react";

const ExtensionTutorialModal = ({ show, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const tutorialSteps = [
    {
      title: "Welcome to our Extension ✨",
      content:
        "Autofill pulls from your profile. Note: Gray icons indicate unsupported jobs.",
    },
    {
      
      content:
        "Click on AUTOFILL to see the extension in action.",
    },
    {
      title: "Keyword Suggestions 🔍",
      content:
        "Get resume keyword tips based on job descriptions. Highlight missing but critical skills and terms recruiters care about.",
    },
    {
      title: "Track All Jobs in One Place 📋",
      content:
        "Every job you apply to is tracked automatically. View progress and history in your Job Tracker without manual effort.",
    },
    {
      title: "You're Ready! 🚀",
      content:
        "Start exploring and get hired faster with the extension. Good luck and happy job hunting!",
    },
  ];

  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === tutorialSteps.length - 1;

  if (!show) return null;

  return (
    <>
      {/* Overlay for the modal background */}
      <div
        className="fixed inset-0 bg-[#1B1C1E]/75 z-50"
        onClick={onClose} // Close modal when clicking outside
      />

      {/* Modal Container - Adjusted top position and shadow for precise design matching */}
      <div className="fixed top-[calc(50%-475.5px)] right-40 z-50">
        <div className="w-[480px] h-[244px] bg-white rounded-[8px] shadow-[0px_1px_3px_1px_rgba(0,0,0,0.15)] drop-shadow-[0px_1px_2px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center px-8 py-6">
          {/* Tutorial Title */}
          <h2 className="text-[24px] font-bold leading-[38px] font-[Manrope] text-center text-[#1B1C1C] mb-2">
            {tutorialSteps[currentStep].title}
          </h2>
          {/* Tutorial Content */}
          <p className="text-[#47464C] text-center font-[DM Sans] text-[18px] font-light leading-[28px] tracking-[0.5px] mb-4">
            {tutorialSteps[currentStep].content}
          </p>
          {/* Step Indicator */}
          <div className="text-xs text-gray-500 mb-3">
            Step {currentStep + 1} of {tutorialSteps.length}
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center w-full px-8">
            {/* Back/Close Button - Adjusted font size and line height */}
            <button
              onClick={isFirstStep ? onClose : () => setCurrentStep(currentStep - 1)}
              className="text-[#47464C] text-[16px] font-medium leading-[24px]"
            >
              {isFirstStep ? "Close" : "Back"}
            </button>
            {/* Next/Get Started Button - Adjusted font size, line height, and padding */}
            <button
              onClick={isLastStep ? onClose : () => setCurrentStep(currentStep + 1)}
              className="bg-[#B75589] text-white text-[16px] font-medium px-4 py-[6px] rounded-[4px] leading-[24px]"
            >
              {isLastStep ? "Get Started" : "Next"}
            </button>
            {/* Polygon 1 */}
            <svg
  width="75"
  height="88"
  viewBox="0 0 75 88"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="absolute right-[-40px] top-0 z-0"
>
  <path d="M75 44L0 0.69873V87.3013L75 44Z" fill="white" />
</svg>

          </div>
        </div>
      </div>

      {/* Drag track and Extension Side Icon - Visible only on the first step */}
      {isFirstStep && (
        
        <div className="absolute w-[90px] h-[1117px] right-0 top-0 flex flex-row justify-end items-start pt-[120px] pb-0 px-0 isolate z-10">
          {/* Extension Side Icon */}
          <div className="w-[90px] h-[100px] flex flex-row justify-end items-center py-[10px] pr-0 pl-[10px] isolate shadow-[0px_8px_12px_6px_rgba(0,0,0,0.15)] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.3)]">
            {/* Frame 924 (Purple background for logo) */}
            <div className="w-[80px] h-[80px] bg-[#AA1299] rounded-[20px_0px_0px_20px] flex justify-center items-center p-[8px]">
              {/* Logo Type 3 (SVG Icon) */}
              <div className="w-[64px] h-[64px] relative">
                {/* Vector (SVG Path) */}
                <svg
                  width="48.89"
                  height="55.47"
                  viewBox="0 0 48.89 55.47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-[calc(50%-48.89px/2)] top-[calc(50%-55.47px/2)]"
                >
                  {/* This path is a placeholder. Replace with the actual SVG path data for the logo if available. */}
                  <path d="M24.445 0L0 14.375L0 41.095L24.445 55.47L48.89 41.095L48.89 14.375L24.445 0Z" fill="white"/>
                </svg>
              </div>
            </div>
          </div>
          
        </div>
      )}
    </>
  );
};

export default ExtensionTutorialModal;
