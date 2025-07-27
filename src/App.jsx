import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecruitersPage from './components/RecruitersPage';
import FindRecruiters from './components/FindRecruiters';
import ExtensionPage from './pages/ExtensionPage';
import ExtensionTutorialModal from './components/Extension/ExtensionTutorialModal'; // ✅ import
import JobCardDetail from './components/recruiters/JobCardDetail';
import JobCard from './components/recruiters/JobCard';
function ModalWrapper() {
  const location = useLocation();
  const [showTutorial, setShowTutorial] = useState(false);

  useEffect(() => {
    if (location.pathname === '/extension') {
      const seen = localStorage.getItem("seenTutorial");
      if (!seen) {
        setShowTutorial(true);
      }
    }
  }, [location]);

  const handleClose = () => {
    localStorage.setItem("seenTutorial", "true");
    setShowTutorial(false);
  };

  return (
    <>
      {/* Modal shown only on /extension */}
      {location.pathname === '/extension' && (
        <ExtensionTutorialModal show={showTutorial} onClose={handleClose} />
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <ModalWrapper />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recruiters" element={<RecruitersPage />} />
        <Route path="/find-recruiters" element={<FindRecruiters />} />
        <Route path="/extension" element={<ExtensionPage />} />
        <Route path="/jobcardDetail" element={<JobCardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
