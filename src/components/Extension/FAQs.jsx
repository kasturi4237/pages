import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'Is my personal information safe and secure with this extension?',
    answer:
      "Absolutely. We prioritize your privacy and security above all else. All your data is encrypted and stored securely. The autofill feature only accesses information you've explicitly saved within your account and only when you trigger it on an application form. We never share or sell your data to third parties.",
  },
  {
    question: 'Does the extension work on all job application websites?',
    answer: null,
  },
  {
    question: 'Will the autofill feature always be 100% accurate?',
    answer: null,
  },
  {
    question: 'Is this browser extension truly free to use?',
    answer: null,
  },
];

export default function FAQsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-[1648px] h-[872px] flex flex-col items-center bg-white py-10">
      <h4 className="text-[#AA1299] text-[24px] font-bold leading-[32px]">FREQUENTLY ASKED QUESTIONS</h4>
      <div className="h-2"></div>
      <h1 className="text-center text-[#180323] text-[72px] leading-[116px] font-bold max-w-[880px]">
        Have Questions? We’ve Got The Answers!
      </h1>
      <div className="h-14"></div>
      <div className="flex flex-col gap-6 w-[880px]">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`w-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.3),_0px_1px_3px_1px_rgba(0,0,0,0.15)] rounded-[4px] flex flex-col`}
          >
            <button
              className="flex items-center justify-between px-6 py-4 gap-10 w-full"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-[24px] leading-[38px] font-bold text-[#1B1C1C] text-left">
                {item.question}
              </span>
              <span className="text-black">
                {activeIndex === index ? <ChevronUp size={40} /> : <ChevronDown size={40} />}
              </span>
            </button>
            {activeIndex === index && item.answer && (
              <div className="px-6 pb-6">
                <p className="text-[#47464C] text-[16px] leading-[24px] font-light tracking-[0.25px]">
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
