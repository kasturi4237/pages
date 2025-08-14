import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Instant Installation',
    desc:
      'Get started in seconds! Add our lightweight extension to your browser with a single click and unlock a world of application efficiency.',
    width: 'w-[928px]'
  },
  {
    number: '2',
    title: 'Secure Account Sync',
    desc:
      'Seamlessly connect to your profile. Your data is securely linked, instantly activating personalized autofill and resume features.',
    width: 'w-[600px]'
  },
  {
    number: '3',
    title: 'Lightning-Fast Autofill',
    desc:
      'Say goodbye to tedious typing! Our intelligent autofill instantly populates application forms, saving you hours and ensuring accuracy.',
    width: 'w-[600px]'
  },
  {
    number: '4',
    title: 'Direct Resume Uploads',
    desc:
      'Effortlessly submit your tailored resume. Upload directly from our builder to any job portal, ensuring your perfect CV is always sent.',
    width: 'w-[928px]'
  },
  {
    number: '5',
    title: 'Effortless Tracker Sync',
    desc:
      'Never lose track again! Every application is automatically saved and organized in your Job Tracker, keeping your pipeline perfectly clear.',
    width: 'w-[928px]'
  },
  {
    number: '6',
    title: 'Optimize with Match Score',
    desc:
      'Gain a competitive edge! Instantly see how well your resume matches job descriptions, guiding you to optimize and boost your interview chances.',
    width: 'w-[600px]'
  },
];

const HowItWorks = () => {
  return (
    <section className="flex flex-col items-center py-[40px] bg-white w-[1648px] h-[1408px]">
      <h5 className="text-[24px] leading-[32px] font-bold font-['Manrope'] text-[#AA1299]">
        EFFORTLESS APPLICATION
      </h5>
      <div className="h-[8px]" />
      <h1 className="text-[72px] leading-[116px] text-center tracking-[-0.25px] font-bold font-['Manrope'] text-[#180323] w-[880px]">
        See How Our Extension Works!
      </h1>
      <div className="h-[56px]" />

      <div className="flex flex-row flex-wrap justify-center items-center content-center gap-[40px] p-[40px] bg-white w-[1648px] h-[1000px]">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className={`flex flex-col justify-end items-start p-[40px] bg-[#FFD7F1] rounded-[8px] ${step.width} h-[280px]`}
          >
            <div className="flex justify-center items-center p-[8px] w-[54px] h-[54px] rounded-full bg-[#840077]">
              <span className="text-white text-[24px] font-bold font-['Manrope'] leading-[38px]">
                {step.number}
              </span>
            </div>
            <div className="h-[16px]" />
            <h5 className="text-[28px] leading-[44px] font-extrabold font-['Manrope'] text-[#1B1C1C]">
              {step.title}
            </h5>
            <div className="h-[4px]" />
            <p className="text-[16px] leading-[24px] font-light font-['DM Sans'] text-[#1B1C1C] tracking-[0.25px]">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
