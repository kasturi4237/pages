import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const FindRecruiters = () => {
  const [recruiters, setRecruiters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/scrapeRecruiters')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setRecruiters(data);
        } else {
          setRecruiters([]);
        }
        setLoading(false);
      })
      .catch(() => {
        setRecruiters([]);
        setLoading(false);
      });
  }, []);

  return (
    <>
    

      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50 px-10 py-4">
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-[32px] font-extrabold text-[#A10091] leading-[52px]">JobHunt</h1>
            <nav className="flex gap-6">
              {['Find a Job', 'Find Recruiters', 'CV Builder', 'Job Tracker', 'Extension'].map((item, i) => (
                <a key={i} href="#" className="text-[18px] font-medium text-[#1B1C1E] hover:text-[#AA1299]">
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex gap-4 items-center">
            <button className="px-6 py-3 border-2 border-[#1B1C1C] text-[#1B1C1C] text-[18px] font-medium rounded">
              Login
            </button>
            <button className="px-6 py-3 bg-[#1B1C1C] text-white text-[18px] font-medium border-2 border-[#1B1C1C] rounded">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main className="pt-[100px] bg-white">
        {/* Top Filter Bar */}
        <section className="bg-[#1B1C1C] text-white px-10 py-6 w-full">
          <div className="max-w-[1440px] mx-auto flex flex-wrap items-center justify-between gap-4">
            {['Company', 'Role', 'Location'].map(label => (
              <div
                key={label}
                className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded w-[220px] cursor-pointer"
              >
                <span className="font-medium">{label}</span>
                <ChevronDown className="w-4 h-4 ml-auto" />
              </div>
            ))}
            <button className="bg-white text-[#1B1C1C] px-6 py-2 rounded text-sm font-semibold border border-[#1B1C1C]">
              Search
            </button>
          </div>
        </section>

        {/* Main Section */}
        <section className="max-w-[1440px] mx-auto flex gap-10 px-10 py-16">
          {/* Sidebar Filters */}
          <aside className="w-[250px] space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-[#1B1C1E] mb-4">Filters</h3>
              {['Fresher', 'Entry-Level', 'Intermediate', 'Senior-Level', 'Expert'].map(level => (
                <label key={level} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{level}</span>
                </label>
              ))}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#1B1C1E] mb-4">Job Type</h3>
              {['Internship', 'Full Time', 'Part Time', 'Shift Work', 'Flexible Schedule', 'Hourly Basis'].map(type => (
                <label key={type} className="flex items-center space-x-2 text-[#1B1C1E] mb-2">
                  <input type="checkbox" className="accent-[#AA1299] w-4 h-4" />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </aside>

          {/* Recruiters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex-1">
            {loading ? (
              <p className="col-span-full text-center text-gray-500">Loading recruiters...</p>
            ) : recruiters.length === 0 ? (
              <p className="col-span-full text-center text-gray-500">No recruiters found.</p>
            ) : (
              recruiters.map((rec, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#F2F2F2] rounded-[24px] shadow-md px-5 py-4 w-full max-w-[360px]"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <img
                      src={rec.image}
                      alt={rec.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-[18px] font-bold text-[#1B1C1E]">{rec.name}</h3>
                      <p className="text-sm text-gray-600">{rec.rate} • {rec.jobs}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-2">{rec.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {rec.skills?.slice(0, 5).map((skill, i) => (
                      <span key={i} className="bg-[#FBECEC] text-black text-xs px-3 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button className="w-[100px] py-2 bg-[#1B1C1C] text-white text-sm font-medium rounded-full">
                    View more
                  </button>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 pb-20">
          {[1, 2, 3].map(pg => (
            <button
              key={pg}
              className={`w-10 h-10 rounded-full font-semibold border text-sm ${
                pg === 1 ? 'bg-[#AA1299] text-white' : 'border-[#AA1299] text-[#AA1299]'
              }`}
            >
              {pg}
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t px-[144px] py-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-wrap justify-between gap-10 pb-10">
            <div className="w-[368px] space-y-4">
              <h1 className="text-[40px] font-extrabold text-[#A10091] font-[Manrope]">JobHunt</h1>
              <p className="text-sm text-[#1B1C1C]">
                Your Career Copilot. AI-assisted tools and resources to get hired at FAANG, top tech, and startup companies 10X faster.
              </p>
              <div className="flex gap-4 pt-6">
                {["facebook", "instagram", "x", "linkedin", "youtube", "discord"].map(icon => (
                  <div key={icon} className="w-12 h-12 bg-white rounded flex items-center justify-center border border-[#993D6F]">
                    <img src={`/icons/${icon}.svg`} alt={icon} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-[40px] font-bold text-[#1B1C1C] font-[Manrope]">Services</h3>
              <ul className="space-y-2 text-[#993D6F] font-[DM Sans]">
                <li>Who's Hiring</li>
                <li>Resume Templates</li>
                <li>Resume Builder</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-[40px] font-bold text-[#1B1C1C] font-[Manrope]">Company</h3>
              <ul className="space-y-2 text-[#993D6F] font-[DM Sans]">
                <li>About</li>
                <li>Job Tracker</li>
                <li>Get In Touch</li>
                <li>Privacy Policies</li>
                <li>Terms & Conditions</li>
              </ul>
            </div>
          </div>
          <div className="pt-6 border-t border-[#78767D] flex justify-center text-sm font-medium">
            © 2025. JobHunt Inc. • All Rights Reserved
          </div>
        </div>
      </footer>
    
    </>
  );
};


export default FindRecruiters;
