import React from 'react';

const skills = [
  'Figma', 'UX Research', 'UI/UX', 'Wireframing', 'Prototyping',
  'CSS/CSS3', 'HTML/CSS', 'Bootstrap', 'Design Thinking', 'Web Flow',
  'Framer', 'Responsive Web Design', 'Website Responsive Design',
  'JavaScript', 'User flow', 'UX Design'
];

export const KeySkillsSection = () => {
  return (
    <div className="box-border flex flex-col items-start p-4 gap-3 w-96 border-b border-light-gray"> {/* Frame 207 */}
      <h3 className="w-auto h-7 font-dm-sans font-medium text-lg leading-7 tracking-wider text-primary-pink">Key Skills</h3> {/* Key Skills */}
      <div className="flex flex-row flex-wrap items-start content-start p-0 gap-2 w-88 h-auto self-stretch"> {/* Frame 215 */}
        {skills.map((skill, index) => (
          <div key={index} className="box-border flex justify-center items-center py-1 px-3 border border-black-rock rounded-md"> {/* Tags */}
            <span className="font-dm-sans font-bold text-xs leading-4 tracking-wider text-black-rock">{skill}</span> {/* Label */}
          </div>
        ))}
      </div>
    </div>
  );
};