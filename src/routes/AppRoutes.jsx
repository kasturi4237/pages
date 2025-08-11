// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import RecruitersPage from "../pages/RecruitersPage";
import FindRecruiters from "../pages/FindRecruiters";
import ExtensionPage from "../pages/ExtensionPage";
import JobCardDetail from "../components/recruiters/JobCardDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recruiters" element={<RecruitersPage />} />
      <Route path="/find-recruiters" element={<FindRecruiters />} />
      <Route path="/extension" element={<ExtensionPage />} />
      <Route path="/jobcardDetail" element={<JobCardDetail />} />
    </Routes>
  );
}
