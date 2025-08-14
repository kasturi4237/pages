// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home-page";

import RecruitersPage from "../pages/recruiters-page1";
import FindRecruiters from "../pages/recruiters-page2";
import ExtensionPage from "../pages/extension-page";

import JobCardDetail from "../pages/recruiters-page2/components/JobCardDetail";

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
