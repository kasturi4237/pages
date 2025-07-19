import React, { useState } from 'react';
import { UserProfileSection } from './BioComponents/UserProfileSection';
import { BioSection } from './BioComponents/BioSection';
import { KeySkillsSection } from './BioComponents/KeySkillsSection';
import { RolesSection } from './BioComponents/RolesSection';
import { JobTypeSection } from './BioComponents/JobTypeSection';
import { WorkExperienceSection } from './BioComponents/WorkExperienceSection';
import { JobLocationsSection } from './BioComponents/JobLocationsSection';
import { SalaryExpectationSection } from './BioComponents/SalaryExpectationSection';
import { Header } from './BioComponents/Header';

function Bio() {
  const [isExtensionOn, setIsExtensionOn] = useState(true);

  return (
    <div className="relative flex flex-col items-center pt-24 min-h-screen bg-gray-100"> {/* Frame 934 */}
      {/* Header - Frame 892 */}
      <Header isExtensionOn={isExtensionOn} setIsExtensionOn={setIsExtensionOn} />

      {/* Main Content Frame - Frame 899 */}
      <div className="w-96 h-[720px] bg-white shadow-light-5 rounded-md flex flex-col z-0 overflow-hidden">
        {/* Scrollable Content Area - Frame 897 */}
        <div className="w-full h-full overflow-y-scroll">
          {/* Frame 893 acts as the padding for content within the scrollable area */}
          <div className="pt-[199px] px-2 pb-4 flex flex-col items-center gap-2 relative">
            {/* These components correspond to the individual sections described */}
            <UserProfileSection />
            <BioSection />
            <KeySkillsSection />
            <RolesSection />
            <JobTypeSection />
            <WorkExperienceSection />
            <JobLocationsSection />
            <SalaryExpectationSection />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;