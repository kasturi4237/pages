import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ModalWrapper from "./pages/extension-page/components/extensionModalComponents/ModalWrapper";

export default function App() {
  return (
    <Router>
      <ModalWrapper />
      <AppRoutes />
    </Router>
  );
}
